document.addEventListener('DOMContentLoaded', function() {
  const heroSlideshow = document.querySelector('.hero-slideshow');
  
  const images = [
    'baked-goods/showdown/Image_001.jpg',
    'baked-goods/showdown/Image_002.jpg',
    'baked-goods/showdown/Image_003.jpg',
    'baked-goods/showdown/Image_004.jpg',
    'baked-goods/showdown/Image_005.jpg',
    'baked-goods/showdown/Image_006.jpg',
    'baked-goods/showdown/Image_007.jpg',
    'baked-goods/showdown/Image_008.jpg',
    'baked-goods/showdown/Image_009.jpg',
    'baked-goods/showdown/Image_010.jpg',
    'baked-goods/showdown/Image_011.jpg',
    'baked-goods/showdown/Image_012.jpg',
    'baked-goods/showdown/Image_013.jpg',
    'baked-goods/showdown/Image_014.jpg',
    'baked-goods/showdown/Image_015.jpg',
    'baked-goods/showdown/Image_016.jpg',
    'baked-goods/showdown/Image_017.jpg',
    'baked-goods/showdown/Image_018.jpg',
    'baked-goods/showdown/Image_019.jpg',
    'baked-goods/showdown/Image_020.jpg',
    'baked-goods/showdown/Image_021.jpg',
    'baked-goods/showdown/Image_022.jpg',
    'baked-goods/showdown/Image_023.jpg',
    'baked-goods/showdown/Image_024.jpg',
    'baked-goods/showdown/Image_025.jpg',
    'baked-goods/showdown/Image_026.jpg',
    'baked-goods/showdown/Image_027.jpg',
    'baked-goods/showdown/Image_028.jpg',
    'baked-goods/showdown/Image_029.jpg',
    'baked-goods/showdown/Image_030.jpg',
    'baked-goods/showdown/Image_031.jpg',
    'baked-goods/showdown/Image_032.jpg',
    'baked-goods/showdown/Image_033.jpg',
    'baked-goods/showdown/Image_034.jpg',
    'baked-goods/showdown/Image_035.jpg',
    'baked-goods/showdown/Image_036.jpg',
    'baked-goods/showdown/Image_037.jpg',
    'baked-goods/showdown/Image_038.jpg',
    'baked-goods/showdown/Image_039.jpg',
    'baked-goods/showdown/Image_040.jpg',
    'baked-goods/showdown/Image_041.jpg',
    'baked-goods/showdown/Image_042.jpg',
    'baked-goods/showdown/Image_043.jpg',
    'baked-goods/showdown/Image_044.jpg',
    'baked-goods/showdown/Image_045.jpg',
    'baked-goods/showdown/Image_046.jpg',
    'baked-goods/showdown/Image_047.jpg',
    'baked-goods/showdown/Image_048.jpg',
    'baked-goods/showdown/Image_049.jpg',
    'baked-goods/showdown/Image_050.jpg',
    'baked-goods/showdown/Image_051.jpg',
    'baked-goods/showdown/Image_052.jpg',
    'baked-goods/showdown/Image_053.jpg',
    'baked-goods/showdown/Image_054.jpg',
    'baked-goods/showdown/Image_055.jpg',
    'baked-goods/showdown/Image_056.jpg',
    'baked-goods/showdown/Image_057.jpg',
    'baked-goods/showdown/Image_058.jpg',
    'baked-goods/showdown/Image_059.jpg',
    'baked-goods/showdown/Image_060.jpg',
    'baked-goods/showdown/Image_061.jpg',
    'baked-goods/showdown/Image_062.jpg',
    'baked-goods/showdown/Image_063.jpg',
    'baked-goods/showdown/Image_064.jpg',
    'baked-goods/showdown/Image_065.jpg',
    'baked-goods/showdown/Image_066.jpg',
    'baked-goods/showdown/Image_067.jpg',
    'baked-goods/showdown/Image_068.jpg',
    'baked-goods/showdown/Image_069.jpg',
    'baked-goods/showdown/Image_070.jpg',
    'baked-goods/showdown/Image_071.jpg',
    'baked-goods/showdown/Image_072.jpg',
    'baked-goods/showdown/Image_073.jpg',
    'baked-goods/showdown/Image_074.jpg',
    'baked-goods/showdown/Image_075.jpg',
    'baked-goods/showdown/Image_076.jpg',
    'baked-goods/showdown/Image_077.jpg',
    'baked-goods/showdown/Image_078.jpg',
    'baked-goods/showdown/Image_079.jpg',
    'baked-goods/showdown/Image_080.jpg',
    'baked-goods/showdown/Image_081.jpg',
    'baked-goods/showdown/Image_082.jpg',
    'baked-goods/showdown/Image_083.jpg',
    'baked-goods/showdown/Image_084.jpg',
    'baked-goods/showdown/Image_085.jpg',
    'baked-goods/showdown/Image_086.jpg',
    'baked-goods/showdown/Image_087.jpg',
    'baked-goods/showdown/Image_088.jpg',
    'baked-goods/showdown/Image_089.jpg',
  ];

  // Create image elements for each image in the array
  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Baking showcase ${index + 1}`;
    
    img.onerror = function() {
      console.error('Failed to load image:', src);
      this.style.display = 'none';
    };
    
    heroSlideshow.appendChild(img);
  });

  // Set a random initial active image
  const allImages = document.querySelectorAll('.hero-slideshow img');
  if (allImages.length > 0) {
    const randomIndex = Math.floor(Math.random() * allImages.length);
    allImages[randomIndex].classList.add('active');
  }

  // Function to get a random image that's not the current one
  function getRandomImage(current) {
    const images = document.querySelectorAll('.hero-slideshow img');
    if (images.length <= 1) return null; // Need at least 2 images
    
    let next;
    do {
      const randomIndex = Math.floor(Math.random() * images.length);
      next = images[randomIndex];
    } while (next === current && images.length > 1);
    
    return next;
  }

  // Function to rotate images randomly
  function rotateImages() {
    const active = document.querySelector('.hero-slideshow img.active');
    if (!active) return;
    
    const next = getRandomImage(active);
    if (!next) return;
    
    active.classList.remove('active');
    next.classList.add('active');
  }

  // Start slideshow 
  if (images.length > 0) {
    setInterval(rotateImages, 3000);
  }
});