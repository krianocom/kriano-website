(function () {
  // Nav border on scroll
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('nav--scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // Mobile nav toggle
  var toggle = document.querySelector('.nav__toggle');
  var links  = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('nav__links--open');
      toggle.setAttribute('aria-expanded', open);
      var spans = toggle.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    // Close nav when a link is clicked
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('nav__links--open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelectorAll('span').forEach(function (s) {
          s.style.transform = '';
          s.style.opacity   = '';
        });
      });
    });
  }

  // Mark active nav link by matching current filename
  var file = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === file || (file === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  // Contact form success state
  if (window.location.search.indexOf('success=true') !== -1) {
    var form    = document.getElementById('contact-form');
    var success = document.getElementById('form-success');
    if (form)    form.style.display    = 'none';
    if (success) success.style.display = 'block';
  }
}());
