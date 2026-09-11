/**
 * app.js
 * ---------------------------------------------------------------------------
 * Entry point loaded on every page. Initializes shared chrome (navbar) then
 * dispatches to the right page-specific init function based on
 * <body data-page="...">. Keeps every HTML file able to include the same
 * script tags without duplicating "which page am I" logic.
 */

// Applied at script-load time (not on DOMContentLoaded) so the saved theme
// is in place before first paint and the page doesn't flash light-then-dark.
document.documentElement.dataset.theme = ProgressStore.getTheme();

document.addEventListener('DOMContentLoaded', async () => {
  initNavigation();
  await ProgressStore.syncOnBoot();
  applyAuthNav();
  document.documentElement.dataset.theme = ProgressStore.getTheme();

  const page = document.body.dataset.page;

  switch (page) {
    case 'home':
      initHomePage();
      break;
    case 'learn':
      renderChapterGrid();
      break;
    case 'chapter':
      renderChapterPage();
      break;
    case 'lesson':
      initLessonPage();
      break;
    case 'dashboard':
      renderDashboard();
      break;
    case 'profile':
      initProfilePage();
      break;
    case 'shop':
      initShopPage();
      break;
    case 'leaderboard':
      initLeaderboardPage();
      break;
    default:
      break;
  }
});
