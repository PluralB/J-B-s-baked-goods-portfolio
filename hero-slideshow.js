document.addEventListener('DOMContentLoaded', function() {
  // Hero Slideshow Functionality
  const heroSlideshow = document.querySelector('.hero-slideshow');
  
  // Array of image paths - UPDATE THESE TO YOUR ACTUAL IMAGE PATHS
  const images = [

  ];

  // Create image elements for each image in the array
  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Baking showcase ${index + 1}`;
    
    // Error handling
    img.onerror = function() {
      console.error('Failed to load image:', src);
      this.style.display = 'none';
    };
    
    if (index === 0) img.classList.add('active');
    heroSlideshow.appendChild(img);
  });

  // Function to rotate images
  function rotateImages() {
    const images = document.querySelectorAll('.hero-slideshow img');
    const active = document.querySelector('.hero-slideshow img.active');
    
    if (!active) return; // Safety check
    
    // Find next image
    let next = active.nextElementSibling || heroSlideshow.firstElementChild;
    
    // Update classes
    active.classList.remove('active');
    next.classList.add('active');
  }

  // Start slideshow 
  if (images.length > 0) {
    setInterval(rotateImages, 3000);
  }
});