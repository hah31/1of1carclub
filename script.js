/* ============================================================
   1 OF 1 CAR CLUB — SCRIPT.JS
   ============================================================ */

(function () {
  'use strict';

  /* -------------------------------------------------------
     NAV: transparent-to-opaque on scroll (index.html only)
     ------------------------------------------------------- */
  const nav = document.getElementById('nav');

  if (nav && nav.classList.contains('nav--transparent')) {
    const SCROLL_THRESHOLD = 80;

    function updateNav() {
      if (window.scrollY > SCROLL_THRESHOLD) {
        nav.classList.remove('nav--transparent');
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
        nav.classList.add('nav--transparent');
      }
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  /* -------------------------------------------------------
     HAMBURGER MENU
     ------------------------------------------------------- */
  const burger = document.getElementById('burger');
  const overlay = document.getElementById('nav-overlay');

  if (burger && overlay) {
    burger.addEventListener('click', function () {
      const isOpen = overlay.classList.contains('is-open');

      overlay.classList.toggle('is-open', !isOpen);
      burger.classList.toggle('is-open', !isOpen);
      burger.setAttribute('aria-expanded', String(!isOpen));
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    /* Close when a link inside the overlay is clicked */
    overlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        overlay.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        overlay.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* -------------------------------------------------------
     SCROLL REVEAL via IntersectionObserver
     ------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    /* Fallback: show everything immediately if no IntersectionObserver */
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

})();
