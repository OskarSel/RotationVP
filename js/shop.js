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
const SPIN_DURATION_MS = 4000; // must match #wheel-disc's transition duration in components.css
const CONFETTI_COLORS = ['#E8A33D', '#C4801F', '#A855F7', '#4C8DFF', '#fff6e0'];

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

/** Glossy per-rarity fills for the wheel slices — a light, off-center
 *  highlight gives each slice a domed, "casino chip" look instead of a
 *  flat color. Defined once and referenced by every slice of that rarity. */
const SLICE_GRADIENTS = {
  common: ['#f6f7f9', '#c7cbd1'],
  rare: ['#eaf2ff', '#b9d3ff'],
  epic: ['#f6eefe', '#d9bcf7'],
  legendary: ['#fff3d6', '#f0c775'],
};

function renderWheelGradientDefs() {
  const stops = Object.entries(SLICE_GRADIENTS)
    .map(([rarity, [from, to]]) => `
      <radialGradient id="sliceGrad-${rarity}" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stop-color="${from}"/>
        <stop offset="100%" stop-color="${to}"/>
      </radialGradient>
    `)
    .join('');
  return `<defs>${stops}</defs>`;
}

/** Draws the prize slices once. The wheel spins via CSS transform on
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
            class="wheel-slice" data-rarity="${prize.rarity}" fill="url(#sliceGrad-${prize.rarity})"></path>
      <g class="wheel-slice-icon" data-rarity="${prize.rarity}"
         transform="translate(${iconPoint.x - 11} ${iconPoint.y - 11})">${iconMarkup}</g>
    `;
  }).join('');

  svg.innerHTML = `${renderWheelGradientDefs()}<g id="wheel-disc">${slices}</g>`;
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

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Polls the disc's live (mid-transition) computed rotation and gives the
 *  pointer a tiny mechanical "tick" nudge every time a slice boundary
 *  passes under it — like a real prize wheel's clicker flapper. */
function watchWheelTicks(disc, pointerEl) {
  if (prefersReducedMotion()) return;
  let lastSegment = null;
  const start = performance.now();

  function tick() {
    pointerEl.classList.remove('wheel-pointer--tick');
    // eslint-disable-next-line no-unused-expressions
    pointerEl.offsetWidth; // restart the CSS animation even on rapid repeats
    pointerEl.classList.add('wheel-pointer--tick');
  }

  function poll() {
    const m = /matrix\(([^,]+),\s*([^,]+),/.exec(getComputedStyle(disc).transform);
    if (m) {
      const angle = (((Math.atan2(Number(m[2]), Number(m[1])) * 180) / Math.PI) + 360) % 360;
      const seg = Math.floor(angle / SEGMENT_DEG);
      if (lastSegment !== null && seg !== lastSegment) tick();
      lastSegment = seg;
    }
    if (performance.now() - start < SPIN_DURATION_MS) requestAnimationFrame(poll);
  }
  requestAnimationFrame(poll);
}

/** A celebratory confetti burst for the rarer wins — pieces explode
 *  outward from the wheel's center, then fall and fade. Radial (not a
 *  straight rain) so it stays contained near the wheel instead of
 *  needing a long fall distance the panel's rounded-corner clipping
 *  would cut off. */
function spawnConfetti(anchorEl, count) {
  if (prefersReducedMotion()) return;
  const burst = document.createElement('div');
  burst.className = 'wheel-confetti';
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    const angle = Math.random() * Math.PI * 2;
    const dist = 55 + Math.random() * 85;
    piece.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    piece.style.setProperty('--tx', `${(Math.cos(angle) * dist).toFixed(1)}px`);
    piece.style.setProperty('--ty', `${(Math.sin(angle) * dist - 30).toFixed(1)}px`);
    piece.style.setProperty('--fall-delay', `${Math.random() * 140}ms`);
    piece.style.setProperty('--fall-rot', `${Math.round(Math.random() * 520 - 260)}deg`);
    if (Math.random() > 0.5) piece.classList.add('wheel-confetti__piece--round');
    burst.appendChild(piece);
  }
  anchorEl.appendChild(burst);
  setTimeout(() => burst.remove(), 2000);
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
  const pointer = document.querySelector('.wheel-pointer');
  disc.style.transform = `rotate(${wheelRotation}deg)`;
  if (pointer) watchWheelTicks(disc, pointer);
  disc.addEventListener('transitionend', () => onSpinComplete(prize), { once: true });
}

function onSpinComplete(prize) {
  spinInProgress = false;

  const pointer = document.querySelector('.wheel-pointer');
  if (pointer) {
    pointer.classList.remove('wheel-pointer--tick');
    pointer.classList.add('wheel-pointer--land');
    pointer.addEventListener('animationend', () => pointer.classList.remove('wheel-pointer--land'), { once: true });
  }

  const alreadyOwned = ProgressStore.isAvatarUnlocked(prize.id);
  if (alreadyOwned) {
    ProgressStore.addCoins(DUPLICATE_REFUND);
  } else {
    ProgressStore.unlockAvatar(prize.id);
  }

  if (!alreadyOwned && (prize.rarity === 'epic' || prize.rarity === 'legendary')) {
    const wheelWrap = document.querySelector('.wheel-wrap');
    if (wheelWrap) spawnConfetti(wheelWrap, prize.rarity === 'legendary' ? 46 : 28);
  }

  renderShopBalance();
  renderAvatarPicker();
  renderSpinResult(prize, alreadyOwned);
}

function renderSpinResult(prize, alreadyOwned) {
  const panel = document.getElementById('spin-result');
  if (!panel) return;

  panel.dataset.rarity = alreadyOwned ? '' : prize.rarity; // celebration glow only on a genuinely new win
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
