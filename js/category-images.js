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

    if (images && images.length > 0) {
      const container = card.querySelector('.category-image-container');
      const currentImg = card.querySelector('.category-image.current');
      const nextImg = card.querySelector('.category-image.next');
      
      if (currentImg && nextImg) {
        // Set initial images
        currentImg.style.backgroundImage = `url('${images[0]}')`;
        nextImg.style.backgroundImage = `url('${images[1]}')`;
        
        let index = 1;
        
        setInterval(() => {
          // Update next image
          const nextIndex = (index + 1) % images.length;
          nextImg.style.backgroundImage = `url('${images[nextIndex]}')`;
          
          // Trigger animation
          currentImg.classList.remove('current');
          currentImg.classList.add('next');
          nextImg.classList.remove('next');
          nextImg.classList.add('current');
          
          // Swap references
          const temp = currentImg;
          currentImg = nextImg;
          nextImg = temp;
          
          index++;
        }, 3000);
      }
    } else {
      console.warn(`No images found for category: ${category}`);
    }
  });
}

document.addEventListener('DOMContentLoaded', initCategorySlideshows);