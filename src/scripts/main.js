/**
 * Bhushan Sovereign — Main Client Scripts
 * Smooth editorial interactions, accessible drawer navigation, scroll reveal, and reader modal.
 */

import { siteData } from '../data/siteData.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
  initScrollReveals();
  initReaderModal();
  initJournalFilters();
});

/**
 * Header Scroll State
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Accessible Mobile Drawer Menu
 */
function initMobileDrawer() {
  const openBtn = document.getElementById('openMobileMenu');
  const closeBtn = document.getElementById('closeMobileMenu');
  const drawer = document.getElementById('mobileDrawer');
  const drawerLinks = drawer ? drawer.querySelectorAll('.drawer-link, a') : [];

  if (!openBtn || !closeBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    openBtn.focus();
  };

  openBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}

/**
 * IntersectionObserver for subtle editorial reveals
 */
function initScrollReveals() {
  const elements = document.querySelectorAll('.reveal-init');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('reveal-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * Article Reader Modal
 */
function initReaderModal() {
  const modal = document.getElementById('readerModal');
  const closeBtn = document.getElementById('closeReaderModal');
  if (!modal || !closeBtn) return;

  const categoryEl = modal.querySelector('#readerCategory');
  const titleEl = modal.querySelector('#readerTitle');
  const dateEl = modal.querySelector('#readerDate');
  const readTimeEl = modal.querySelector('#readerReadTime');
  const contentEl = modal.querySelector('#readerContent');

  const openModal = (articleId) => {
    const article = siteData.journal.find(j => j.id === articleId) || siteData.journal[0];
    if (!article) return;

    if (categoryEl) categoryEl.textContent = article.category;
    if (titleEl) titleEl.textContent = article.title;
    if (dateEl) dateEl.textContent = article.date;
    if (readTimeEl) readTimeEl.textContent = article.readTime;
    if (contentEl) contentEl.innerHTML = article.content;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Attach click to all trigger buttons
  document.querySelectorAll('[data-open-article]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const id = trigger.getAttribute('data-open-article');
      openModal(id);
    });
  });
}

/**
 * Category Filters on /journal.html
 */
function initJournalFilters() {
  const filterBtns = document.querySelectorAll('.journal-filter-btn');
  const journalItems = document.querySelectorAll('.journal-filterable-item');

  if (!filterBtns.length || !journalItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      journalItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'ALL' || itemCat === category) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}
