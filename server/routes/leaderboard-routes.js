/**
 * routes/leaderboard-routes.js
 * ---------------------------------------------------------------------------
 * GET /api/leaderboard — public (no session required). Ranks every account
 * with saved progress by XP, descending. If the caller has a valid session,
 * the response also includes their own entry + rank even when they fall
 * outside the top slice, so the page can show "Your rank" either way.
 */

const db = require('../db');
const { getUserBySession } = require('../auth');
const { sendJson, getSessionToken } = require('../http-utils');

const XP_PER_LEVEL = 150; // mirrors js/storage.js — keep these in sync
const TOP_LIMIT = 50;

function levelForXP(xp) {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

async function handleGetLeaderboard(req, res) {
  const requester = getUserBySession(getSessionToken(req)); // null if guest — that's fine here

  const rows = db.prepare('SELECT user_id, data FROM progress').all();

  const entries = rows
    .map((row) => {
      let data;
      try {
        data = JSON.parse(row.data);
      } catch (err) {
        return null;
      }
      const xp = Number(data.xp) || 0;
      return {
        userId: row.user_id,
        username: String(data.username || 'User').slice(0, 40),
        avatar: typeof data.avatar === 'string' ? data.avatar : 'initials',
        xp,
        level: levelForXP(xp),
        completedLessons: Array.isArray(data.completedLessons) ? data.completedLessons.length : 0,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.xp - a.xp);

  const top = entries.slice(0, TOP_LIMIT).map((entry, i) => ({ ...entry, rank: i + 1 }));

  let you = null;
  if (requester) {
    const idx = entries.findIndex((e) => e.userId === requester.id);
    if (idx !== -1) you = { ...entries[idx], rank: idx + 1 };
  }

  sendJson(res, 200, { leaderboard: top, you, total: entries.length });
}

module.exports = { handleGetLeaderboard };
