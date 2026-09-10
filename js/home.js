/**
 * home.js
 * ---------------------------------------------------------------------------
 * Homepage-only helpers: renders the chapter-preview track straight from
 * CHAPTERS (data.js) so it never drifts from the real titles/lesson counts,
 * and wires up the scroll-reveal effect for [data-reveal] sections.
 */

/** A chapter is "live" once it has real content — every real chapter ends
 *  with its chapter-test lesson (isTest: true); placeholder chapters don't. */
function isChapterLive(chapter) {
  return chapter.lessons.some((l) => l.isTest);
}

function renderHomeChapterTrack() {
  const track = document.getElementById('home-chapter-track');
  if (!track) return;

  track.innerHTML = CHAPTERS.map((chapter) => {
    const live = isChapterLive(chapter);
    const lessonCount = chapter.lessons.length - (live ? 1 : 0);
    return `
      <div class="chapter-track-node${live ? '' : ' chapter-track-node--soon'}" role="listitem">
        <span class="chapter-track-node__num">${String(chapter.id).padStart(2, '0')}</span>
        <span class="chapter-track-node__title">${chapter.title}</span>
        <span class="chapter-track-node__meta">${live ? `${lessonCount} lessons + test` : 'Coming soon'}</span>
      </div>
    `;
  }).join('');
}

/** Progressive enhancement: only hides [data-reveal] sections (via the
 *  .js-reveal class added here) once we know JS + IntersectionObserver can
 *  actually bring them back — so a page with JS disabled just shows
 *  everything, never a blank section. */
function initScrollReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js-reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  targets.forEach((el) => observer.observe(el));
}

function initHomePage() {
  renderHomeChapterTrack();
  initScrollReveal();
}
