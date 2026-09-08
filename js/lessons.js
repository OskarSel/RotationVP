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

    // Lesson counts shown here exclude the chapter test on purpose — it's a
    // separate milestone, not one of the "lessons" (see chapter.html).
    const realLessons = chapter.lessons.filter((l) => !l.isTest);
    const realDone = realLessons.filter((l) => ProgressStore.isLessonComplete(chapter.id, l.id)).length;

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
            <span>${realLessons.length} lessons</span>
            <span aria-hidden="true">&middot;</span>
            <span>${realDone}/${realLessons.length} completed</span>
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

  // The chapter test is a separate milestone, not a numbered lesson — it's
  // rendered in its own section below, never mixed into this list.
  const realLessons = chapter.lessons.filter((l) => !l.isTest);
  const testLesson = chapter.lessons.find((l) => l.isTest);
  let realLessonIndex = 0;

  pathEl.innerHTML = realLessons
    .map((lesson) => {
      realLessonIndex++;
      const status = getLessonStatus(chapterId, lesson.id);
      const locked = status === 'locked';
      const href = `lesson.html?chapter=${chapterId}&lesson=${lesson.id}`;
      const icon =
        status === 'completed'
          ? '<svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          : status === 'locked'
          ? '<svg viewBox="0 0 24 24" fill="none" width="14" height="14" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" stroke-width="2"/></svg>'
          : String(realLessonIndex).padStart(2, '0');

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

  renderChapterTestSection(chapterId, testLesson);
}

/** Renders the chapter test as its own card, kept out of the lesson list so
 *  it never reads as "just another lesson" (and its own page shows no
 *  lesson text — see renderLessonTheory). */
function renderChapterTestSection(chapterId, testLesson) {
  const section = document.getElementById('chapter-test-section');
  if (!section) return;

  if (!testLesson) {
    section.innerHTML = '';
    return;
  }

  const status = getLessonStatus(chapterId, testLesson.id);
  const locked = status === 'locked';
  const href = `lesson.html?chapter=${chapterId}&lesson=${testLesson.id}`;
  const ctaLabel = status === 'completed' ? 'Review test' : 'Start test';

  section.innerHTML = `
    <p class="eyebrow">Chapter test</p>
    <article class="chapter-card chapter-card--${status === 'current' ? 'active' : status}">
      <div class="chapter-card__top">
        <h3 class="chapter-card__title">${testLesson.title}</h3>
        <span class="badge badge--${status}">${STATUS_LABEL[status]}</span>
      </div>
      <p class="chapter-card__meta">
        <span>${testLesson.quiz.length} questions</span>
        <span aria-hidden="true">&middot;</span>
        <span>${testLesson.durationMin} min</span>
      </p>
      <div class="chapter-card__footer">
        ${
          locked
            ? `<button class="btn btn--ghost btn--sm" disabled aria-disabled="true">Locked — finish all lessons above first</button>`
            : `<a class="btn btn--dark btn--sm" href="${href}">${ctaLabel}</a>`
        }
      </div>
    </article>
  `;
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

  const realLessons = chapter.lessons.filter((l) => !l.isTest);

  document.title = `${lesson.title} — ${chapter.title} — Rotation`;
  document.getElementById('lesson-number').textContent = lesson.isTest
    ? 'Chapter test'
    : `Lesson ${lesson.id} of ${realLessons.length}`;
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

  renderLessonTheory(lesson);
  toggleAnimationPanel(lesson);
  initQuiz(lesson);
  initQuizGate(lesson);
  initLessonCompletion(chapter, lesson);
}

/** Keeps the quiz hidden until the reader continues past the introduction
 *  (theory + animation panels are hidden at that point, not just scrolled
 *  past), so the quiz is never a scroll away from the answer text. Test
 *  lessons have no introduction to gate behind, so their quiz is shown
 *  immediately. */
function initQuizGate(lesson) {
  const quizPanel = document.getElementById('quiz-panel');
  if (!quizPanel) return;

  if (lesson.isTest) {
    quizPanel.hidden = false;
    return;
  }

  const continueBtn = document.getElementById('continue-to-quiz-btn');
  if (!continueBtn) return;

  continueBtn.addEventListener('click', () => {
    const theoryPanel = document.getElementById('theory-panel');
    const animationPanel = document.getElementById('animation-panel');
    if (theoryPanel) theoryPanel.hidden = true;
    if (animationPanel) animationPanel.hidden = true;
    quizPanel.hidden = false;
    quizPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/** Fills the "Introduction" panel from lesson.theory / lesson.keyTakeaway.
 *  Chapters without written content (theory: undefined) keep the existing
 *  placeholder markup already in lesson.html untouched. Test lessons (no
 *  theory at all) hide the panel entirely. */
function renderLessonTheory(lesson) {
  const panel = document.getElementById('theory-panel');
  const contentEl = document.getElementById('theory-content');
  const takeawayEl = document.getElementById('takeaway-content');
  if (!panel || !contentEl) return;

  if (lesson.isTest) {
    panel.hidden = true;
    return;
  }
  panel.hidden = false;

  if (Array.isArray(lesson.theory) && lesson.theory.length) {
    contentEl.innerHTML = lesson.theory.map((p) => `<p>${p}</p>`).join('');
  }

  if (takeawayEl) {
    takeawayEl.innerHTML = lesson.keyTakeaway
      ? `<h3 style="margin-top: var(--sp-7); font-size: var(--fs-400);">Key takeaway</h3><p class="explainer-box" style="margin-top: var(--sp-3);">${lesson.keyTakeaway}</p>`
      : '';
  }
}

/** Shows/hides the "Visualization" panel. Defaults to shown (matches the
 *  existing placeholder behavior) unless a lesson explicitly opts out via
 *  showAnimation: false. */
function toggleAnimationPanel(lesson) {
  const panel = document.getElementById('animation-panel');
  if (!panel) return;
  panel.hidden = lesson.showAnimation === false;
}

/** Placeholder quiz used for any lesson without written quiz content yet
 *  (Chapters 2–8) — identical text/behavior to the original static demo. */
const PLACEHOLDER_QUIZ = [
  {
    question: 'This is an example placeholder question for this lesson?',
    answers: [
      { text: 'Example answer A', correct: false },
      { text: 'Example answer B', correct: true },
      { text: 'Example answer C', correct: false },
      { text: 'Example answer D', correct: false },
    ],
  },
];

/** Renders a (possibly multi-question) quiz from lesson.quiz into #quiz-root,
 *  one question at a time, with per-answer explanations and a running score. */
function initQuiz(lesson) {
  const root = document.getElementById('quiz-root');
  if (!root) return;

  const questions = Array.isArray(lesson.quiz) && lesson.quiz.length ? lesson.quiz : PLACEHOLDER_QUIZ;
  const isMulti = questions.length > 1;
  let index = 0;
  let score = 0;

  renderQuestion();

  function renderQuestion() {
    const q = questions[index];
    const letters = ['A', 'B', 'C', 'D'];
    let checked = false;
    let selected = null;

    root.innerHTML = `
      ${isMulti ? `<p class="quiz-progress">Question ${index + 1} of ${questions.length}</p>` : ''}
      <p class="quiz-question">${q.question}</p>
      <div class="quiz-options" role="group" aria-label="Answer choices">
        ${q.answers
          .map(
            (a, i) => `
          <button class="quiz-option" type="button" data-index="${i}" data-correct="${a.correct}" aria-pressed="false">
            <span class="quiz-option__letter" aria-hidden="true">${letters[i]}</span>
            <span>${a.text}</span>
          </button>`
          )
          .join('')}
      </div>
      <p class="quiz-feedback" role="status" style="margin-bottom: var(--sp-5); font-weight: 600;" hidden></p>
      <button class="btn btn--dark quiz-check-btn" type="button" disabled>Check</button>
    `;

    const options = root.querySelectorAll('.quiz-option');
    const checkBtn = root.querySelector('.quiz-check-btn');
    const feedback = root.querySelector('.quiz-feedback');

    options.forEach((opt) => {
      opt.addEventListener('click', () => {
        if (checked) return;
        options.forEach((o) => o.setAttribute('aria-pressed', 'false'));
        opt.setAttribute('aria-pressed', 'true');
        selected = opt;
        checkBtn.disabled = false;
      });
    });

    checkBtn.addEventListener('click', () => {
      if (!checked) {
        if (!selected) return;
        checked = true;

        const isCorrect = selected.dataset.correct === 'true';
        if (isCorrect) score++;

        const hasExplanations = q.answers.some((a) => a.explanation);

        options.forEach((o) => {
          const a = q.answers[Number(o.dataset.index)];
          if (a.correct) o.classList.add('is-correct');
          else if (o === selected) o.classList.add('is-incorrect');

          if (hasExplanations && a.explanation) {
            const expl = document.createElement('p');
            expl.className = 'quiz-explanation';
            expl.textContent = a.explanation;
            o.insertAdjacentElement('afterend', expl);
          }
        });

        if (!hasExplanations) {
          feedback.textContent = isCorrect
            ? 'Correct! That is the right answer (example content).'
            : 'Not quite — check the highlighted correct answer (example content).';
          feedback.hidden = false;
        }

        if (isMulti) {
          const isLast = index >= questions.length - 1;
          checkBtn.textContent = isLast ? 'See results' : 'Next question';
        } else {
          checkBtn.disabled = true;
        }
      } else {
        index++;
        if (index >= questions.length) {
          renderSummary();
        } else {
          renderQuestion();
        }
      }
    });
  }

  function renderSummary() {
    root.innerHTML = `<p class="quiz-score">You scored ${score} / ${questions.length} on this ${lesson.isTest ? 'chapter test' : 'lesson'}.</p>`;
  }
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
    const nextIsTest = !isLastInChapter && chapter.lessons.find((l) => l.id === nextLessonId)?.isTest;

    if (isLastInChapter && !nextChapter) {
      nextLessonBtn.textContent = 'Back to chapters';
      nextLessonBtn.href = 'learn.html';
    } else {
      nextLessonBtn.href = `lesson.html?chapter=${nextChapter.id}&lesson=${nextLessonId}`;
      nextLessonBtn.textContent = isLastInChapter ? 'Next chapter' : nextIsTest ? 'Take the chapter test' : 'Next lesson';
    }
  }
}
