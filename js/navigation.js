/**
 * navigation.js
 * ---------------------------------------------------------------------------
 * Shared chrome behavior: mobile hamburger menu + marking the current page
 * as active in the navbar. Runs on every page via app.js.
 */

function initNavigation() {
  const toggle = document.querySelector('.navbar__toggle');
  const links = document.querySelector('.navbar__links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the mobile menu after a link is chosen.
    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  markActiveNavLink();
}

function markActiveNavLink() {
  // `data-nav` lets a page highlight a different nav entry than the one it
  // dispatches on (chapter.html and lesson.html both live under "Learn").
  const current = document.body.dataset.nav || document.body.dataset.page;
  if (!current) return;
  document.querySelectorAll('.navbar__links a[data-page]').forEach((link) => {
    if (link.dataset.page === current) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Builds a breadcrumb trail into any element with [data-breadcrumb].
 * `items` is an array of { label, href } — href omitted on the last item.
 */
function renderBreadcrumb(items) {
  const el = document.querySelector('[data-breadcrumb]');
  if (!el) return;
  el.innerHTML = items
    .map((item, i) => {
      const isLast = i === items.length - 1;
      const sep = i > 0 ? '<span class="breadcrumb__sep" aria-hidden="true">/</span>' : '';
      const node = isLast
        ? `<span aria-current="page">${item.label}</span>`
        : `<a href="${item.href}">${item.label}</a>`;
      return sep + node;
    })
    .join('');
}
