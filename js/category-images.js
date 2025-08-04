function initCategorySlideshows() {
  const categories = {
    breads: window.breadsImages || [],
    cakes: window.cakesImages || [],
    cookies: window.cookiesImages || [],
    pastries: window.pastriesImages || []
  };

  document.querySelectorAll('.category-card').forEach(card => {
    const onclickAttr = card.getAttribute('onclick');
    if (!onclickAttr) return;
    
    const match = onclickAttr.match(/'([^']+)'/);
    if (!match) return;
    
    const category = match[1];
    const images = [...categories[category]];
    
    if (!images.length) {
      console.warn(`No images found for category: ${category}`);
      return;
    }

    const container = card.querySelector('.category-image-container');
    let currentImg = card.querySelector('.category-image.current');
    let nextImg = card.querySelector('.category-image.next');
    
    // Set random initial images
    const randomIndex = Math.floor(Math.random() * images.length);
    currentImg.style.backgroundImage = `url('${images[randomIndex]}')`;
    nextImg.style.backgroundImage = `url('${images[(randomIndex + 1) % images.length]}')`;
    
    let index = randomIndex + 1;
    
    const swapImages = () => {
      // Update next image
      const nextIndex = (index + 1) % images.length;
      nextImg.style.backgroundImage = `url('${images[nextIndex]}')`;
      
      // Add animation classes
      currentImg.classList.add('swipe-out');
      nextImg.classList.add('swipe-in');
      
      // After animation completes
      setTimeout(() => {
        // Remove animation classes
        currentImg.classList.remove('swipe-out', 'current');
        nextImg.classList.remove('swipe-in', 'next');
        
        // Swap roles
        currentImg.classList.add('next');
        nextImg.classList.add('current');
        
        // Update references
        const temp = currentImg;
        currentImg = nextImg;
        nextImg = temp;
        
        index++;
      }, 500); // Match this with your animation duration
    };
    
    // Start the interval
    setInterval(swapImages, 3000);
  });
}

document.addEventListener('DOMContentLoaded', initCategorySlideshows);