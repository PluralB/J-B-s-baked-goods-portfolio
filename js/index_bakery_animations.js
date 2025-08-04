// Only animation and basic setup
document.addEventListener('DOMContentLoaded', function() {
  // Loader
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => loader.style.display = 'none');
    setTimeout(() => loader.style.display = 'none', 3000);
  }

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }

  // Scroll animations
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    function checkAnimation() {
      const triggerPoint = window.innerHeight * 0.8;
      
      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < triggerPoint && rect.bottom > 0;
        
        if (isVisible) {
          el.classList.add('animate');
        } else {
          el.classList.remove('animate');
        }
      });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkAnimation();
          ticking = false;
        });
        ticking = true;
      }
    });

    checkAnimation();
  }

  initScrollAnimations();
});