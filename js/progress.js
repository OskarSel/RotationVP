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

/** Turns a raw icon markup string into a face() function producing a sized,
 *  classed SVG — every avatar icon needs explicit width/height or it can
 *  collapse to nothing inside the flex-centered avatar circle in real
 *  browsers (element presence in the DOM is not the same as a visible size). */
function iconFace(inner, viewBoxSize) {
  return () => `
      <svg class="avatar-face-icon" viewBox="0 0 ${viewBoxSize} ${viewBoxSize}" width="${viewBoxSize}" height="${viewBoxSize}" fill="none" aria-hidden="true">
        ${inner}
      </svg>`;
}

/** Reward avatars. 'initials' is always available; 'volleyball' and 'spiker'
 *  unlock by passing a chapter test at 70%+; everything with a `rarity` is a
 *  shop-wheel prize unlocked via ProgressStore.unlockAvatar (see shop.js). */
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
    face: iconFace(`<circle cx="15" cy="15" r="12.5" stroke="currentColor" stroke-width="2"/>
        <path d="M15 2.5c-5 4-5 21 0 25M4 10.5c5 3 17 3 22 0M4 19.5c5-3 17-3 22 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`, 30),
  },
  {
    id: 'spiker',
    label: 'Spiker',
    hint: 'Pass the Chapter 2 test (70%+) to unlock.',
    unlocked: () => isChapterTestPassed(2),
    face: iconFace(`<circle cx="13" cy="3.4" r="1.8" fill="currentColor"/>
        <path d="M13 5.6v6.4M13 8.5l-4 2M13 8.5l5.5-4.5M9 12l-3 7M13 12l3 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="19.5" cy="2.5" r="1.6" stroke="currentColor" stroke-width="1.3"/>`, 24),
  },
  {
    id: 'rotation-master',
    label: 'Rotation Master',
    hint: 'Pass the Chapter 3 test (70%+) to unlock.',
    unlocked: () => isChapterTestPassed(3),
    face: iconFace(`<rect x="6" y="6" width="12" height="12" rx="1.5" stroke="currentColor" stroke-width="1.4"/>
        <path d="M6 12h12M12 6v12" stroke="currentColor" stroke-width="1" opacity="0.6"/>
        <path d="M20.3 8.2a8 8 0 1 1-2.6-4.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none"/>
        <path d="M17.2 1.2l0.9 2.7 2.7-0.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`, 24),
  },
  {
    id: 'first-touch',
    label: 'First Touch',
    hint: 'Pass the Chapter 4 test (70%+) to unlock.',
    unlocked: () => isChapterTestPassed(4),
    face: iconFace(`<path d="M12 3c4 2 5 8 3 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="2 2" fill="none"/>
        <circle cx="15" cy="14.3" r="1.4" fill="currentColor"/>
        <circle cx="6" cy="18.5" r="1.8" stroke="currentColor" stroke-width="1.4"/>
        <circle cx="12" cy="20" r="1.8" stroke="currentColor" stroke-width="1.4"/>
        <circle cx="18" cy="18.5" r="1.8" stroke="currentColor" stroke-width="1.4"/>`, 24),
  },

  // ---- Shop wheel prizes -------------------------------------------------
  // Common (55% total, 11% each)
  {
    id: 'serve-ace', label: 'Serve Ace', rarity: 'common',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('serve-ace'),
    face: iconFace(`<circle cx="7" cy="17" r="3.2" stroke="currentColor" stroke-width="1.6"/>
        <path d="M9.5 14.5L18 6M18 6h-4M18 6v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`, 24),
  },
  {
    id: 'first-dig', label: 'First Dig', rarity: 'common',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('first-dig'),
    face: iconFace(`<circle cx="12" cy="6" r="2.6" stroke="currentColor" stroke-width="1.6"/>
        <path d="M6 18l6-6 6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`, 24),
  },
  {
    id: 'bump-pass', label: 'Bump Pass', rarity: 'common',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('bump-pass'),
    face: iconFace(`<circle cx="12" cy="15" r="3" stroke="currentColor" stroke-width="1.6"/>
        <path d="M12 10.5V4M9 7l3-3 3 3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`, 24),
  },
  {
    id: 'home-court', label: 'Home Court', rarity: 'common',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('home-court'),
    face: iconFace(`<rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" stroke-width="1.6"/>
        <path d="M12 5v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <path d="M9 12h6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`, 24),
  },
  {
    id: 'kneepads', label: 'Rookie Kneepads', rarity: 'common',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('kneepads'),
    face: iconFace(`<rect x="4.5" y="6" width="6.5" height="12" rx="3" stroke="currentColor" stroke-width="1.6"/>
        <rect x="13" y="6" width="6.5" height="12" rx="3" stroke="currentColor" stroke-width="1.6"/>
        <path d="M4.5 12h6.5M13 12h6.5" stroke="currentColor" stroke-width="1.2"/>`, 24),
  },
  {
    id: 'whistle', label: "Ref's Whistle", rarity: 'common',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('whistle'),
    face: iconFace(`<rect x="3" y="10" width="8" height="6" rx="3" stroke="currentColor" stroke-width="1.6"/>
        <circle cx="16" cy="13" r="5" stroke="currentColor" stroke-width="1.6"/>
        <circle cx="16" cy="13" r="1.3" fill="currentColor"/>
        <path d="M9 10V8a2 2 0 012-2h1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>`, 24),
  },
  {
    id: 'clipboard', label: 'Game Plan', rarity: 'common',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('clipboard'),
    face: iconFace(`<rect x="5" y="4" width="14" height="18" rx="2" stroke="currentColor" stroke-width="1.6"/>
        <rect x="9" y="2.5" width="6" height="3" rx="1" fill="currentColor"/>
        <path d="M8 11h3M8 15h5M15 10l3 2-3 2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`, 24),
  },
  {
    id: 'water-bottle', label: 'Timeout Sip', rarity: 'common',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('water-bottle'),
    face: iconFace(`<path d="M10 2h4v3l1.5 2v13a1.5 1.5 0 01-1.5 1.5h-4A1.5 1.5 0 018.5 20V7L10 5V2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="none"/>
        <path d="M8.5 12h7" stroke="currentColor" stroke-width="1.3"/>`, 24),
  },

  // Rare
  {
    id: 'setters-hands', label: "Setter's Hands", rarity: 'rare',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('setters-hands'),
    face: iconFace(`<circle cx="12" cy="8" r="3.2" stroke="currentColor" stroke-width="1.6"/>
        <path d="M7 15l1.2-2M9.5 15.5l.8-2.3M12 16v-2.4M14.5 15.5l-.8-2.3M17 15l-1.2-2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>`, 24),
  },
  {
    id: 'ace-streak', label: 'Ace Streak', rarity: 'rare',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('ace-streak'),
    face: iconFace(`<circle cx="6" cy="18" r="1.8" stroke="currentColor" stroke-width="1.4"/>
        <circle cx="12" cy="12" r="1.8" stroke="currentColor" stroke-width="1.4"/>
        <circle cx="18" cy="6" r="1.8" stroke="currentColor" stroke-width="1.4"/>
        <path d="M8 16.5l2.5-3M14 10.5l2.5-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`, 24),
  },
  {
    id: 'libero-dig', label: 'Libero Dig', rarity: 'rare',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('libero-dig'),
    face: iconFace(`<circle cx="18" cy="5" r="1.7" fill="currentColor"/>
        <path d="M16.8 6.3L6 11L3 15.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 11l3 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="3" cy="15.5" r="1.5" stroke="currentColor" stroke-width="1.3"/>`, 24),
  },
  {
    id: 'match-point', label: 'Match Point', rarity: 'rare',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('match-point'),
    face: iconFace(`<path d="M6 4v16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <path d="M6 4h9l-2.5 3L15 10H6" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M17 15l1.2 2.4 2.6.4-1.9 1.8.4 2.6-2.3-1.2-2.3 1.2.4-2.6-1.9-1.8 2.6-.4z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>`, 24),
  },
  {
    id: 'jump-serve', label: 'Jump Serve', rarity: 'rare',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('jump-serve'),
    face: iconFace(`<circle cx="18" cy="4" r="2" stroke="currentColor" stroke-width="1.5"/>
        <path d="M6 20l4-9 3-2 3-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none"/>
        <path d="M3 20h9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>`, 24),
  },
  {
    id: 'quick-set', label: 'Quick Set', rarity: 'rare',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('quick-set'),
    face: iconFace(`<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="none"/>`, 24),
  },
  {
    id: 'pancake-dig', label: 'Pancake Dig', rarity: 'rare',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('pancake-dig'),
    face: iconFace(`<ellipse cx="12" cy="19" rx="8" ry="2" stroke="currentColor" stroke-width="1.4"/>
        <path d="M4 14l6 3 10-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <circle cx="19" cy="8" r="1.8" stroke="currentColor" stroke-width="1.4"/>`, 24),
  },

  // Epic
  {
    id: 'triple-block', label: 'Triple Block', rarity: 'epic',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('triple-block'),
    face: iconFace(`<path d="M3 20V10M12 20V6M21 20V10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <path d="M3 10l-1.6 2.6M3 10l1.6 2.6M12 6l-1.7 2.8M12 6l1.7 2.8M21 10l-1.6 2.6M21 10l1.6 2.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        <path d="M1 20h22" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`, 24),
  },
  {
    id: 'perfect-rotation', label: 'Perfect Rotation', rarity: 'epic',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('perfect-rotation'),
    face: iconFace(`<path d="M12 4a8 8 0 1 1-6.9 3.9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <path d="M4.2 5.5l.9 2.4 2.4-.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="4" r="1.3" fill="currentColor"/><circle cx="18" cy="7" r="1.3" fill="currentColor"/>
        <circle cx="20" cy="13" r="1.3" fill="currentColor"/><circle cx="17" cy="19" r="1.3" fill="currentColor"/>
        <circle cx="11" cy="20.5" r="1.3" fill="currentColor"/><circle cx="6" cy="16" r="1.3" fill="currentColor"/>`, 24),
  },
  {
    id: 'five-set-thriller', label: 'Five-Set Thriller', rarity: 'epic',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('five-set-thriller'),
    face: iconFace(`<path d="M18 4H9v7h4.5a3.5 3.5 0 110 7H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`, 24),
  },
  {
    id: 'read-block', label: 'Read Block', rarity: 'epic',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('read-block'),
    face: iconFace(`<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="none"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
        <path d="M4 19l2-3M20 19l-2-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>`, 24),
  },

  // Legendary
  {
    id: 'championship-spike', label: 'Championship Spike', rarity: 'legendary',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('championship-spike'),
    face: iconFace(`<circle cx="12.5" cy="3.6" r="1.6" fill="currentColor"/>
        <path d="M12.2 5.2v4.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M12.2 6.3l4.3-3.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M12.4 7.4l-3 1.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M12.5 9.5l-2.3 5.8M12.5 9.5l3 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="18.3" cy="1.6" r="1.5" stroke="currentColor" stroke-width="1.2"/>
        <path d="M16.6 3l-1.6 1.4" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
        <path d="M2 21h20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <path d="M6 21v-6.5M6 15h5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`, 24),
  },
  {
    id: 'golden-ace', label: 'Golden Ace', rarity: 'legendary',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('golden-ace'),
    face: iconFace(`<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M4.5 19.5l2-2M17.5 6.5l2-2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>`, 24),
  },
];

/** Shop-wheel prize pool. Each rarity tier keeps a fixed total win chance
 *  (55 / 35 / 9 / 1, summing to 100) split evenly across however many items
 *  currently carry that rarity — so adding/removing wheel prizes later never
 *  needs the odds recomputed by hand. */
const RARITY_TOTAL_CHANCE = { common: 55, rare: 35, epic: 9, legendary: 1 };
const WHEEL_PRIZES = (() => {
  const prizes = AVATAR_DEFS.filter((a) => a.rarity);
  const countByRarity = prizes.reduce((acc, a) => {
    acc[a.rarity] = (acc[a.rarity] || 0) + 1;
    return acc;
  }, {});
  return prizes.map((a) => ({
    id: a.id,
    label: a.label,
    rarity: a.rarity,
    chance: RARITY_TOTAL_CHANCE[a.rarity] / countByRarity[a.rarity],
  }));
})();

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
        ${a.rarity ? `data-rarity="${a.rarity}"` : ''}
        aria-pressed="${selected}"
        ${unlocked ? '' : 'disabled'}
      >
        <span class="avatar-option__face">${a.id === 'initials' ? a.face(ProgressStore.getUsername()) : a.face()}</span>
        <span class="avatar-option__label">${a.label}</span>
        ${a.rarity ? `<span class="avatar-option__rarity">${a.rarity}</span>` : ''}
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
  setText('profile-coins', `${ProgressStore.getCoins()}`);
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
