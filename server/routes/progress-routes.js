/**
 * routes/progress-routes.js
 * ---------------------------------------------------------------------------
 * GET /api/progress, PUT /api/progress — both require a valid session.
 */

const db = require('../db');
const { getUserBySession } = require('../auth');
const { readJsonBody, sendJson, getSessionToken } = require('../http-utils');

function requireUser(req, res) {
  const user = getUserBySession(getSessionToken(req));
  if (!user) {
    sendJson(res, 401, { error: 'Not logged in.' });
    return null;
  }
  return user;
}

async function handleGetProgress(req, res) {
  const user = requireUser(req, res);
  if (!user) return;
  const row = db.prepare('SELECT data FROM progress WHERE user_id = ?').get(user.id);
  sendJson(res, 200, { progress: row ? JSON.parse(row.data) : null });
}

async function handlePutProgress(req, res) {
  const user = requireUser(req, res);
  if (!user) return;

  let body;
  try {
    body = await readJsonBody(req);
  } catch (err) {
    return sendJson(res, 400, { error: 'Invalid request body.' });
  }

  if (!body.progress || typeof body.progress !== 'object') {
    return sendJson(res, 400, { error: 'Missing progress object.' });
  }

  const updatedAt = new Date().toISOString();
  const data = JSON.stringify(body.progress);
  const existing = db.prepare('SELECT user_id FROM progress WHERE user_id = ?').get(user.id);
  if (existing) {
    db.prepare('UPDATE progress SET data = ?, updated_at = ? WHERE user_id = ?').run(data, updatedAt, user.id);
  } else {
    db.prepare('INSERT INTO progress (user_id, data, updated_at) VALUES (?, ?, ?)').run(user.id, data, updatedAt);
  }
  sendJson(res, 200, { ok: true, updatedAt });
}

module.exports = { handleGetProgress, handlePutProgress };
