/**
 * leaderboard.js
 * ---------------------------------------------------------------------------
 * The Leaderboard page: fetches /api/leaderboard (server/routes/leaderboard-
 * routes.js) and renders the top learners ranked by XP, plus the current
 * account's own rank (even if it falls outside the top slice).
 *
 * Leaderboard data only exists on the server — there is no local/offline
 * fallback, since ranking is inherently cross-account. Every state (loading,
 * error, empty, loaded) is rendered explicitly so a guest or an offline
 * static build never sees a silently broken page.
 */

function avatarFaceMarkup(avatarId, username) {
  const def = getAvatarDef(avatarId);
  return def.id === 'initials' ? def.face(username) : def.face();
}

function medalLabel(rank) {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return null;
}

function renderLeaderboardRow(entry, isYou) {
  const medal = medalLabel(entry.rank);
  const rarity = getAvatarDef(entry.avatar).rarity;
  return `
    <li class="leaderboard-row${isYou ? ' leaderboard-row--you' : ''}${entry.rank <= 3 ? ' leaderboard-row--top' : ''}">
      <span class="leaderboard-row__rank" data-rank="${entry.rank}">${medal || `#${entry.rank}`}</span>
      <span class="leaderboard-row__face"${rarity ? ` data-rarity="${rarity}"` : ''}>${avatarFaceMarkup(entry.avatar, entry.username)}</span>
      <span class="leaderboard-row__body">
        <span class="leaderboard-row__name">${escapeHtml(entry.username)}${isYou ? ' <span class="leaderboard-row__you-tag">You</span>' : ''}</span>
        <span class="leaderboard-row__meta">Level ${entry.level} · ${entry.completedLessons} lessons completed</span>
      </span>
      <span class="leaderboard-row__xp">${entry.xp.toLocaleString()} <small>XP</small></span>
    </li>
  `;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function renderYouPanel(you) {
  const panel = document.getElementById('leaderboard-you');
  if (!panel) return;

  if (!ProgressStore.isLoggedIn()) {
    panel.hidden = false;
    panel.innerHTML = `
      <div class="leaderboard-you-banner">
        <div>
          <div class="leaderboard-you-banner__title">Log in to claim your spot</div>
          <div class="leaderboard-you-banner__note">Guest progress stays on this device only — create an account so your XP counts here.</div>
        </div>
        <a href="register.html" class="btn btn--primary btn--sm">Create account</a>
      </div>
    `;
    return;
  }

  if (!you) {
    panel.hidden = true;
    return;
  }

  panel.hidden = false;
  panel.innerHTML = `
    <div class="leaderboard-you-banner leaderboard-you-banner--ranked">
      <span class="leaderboard-row__face">${avatarFaceMarkup(you.avatar, you.username)}</span>
      <div>
        <div class="leaderboard-you-banner__title">Your rank: #${you.rank}</div>
        <div class="leaderboard-you-banner__note">Level ${you.level} · ${you.xp.toLocaleString()} XP</div>
      </div>
    </div>
  `;
}

async function initLeaderboardPage() {
  const root = document.getElementById('leaderboard-root');
  if (!root) return;

  const stateEl = document.getElementById('leaderboard-state');
  const listEl = document.getElementById('leaderboard-list');

  let res;
  try {
    res = await fetch('/api/leaderboard', { credentials: 'same-origin' });
  } catch (err) {
    stateEl.textContent = "Couldn't reach the leaderboard server. Make sure the Rotation server (server/server.js) is running.";
    return;
  }

  if (!res.ok) {
    stateEl.textContent = "Couldn't load the leaderboard right now. Try again in a moment.";
    return;
  }

  const body = await res.json().catch(() => null);
  if (!body || !Array.isArray(body.leaderboard)) {
    stateEl.textContent = "Couldn't load the leaderboard right now. Try again in a moment.";
    return;
  }

  renderYouPanel(body.you);

  if (body.leaderboard.length === 0) {
    stateEl.textContent = 'No ranked learners yet — pass a chapter test while logged in to be the first on the board.';
    return;
  }

  const youId = body.you ? body.you.userId : null;
  listEl.innerHTML = body.leaderboard.map((entry) => renderLeaderboardRow(entry, entry.userId === youId)).join('');
  stateEl.hidden = true;
  listEl.hidden = false;
}
