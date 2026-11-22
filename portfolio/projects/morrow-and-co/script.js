/* MORROW & CO. — concept café website. Vanilla JS, no dependencies, no network calls. */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* footer year */
  var yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();

  /* mobile navigation */
  var header = $('.site-header'), toggle = $('.nav-toggle'), nav = $('#site-nav');
  function setNav(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  toggle.addEventListener('click', function () { setNav(toggle.getAttribute('aria-expanded') !== 'true'); });
  $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setNav(false); toggle.focus(); } });
  window.addEventListener('resize', function () { if (window.innerWidth > 860) setNav(false); });

  /* header shadow on scroll */
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* active nav link */
  if ('IntersectionObserver' in window) {
    var links = {};
    $$('a[href^="#"]', nav).forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          $$('a', nav).forEach(function (a) { a.classList.remove('active'); a.removeAttribute('aria-current'); });
          links[en.target.id].classList.add('active');
          links[en.target.id].setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });

    /* scroll reveal */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    $$('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* menu filter */
  var chips = $$('.filters .chip'), groups = $$('.menu-group');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      chips.forEach(function (c) {
        var on = c === chip; c.classList.toggle('is-active', on); c.setAttribute('aria-pressed', String(on));
      });
      groups.forEach(function (g) { g.hidden = !(f === 'all' || g.getAttribute('data-cat') === f); });
    });
  });

  /* reservation form — client-side validation only; nothing is sent anywhere */
  var form = $('#reserve-form'); if (!form) return;
  var status = $('#form-status');
  var dateEl = $('#f-date');
  function iso(d) { var m = d.getMonth() + 1, day = d.getDate(); return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day; }
  var today = new Date(); dateEl.min = iso(today);
  var max = new Date(); max.setMonth(max.getMonth() + 6); dateEl.max = iso(max);

  var rules = {
    name: function (v) { return v.trim().length < 2 ? 'Please enter your full name (at least 2 characters).' : ''; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address, e.g. name@example.com.'; },
    date: function (v) {
      if (!v) return 'Please choose a date.';
      if (v < iso(new Date())) return 'Please choose today or a future date.';
      if (v > dateEl.max) return 'Reservations open up to six months ahead.';
      return '';
    },
    time: function (v) { return v ? '' : 'Please select a time.'; },
    guests: function (v) { return v ? '' : 'Please select the number of guests.'; },
    note: function (v) { return v.length > 300 ? 'Notes must be 300 characters or fewer.' : ''; }
  };
  function check(name) {
    var el = form.elements[name], msg = rules[name](el.value), out = $('#e-' + name);
    out.textContent = msg;
    if (msg) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
    return !msg;
  }
  Object.keys(rules).forEach(function (n) {
    var el = form.elements[n];
    el.addEventListener('blur', function () { if (el.value || el.hasAttribute('aria-invalid')) check(n); });
    el.addEventListener('input', function () { if (el.hasAttribute('aria-invalid')) check(n); });
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var firstBad = null;
    Object.keys(rules).forEach(function (n) { if (!check(n) && !firstBad) firstBad = form.elements[n]; });
    status.className = 'form-status';
    if (firstBad) {
      status.classList.add('bad');
      status.textContent = 'Please fix the highlighted fields and try again.';
      firstBad.focus(); return;
    }
    var first = form.elements.name.value.trim().split(/\s+/)[0];
    status.classList.add('ok');
    status.textContent = 'Thank you, ' + first + '. This is a demonstration only — no booking was made and nothing was sent. A live site would need a backend connected to this form.';
    status.focus();
    form.reset();
    $$('[aria-invalid]', form).forEach(function (x) { x.removeAttribute('aria-invalid'); });
  });
})();
