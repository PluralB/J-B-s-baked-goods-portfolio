// REPLACE the entire content of category-images.js with this:

function initCategorySlideshows() {
  const categories = {
    breads: window.breadsImages || [],
    cakes: window.cakesImages || [],
    cookies: window.cookiesImages || [],
    pastries: window.pastriesImages || []
  };

  document.querySelectorAll('.category-card').forEach(card => {
    // Get category from onclick attribute
    const onclickAttr = card.getAttribute('onclick');
    if (!onclickAttr) return;
    
    const match = onclickAttr.match(/'([^']+)'/);
    if (!match) return;
    
    const category = match[1];
    const images = [...categories[category]];  

    
    if (images && images.length > 0) {
      const currentImg = card.querySelector('.category-image.current');
      
      if (currentImg) {
        // Set initial image immediately
        currentImg.style.backgroundImage = `url('${images[0]}')`;
        console.log(`Set initial image for ${category}:`, images[0]);
        
        // Simple rotation without complex animations
        let index = 1;
        setInterval(() => {
          const nextImage = images[index % images.length];
          
          // Simple fade transition
          currentImg.style.transition = 'opacity 0.5s ease';
          currentImg.style.opacity = '0';
          
          setTimeout(() => {
            currentImg.style.backgroundImage = `url('${nextImage}')`;
            currentImg.style.opacity = '1';
            console.log(`Updated ${category} to:`, nextImage);
          }, 250);
          
          index++;
        }, 3000);
      }
    } else {
      console.warn(`No images found for category: ${category}`);
    }
  });
}

document.addEventListener('DOMContentLoaded', initCategorySlideshows);