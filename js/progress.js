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

/** Epic/legendary icons get a fixed gradient "enamel badge" disc behind
 *  their linework instead of a flat currentColor outline — a painted,
 *  multi-tone look that doesn't get re-tinted by whatever context (wheel
 *  slice, avatar card, leaderboard row) draws it, which is what makes the
 *  rarer prizes read as noticeably richer than the common/rare ones.
 *  `sparkles` (legendary only) bakes a couple of tiny 4-point stars into
 *  the art itself, on top of the CSS glow/foil-sweep the rarity already
 *  gets everywhere else. */
function prestigeIconFace(inner, viewBoxSize, gradientId, stops, ringColor, sparkles) {
  const size = viewBoxSize;
  const r = size / 2 - 1;
  const stopMarkup = stops.map(([offset, color]) => `<stop offset="${offset}" stop-color="${color}"/>`).join('');
  const star = (cx, cy, s) => `<path d="M${cx} ${cy - s}L${cx + s * 0.3} ${cy - s * 0.3}L${cx + s} ${cy}L${cx + s * 0.3} ${cy + s * 0.3}L${cx} ${cy + s}L${cx - s * 0.3} ${cy + s * 0.3}L${cx - s} ${cy}L${cx - s * 0.3} ${cy - s * 0.3}Z" fill="#fff6d6" opacity="0.9"/>`;
  const sparkleMarkup = sparkles ? sparkles.map(([sx, sy, ss]) => star(sx, sy, ss)).join('') : '';
  return () => `
      <svg class="avatar-face-icon avatar-face-icon--prestige" viewBox="0 0 ${size} ${size}" width="${viewBoxSize}" height="${viewBoxSize}" aria-hidden="true">
        <defs><radialGradient id="${gradientId}" cx="35%" cy="28%" r="80%">${stopMarkup}</radialGradient></defs>
        <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="url(#${gradientId})" stroke="${ringColor}" stroke-width="1.1"/>
        ${inner}
        ${sparkleMarkup}
      </svg>`;
}

const EPIC_GRADIENT_STOPS = [['0%', '#f5ebff'], ['55%', '#c084fc'], ['100%', '#6b21c9']];
const EPIC_RING = '#5b1fa8';
const LEGENDARY_GRADIENT_STOPS = [['0%', '#fffaeb'], ['50%', '#ffd666'], ['100%', '#b8791a']];
const LEGENDARY_RING = '#8a5a16';

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

  // Epic — richer gradient "enamel badge" art (see prestigeIconFace above)
  {
    id: 'triple-block', label: 'Triple Block', rarity: 'epic',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('triple-block'),
    face: prestigeIconFace(`<path d="M6 18V10M12 18V7M18 18V10" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>
        <path d="M6 10l-1.4 2.2M6 10l1.4 2.2M12 7l-1.5 2.4M12 7l1.5 2.4M18 10l-1.4 2.2M18 10l1.4 2.2" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity="0.85"/>
        <path d="M3 18h18" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>
        <circle cx="12" cy="4" r="1.4" fill="#fff" opacity="0.9"/>`, 24, 'g-triple-block', EPIC_GRADIENT_STOPS, EPIC_RING),
  },
  {
    id: 'perfect-rotation', label: 'Perfect Rotation', rarity: 'epic',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('perfect-rotation'),
    face: prestigeIconFace(`<path d="M12 5a7 7 0 1 0-6 3.4" stroke="#fff" stroke-width="1.6" stroke-linecap="round" fill="none"/>
        <path d="M4.6 6l.8 2.2 2.2-.6" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <circle cx="12" cy="5" r="1.2" fill="#fff"/><circle cx="17.5" cy="7.5" r="1.2" fill="#fff" opacity="0.85"/>
        <circle cx="19" cy="13" r="1.2" fill="#fff" opacity="0.85"/><circle cx="16" cy="18" r="1.2" fill="#fff" opacity="0.85"/>
        <circle cx="10" cy="19" r="1.2" fill="#fff" opacity="0.85"/><circle cx="6" cy="16" r="1.2" fill="#fff" opacity="0.85"/>`, 24, 'g-perfect-rotation', EPIC_GRADIENT_STOPS, EPIC_RING),
  },
  {
    id: 'five-set-thriller', label: 'Five-Set Thriller', rarity: 'epic',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('five-set-thriller'),
    face: prestigeIconFace(`<path d="M16.5 6H9.5v6h4a3 3 0 110 6H8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M7 19.5h10" stroke="#fff" stroke-width="1" opacity="0.5" stroke-linecap="round"/>`, 24, 'g-five-set-thriller', EPIC_GRADIENT_STOPS, EPIC_RING),
  },
  {
    id: 'read-block', label: 'Read Block', rarity: 'epic',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('read-block'),
    face: prestigeIconFace(`<path d="M3 12s4-5.5 9-5.5S21 12 21 12s-4 5.5-9 5.5S3 12 3 12z" stroke="#fff" stroke-width="1.4" stroke-linejoin="round" fill="none"/>
        <circle cx="12" cy="12" r="2.6" stroke="#fff" stroke-width="1.5"/>
        <circle cx="12" cy="12" r="0.9" fill="#fff"/>
        <path d="M5 18.5l1.8-2.6M19 18.5l-1.8-2.6" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity="0.85"/>`, 24, 'g-read-block', EPIC_GRADIENT_STOPS, EPIC_RING),
  },

  // Legendary — gradient badge + baked-in sparkle accents on top of the CSS glow/foil sweep
  {
    id: 'championship-spike', label: 'Championship Spike', rarity: 'legendary',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('championship-spike'),
    face: prestigeIconFace(`<circle cx="13" cy="4.2" r="1.5" fill="#fff"/>
        <path d="M12.7 5.6v4M12.7 6.6l4-3.2M12.9 7.6l-2.8 1.3M13 9.6l-2.1 5.4M13 9.6l2.8 4.6" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>
        <path d="M4 20h16" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>
        <path d="M7.5 20v-5.5M7.5 15h4" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.85"/>`,
      24, 'g-championship-spike', LEGENDARY_GRADIENT_STOPS, LEGENDARY_RING, [[19, 5, 1.3], [4, 17, 1]]),
  },
  {
    id: 'golden-ace', label: 'Golden Ace', rarity: 'legendary',
    hint: 'Win it on the Shop wheel.',
    unlocked: () => ProgressStore.isAvatarUnlocked('golden-ace'),
    face: prestigeIconFace(`<circle cx="12" cy="12" r="3.4" stroke="#fff" stroke-width="1.6"/>
        <path d="M12 4.5v2.2M12 17.3v2.2M4.5 12h2.2M17.3 12h2.2M6.4 6.4l1.6 1.6M16 16l1.6 1.6M6.4 17.6l1.6-1.6M16 8l1.6-1.6" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/>`,
      24, 'g-golden-ace', LEGENDARY_GRADIENT_STOPS, LEGENDARY_RING, [[4, 20, 1], [20, 4, 1.1]]),
  },
  {
    id: 'persistent-player', label: 'Persistent Player', rarity: 'legendary', wheelExempt: true,
    hint: 'Claim 5 days in a row of Daily Login Rewards to unlock.',
    unlocked: () => ProgressStore.isAvatarUnlocked('persistent-player'),
    face: prestigeIconFace(`<path d="M12 4l6 2.2v5c0 4-2.6 6.8-6 8-3.4-1.2-6-4-6-8v-5L12 4z" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" fill="none"/>
        <path d="M9 12.3l2 2 4-4.6" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
      24, 'g-persistent-player', LEGENDARY_GRADIENT_STOPS, LEGENDARY_RING, [[5, 6, 1], [19, 7, 1.1], [12, 20, 0.9]]),
  },
];

/** Shop-wheel prize pool. Each rarity tier keeps a fixed total win chance
 *  (55 / 35 / 9 / 1, summing to 100) split evenly across however many items
 *  currently carry that rarity — so adding/removing wheel prizes later never
 *  needs the odds recomputed by hand. */
const RARITY_TOTAL_CHANCE = { common: 55, rare: 35, epic: 9, legendary: 1 };
const WHEEL_PRIZES = (() => {
  const prizes = AVATAR_DEFS.filter((a) => a.rarity && !a.wheelExempt);
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
  if (def.rarity) el.dataset.rarity = def.rarity;
  else delete el.dataset.rarity;
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

  const countEl = document.getElementById('shop-collection-count');
  if (countEl) {
    const unlockedCount = AVATAR_DEFS.filter((a) => a.unlocked()).length;
    countEl.textContent = `${unlockedCount} / ${AVATAR_DEFS.length} unlocked`;
  }
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
