document.addEventListener('DOMContentLoaded', function () {
  // =========================
  // Loader
  // =========================
  const loader = document.getElementById('loader');
  if (loader) {
    const hideLoader = () => {
      loader.style.display = 'none';
    };

    // Hide when everything finishes loading
    window.addEventListener('load', hideLoader);

    // Fallback: hide after 3s no matter what
    setTimeout(hideLoader, 3000);
  }

  // =========================
  // Hamburger menu
  // =========================
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Optional: close menu when clicking a nav link (nice on mobile)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
      });
    });

    // Optional: close menu if user taps outside the nav/hamburger
    document.addEventListener('click', (e) => {
      const clickedInsideMenu =
        nav.contains(e.target) || hamburger.contains(e.target);

      if (!clickedInsideMenu) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
      }
    });
  }

  // =========================
  // Scroll fade-in animations
  // (works for ANY element with data-animate)
  // Supports: data-animate-delay="100" (ms)
  // =========================
  function initScrollAnimations() {
    const animatedElements = Array.from(document.querySelectorAll('[data-animate]'));
    if (animatedElements.length === 0) return;

    // Apply delays once
    animatedElements.forEach(el => {
      const delay = el.getAttribute('data-animate-delay');
      if (delay) {
        el.style.transitionDelay = `${parseInt(delay, 10) || 0}ms`;
      }
    });

    function checkAnimation() {
      const triggerPoint = window.innerHeight * 0.85;

      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < triggerPoint && rect.bottom > 0;

        if (isVisible) el.classList.add('animate');
        else el.classList.remove('animate');
      });
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        checkAnimation();
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Run once on load
    checkAnimation();
  }

  initScrollAnimations();
});