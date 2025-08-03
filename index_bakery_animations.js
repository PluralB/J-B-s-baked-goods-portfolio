// Loader
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Lightbox functionality
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'flex';
    lightbox.querySelector('img').src = img.src;
    lightbox.querySelector('img').alt = img.alt;
  });
});

document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target.id === 'lightbox') {
    e.currentTarget.style.display = 'none';
  }
});

// Recipe details toggle
document.querySelectorAll('.toggle-details').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.recipe-card');
    const details = card.querySelector('.recipe-details');
    
    if (details.style.display === 'block') {
      details.style.display = 'none';
      btn.textContent = 'Show Details';
    } else {
      details.style.display = 'block';
      btn.textContent = 'Hide Details';
    }
  });
});

// Recipe search functionality
document.getElementById('search').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  document.querySelectorAll('.recipe-card').forEach(card => {
    card.style.display = card.dataset.name.toLowerCase().includes(query) ? 'block' : 'none';
  });
});

// Testimonials carousel
let currentTestimonial = 0;
const testimonialInterval = setInterval(() => {
  const track = document.getElementById('testimonial-track');
  currentTestimonial = (currentTestimonial + 1) % track.children.length;
  track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
}, 4000);

// Dark mode toggle
const toggle = document.getElementById('dark-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  
  // Save preference to localStorage
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  toggle.textContent = '☀️';
}