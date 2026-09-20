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
 *
 * Motion design, in order of what a viewer actually notices:
 *  - The court draws itself in (stroke reveal) the moment the panel enters
 *    view, so the diagram feels "constructed" rather than just appearing.
 *  - Active player dots breathe with a soft glow before Play is pressed,
 *    pulling the eye toward what's about to move.
 *  - On Play, each mover takes a tiny pull-back "wind-up" before launching
 *    into its real path (an overshoot-and-settle ease), and its guide line
 *    draws itself in at the same time — the arrow isn't just present, it's
 *    drawn by the motion.
 *  - The ball actually arcs (a real lift-and-fall per leg, driven frame by
 *    frame rather than a flat CSS slide) with a little size-pop at the top
 *    of the arc and a lazy tumble, the way a real pass looks from above.
 *  - Every arrival — a player reaching its spot, the ball touching a
 *    waypoint — gets a brief impact ring, biggest on the final contact.
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

const DOT_WINDUP_MS = 130;
const DOT_LEG_MS = 1650;
const BALL_LEG_MS = 1150;
const BALL_LEG_GAP_MS = 220;

/** Slow-fast-slow, symmetric — so the ball's arc apex (which peaks at
 *  eased === 0.5) lands at the temporal midpoint of the leg, the way a
 *  real thrown object's highest point is at the middle of its flight
 *  time, not near the start. */
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

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

/** Spawns a short-lived expanding ring at (x, y) in the SVG's own
 *  coordinate space, then removes itself. Used for every arrival — a
 *  player reaching its spot, the ball touching a waypoint. */
function spawnImpactRing(svg, x, y, { size = 'md', color = 'gold' } = {}) {
  if (prefersReducedMotion()) return;
  const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  ring.setAttribute('cx', x);
  ring.setAttribute('cy', y);
  ring.setAttribute('r', size === 'lg' ? 4 : 2.6);
  ring.setAttribute('class', `court-impact court-impact--${size} court-impact--${color}`);
  ring.style.transformOrigin = `${x}px ${y}px`;
  svg.appendChild(ring);
  ring.addEventListener('animationend', () => ring.remove(), { once: true });
  setTimeout(() => ring.remove(), 900); // safety net if animationend never fires
}

/** One-shot: draws the static court lines in the moment the panel first
 *  enters view (or immediately, if it's already on screen). */
function initCourtEntrance(svg) {
  if (prefersReducedMotion()) {
    svg.classList.add('court-svg--drawn');
    return;
  }
  if (!('IntersectionObserver' in window)) {
    svg.classList.add('court-svg--drawn');
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      svg.classList.add('court-svg--drawn');
      observer.disconnect();
    });
  }, { threshold: 0.2 });
  observer.observe(svg);
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

  // A static reference formation (this chapter's rotation diagrams): exact
  // hand-placed positions copied from the source diagram, rather than the
  // fixed six-zone grid every other animation uses. No motion, no ball —
  // just where everyone stands.
  const customLayout = scene.customLayout || null;

  let guides = '';
  let dots = '';

  if (customLayout) {
    customLayout.forEach((p, i) => {
      dots += `
        <g class="court-dot court-dot--active court-dot--static" data-zone="custom-${i}">
          <circle cx="${p.x}" cy="${p.y}" r="8.2"/>
          <text x="${p.x}" y="${p.y}" dy="0.35em">${p.label}</text>
        </g>`;
    });
  } else {
    Object.keys(COURT_ZONES).forEach((zoneKey) => {
      const zone = Number(zoneKey);
      const pos = COURT_ZONES[zone];
      const isActive = active.includes(zone);
      const motion = motions[zone];
      const label = labels[zone] || String(zone);

      if (isActive && motion) {
        const len = Math.hypot(motion.dx, motion.dy) || 1;
        guides += `<line class="court-guide" data-zone-guide="${zone}"
            x1="${pos.x}" y1="${pos.y}" x2="${pos.x + motion.dx}" y2="${pos.y + motion.dy}"
            marker-end="url(#court-arrowhead)" stroke-dasharray="${len}" stroke-dashoffset="${len}"/>`;
      }

      dots += `
        <g class="court-dot${isActive ? ' court-dot--active' : ''}" data-zone="${zone}"
           style="transform: translate(0px,0px);" data-dx="${motion ? motion.dx : 0}" data-dy="${motion ? motion.dy : 0}">
          <circle cx="${pos.x}" cy="${pos.y}" r="${isActive ? 8.2 : 4.5}"/>
          <text x="${pos.x}" y="${pos.y}" dy="0.35em">${label}</text>
        </g>`;
    });
  }

  // Ball path: an array of 2+ waypoints, e.g. pass -> set -> attack away.
  // Rendered as one guide segment per leg (each draws in as the ball
  // actually travels it) rather than one static polyline for the whole
  // route.
  let ballGuides = '';
  let ballDot = '';
  const ballPath = scene.ball && scene.ball.path;
  if (ballPath && ballPath.length > 1) {
    for (let i = 1; i < ballPath.length; i++) {
      const from = ballPath[i - 1];
      const to = ballPath[i];
      const len = Math.hypot(to.x - from.x, to.y - from.y) || 1;
      ballGuides += `<line class="court-guide court-guide--ball" data-ball-leg="${i - 1}"
          x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}"
          marker-end="url(#court-arrowhead)" stroke-dasharray="${len}" stroke-dashoffset="${len}"/>`;
    }
    const start = ballPath[0];
    ballDot = `<circle class="court-ball" cx="${start.x}" cy="${start.y}" r="2.6" data-path='${JSON.stringify(ballPath)}'/>`;
  }

  stage.innerHTML = `
    <svg class="court-svg" viewBox="0 -14 100 114" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Top-down diagram of a volleyball court half showing player positions">
      <defs>
        <marker id="court-arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 Z"/>
        </marker>
      </defs>
      <rect class="court-outline" x="4" y="2" width="92" height="96" rx="2" pathLength="376" stroke-dasharray="376" stroke-dashoffset="376"/>
      <line class="court-net" x1="4" y1="2" x2="96" y2="2" pathLength="92" stroke-dasharray="92" stroke-dashoffset="92"/>
      <line class="court-attack-line" x1="4" y1="36" x2="96" y2="36"/>
      ${guides}
      ${ballGuides}
      ${dots}
      ${ballDot}
    </svg>
  `;

  const svg = stage.querySelector('.court-svg');
  initCourtEntrance(svg);

  if (customLayout) {
    // A static reference formation has nothing to play — the controls
    // bar (play button, narration toggle) doesn't apply here. Inline
    // style, since .media-controls' own display:flex (an author rule)
    // otherwise beats the `hidden` attribute (a user-agent-level rule).
    controls.style.display = 'none';
    return;
  }

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

  let ballRafId = null;

  /** Steps the ball <circle> through its waypoint path one leg at a time,
   *  driving every frame by hand so each leg can arc (lift + fall) and
   *  pop slightly at the apex instead of sliding flat. */
  function animateBall(ballEl, guideLines) {
    const path = JSON.parse(ballEl.dataset.path);
    const reduced = prefersReducedMotion();
    let legIndex = 0;

    function runLeg() {
      if (legIndex >= path.length - 1) return;
      const from = path[legIndex];
      const to = path[legIndex + 1];
      const guide = guideLines[legIndex];
      const dist = Math.hypot(to.x - from.x, to.y - from.y);
      const lift = Math.min(14, dist * 0.35);
      const isFinalLeg = legIndex === path.length - 2;
      legIndex += 1;

      if (reduced) {
        ballEl.setAttribute('cx', to.x);
        ballEl.setAttribute('cy', to.y);
        if (guide) guide.style.strokeDashoffset = '0';
        spawnImpactRing(ballEl.ownerSVGElement, to.x, to.y, { size: isFinalLeg ? 'lg' : 'sm', color: isFinalLeg ? 'gold' : 'white' });
        setTimeout(runLeg, 60);
        return;
      }

      const guideLen = guide ? Number(guide.getAttribute('stroke-dasharray')) || dist : 0;

      const startTime = performance.now();
      function frame(now) {
        const t = Math.min(1, (now - startTime) / BALL_LEG_MS);
        const eased = easeInOutCubic(t);
        const x = from.x + (to.x - from.x) * eased;
        const y = from.y + (to.y - from.y) * eased;
        const arc = Math.sin(Math.PI * eased); // 0 -> 1 -> 0 across the leg
        const scale = 1 + arc * 0.28;
        const spin = eased * 220;
        ballEl.setAttribute('cx', x);
        ballEl.setAttribute('cy', y - arc * lift);
        ballEl.style.transform = `rotate(${spin}deg) scale(${scale})`;
        ballEl.style.transformOrigin = `${x}px ${(y - arc * lift).toFixed(2)}px`;
        // The guide line's reveal tracks the ball's own eased progress
        // frame-for-frame, so the arrow is always drawn exactly as far as
        // the ball has actually traveled — never ahead, never behind.
        if (guide) guide.style.strokeDashoffset = String(guideLen * (1 - eased));
        if (t < 1) {
          ballRafId = requestAnimationFrame(frame);
        } else {
          ballEl.setAttribute('cx', to.x);
          ballEl.setAttribute('cy', to.y);
          ballEl.style.transform = '';
          spawnImpactRing(ballEl.ownerSVGElement, to.x, to.y, { size: isFinalLeg ? 'lg' : 'sm', color: isFinalLeg ? 'gold' : 'white' });
          setTimeout(runLeg, BALL_LEG_GAP_MS);
        }
      }
      ballRafId = requestAnimationFrame(frame);
    }

    runLeg();
  }

  let played = false;
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const dotMovers = stage.querySelectorAll('.court-dot');
      const ballEl = stage.querySelector('.court-ball');
      const dotGuides = stage.querySelectorAll('.court-guide:not(.court-guide--ball)');
      const ballGuideLines = stage.querySelectorAll('.court-guide--ball');

      if (ballRafId) {
        cancelAnimationFrame(ballRafId);
        ballRafId = null;
      }

      if (played) {
        // Reset instantly (no transition), then replay on the next frame.
        dotMovers.forEach((el) => {
          el.style.transition = 'none';
          el.style.transform = 'translate(0px,0px)';
        });
        dotGuides.forEach((g) => { g.style.transition = 'none'; g.style.strokeDashoffset = g.getAttribute('stroke-dasharray'); });
        ballGuideLines.forEach((g) => { g.style.transition = 'none'; g.style.strokeDashoffset = g.getAttribute('stroke-dasharray'); });
        if (ballEl) {
          const path = JSON.parse(ballEl.dataset.path);
          ballEl.style.transform = '';
          ballEl.setAttribute('cx', path[0].x);
          ballEl.setAttribute('cy', path[0].y);
        }
        stage.querySelectorAll('.court-impact').forEach((el) => el.remove());
        // Force reflow so the reset actually applies before re-animating.
        // eslint-disable-next-line no-unused-expressions
        stage.offsetHeight;
        dotMovers.forEach((el) => { el.style.transition = ''; });
        dotGuides.forEach((g) => { g.style.transition = ''; });
        ballGuideLines.forEach((g) => { g.style.transition = ''; });
      }

      const reduced = prefersReducedMotion();

      function launchDots() {
        dotMovers.forEach((el) => {
          const dx = Number(el.dataset.dx) || 0;
          const dy = Number(el.dataset.dy) || 0;
          if (dx === 0 && dy === 0) return;

          const guide = stage.querySelector(`.court-guide[data-zone-guide="${el.dataset.zone}"]`);

          if (reduced) {
            el.style.transform = `translate(${dx}px, ${dy}px)`;
            if (guide) guide.style.strokeDashoffset = '0';
            return;
          }

          // Tiny pull-back "wind-up" opposite the travel direction, then
          // the real launch with an overshoot-and-settle ease. The guide
          // line starts drawing at the exact same moment as the launch
          // (not the wind-up) so the arrow and the mover stay in step.
          el.style.transition = `transform ${DOT_WINDUP_MS}ms var(--ease)`;
          el.style.transform = `translate(${(-dx * 0.05).toFixed(2)}px, ${(-dy * 0.05).toFixed(2)}px)`;

          const onArrive = () => {
            el.removeEventListener('transitionend', onArrive);
            const zone = COURT_ZONES[Number(el.dataset.zone)];
            spawnImpactRing(stage.querySelector('.court-svg'), zone.x + dx, zone.y + dy, { size: 'md', color: 'gold' });
          };

          setTimeout(() => {
            el.style.transition = `transform ${DOT_LEG_MS}ms var(--ease-out-back)`;
            el.style.transform = `translate(${dx}px, ${dy}px)`;
            if (guide) {
              guide.style.transition = `stroke-dashoffset ${DOT_LEG_MS}ms var(--ease)`;
              guide.style.strokeDashoffset = '0';
            }
            el.addEventListener('transitionend', onArrive, { once: true });
          }, DOT_WINDUP_MS);
        });
      }

      if (voiceCheckbox && voiceCheckbox.checked) {
        // Kick off narration a beat ahead of the visual motion — speech
        // synthesis has its own startup latency, so this keeps the two
        // feeling roughly in sync instead of the voice trailing behind.
        speak(scene.caption);
        setTimeout(() => {
          requestAnimationFrame(() => {
            launchDots();
            if (ballEl) animateBall(ballEl, [...ballGuideLines]);
          });
        }, 220);
      } else {
        requestAnimationFrame(() => {
          launchDots();
          if (ballEl) animateBall(ballEl, [...ballGuideLines]);
        });
      }

      if (!played) {
        stage.classList.add('is-played');
      }
      if (!played && playBtn) {
        playBtn.setAttribute('aria-label', 'Replay animation');
        playBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true"><path d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M17 3v4.5h-4.5M7 21v-4.5h4.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      }
      played = true;
    });
  }
}
