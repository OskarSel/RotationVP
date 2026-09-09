/**
 * animation.js
 * ---------------------------------------------------------------------------
 * Renders a simple top-down half-court diagram (SVG) driven by a lesson's
 * `animation` scene data, wires the existing Play button to animate the
 * relevant player dot(s) and ball along their path, and offers an optional
 * spoken narration of the caption via the browser's built-in speech
 * synthesis (no external service, no API key — quality depends on the
 * voices installed on the visitor's device/browser).
 *
 * A lesson with no `animation` data is left untouched — lessons.js keeps
 * showing the original static placeholder in that case.
 */

/** Base top-down positions for the six rotation zones (percent of the
 *  court viewBox, net at y=0, end line at y=100). */
const COURT_ZONES = {
  4: { x: 18, y: 24 },
  3: { x: 50, y: 24 },
  2: { x: 82, y: 24 },
  5: { x: 18, y: 76 },
  6: { x: 50, y: 76 },
  1: { x: 82, y: 76 },
};

const DOT_LEG_MS = 1900;
const BALL_LEG_MS = 1300;
const BALL_LEG_GAP_MS = 200;

/** True if the browser can speak text out loud. */
function canNarrate() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

function speak(text) {
  if (!canNarrate()) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}

/** Renders lesson.animation into #media-stage / #media-controls, and the
 *  caption into #animation-caption. Does nothing if the lesson has no
 *  animation scene (the static placeholder markup is left as-is). */
function renderCourtAnimation(lesson) {
  const scene = lesson.animation;
  if (!scene) return;

  const stage = document.getElementById('media-stage');
  const controls = document.getElementById('media-controls');
  const caption = document.getElementById('animation-caption');
  if (!stage || !controls) return;

  if (caption) caption.textContent = scene.caption;

  const active = scene.activeZones || [];
  const motions = scene.motions || {};
  const labels = scene.labels || {};

  let guides = '';
  let dots = '';

  Object.keys(COURT_ZONES).forEach((zoneKey) => {
    const zone = Number(zoneKey);
    const pos = COURT_ZONES[zone];
    const isActive = active.includes(zone);
    const motion = motions[zone];
    const label = labels[zone] || String(zone);

    if (isActive && motion) {
      guides += `<line class="court-guide" x1="${pos.x}" y1="${pos.y}" x2="${pos.x + motion.dx}" y2="${pos.y + motion.dy}" marker-end="url(#court-arrowhead)"/>`;
    }

    dots += `
      <g class="court-dot${isActive ? ' court-dot--active' : ''}" data-zone="${zone}" style="transform: translate(0px,0px); transition-duration: ${DOT_LEG_MS}ms;" data-dx="${motion ? motion.dx : 0}" data-dy="${motion ? motion.dy : 0}">
        <circle cx="${pos.x}" cy="${pos.y}" r="${isActive ? 7 : 4.5}"/>
        <text x="${pos.x}" y="${pos.y}" dy="0.35em">${label}</text>
      </g>`;
  });

  // Ball path: an array of 2+ waypoints, e.g. pass -> set -> attack away.
  // Stored on the element as JSON so the click handler can step through it.
  let ballGuide = '';
  let ballDot = '';
  const ballPath = scene.ball && scene.ball.path;
  if (ballPath && ballPath.length > 1) {
    const start = ballPath[0];
    const points = ballPath.map((p) => `${p.x},${p.y}`).join(' ');
    ballGuide = `<polyline class="court-guide court-guide--ball" points="${points}" marker-end="url(#court-arrowhead)"/>`;
    ballDot = `<g class="court-ball" style="transform: translate(0px,0px);" data-path='${JSON.stringify(ballPath)}'><circle cx="${start.x}" cy="${start.y}" r="2.6"/></g>`;
  }

  stage.innerHTML = `
    <svg class="court-svg" viewBox="0 -14 100 114" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Top-down diagram of a volleyball court half showing player positions">
      <defs>
        <marker id="court-arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 Z"/>
        </marker>
      </defs>
      <rect class="court-outline" x="4" y="2" width="92" height="96" rx="2"/>
      <line class="court-net" x1="4" y1="2" x2="96" y2="2"/>
      <line class="court-attack-line" x1="4" y1="36" x2="96" y2="36"/>
      ${guides}
      ${ballGuide}
      ${dots}
      ${ballDot}
    </svg>
  `;

  const playBtn = controls.querySelector('.media-controls__play');
  const scrub = controls.querySelector('.media-controls__scrub');
  const time = controls.querySelector('.media-controls__time');
  if (scrub) scrub.hidden = true;
  if (time) time.hidden = true;

  if (playBtn) {
    playBtn.setAttribute('aria-label', 'Play animation');
  }

  // Voice narration toggle — only offered when the browser can speak.
  let voiceToggle = controls.querySelector('.media-controls__voice');
  if (!voiceToggle && canNarrate()) {
    voiceToggle = document.createElement('label');
    voiceToggle.className = 'media-controls__voice';
    voiceToggle.innerHTML = `<input type="checkbox" id="voice-toggle"> Voice narration`;
    controls.appendChild(voiceToggle);
  }
  const voiceCheckbox = voiceToggle ? voiceToggle.querySelector('input') : null;

  /** Steps a ball <g> through its waypoint path one leg at a time. */
  function animateBall(ballEl) {
    const path = JSON.parse(ballEl.dataset.path);
    const start = path[0];
    let i = 1;

    ballEl.style.transitionDuration = `${BALL_LEG_MS}ms`;

    function nextLeg() {
      if (i >= path.length) return;
      const point = path[i];
      const dx = point.x - start.x;
      const dy = point.y - start.y;
      i += 1;
      setTimeout(() => {
        ballEl.style.transform = `translate(${dx}px, ${dy}px)`;
      }, i === 2 ? 0 : BALL_LEG_GAP_MS);
    }

    ballEl.addEventListener('transitionend', () => {
      if (i < path.length) setTimeout(nextLeg, BALL_LEG_GAP_MS);
    });

    nextLeg();
  }

  let played = false;
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const dotMovers = stage.querySelectorAll('.court-dot');
      const ballEl = stage.querySelector('.court-ball');

      if (played) {
        // Reset instantly (no transition), then replay on the next frame.
        const all = [...dotMovers, ...(ballEl ? [ballEl] : [])];
        all.forEach((el) => {
          el.style.transition = 'none';
          el.style.transform = 'translate(0px,0px)';
        });
        // Force reflow so the reset actually applies before re-animating.
        // eslint-disable-next-line no-unused-expressions
        stage.offsetHeight;
        all.forEach((el) => { el.style.transition = ''; });
      }

      if (voiceCheckbox && voiceCheckbox.checked) {
        // Kick off narration a beat ahead of the visual motion — speech
        // synthesis has its own startup latency, so this keeps the two
        // feeling roughly in sync instead of the voice trailing behind.
        speak(scene.caption);
        setTimeout(() => {
          requestAnimationFrame(() => {
            dotMovers.forEach((el) => {
              const dx = Number(el.dataset.dx) || 0;
              const dy = Number(el.dataset.dy) || 0;
              el.style.transform = `translate(${dx}px, ${dy}px)`;
            });
            if (ballEl) animateBall(ballEl);
          });
        }, 220);
      } else {
        requestAnimationFrame(() => {
          dotMovers.forEach((el) => {
            const dx = Number(el.dataset.dx) || 0;
            const dy = Number(el.dataset.dy) || 0;
            el.style.transform = `translate(${dx}px, ${dy}px)`;
          });
          if (ballEl) animateBall(ballEl);
        });
      }

      played = true;
    });
  }
}
