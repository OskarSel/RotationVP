/**
 * data.js
 * ---------------------------------------------------------------------------
 * Single source of truth for course content. Nothing else in the app should
 * hardcode chapter or lesson info — learn.html, chapter.html and lesson.html
 * all read from `CHAPTERS` and render themselves from it.
 *
 * Content is placeholder-only at this stage (see project brief). Swap the
 * `title` / `summary` strings for real volleyball content later without
 * touching any rendering code.
 */

const TOTAL_CHAPTERS = 8;
const LESSONS_PER_CHAPTER = 10;

/**
 * Builds the placeholder course structure.
 * chapterId and lessonId are both 1-indexed and stable — they're used as
 * localStorage keys, so don't change the numbering scheme later without
 * a migration.
 */
function buildChapters() {
  const chapters = [];

  for (let c = 1; c <= TOTAL_CHAPTERS; c++) {
    const lessons = [];
    for (let l = 1; l <= LESSONS_PER_CHAPTER; l++) {
      lessons.push({
        id: l,
        title: `Lesson ${l}`,
        summary: 'Lesson description placeholder.',
        durationMin: 6,
      });
    }

    chapters.push({
      id: c,
      title: `Chapter ${c}`,
      summary: 'Chapter description placeholder — the topic scope will appear here.',
      lessons,
    });
  }

  return chapters;
}

const CHAPTERS = buildChapters();

/** Returns a chapter object by id, or null. */
function getChapter(chapterId) {
  return CHAPTERS.find((c) => c.id === Number(chapterId)) || null;
}

/** Returns a lesson object (plus parent chapter) by chapter/lesson id. */
function getLesson(chapterId, lessonId) {
  const chapter = getChapter(chapterId);
  if (!chapter) return null;
  const lesson = chapter.lessons.find((l) => l.id === Number(lessonId));
  if (!lesson) return null;
  return { chapter, lesson };
}

const TOTAL_LESSONS = TOTAL_CHAPTERS * LESSONS_PER_CHAPTER;
