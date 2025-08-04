// category-images.js
function initCategorySlideshows() {
  const categories = {
    breads: window.breadsImages || [],
    cakes: window.cakesImages || [],
    cookies: window.cookiesImages || [],
    pastries: window.pastriesImages || []
  };

  document.querySelectorAll('.category-card').forEach(card => {
    const category = card.getAttribute('onclick').match(/'([^']+)'/)[1];
    const images = categories[category];
    
    if (images.length > 0) {
      const container = card.querySelector('.category-image-container');
      const currentImg = card.querySelector('.category-image.current');
      const nextImg = card.querySelector('.category-image.next');
      
      // Set initial image
      currentImg.style.backgroundImage = `url('${images[0]}')`;
      
      // Animation logic
      let index = 1;
      setInterval(() => {
        const nextImage = images[index % images.length];
        
        // Prepare next image
        nextImg.style.backgroundImage = `url('${nextImage}')`;
        
        // Animate
        currentImg.classList.add('swipe-left');
        nextImg.classList.add('swipe-left-next');
        
        // Reset after animation
        setTimeout(() => {
          currentImg.classList.remove('current', 'swipe-left');
          nextImg.classList.remove('next', 'swipe-left-next');
          nextImg.classList.add('current');
          currentImg.classList.add('next');
          
          // Swap DOM positions
          container.appendChild(currentImg);
        }, 500);
        
        index++;
      }, 3000);
    }
  });
}

document.addEventListener('DOMContentLoaded', initCategorySlideshows);