/**
 * lessons.js
 * ---------------------------------------------------------------------------
 * Turns the CHAPTERS data (data.js) + saved progress (storage.js) into the
 * markup for learn.html (chapter grid), chapter.html (lesson path) and
 * lesson.html (the lesson player itself, including the placeholder quiz).
 */

/* ---------------------------------------------------------------------- */
/* Unlock rules                                                           */
/* ---------------------------------------------------------------------- */

/** A chapter is unlocked if it's the first one, or the previous one is fully complete. */
function isChapterUnlocked(chapterId) {
  if (Number(chapterId) === 1) return true;
  const prev = getChapter(Number(chapterId) - 1);
  if (!prev) return true;
  const done = ProgressStore.getCompletedLessonsInChapter(prev.id);
  return done === prev.lessons.length;
}

function getChapterStatus(chapterId) {
  const chapter = getChapter(chapterId);
  if (!isChapterUnlocked(chapterId)) return 'locked';
  const done = ProgressStore.getCompletedLessonsInChapter(chapterId);
  if (done === chapter.lessons.length) return 'completed';
  if (done > 0) return 'started';
  return 'available';
}

/** Index (0-based) of the first not-yet-completed lesson in a chapter. -1 if all done. */
function firstIncompleteLessonIndex(chapterId) {
  const chapter = getChapter(chapterId);
  return chapter.lessons.findIndex((l) => !ProgressStore.isLessonComplete(chapterId, l.id));
}

/**
 * Per-lesson status within an unlocked chapter:
 * completed / current (next up) / available (one lesson ahead, a preview) / locked
 */
function getLessonStatus(chapterId, lessonId) {
  if (!isChapterUnlocked(chapterId)) return 'locked';
  if (ProgressStore.isLessonComplete(chapterId, lessonId)) return 'completed';

  const frontier = firstIncompleteLessonIndex(chapterId);
  const chapter = getChapter(chapterId);
  const idx = chapter.lessons.findIndex((l) => l.id === Number(lessonId));

  if (idx === frontier) return 'current';
  if (idx === frontier + 1) return 'available';
  return 'locked';
}

const STATUS_LABEL = {
  completed: 'Completed',
  current: 'Current',
  available: 'Available',
  locked: 'Locked',
  started: 'Started',
};

/* ---------------------------------------------------------------------- */
/* learn.html — chapter grid                                              */
/* ---------------------------------------------------------------------- */

function renderChapterGrid() {
  const grid = document.getElementById('chapter-grid');
  if (!grid) return;

  grid.innerHTML = CHAPTERS.map((chapter) => {
    const status = getChapterStatus(chapter.id);
    const done = ProgressStore.getCompletedLessonsInChapter(chapter.id);
    const pct = Math.round((done / chapter.lessons.length) * 100);
    const locked = status === 'locked';

    const badge =
      status === 'completed' ? '<span class="badge badge--completed">Completed</span>' :
      status === 'started'   ? '<span class="badge badge--current">Started</span>' :
      status === 'locked'    ? '<span class="badge badge--locked">Locked</span>' :
                                '<span class="badge badge--available">Available</span>';

    const cta = locked
      ? `<button class="btn btn--ghost btn--sm" disabled aria-disabled="true">Locked</button>`
      : `<a class="btn btn--dark btn--sm" href="chapter.html?chapter=${chapter.id}">${
          status === 'completed' ? 'Review' : status === 'started' ? 'Continue' : 'Start'
        }</a>`;

    return `
      <article class="chapter-card chapter-card--${status === 'started' ? 'active' : status}" aria-labelledby="chapter-${chapter.id}-title">
        <div class="chapter-card__top">
          <span class="chapter-card__num" aria-hidden="true">${String(chapter.id).padStart(2, '0')}</span>
          ${badge}
        </div>
        <div>
          <h3 class="chapter-card__title" id="chapter-${chapter.id}-title">${chapter.title}</h3>
          <p class="chapter-card__meta">
            <span>${chapter.lessons.length} lessons</span>
            <span aria-hidden="true">&middot;</span>
            <span>${done}/${chapter.lessons.length} completed</span>
          </p>
        </div>
        <div class="progress-row" role="img" aria-label="Chapter progress: ${pct}%">
          <div class="progress-bar${status === 'completed' ? ' progress-bar--complete' : ''}">
            <div class="progress-bar__fill" style="width:${pct}%"></div>
          </div>
          <span class="progress-row__pct" aria-hidden="true">${pct}%</span>
        </div>
        <div class="chapter-card__footer">
          ${cta}
        </div>
      </article>
    `;
  }).join('');
}

/* ---------------------------------------------------------------------- */
/* chapter.html — lesson path                                             */
/* ---------------------------------------------------------------------- */

function renderChapterPage() {
  const pathEl = document.getElementById('lesson-path');
  if (!pathEl) return;

  const params = new URLSearchParams(window.location.search);
  const chapterId = Number(params.get('chapter')) || 1;
  const chapter = getChapter(chapterId);

  if (!chapter) {
    pathEl.innerHTML = '<p>Chapter not found.</p>';
    return;
  }

  const done = ProgressStore.getCompletedLessonsInChapter(chapterId);
  const pct = Math.round((done / chapter.lessons.length) * 100);

  document.title = `${chapter.title} — Learn — Rotation`;
  const titleEl = document.getElementById('chapter-title');
  if (titleEl) titleEl.textContent = chapter.title;
  const summaryEl = document.getElementById('chapter-summary');
  if (summaryEl) summaryEl.textContent = chapter.summary;

  const pctEl = document.getElementById('chapter-pct');
  if (pctEl) pctEl.textContent = `${pct}%`;
  const barEl = document.getElementById('chapter-progress-fill');
  if (barEl) barEl.style.width = `${pct}%`;

  renderBreadcrumb([
    { label: 'Home', href: 'index.html' },
    { label: 'Learn', href: 'learn.html' },
    { label: chapter.title },
  ]);

  pathEl.innerHTML = chapter.lessons
    .map((lesson) => {
      const status = getLessonStatus(chapterId, lesson.id);
      const locked = status === 'locked';
      const href = `lesson.html?chapter=${chapterId}&lesson=${lesson.id}`;
      const icon =
        status === 'completed'
          ? '<svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          : status === 'locked'
          ? '<svg viewBox="0 0 24 24" fill="none" width="14" height="14" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" stroke-width="2"/></svg>'
          : String(lesson.id).padStart(2, '0');

      const inner = `
        <div class="lesson-node__dot" aria-hidden="true">${icon}</div>
        <div class="lesson-card">
          <div>
            <div class="lesson-card__title">${lesson.title}</div>
            <div class="lesson-card__sub">${lesson.durationMin} min &middot; ${STATUS_LABEL[status]}</div>
          </div>
          <span class="badge badge--${status}">${STATUS_LABEL[status]}</span>
        </div>
      `;

      return locked
        ? `<li class="lesson-node lesson-node--locked" aria-disabled="true"><div class="lesson-node__hit">${inner}</div></li>`
        : `<li class="lesson-node lesson-node--${status}"><a class="lesson-node__hit" href="${href}">${inner}</a></li>`;
    })
    .join('');
}

/* ---------------------------------------------------------------------- */
/* lesson.html — the lesson player                                        */
/* ---------------------------------------------------------------------- */

function initLessonPage() {
  const root = document.getElementById('lesson-root');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const chapterId = Number(params.get('chapter')) || 1;
  const lessonId = Number(params.get('lesson')) || 1;
  const found = getLesson(chapterId, lessonId);

  if (!found) {
    root.innerHTML = '<p>Lesson not found.</p>';
    return;
  }

  const { chapter, lesson } = found;
  ProgressStore.setLastLesson(chapterId, lessonId);

  document.title = `${lesson.title} — ${chapter.title} — Rotation`;
  document.getElementById('lesson-number').textContent = `Lesson ${lesson.id} of ${chapter.lessons.length}`;
  document.getElementById('lesson-title').textContent = lesson.title;

  updateLessonProgressBar(chapter);

  renderBreadcrumb([
    { label: 'Home', href: 'index.html' },
    { label: 'Learn', href: 'learn.html' },
    { label: chapter.title, href: `chapter.html?chapter=${chapter.id}` },
    { label: lesson.title },
  ]);

  const backLink = document.getElementById('back-to-chapter');
  if (backLink) backLink.href = `chapter.html?chapter=${chapter.id}`;

  initQuizDemo();
  initLessonCompletion(chapter, lesson);
}

/** Chapter completion shown in the lesson header — actual completed lessons,
 *  not the current lesson's position in the chapter. */
function updateLessonProgressBar(chapter) {
  const done = ProgressStore.getCompletedLessonsInChapter(chapter.id);
  const pct = Math.round((done / chapter.lessons.length) * 100);
  const fill = document.getElementById('lesson-progress-fill');
  const label = document.getElementById('lesson-progress-pct');
  if (fill) fill.style.width = `${pct}%`;
  if (label) label.textContent = `${pct}%`;
}

/** Lightweight demo interaction for the placeholder quiz block. */
function initQuizDemo() {
  const options = document.querySelectorAll('.quiz-option');
  const checkBtn = document.getElementById('quiz-check');
  const feedback = document.getElementById('quiz-feedback');
  if (!options.length || !checkBtn) return;

  let selected = null;

  options.forEach((opt) => {
    opt.addEventListener('click', () => {
      options.forEach((o) => o.setAttribute('aria-pressed', 'false'));
      opt.setAttribute('aria-pressed', 'true');
      selected = opt;
      checkBtn.disabled = false;
      feedback.textContent = '';
      options.forEach((o) => o.classList.remove('is-correct', 'is-incorrect'));
    });
  });

  checkBtn.addEventListener('click', () => {
    if (!selected) return;
    const isCorrect = selected.dataset.correct === 'true';
    selected.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
    if (!isCorrect) {
      const correctOpt = Array.from(options).find((o) => o.dataset.correct === 'true');
      if (correctOpt) correctOpt.classList.add('is-correct');
    }
    feedback.textContent = isCorrect
      ? 'Correct! That is the right answer (example content).'
      : 'Not quite — check the highlighted correct answer (example content).';
    feedback.hidden = false;
  });
}

/** Wires the "Next" → completion screen → "Next lesson" flow. */
function initLessonCompletion(chapter, lesson) {
  const nextBtn = document.getElementById('lesson-next');
  const completeScreen = document.getElementById('complete-screen');
  const lessonBody = document.getElementById('lesson-body');
  const nextLessonBtn = document.getElementById('next-lesson-btn');
  const xpEarnedEl = document.getElementById('xp-earned');

  if (nextBtn && completeScreen && lessonBody) {
    nextBtn.addEventListener('click', () => {
      const state = ProgressStore.markLessonComplete(chapter.id, lesson.id);
      if (xpEarnedEl) xpEarnedEl.textContent = `${state.xp}`;
      updateLessonProgressBar(chapter);
      lessonBody.hidden = true;
      completeScreen.hidden = false;
      completeScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  if (nextLessonBtn) {
    const isLastInChapter = lesson.id >= chapter.lessons.length;
    const nextChapter = isLastInChapter ? getChapter(chapter.id + 1) : chapter;
    const nextLessonId = isLastInChapter ? 1 : lesson.id + 1;

    if (isLastInChapter && !nextChapter) {
      nextLessonBtn.textContent = 'Back to chapters';
      nextLessonBtn.href = 'learn.html';
    } else {
      nextLessonBtn.href = `lesson.html?chapter=${nextChapter.id}&lesson=${nextLessonId}`;
      nextLessonBtn.textContent = isLastInChapter ? 'Next chapter' : 'Next lesson';
    }
  }
}
