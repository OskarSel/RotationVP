/**
 * server.js
 * ---------------------------------------------------------------------------
 * Entry point. Serves the static Rotation site AND the /api/* auth +
 * progress endpoints from a single process (same origin, no CORS needed).
 * Zero npm dependencies — only Node built-ins (http, fs, node:sqlite, crypto).
 *
 * Run with: node server/server.js   (from the repo root, or anywhere)
 * Then open: http://localhost:3000
 */

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const url = require('node:url');

const { handleRegister, handleLogin, handleLogout, handleMe } = require('./routes/auth-routes');
const { handleGetProgress, handlePutProgress } = require('./routes/progress-routes');
const { handleGetLeaderboard } = require('./routes/leaderboard-routes');
const { sendJson } = require('./http-utils');

const PORT = process.env.PORT || 3000;
const SITE_ROOT = path.join(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

const API_ROUTES = {
  'POST /api/auth/register': handleRegister,
  'POST /api/auth/login': handleLogin,
  'POST /api/auth/logout': handleLogout,
  'GET /api/auth/me': handleMe,
  'GET /api/progress': handleGetProgress,
  'PUT /api/progress': handlePutProgress,
  'GET /api/leaderboard': handleGetLeaderboard,
};

// Deny-by-default allowlist: only these top-level entries are ever servable.
// Everything else (server/, .git/, package.json, README.md, ...) returns 404,
// no matter what actually exists on disk — this is what keeps the backend's
// own source and the SQLite database file from being served as "static assets".
const ALLOWED_DIRS = new Set(['css', 'js', 'assets']);
const ALLOWED_ROOT_FILES = new Set([
  'index.html', 'learn.html', 'chapter.html', 'lesson.html', 'dashboard.html',
  'profile.html', 'shop.html', 'login.html', 'register.html', 'leaderboard.html',
]);

function isServable(filePath) {
  const segments = filePath.split('/').filter(Boolean);
  if (segments.length === 0) return false;
  if (segments.length === 1) return ALLOWED_ROOT_FILES.has(segments[0]);
  return ALLOWED_DIRS.has(segments[0]);
}

function serveStatic(req, res, pathname) {
  let filePath = decodeURIComponent(pathname);
  if (filePath === '/') filePath = '/index.html';

  if (!isServable(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('Not found');
  }

  // Guard against path traversal too, belt-and-suspenders — resolve, then
  // confirm it stays under SITE_ROOT.
  const resolved = path.normalize(path.join(SITE_ROOT, filePath));
  if (!resolved.startsWith(SITE_ROOT)) {
    res.writeHead(400);
    return res.end('Bad request');
  }

  fs.readFile(resolved, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not found');
    }
    const ext = path.extname(resolved).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url);
  const routeKey = `${req.method} ${parsed.pathname}`;

  if (parsed.pathname.startsWith('/api/')) {
    const handler = API_ROUTES[routeKey];
    if (!handler) return sendJson(res, 404, { error: 'Unknown API route.' });
    return Promise.resolve(handler(req, res)).catch((err) => {
      console.error('API error:', err);
      sendJson(res, 500, { error: 'Internal server error.' });
    });
  }

  if (req.method !== 'GET') {
    res.writeHead(405);
    return res.end('Method not allowed');
  }

  serveStatic(req, res, parsed.pathname);
});

server.listen(PORT, () => {
  console.log(`Rotation server running at http://localhost:${PORT}`);
});
