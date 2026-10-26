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

const HERO_MOCK_ICONS = {
  done: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  active: '<svg viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>',
  locked: '<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="10" width="14" height="10" rx="1.5" stroke="currentColor" stroke-width="1.8"/><path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" stroke-width="1.8"/></svg>',
};

/** Renders the homepage hero's "app preview" card from the visitor's own
 *  saved progress (falling back to Chapter 1, lesson 1 for a brand-new
 *  visitor with none) — it used to be a hardcoded "40% done" screenshot,
 *  which showed fake completed lessons to people who hadn't done any. */
function renderHeroMock() {
  const titleEl = document.getElementById('hero-mock-title');
  const rowsEl = document.getElementById('hero-mock-rows');
  const fillEl = document.getElementById('hero-mock-fill');
  const pctEl = document.getElementById('hero-mock-pct');
  if (!titleEl || !rowsEl || !fillEl || !pctEl) return;

  const last = ProgressStore.getLastLesson();
  let chapter = (last && getChapter(last.chapterId)) || getChapter(1);

  // If that chapter is already fully done, show the next one instead —
  // otherwise a visitor who finished Chapter 1 would see it forever.
  if (chapter && ProgressStore.getCompletedLessonsInChapter(chapter.id) >= chapter.lessons.length) {
    chapter = getChapter(chapter.id + 1) || chapter;
  }
  if (!chapter) return;

  const realLessons = chapter.lessons.filter((l) => !l.isTest);
  const targetId = (last && last.chapterId === chapter.id && realLessons.some((l) => l.id === last.lessonId))
    ? last.lessonId
    : (realLessons.find((l) => !ProgressStore.isLessonComplete(chapter.id, l.id)) || realLessons[0]).id;
  const targetIdx = Math.max(0, realLessons.findIndex((l) => l.id === targetId));

  let start = Math.min(Math.max(0, targetIdx - 2), Math.max(0, realLessons.length - 4));
  const windowLessons = realLessons.slice(start, start + 4);

  const done = ProgressStore.getCompletedLessonsInChapter(chapter.id);
  const pct = Math.round((done / chapter.lessons.length) * 100);

  titleEl.textContent = chapter.title;
  fillEl.style.width = `${pct}%`;
  pctEl.textContent = `${pct}%`;

  rowsEl.innerHTML = windowLessons.map((lesson) => {
    const isDone = ProgressStore.isLessonComplete(chapter.id, lesson.id);
    const isActive = !isDone && lesson.id === targetId;
    const state = isDone ? 'done' : isActive ? 'active' : 'locked';
    const sub = isDone ? 'Completed' : isActive ? `Up next · ${lesson.durationMin} min` : 'Locked';
    return `
      <div class="hero__mock-row${state === 'done' ? ' hero__mock-row--done' : state === 'active' ? ' hero__mock-row--active' : ''}">
        <span class="hero__mock-icon">${HERO_MOCK_ICONS[state]}</span>
        <span class="hero__mock-text"><strong>${lesson.title}</strong><span>${sub}</span></span>
      </div>`;
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
  renderHeroMock();
  initScrollReveal();
}
