/**
 * progress.js
 * ---------------------------------------------------------------------------
 * Populates dashboard.html and profile.html from ProgressStore + CHAPTERS.
 */

function renderDashboard() {
  const root = document.getElementById('dashboard-root');
  if (!root) return;

  const state = ProgressStore.getState();
  const overallPct = ProgressStore.getOverallPercent();
  const completedLessons = ProgressStore.getTotalCompletedLessons();
  const startedChapters = CHAPTERS.filter((c) => ProgressStore.getCompletedLessonsInChapter(c.id) > 0).length;
  const xp = ProgressStore.getXP();
  const level = ProgressStore.getLevel();
  const xpIntoLevel = ProgressStore.getXPIntoLevel();
  const xpPerLevel = ProgressStore.getXPPerLevel();
  const streak = ProgressStore.getStreakDays();

  setText('stat-overall', `${overallPct}<small>%</small>`, true);
  setText('stat-lessons', `${completedLessons}<small>/${TOTAL_LESSONS}</small>`, true);
  setText('stat-chapters', `${startedChapters}<small>/${TOTAL_CHAPTERS}</small>`, true);
  setText('stat-streak', `${streak}<small> days</small>`, true);

  setText('dash-level', `Level ${level}`);
  setText('dash-xp', `${xp} XP`);
  const levelFill = document.getElementById('level-progress-fill');
  if (levelFill) levelFill.style.width = `${Math.round((xpIntoLevel / xpPerLevel) * 100)}%`;
  setText('dash-xp-remaining', `${xpPerLevel - xpIntoLevel} XP to level ${level + 1}`);

  const overallFill = document.getElementById('overall-progress-fill');
  if (overallFill) overallFill.style.width = `${overallPct}%`;

  renderContinuePanel(state);
  renderAchievements(completedLessons, streak);
}

function renderContinuePanel(state) {
  const panel = document.getElementById('continue-panel');
  if (!panel) return;

  const last = state.lastLesson;
  const target = last ? getLesson(last.chapterId, last.lessonId) : null;

  const chapterTitle = document.getElementById('continue-chapter');
  const lessonTitle = document.getElementById('continue-lesson');
  const link = document.getElementById('continue-link');

  if (target) {
    chapterTitle.textContent = target.chapter.title;
    lessonTitle.textContent = target.lesson.title;
    link.href = `lesson.html?chapter=${target.chapter.id}&lesson=${target.lesson.id}`;
  } else {
    chapterTitle.textContent = 'Chapter 1';
    lessonTitle.textContent = 'Lesson 1';
    link.href = 'lesson.html?chapter=1&lesson=1';
  }
}

/** Whether the given chapter's chapter-test lesson has been passed (the only
 *  way a test lesson can be marked complete is by scoring >= QUIZ_PASS_RATIO). */
function isChapterTestPassed(chapterId) {
  const chapter = getChapter(chapterId);
  if (!chapter) return false;
  const test = chapter.lessons.find((l) => l.isTest);
  if (!test) return false;
  return ProgressStore.isLessonComplete(chapterId, test.id);
}

/** Reward avatars, unlocked by passing a chapter test at 70%+. 'initials' is
 *  always available as the default. */
const AVATAR_DEFS = [
  {
    id: 'initials',
    label: 'Initials',
    hint: 'Always available.',
    unlocked: () => true,
    face: (username) => (username || 'U').charAt(0).toUpperCase(),
  },
  {
    id: 'volleyball',
    label: 'Volleyball',
    hint: 'Pass the Chapter 1 test (70%+) to unlock.',
    unlocked: () => isChapterTestPassed(1),
    face: () => `
      <svg viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <circle cx="15" cy="15" r="12.5" stroke="currentColor" stroke-width="2"/>
        <path d="M15 2.5c-5 4-5 21 0 25M4 10.5c5 3 17 3 22 0M4 19.5c5-3 17-3 22 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>`,
  },
  {
    id: 'spiker',
    label: 'Spiker',
    hint: 'Pass the Chapter 2 test (70%+) to unlock.',
    unlocked: () => isChapterTestPassed(2),
    face: () => `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="13" cy="3.4" r="1.8" fill="currentColor"/>
        <path d="M13 5.6v6.4M13 8.5l-4 2M13 8.5l5.5-4.5M9 12l-3 7M13 12l3 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="19.5" cy="2.5" r="1.6" stroke="currentColor" stroke-width="1.3"/>
      </svg>`,
  },
];

function getAvatarDef(avatarId) {
  return AVATAR_DEFS.find((a) => a.id === avatarId) || AVATAR_DEFS[0];
}

function renderAvatarFace(el, avatarId, username) {
  if (!el) return;
  const def = getAvatarDef(avatarId);
  el.innerHTML = def.id === 'initials' ? def.face(username) : def.face();
}

function renderAvatarPicker() {
  const grid = document.getElementById('avatar-grid');
  if (!grid) return;

  const currentAvatar = ProgressStore.getAvatar();

  grid.innerHTML = AVATAR_DEFS.map((a) => {
    const unlocked = a.unlocked();
    const selected = a.id === currentAvatar;
    return `
      <button
        type="button"
        class="avatar-option${unlocked ? '' : ' avatar-option--locked'}"
        data-avatar-id="${a.id}"
        aria-pressed="${selected}"
        ${unlocked ? '' : 'disabled'}
      >
        <span class="avatar-option__face">${a.id === 'initials' ? a.face(ProgressStore.getUsername()) : a.face()}</span>
        <span class="avatar-option__label">${a.label}</span>
        <span class="avatar-option__hint">${unlocked ? (selected ? 'Selected' : 'Tap to select') : a.hint}</span>
      </button>
    `;
  }).join('');

  grid.querySelectorAll('.avatar-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      ProgressStore.setAvatar(btn.dataset.avatarId);
      renderProfile();
    });
  });
}

const ACHIEVEMENTS = [
  { id: 'first-lesson', title: 'First serve', threshold: (c) => c.lessons >= 1 },
  { id: 'five-lessons', title: '5 lessons', threshold: (c) => c.lessons >= 5 },
  { id: 'chapter-one', title: 'Chapter 1 completed', threshold: (c) => c.chapterOneDone },
  { id: 'streak-3', title: '3-day streak', threshold: (c) => c.streak >= 3 },
  { id: 'twenty-lessons', title: '20 lessons', threshold: (c) => c.lessons >= 20 },
  { id: 'all-chapters', title: 'Full course', threshold: (c) => c.lessons >= TOTAL_LESSONS },
];

function renderAchievements(completedLessons, streak) {
  const grid = document.getElementById('achievement-grid');
  if (!grid) return;

  const chapterOneDone = ProgressStore.getCompletedLessonsInChapter(1) === getChapter(1).lessons.length;
  const ctx = { lessons: completedLessons, streak, chapterOneDone };

  grid.innerHTML = ACHIEVEMENTS.map((a) => {
    const unlocked = a.threshold(ctx);
    return `
      <div class="achievement${unlocked ? '' : ' achievement--locked'}">
        <div class="achievement__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M12 3l2.4 5.1 5.6.6-4.2 3.8 1.2 5.5L12 15l-5 3 1.2-5.5-4.2-3.8 5.6-.6L12 3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
        </div>
        <div class="achievement__title">${a.title}</div>
      </div>
    `;
  }).join('');
}

/** Called once per page load: renders, then wires up the controls. */
function initProfilePage() {
  const root = document.getElementById('profile-root');
  if (!root) return;

  renderProfile();

  const nameInput = document.getElementById('username-input');
  const nameForm = document.getElementById('username-form');
  if (nameForm) {
    nameForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = nameInput.value.trim();
      if (!value) return;
      ProgressStore.setUsername(value);
      renderProfile();
    });
  }

  const resetBtn = document.getElementById('reset-progress-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (window.confirm('Are you sure you want to reset all learning progress?')) {
        ProgressStore.resetProgress();
        renderProfile();
      }
    });
  }

  const darkToggle = document.getElementById('dark-mode-toggle');
  if (darkToggle) {
    darkToggle.checked = ProgressStore.getTheme() === 'dark';
    darkToggle.addEventListener('change', () => {
      const theme = darkToggle.checked ? 'dark' : 'light';
      document.documentElement.dataset.theme = theme;
      ProgressStore.setTheme(theme);
    });
  }
}

/** Pure re-render of the profile figures. Safe to call repeatedly — attaches
 *  no listeners, so nothing accumulates. */
function renderProfile() {
  const state = ProgressStore.getState();
  const xp = ProgressStore.getXP();
  const level = ProgressStore.getLevel();
  const completedLessons = ProgressStore.getTotalCompletedLessons();

  setText('profile-username', state.username);
  setText('profile-level', `Level ${level}`);
  setText('profile-xp', `${xp} XP`);
  setText('profile-lessons', `${completedLessons}`);
  renderAvatarFace(document.getElementById('profile-avatar-face'), state.avatar, state.username);

  renderAchievements(completedLessons, ProgressStore.getStreakDays());
  renderAvatarPicker();

  const nameInput = document.getElementById('username-input');
  if (nameInput) nameInput.value = state.username;
}

function setText(id, html, isHTML) {
  const el = document.getElementById(id);
  if (!el) return;
  if (isHTML) el.innerHTML = html;
  else el.textContent = html;
}
