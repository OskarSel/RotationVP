/**
 * daily-login.js
 * ---------------------------------------------------------------------------
 * Global "Daily Login Rewards" modal — a 5-day streak (50/100/200/300 coins,
 * then the legendary "Persistent Player" avatar on day 5) that resets if a
 * day is missed (see ProgressStore.getDailyLoginStatus/claimDailyLogin in
 * storage.js). Builds and injects its own DOM on every page from app.js,
 * and only opens when there is genuinely a reward left to claim today.
 */

const DAILY_LOGIN_COIN_ICON = `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v10M9 9.5c0-1.5 1.3-2 3-2s3 .8 3 2-1.3 2-3 2-3 .5-3 2 1.3 2 3 2 3-.5 3-2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`;
const DAILY_LOGIN_CHECK_ICON = `<svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function dailyLoginDayCard(day, status, coinTable) {
  let cardState;
  if (day <= status.claimedThrough) cardState = 'claimed';
  else if (day === status.day) cardState = 'current';
  else cardState = 'locked';

  const isLegendary = day === 5;
  const icon = cardState === 'claimed' ? DAILY_LOGIN_CHECK_ICON : (isLegendary ? getAvatarDef('persistent-player').face() : DAILY_LOGIN_COIN_ICON);
  const rewardLabel = isLegendary ? 'LEGENDARY' : `${coinTable[day]} Coins`;
  const classes = ['daily-login-day', `daily-login-day--${cardState}`, isLegendary ? 'daily-login-day--legendary' : ''].filter(Boolean).join(' ');

  return `
    <div class="${classes}" data-day="${day}">
      <span class="daily-login-day__label">Day ${day}</span>
      <span class="daily-login-day__icon">${icon}</span>
      <span class="daily-login-day__reward">${rewardLabel}</span>
    </div>
  `;
}

function dailyLoginModalMarkup(status) {
  const coinTable = ProgressStore.getDailyLoginCoinTable();
  const days = [1, 2, 3, 4, 5].map((day) => dailyLoginDayCard(day, status, coinTable)).join('');

  return `
    <div class="daily-login-overlay" id="daily-login-overlay" role="dialog" aria-modal="true" aria-labelledby="daily-login-title">
      <div class="daily-login-modal">
        <button type="button" class="daily-login-close" id="daily-login-close" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
        <div class="daily-login-head">
          <p class="daily-login-head__eyebrow">Daily Login Rewards</p>
          <h2 id="daily-login-title">Day ${status.day} of 5</h2>
          <p>Come back every day to keep your streak going — miss a day and it starts over.</p>
        </div>
        <div class="daily-login-days">${days}</div>
        <div class="daily-login-actions" id="daily-login-actions">
          <button type="button" class="btn btn--primary btn--spin" id="daily-login-claim-btn">Claim Reward</button>
          <p class="daily-login-claim-note">One reward per day.</p>
        </div>
      </div>
    </div>
  `;
}

/** A handful of small coin particles thrown up from the claim button. */
function spawnDailyLoginCoinBurst(anchorBtn, count) {
  if (count <= 0) return;
  const parent = anchorBtn.parentElement;
  if (!parent) return;
  const burst = document.createElement('div');
  burst.className = 'daily-login-coin-burst';
  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    const dx = Math.round(Math.random() * 120 - 60);
    span.style.setProperty('--dx', `calc(-50% + ${dx}px)`);
    span.style.animationDelay = `${i * 40}ms`;
    burst.appendChild(span);
  }
  parent.appendChild(burst);
  setTimeout(() => burst.remove(), 1300);
}

function dailyLoginResultMarkup(reward) {
  if (reward.avatarId && reward.isNewAvatar) {
    return `
      <div class="daily-login-result">
        <span class="daily-login-result__legendary-face">${getAvatarDef('persistent-player').face()}</span>
        <div class="daily-login-result__label">Persistent Player unlocked!</div>
        <span class="daily-login-result__legendary-tag">LEGENDARY</span>
        <p class="daily-login-claim-note" style="margin-top: var(--sp-5);">Equip it any time from your Profile.</p>
        <button type="button" class="btn btn--primary" id="daily-login-done-btn" style="margin-top: var(--sp-5);">Nice!</button>
      </div>
    `;
  }
  return `
    <div class="daily-login-result">
      <div class="daily-login-result__coins">+${reward.coins}</div>
      <div class="daily-login-result__label">Coins added to your balance</div>
      <button type="button" class="btn btn--primary" id="daily-login-done-btn" style="margin-top: var(--sp-5);">Nice!</button>
    </div>
  `;
}

function initDailyLoginModal() {
  const status = ProgressStore.getDailyLoginStatus();
  if (!status.available) return;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = dailyLoginModalMarkup(status).trim();
  const overlay = wrapper.firstElementChild;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('is-open'));

  const close = () => {
    overlay.classList.remove('is-open');
    setTimeout(() => overlay.remove(), 220);
  };

  overlay.querySelector('#daily-login-close').addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function onEscape(e) {
    if (e.key !== 'Escape') return;
    close();
    document.removeEventListener('keydown', onEscape);
  });

  const claimBtn = overlay.querySelector('#daily-login-claim-btn');
  claimBtn.addEventListener('click', () => {
    const reward = ProgressStore.claimDailyLogin();
    if (!reward) return; // already claimed elsewhere (e.g. another open tab) in the meantime

    claimBtn.disabled = true;
    spawnDailyLoginCoinBurst(claimBtn, reward.avatarId && reward.isNewAvatar ? 0 : 8);

    const dayEl = overlay.querySelector(`.daily-login-day[data-day="${reward.day}"]`);
    if (dayEl) {
      dayEl.classList.remove('daily-login-day--current');
      dayEl.classList.add('daily-login-day--claimed');
      const iconEl = dayEl.querySelector('.daily-login-day__icon');
      if (iconEl) iconEl.innerHTML = DAILY_LOGIN_CHECK_ICON;
    }

    setTimeout(() => {
      const actions = overlay.querySelector('#daily-login-actions');
      if (!actions) return;
      actions.innerHTML = dailyLoginResultMarkup(reward);
      const doneBtn = actions.querySelector('#daily-login-done-btn');
      if (doneBtn) doneBtn.addEventListener('click', close);
    }, reward.avatarId ? 500 : 350);
  });
}
