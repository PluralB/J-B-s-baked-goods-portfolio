// category-images.js
function setRandomCategoryImages() {
  const categories = {
    breads: window.breadsImages || [],
    cakes: window.cakesImages || [],
    cookies: window.cookiesImages || [],
    pastries: window.pastriesImages || []
  };

  const categoryCards = document.querySelectorAll('.category-card');
  
  categoryCards.forEach(card => {
    try {
      const category = card.getAttribute('onclick').match(/'([^']+)'/)[1];
      const images = categories[category];
      
      if (images && images.length > 0) {
        const imageContainer = card.querySelector('.category-image-container');
        const currentImg = imageContainer.querySelector('.category-image.current');
        const nextImg = imageContainer.querySelector('.category-image.next');
        
        // Get a new random image that's different from the current one
        let randomImage;
        do {
          randomImage = images[Math.floor(Math.random() * images.length)];
        } while (randomImage === currentImg.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1') && images.length > 1);
        
        // Set up the next image
        nextImg.style.backgroundImage = `url('${randomImage}')`;
        
        // Add animation classes
        currentImg.classList.add('swipe-left');
        nextImg.classList.add('swipe-left-next');
        
        // After animation completes, swap the images
        setTimeout(() => {
          currentImg.classList.remove('current', 'swipe-left');
          nextImg.classList.remove('next', 'swipe-left-next');
          nextImg.classList.add('current');
          currentImg.classList.add('next');
          
          // Reset the now-hidden image
          currentImg.style.backgroundImage = '';
        }, 500);
      }
    } catch (error) {
      console.error('Error processing category card:', error);
    }
  });
}

// Initialize with current/next images
function initializeCategoryImages() {
  const categoryCards = document.querySelectorAll('.category-card');
  
  categoryCards.forEach(card => {
    const imageContainer = card.querySelector('.category-image-container');
    if (!imageContainer) {
      const container = document.createElement('div');
      container.className = 'category-image-container';
      
      const currentImg = document.createElement('div');
      currentImg.className = 'category-image current';
      
      const nextImg = document.createElement('div');
      nextImg.className = 'category-image next';
      
      container.appendChild(currentImg);
      container.appendChild(nextImg);
      
      // Replace the existing image with our new container
      const oldImage = card.querySelector('.category-image');
      if (oldImage) {
        oldImage.parentNode.replaceChild(container, oldImage);
      } else {
        card.insertBefore(container, card.firstChild);
      }
    }
  });
  
  // Set initial images
  setRandomCategoryImages();
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize the image containers
  initializeCategoryImages();
  
  // Refresh when returning to categories
  document.querySelector('.back-button')?.addEventListener('click', setRandomCategoryImages);
  
  // Change images every 5 seconds with swipe animation
  setInterval(setRandomCategoryImages, 5000);
});