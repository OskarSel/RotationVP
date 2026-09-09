/**
 * shop.js
 * ---------------------------------------------------------------------------
 * The Shop page: spend coins (earned by passing chapter tests) on a
 * weighted spin-the-wheel for shop-exclusive profile picture rewards.
 * Prize odds live in WHEEL_PRIZES (progress.js, generated from AVATAR_DEFS);
 * coins/unlocked avatars are persisted via ProgressStore.
 */

const SPIN_COST = 100;
const DUPLICATE_REFUND = 50;
const SEGMENT_DEG = 360 / WHEEL_PRIZES.length;
const WHEEL_CENTER = 140;
const WHEEL_RADIUS = 132;

let wheelRotation = 0; // running total so repeat spins keep spinning forward, never snap back
let spinInProgress = false;

function initShopPage() {
  const root = document.getElementById('shop-root');
  if (!root) return;

  renderWheel();
  renderShopBalance();
  renderAvatarPicker();

  const spinBtn = document.getElementById('spin-btn');
  if (spinBtn) spinBtn.addEventListener('click', spin);
}

function renderShopBalance() {
  setText('shop-coins', `${ProgressStore.getCoins()}`);
  const spinBtn = document.getElementById('spin-btn');
  if (spinBtn) spinBtn.disabled = spinInProgress || ProgressStore.getCoins() < SPIN_COST;
}

function polarPoint(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
}

/** Draws the 12 prize slices once. The wheel spins via CSS transform on
 *  #wheel-disc — the slice markup itself never changes between spins. */
function renderWheel() {
  const svg = document.getElementById('wheel-svg');
  if (!svg) return;

  const slices = WHEEL_PRIZES.map((prize, i) => {
    const a0 = i * SEGMENT_DEG;
    const a1 = (i + 1) * SEGMENT_DEG;
    const p0 = polarPoint(WHEEL_CENTER, WHEEL_CENTER, WHEEL_RADIUS, a0);
    const p1 = polarPoint(WHEEL_CENTER, WHEEL_CENTER, WHEEL_RADIUS, a1);
    const midAngle = a0 + SEGMENT_DEG / 2;
    const iconPoint = polarPoint(WHEEL_CENTER, WHEEL_CENTER, WHEEL_RADIUS * 0.62, midAngle);
    const iconMarkup = getAvatarDef(prize.id).face();

    return `
      <path d="M${WHEEL_CENTER},${WHEEL_CENTER} L${p0.x},${p0.y} A${WHEEL_RADIUS},${WHEEL_RADIUS} 0 0 1 ${p1.x},${p1.y} Z"
            class="wheel-slice" data-rarity="${prize.rarity}"></path>
      <g class="wheel-slice-icon" data-rarity="${prize.rarity}"
         transform="translate(${iconPoint.x - 11} ${iconPoint.y - 11})">${iconMarkup}</g>
    `;
  }).join('');

  svg.innerHTML = `<g id="wheel-disc">${slices}</g>`;
}

function pickWeightedPrize() {
  const roll = Math.random() * 100;
  let cumulative = 0;
  for (const prize of WHEEL_PRIZES) {
    cumulative += prize.chance;
    if (roll < cumulative) return prize;
  }
  return WHEEL_PRIZES[WHEEL_PRIZES.length - 1]; // float-rounding safety net
}

function spin() {
  const spinBtn = document.getElementById('spin-btn');
  if (!spinBtn || spinBtn.disabled || spinInProgress) return;
  if (!ProgressStore.spendCoins(SPIN_COST)) return;

  spinInProgress = true;
  renderShopBalance();

  const resultPanel = document.getElementById('spin-result');
  if (resultPanel) resultPanel.hidden = true;

  const prize = pickWeightedPrize();
  const prizeIndex = WHEEL_PRIZES.indexOf(prize);
  const center = prizeIndex * SEGMENT_DEG + SEGMENT_DEG / 2;
  const maxJitter = SEGMENT_DEG / 2 - 3;
  const jitter = (Math.random() * 2 - 1) * maxJitter;
  const delta = (((360 - center + jitter) % 360) + 360) % 360;

  wheelRotation += 6 * 360 + delta;

  const disc = document.getElementById('wheel-disc');
  disc.style.transform = `rotate(${wheelRotation}deg)`;
  disc.addEventListener('transitionend', () => onSpinComplete(prize), { once: true });
}

function onSpinComplete(prize) {
  spinInProgress = false;

  const alreadyOwned = ProgressStore.isAvatarUnlocked(prize.id);
  if (alreadyOwned) {
    ProgressStore.addCoins(DUPLICATE_REFUND);
  } else {
    ProgressStore.unlockAvatar(prize.id);
  }

  renderShopBalance();
  renderAvatarPicker();
  renderSpinResult(prize, alreadyOwned);
}

function renderSpinResult(prize, alreadyOwned) {
  const panel = document.getElementById('spin-result');
  if (!panel) return;

  const def = getAvatarDef(prize.id);
  panel.innerHTML = `
    <span class="spin-result__face" data-rarity="${prize.rarity}">${def.face()}</span>
    <div>
      <div class="spin-result__title">${alreadyOwned ? 'Already in your collection' : 'New reward!'}</div>
      <div class="spin-result__name">${prize.label} <span class="avatar-option__rarity">${prize.rarity}</span></div>
      <div class="spin-result__note">${
        alreadyOwned
          ? `You already own this one — refunded ${DUPLICATE_REFUND} coins.`
          : 'Added to your collection. Equip it from the picker below or on your Profile.'
      }</div>
    </div>
  `;
  panel.hidden = false;
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
