// category-images.js
function setRandomCategoryImages() {
  const categories = {
    breads: window.breadsImages || [],
    cakes: window.cakesImages || [],
    cookies: window.cookiesImages || [],
    pastries: window.pastriesImages || []
  };

  // Debugging: Check if images are loaded
  console.log('Available categories:', categories);

  const categoryCards = document.querySelectorAll('.category-card');
  
  categoryCards.forEach(card => {
    try {
      const category = card.getAttribute('onclick').match(/'([^']+)'/)[1];
      const images = categories[category];
      
      console.log(`Processing ${category} with ${images?.length || 0} images`);
      
      if (images && images.length > 0) {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const imageContainer = card.querySelector('.category-image');
        
        console.log(`Setting ${category} image to:`, randomImage);
        imageContainer.style.backgroundImage = `url('${randomImage}')`;
        
        // Hover effects
        imageContainer.style.transition = 'transform 0.5s ease';
        card.addEventListener('mouseenter', () => {
          imageContainer.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
          imageContainer.style.transform = 'scale(1)';
        });
      }
    } catch (error) {
      console.error('Error processing category card:', error);
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Initial load
  setRandomCategoryImages();
  
  // Refresh when returning to categories
  document.querySelector('.back-button')?.addEventListener('click', setRandomCategoryImages);
  
  // Also refresh periodically (every 5 minutes)
  setInterval(setRandomCategoryImages, 5 * 60 * 1000);
});