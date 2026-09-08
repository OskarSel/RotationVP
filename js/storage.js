/**
 * storage.js
 * ---------------------------------------------------------------------------
 * Every read/write of user progress goes through the `ProgressStore` object
 * below. Nothing else in the app should call `localStorage` directly.
 *
 * This keeps a clean seam for the future: to move to Firebase/Supabase,
 * reimplement the methods on ProgressStore (ideally as async functions,
 * updating call sites to `await` them) without touching lessons.js,
 * progress.js or any page script that consumes this API.
 */

const ProgressStore = (() => {
  const STORAGE_KEY = 'rotacja:progress:v1';

  const XP_PER_LESSON = 20;
  const XP_PER_LEVEL = 150;

  /** @returns {object} the full progress record, creating a default one if needed. */
  function load() {
    let raw;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      console.warn('ProgressStore: localStorage unavailable.', err);
      return defaultState();
    }
    if (!raw) return defaultState();
    try {
      const parsed = JSON.parse(raw);
      const state = { ...defaultState(), ...parsed };
      if (state.username === 'Gracz') {
        state.username = 'User';
        save(state);
      }
      return state;
    } catch (err) {
      console.warn('ProgressStore: corrupted data, resetting.', err);
      return defaultState();
    }
  }

  function save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn('ProgressStore: failed to save progress.', err);
    }
  }

  function defaultState() {
    return {
      completedLessons: [],   // array of "chapterId-lessonId" strings
      xp: 0,
      lastLesson: null,       // { chapterId, lessonId }
      streakDays: 1,
      lastActiveDate: todayISO(),
      username: 'User',
      theme: 'light',
    };
  }

  function todayISO() {
    return new Date().toISOString().slice(0, 10);
  }

  function key(chapterId, lessonId) {
    return `${chapterId}-${lessonId}`;
  }

  return {
    /** Full read-only snapshot of the current progress record. */
    getState() {
      return load();
    },

    isLessonComplete(chapterId, lessonId) {
      const state = load();
      return state.completedLessons.includes(key(chapterId, lessonId));
    },

    getCompletedLessonsInChapter(chapterId) {
      const state = load();
      return state.completedLessons.filter((k) => k.startsWith(`${chapterId}-`)).length;
    },

    getTotalCompletedLessons() {
      return load().completedLessons.length;
    },

    /** Marks a lesson complete, awards XP, updates streak + last lesson. Idempotent. */
    markLessonComplete(chapterId, lessonId) {
      const state = load();
      const k = key(chapterId, lessonId);
      if (!state.completedLessons.includes(k)) {
        state.completedLessons.push(k);
        state.xp += XP_PER_LESSON;
      }
      state.lastLesson = { chapterId: Number(chapterId), lessonId: Number(lessonId) };
      this._touchStreak(state);
      save(state);
      return state;
    },

    setLastLesson(chapterId, lessonId) {
      const state = load();
      state.lastLesson = { chapterId: Number(chapterId), lessonId: Number(lessonId) };
      save(state);
    },

    getLastLesson() {
      return load().lastLesson;
    },

    getXP() {
      return load().xp;
    },

    getLevel() {
      const xp = load().xp;
      return Math.floor(xp / XP_PER_LEVEL) + 1;
    },

    getXPIntoLevel() {
      const xp = load().xp;
      return xp % XP_PER_LEVEL;
    },

    getXPPerLevel() {
      return XP_PER_LEVEL;
    },

    getStreakDays() {
      return load().streakDays;
    },

    _touchStreak(state) {
      const today = todayISO();
      if (state.lastActiveDate === today) return;
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      state.streakDays = state.lastActiveDate === yesterday ? state.streakDays + 1 : 1;
      state.lastActiveDate = today;
    },

    /** 'light' | 'dark' — persisted so the choice survives a reload. */
    getTheme() {
      return load().theme === 'dark' ? 'dark' : 'light';
    },

    setTheme(theme) {
      const state = load();
      state.theme = theme === 'dark' ? 'dark' : 'light';
      save(state);
    },

    getUsername() {
      return load().username;
    },

    setUsername(name) {
      const state = load();
      state.username = name;
      save(state);
    },

    /** Overall course completion, 0–100 (rounded). */
    getOverallPercent() {
      const state = load();
      return Math.round((state.completedLessons.length / TOTAL_LESSONS) * 100);
    },

    resetProgress() {
      save(defaultState());
    },
  };
})();
