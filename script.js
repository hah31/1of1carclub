/* ============================================================
   1 OF 1 CAR CLUB - SCRIPT.JS
   ============================================================ */

(function () {
  'use strict';

  /* -------------------------------------------------------
     NAV: transparent-to-opaque on scroll (index.html only)
     ------------------------------------------------------- */
  var nav = document.getElementById('nav');

  if (nav && nav.classList.contains('nav--transparent')) {
    var SCROLL_THRESHOLD = 80;

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
  var burger = document.getElementById('burger');
  var overlay = document.getElementById('nav-overlay');

  if (burger && overlay) {
    burger.addEventListener('click', function () {
      var isOpen = overlay.classList.contains('is-open');
      overlay.classList.toggle('is-open', !isOpen);
      burger.classList.toggle('is-open', !isOpen);
      burger.setAttribute('aria-expanded', String(!isOpen));
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    overlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        overlay.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

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
  var io = null;

  function observeRevealEls(root) {
    var els = (root || document).querySelectorAll('.reveal:not(.is-visible)');
    if (!els.length) return;

    if ('IntersectionObserver' in window) {
      if (!io) {
        io = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
        );
      }
      els.forEach(function (el) { io.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }

  observeRevealEls(document);

  /* -------------------------------------------------------
     FORM: validation + error states
     (validate only on submit, not on keystroke)
     ------------------------------------------------------- */
  var form = document.querySelector('.form[action*="formsubmit"]');

  if (form) {
    form.addEventListener('submit', function (e) {
      var valid = true;

      form.querySelectorAll('[required]').forEach(function (field) {
        var group = field.closest('.form__group');
        var hasValue = field.value.trim().length > 0;

        if (!hasValue) {
          valid = false;
          if (group) group.classList.add('form__group--error');
        }

        if (field.type === 'email' && hasValue) {
          var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
          if (!emailOk) {
            valid = false;
            if (group) group.classList.add('form__group--error');
          }
        }
      });

      if (!valid) {
        e.preventDefault();
        var firstError = form.querySelector('.form__group--error input, .form__group--error textarea');
        if (firstError) firstError.focus();
      }
    });

    /* Clear error state on input */
    form.querySelectorAll('input, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        var group = field.closest('.form__group');
        if (group) group.classList.remove('form__group--error');
      });
    });
  }

  /* -------------------------------------------------------
     COLLECTION PAGE RENDERER
     Reads from window.COLLECTION_DATA (collection-data.js)
     and populates the collection grid, featured section,
     and past collection list.
     ------------------------------------------------------- */

  function yearLabel(car) {
    if (car.yearDisplay) return car.yearDisplay;
    if (car.year) return String(car.year);
    return null;
  }

  function renderCardPlaceholder(car) {
    var yr = yearLabel(car);
    var isTbd = !!car.confirm;
    var cls = 'car-card__placeholder' + (isTbd ? ' car-card__placeholder--tbd' : '');
    return (
      '<div class="' + cls + '" aria-hidden="true">' +
        '<div class="car-card__placeholder-inner">' +
          (yr ? '<span class="car-card__placeholder-year">' + yr + '</span>' : '') +
          '<span class="car-card__placeholder-model">' + escHtml(car.displayName) + '</span>' +
          '<span class="car-card__placeholder-label">Photo pending</span>' +
        '</div>' +
      '</div>'
    );
  }

  function renderCardMedia(car) {
    if (car.photos && car.photos.length > 0) {
      var p = car.photos[0];
      return (
        '<img src="' + escHtml(p.src) + '" alt="' + escHtml(p.alt) + '" ' +
        'width="600" height="400" loading="lazy">'
      );
    }
    return renderCardPlaceholder(car);
  }

  function renderCard(car) {
    var yr = yearLabel(car);
    var confirmComment = car.confirm ? '<!-- CONFIRM: ' + car.confirm + ' -->' : '';
    return (
      confirmComment +
      '<article class="car-card reveal">' +
        '<div class="car-card__media">' + renderCardMedia(car) + '</div>' +
        '<div class="car-card__body">' +
          (yr ? '<p class="car-card__year">' + escHtml(yr) + '</p>' : '') +
          '<h3 class="car-card__model">' + escHtml(car.displayName) + '</h3>' +
          (car.shortNote ? '<p class="car-card__note">' + escHtml(car.shortNote) + '</p>' : '') +
          (car.badge ? '<span class="car-card__badge">' + escHtml(car.badge) + '</span>' : '') +
        '</div>' +
      '</article>'
    );
  }

  function renderFeaturedPlaceholder(car) {
    var yr = yearLabel(car);
    return (
      '<div class="car-card__placeholder car-card__placeholder--featured" aria-hidden="true">' +
        '<div class="car-card__placeholder-inner">' +
          (yr ? '<span class="car-card__placeholder-year">' + yr + '</span>' : '') +
          '<span class="car-card__placeholder-model">' + escHtml(car.displayName) + '</span>' +
          '<span class="car-card__placeholder-label">Photo pending</span>' +
        '</div>' +
      '</div>'
    );
  }

  function renderFeaturedMedia(car) {
    if (car.photos && car.photos.length > 0) {
      var p = car.photos[0];
      return (
        '<img src="' + escHtml(p.src) + '" alt="' + escHtml(p.alt) + '" ' +
        'class="featured-car__img" loading="lazy">'
      );
    }
    return renderFeaturedPlaceholder(car);
  }

  function renderFeaturedCar(car, index) {
    var isReverse = index % 2 === 1;
    var yr = yearLabel(car);
    var storyHtml = '';

    if (car.longStory && car.longStory.length > 0) {
      storyHtml = car.longStory.map(function (p) {
        return '<p>' + escHtml(p) + '</p>';
      }).join('');
    } else if (car.shortNote) {
      storyHtml = '<p>' + escHtml(car.shortNote) + '</p>';
    }

    var confirmComment = car.confirm ? '<!-- CONFIRM: ' + car.confirm + ' -->' : '';

    return (
      confirmComment +
      '<article class="featured-car' + (isReverse ? ' featured-car--reverse' : '') + ' reveal">' +
        '<div class="featured-car__media">' + renderFeaturedMedia(car) + '</div>' +
        '<div class="featured-car__body">' +
          (yr ? '<p class="featured-car__year">' + escHtml(yr) + '</p>' : '') +
          '<h3 class="featured-car__model">' + escHtml(car.displayName) + '</h3>' +
          '<div class="featured-car__text">' + storyHtml + '</div>' +
          (car.badge ? '<span class="featured-car__badge">' + escHtml(car.badge) + '</span>' : '') +
        '</div>' +
      '</article>'
    );
  }

  function renderPastItem(car) {
    return (
      '<div class="past-col__item reveal">' +
        '<span class="past-col__item-name">' + escHtml(car.displayName) + '</span>' +
        (car.shortNote ? '<span class="past-col__item-note">' + escHtml(car.shortNote) + '</span>' : '') +
      '</div>'
    );
  }

  function escHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function initCollection() {
    var data = window.COLLECTION_DATA;
    if (!data) return;

    /* Grid */
    var grid = document.getElementById('collection-grid');
    if (grid) {
      var current = (data.current || []).filter(function (c) {
        return c.status === 'current' && !c.featured;
      });
      /* Also include non-featured confirmed cars in grid */
      var gridCars = current;
      var countEl = document.getElementById('collection-count');
      if (countEl) {
        var total = (data.current || []).length;
        countEl.textContent = total + '+ cars';
      }
      grid.innerHTML = gridCars.map(renderCard).join('');
      observeRevealEls(grid);
    }

    /* Featured */
    var featuredEl = document.getElementById('featured-section');
    if (featuredEl) {
      var featured = (data.current || []).filter(function (c) { return c.featured; });
      featuredEl.innerHTML = featured.map(renderFeaturedCar).join('');
      observeRevealEls(featuredEl);
    }

    /* Past collection */
    var pastEl = document.getElementById('past-collection-list');
    if (pastEl) {
      pastEl.innerHTML = (data.past || []).map(renderPastItem).join('');
      observeRevealEls(pastEl);
    }
  }

  /* Run on DOMContentLoaded (data file must load before script.js) */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCollection);
  } else {
    initCollection();
  }

})();
