/**
 * storage.js
 * ---------------------------------------------------------------------------
 * Every read/write of user progress goes through the `ProgressStore` object
 * below. Nothing else in the app should call `localStorage` directly.
 *
 * Local-first + background sync: localStorage stays the synchronous source
 * of truth that every existing call site already relies on (unchanged), but
 * whenever the account is logged in, `save()` also schedules a debounced
 * PUT of the whole state to the server (server.js + /api/progress). Login,
 * register and logout are the only async methods here — every pre-existing
 * synchronous method (markLessonComplete, setAvatar, etc.) keeps working
 * exactly as before, logged in or not.
 */

const ProgressStore = (() => {
  const STORAGE_KEY = 'rotacja:progress:v1';
  const SYNC_DEBOUNCE_MS = 800;

  const XP_PER_LESSON = 20;
  const XP_PER_LEVEL = 150;
  const COINS_PER_TEST_PASS = 100;

  let syncTimer = null;

  /** Pushes the given state to the server soon, coalescing rapid-fire saves
   *  into a single request. No-op while logged out. */
  function scheduleServerSync(state) {
    if (!state.account) return;
    if (syncTimer) clearTimeout(syncTimer);
    syncTimer = setTimeout(() => {
      syncTimer = null;
      fetch('/api/progress', {
        method: 'PUT',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ progress: stripAccount(state) }),
      }).catch((err) => console.warn('ProgressStore: background sync failed.', err));
    }, SYNC_DEBOUNCE_MS);
  }

  /** `account` is client-side session info, not part of the progress blob
   *  the server stores (the server already knows who the caller is from
   *  the session cookie). */
  function stripAccount(state) {
    const { account, ...rest } = state;
    return rest;
  }

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
    scheduleServerSync(state);
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
      avatar: 'initials', // see AVATAR_DEFS in progress.js for every valid id
      coins: 0,
      unlockedAvatars: [], // ids of shop-wheel avatars won so far (see WHEEL_PRIZES in shop.js)
      dailyLogin: { lastClaimDay: 0, lastClaimDate: null }, // see getDailyLoginStatus/claimDailyLogin below
      account: null, // { id, email, username } once logged in, else null
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

    /** Marks a lesson complete, awards XP (and coins if it's a passed chapter
     *  test), updates streak + last lesson. Idempotent. */
    markLessonComplete(chapterId, lessonId, isTest) {
      const state = load();
      const k = key(chapterId, lessonId);
      if (!state.completedLessons.includes(k)) {
        state.completedLessons.push(k);
        state.xp += XP_PER_LESSON;
        if (isTest) state.coins = (state.coins || 0) + COINS_PER_TEST_PASS;
      }
      state.lastLesson = { chapterId: Number(chapterId), lessonId: Number(lessonId) };
      this._touchStreak(state);
      save(state);
      return state;
    },

    getCoinsPerTestPass() {
      return COINS_PER_TEST_PASS;
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

    getAvatar() {
      return load().avatar || 'initials';
    },

    setAvatar(avatarId) {
      const state = load();
      state.avatar = avatarId;
      save(state);
    },

    getCoins() {
      return load().coins || 0;
    },

    addCoins(amount) {
      const state = load();
      state.coins = (state.coins || 0) + amount;
      save(state);
      return state.coins;
    },

    /** Spends coins if there are enough; returns false (no-op) otherwise. */
    spendCoins(amount) {
      const state = load();
      if ((state.coins || 0) < amount) return false;
      state.coins -= amount;
      save(state);
      return true;
    },

    getUnlockedAvatars() {
      return load().unlockedAvatars.slice();
    },

    isAvatarUnlocked(avatarId) {
      return load().unlockedAvatars.includes(avatarId);
    },

    /** Records a shop-wheel avatar win. Idempotent. */
    unlockAvatar(avatarId) {
      const state = load();
      if (!state.unlockedAvatars.includes(avatarId)) {
        state.unlockedAvatars.push(avatarId);
        save(state);
      }
      return state;
    },

    /** Coin reward for daily-login days 1-4 — day 5 is the "Persistent
     *  Player" legendary avatar instead (see claimDailyLogin). */
    getDailyLoginCoinTable() {
      return { 1: 50, 2: 100, 3: 200, 4: 300 };
    },

    /** Whether today's daily-login reward is still there to claim, and
     *  which day of the 5-day cycle it is. Missing a day (no claim
     *  yesterday or today) resets the cycle back to day 1 — that's what
     *  makes it a "5 consecutive days" streak rather than a plain counter. */
    getDailyLoginStatus() {
      const state = load();
      const dl = state.dailyLogin || { lastClaimDay: 0, lastClaimDate: null };
      const today = todayISO();

      if (dl.lastClaimDate === today) {
        return { available: false, claimedToday: true, day: dl.lastClaimDay, claimedThrough: dl.lastClaimDay };
      }

      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      const continuing = dl.lastClaimDate === yesterday;
      const day = continuing ? (dl.lastClaimDay % 5) + 1 : 1;
      const claimedThrough = continuing ? dl.lastClaimDay : 0;
      return { available: true, claimedToday: false, day, claimedThrough };
    },

    /** Claims today's daily-login reward if one is available. Returns
     *  `{ day, coins }` or `{ day, avatarId, isNewAvatar }` for day 5, or
     *  `null` if there's nothing to claim right now (already claimed
     *  today — call getDailyLoginStatus first to avoid this). */
    claimDailyLogin() {
      const status = this.getDailyLoginStatus();
      if (!status.available) return null;

      const state = load();
      const day = status.day;
      const result = { day };

      if (day === 5) {
        result.avatarId = 'persistent-player';
        if (!state.unlockedAvatars.includes('persistent-player')) {
          state.unlockedAvatars.push('persistent-player');
          result.isNewAvatar = true;
        } else {
          // Already own it from a previous 5-day cycle — a coin bonus
          // keeps day 5 worth claiming instead of doing nothing.
          state.coins = (state.coins || 0) + 300;
          result.isNewAvatar = false;
          result.coins = 300;
        }
      } else {
        const amount = this.getDailyLoginCoinTable()[day];
        state.coins = (state.coins || 0) + amount;
        result.coins = amount;
      }

      state.dailyLogin = { lastClaimDay: day, lastClaimDate: todayISO() };
      save(state);
      return result;
    },

    /** Overall course completion, 0–100 (rounded). */
    getOverallPercent() {
      const state = load();
      return Math.round((state.completedLessons.length / TOTAL_LESSONS) * 100);
    },

    resetProgress() {
      save(defaultState());
    },

    isLoggedIn() {
      return !!load().account;
    },

    getAccount() {
      return load().account;
    },

    /** Creates an account, claiming whatever progress is currently on this
     *  device as its starting state. Throws with a user-facing message on
     *  failure (bad input, email taken, network error). */
    async register(email, password, username) {
      const localProgress = stripAccount(load());
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username, localProgress }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || 'Registration failed.');
      const state = { ...defaultState(), ...body.progress, account: body.user };
      save(state);
      return state;
    },

    /** Logs in and overwrites local progress with the server's copy — once
     *  an account exists, the server is the authoritative copy. Throws with
     *  a user-facing message on failure. */
    async login(email, password) {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || 'Login failed.');
      const state = { ...defaultState(), ...body.progress, account: body.user };
      save(state);
      return state;
    },

    /** Logs out and returns to guest mode. Progress already on this device
     *  stays right where it is — it just stops syncing to the account. */
    async logout() {
      try {
        await fetch('/api/auth/logout', { method: 'POST', credentials: 'same-origin' });
      } catch (err) {
        console.warn('ProgressStore: logout request failed.', err);
      }
      const state = load();
      state.account = null;
      save(state);
    },

    /** Call once on page load: confirms the session cookie (if any) is
     *  still valid and pulls the latest server progress. Safe to call as a
     *  guest — it just quietly no-ops (a normal 401, not an error). */
    async syncOnBoot() {
      let res;
      try {
        res = await fetch('/api/auth/me', { credentials: 'same-origin' });
      } catch (err) {
        console.warn('ProgressStore: boot sync unreachable, staying offline.', err);
        return;
      }
      if (!res.ok) {
        // Not logged in (or session expired) — make sure local state agrees.
        const state = load();
        if (state.account) {
          state.account = null;
          save(state);
        }
        return;
      }
      const body = await res.json().catch(() => null);
      if (!body) return;
      const state = { ...defaultState(), ...body.progress, account: body.user };
      save(state);
    },
  };
})();
