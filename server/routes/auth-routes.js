/**
 * routes/auth-routes.js
 * ---------------------------------------------------------------------------
 * POST /api/auth/register, POST /api/auth/login, POST /api/auth/logout,
 * GET /api/auth/me.
 */

const db = require('../db');
const { hashPassword, verifyPassword, createSession, getUserBySession, destroySession } = require('../auth');
const { readJsonBody, sendJson, getSessionToken, setSessionCookie, clearSessionCookie } = require('../http-utils');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Matches js/storage.js's defaultState() shape, used when a new account
 *  has no localProgress snapshot to claim. */
function defaultProgress(username) {
  return {
    completedLessons: [],
    xp: 0,
    lastLesson: null,
    streakDays: 1,
    lastActiveDate: new Date().toISOString().slice(0, 10),
    username: username || 'User',
    theme: 'light',
    avatar: 'initials',
    coins: 0,
    unlockedAvatars: [],
  };
}

async function handleRegister(req, res) {
  let body;
  try {
    body = await readJsonBody(req);
  } catch (err) {
    return sendJson(res, 400, { error: 'Invalid request body.' });
  }

  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');
  const username = String(body.username || '').trim() || 'User';

  if (!EMAIL_RE.test(email)) return sendJson(res, 400, { error: 'Enter a valid email address.' });
  if (password.length < 6) return sendJson(res, 400, { error: 'Password must be at least 6 characters.' });

  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
  if (existing) return sendJson(res, 409, { error: 'An account with that email already exists.' });

  const { hash, salt } = hashPassword(password);
  const createdAt = new Date().toISOString();
  const insertUser = db
    .prepare('INSERT INTO users (email, password_hash, password_salt, username, created_at) VALUES (?, ?, ?, ?, ?)')
    .run(email, hash, salt, username, createdAt);
  const userId = Number(insertUser.lastInsertRowid);

  // Claim whatever progress the browser already had locally, if provided.
  const initialProgress =
    body.localProgress && typeof body.localProgress === 'object'
      ? { ...defaultProgress(username), ...body.localProgress, username }
      : defaultProgress(username);

  db.prepare('INSERT INTO progress (user_id, data, updated_at) VALUES (?, ?, ?)').run(
    userId,
    JSON.stringify(initialProgress),
    createdAt
  );

  const session = createSession(userId);
  setSessionCookie(res, session.token, session.expiresAt);
  sendJson(res, 201, { user: { id: userId, email, username }, progress: initialProgress });
}

async function handleLogin(req, res) {
  let body;
  try {
    body = await readJsonBody(req);
  } catch (err) {
    return sendJson(res, 400, { error: 'Invalid request body.' });
  }

  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');

  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  if (!user || !verifyPassword(password, user.password_salt, user.password_hash)) {
    return sendJson(res, 401, { error: 'Incorrect email or password.' });
  }

  const progressRow = db.prepare('SELECT data FROM progress WHERE user_id = ?').get(user.id);
  const progress = progressRow ? JSON.parse(progressRow.data) : defaultProgress(user.username);

  const session = createSession(user.id);
  setSessionCookie(res, session.token, session.expiresAt);
  sendJson(res, 200, {
    user: { id: user.id, email: user.email, username: user.username },
    progress,
  });
}

async function handleLogout(req, res) {
  destroySession(getSessionToken(req));
  clearSessionCookie(res);
  sendJson(res, 200, { ok: true });
}

async function handleMe(req, res) {
  const user = getUserBySession(getSessionToken(req));
  if (!user) return sendJson(res, 401, { error: 'Not logged in.' });
  const progressRow = db.prepare('SELECT data FROM progress WHERE user_id = ?').get(user.id);
  const progress = progressRow ? JSON.parse(progressRow.data) : defaultProgress(user.username);
  sendJson(res, 200, { user, progress });
}

module.exports = { handleRegister, handleLogin, handleLogout, handleMe };
