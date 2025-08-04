// gallery-navigation.js - MINIMAL IMAGE-ONLY VERSION

// 1. All image data in one place
const galleryData = {
  breads: [
  "baked-goods/gallery-pictures/breads/image_001.jpg",
  "baked-goods/gallery-pictures/breads/image_002.jpg",
  "baked-goods/gallery-pictures/breads/image_003.jpg",
  "baked-goods/gallery-pictures/breads/image_004.jpg",
  "baked-goods/gallery-pictures/breads/image_005.jpg",
  "baked-goods/gallery-pictures/breads/image_006.jpg",
  "baked-goods/gallery-pictures/breads/image_007.jpg",
  "baked-goods/gallery-pictures/breads/image_008.jpg",
  "baked-goods/gallery-pictures/breads/image_009.jpg"
  ],




  cakes: [
  "baked-goods/gallery-pictures/cakes/image_001.jpg",
  "baked-goods/gallery-pictures/cakes/image_002.jpg",
  "baked-goods/gallery-pictures/cakes/image_003.jpg",
  "baked-goods/gallery-pictures/cakes/image_004.jpg",
  "baked-goods/gallery-pictures/cakes/image_005.jpg",
  "baked-goods/gallery-pictures/cakes/image_006.jpg",
  "baked-goods/gallery-pictures/cakes/image_007.jpg",
  "baked-goods/gallery-pictures/cakes/image_008.jpg",
  "baked-goods/gallery-pictures/cakes/image_009.jpg",
  "baked-goods/gallery-pictures/cakes/image_010.jpg",
  "baked-goods/gallery-pictures/cakes/image_011.jpg",
  "baked-goods/gallery-pictures/cakes/image_012.jpg",
  "baked-goods/gallery-pictures/cakes/image_013.jpg",
  "baked-goods/gallery-pictures/cakes/image_014.jpg",
  "baked-goods/gallery-pictures/cakes/image_015.jpg",
  "baked-goods/gallery-pictures/cakes/image_016.jpg",
  "baked-goods/gallery-pictures/cakes/image_017.jpg",
  "baked-goods/gallery-pictures/cakes/image_018.jpg",
  "baked-goods/gallery-pictures/cakes/image_019.jpg",
  "baked-goods/gallery-pictures/cakes/image_020.jpg",
  "baked-goods/gallery-pictures/cakes/image_021.jpg",
  "baked-goods/gallery-pictures/cakes/image_022.jpg",
  "baked-goods/gallery-pictures/cakes/image_023.jpg",
  "baked-goods/gallery-pictures/cakes/image_024.jpg",
  "baked-goods/gallery-pictures/cakes/image_025.jpg",
  "baked-goods/gallery-pictures/cakes/image_026.jpg",
  "baked-goods/gallery-pictures/cakes/image_027.jpg",
  "baked-goods/gallery-pictures/cakes/image_028.jpg",
  "baked-goods/gallery-pictures/cakes/image_029.jpg",
  "baked-goods/gallery-pictures/cakes/image_030.jpg",
  "baked-goods/gallery-pictures/cakes/image_031.jpg",
  "baked-goods/gallery-pictures/cakes/image_032.jpg",
  "baked-goods/gallery-pictures/cakes/image_033.jpg",
  "baked-goods/gallery-pictures/cakes/image_034.jpg",
  "baked-goods/gallery-pictures/cakes/image_035.jpg",
  "baked-goods/gallery-pictures/cakes/image_036.jpg",
  "baked-goods/gallery-pictures/cakes/image_037.jpg",
  "baked-goods/gallery-pictures/cakes/image_038.jpg",
  "baked-goods/gallery-pictures/cakes/image_039.jpg",
  "baked-goods/gallery-pictures/cakes/image_040.jpg",
  "baked-goods/gallery-pictures/cakes/image_041.jpg",
  "baked-goods/gallery-pictures/cakes/image_042.jpg",
  "baked-goods/gallery-pictures/cakes/image_043.jpg",
  "baked-goods/gallery-pictures/cakes/image_044.jpg",
  "baked-goods/gallery-pictures/cakes/image_045.jpg",
  "baked-goods/gallery-pictures/cakes/image_046.jpg",
  "baked-goods/gallery-pictures/cakes/image_047.jpg",
  "baked-goods/gallery-pictures/cakes/image_048.jpg",
  "baked-goods/gallery-pictures/cakes/image_049.jpg"
  ],
  



  cookies:[
  "baked-goods/gallery-pictures/cookies/image_001.jpg",
  "baked-goods/gallery-pictures/cookies/image_002.jpg",
  "baked-goods/gallery-pictures/cookies/image_003.jpg",
  "baked-goods/gallery-pictures/cookies/image_004.jpg",
  "baked-goods/gallery-pictures/cookies/image_005.jpg",
  "baked-goods/gallery-pictures/cookies/image_006.jpg",
  "baked-goods/gallery-pictures/cookies/image_007.jpg",
  "baked-goods/gallery-pictures/cookies/image_008.jpg",
  "baked-goods/gallery-pictures/cookies/image_009.jpg",
  "baked-goods/gallery-pictures/cookies/image_010.jpg",
  "baked-goods/gallery-pictures/cookies/image_011.jpg",
  "baked-goods/gallery-pictures/cookies/image_012.jpg",
  "baked-goods/gallery-pictures/cookies/image_013.jpg",
  "baked-goods/gallery-pictures/cookies/image_014.jpg",
  "baked-goods/gallery-pictures/cookies/image_015.jpg",
  "baked-goods/gallery-pictures/cookies/image_016.jpg",
  ],





  pastries: [
  "baked-goods/gallery-pictures/pastries/image_001.jpg",
  "baked-goods/gallery-pictures/pastries/image_002.jpg",
  "baked-goods/gallery-pictures/pastries/image_003.jpg",
  "baked-goods/gallery-pictures/pastries/image_004.jpg",
  "baked-goods/gallery-pictures/pastries/image_005.jpg",
  "baked-goods/gallery-pictures/pastries/image_006.jpg",
  "baked-goods/gallery-pictures/pastries/image_007.jpg",
  "baked-goods/gallery-pictures/pastries/image_008.jpg",
  "baked-goods/gallery-pictures/pastries/image_009.jpg"
  ],
};

// 3. Debugging function to check elements exist
function verifyElements() {
  const requiredElements = [
    'categoriesView',
    'categoryGalleryView',
    'categoryGalleryGrid',
    'lightbox',
    'lightboxImage'
  ];
  
  requiredElements.forEach(id => {
    const el = document.getElementById(id);
    console.log(`${id} exists?`, !!el);
    if (!el) {
      console.error(`Missing required element: #${id}`);
    }
  });
}

// 4. Main showCategory function with error handling
window.showCategory = function(category) {
  console.log(`Attempting to show category: ${category}`);
  
  try {
    // Verify we have data for this category
    if (!galleryData[category]) {
      throw new Error(`No data found for category: ${category}`);
    }
    
    // Get DOM elements
    const categoriesView = document.getElementById('categoriesView');
    const galleryView = document.getElementById('categoryGalleryView');
    const grid = document.getElementById('categoryGalleryGrid');
    
    if (!categoriesView || !galleryView || !grid) {
      throw new Error('Required DOM elements not found');
    }
    
    // Toggle views
    categoriesView.style.display = 'none';
    galleryView.style.display = 'block';
    grid.innerHTML = '';
    
    // Add images
    galleryData[category].forEach((imgSrc, index) => {
      const imgDiv = document.createElement('div');
      imgDiv.className = 'gallery-item';
      imgDiv.innerHTML = `
        <img src="${imgSrc}" 
             alt="Gallery image ${index + 1}"
             loading="lazy"
             style="width:100%; height:auto; cursor:pointer"
             onclick="window.openLightbox('${imgSrc}')">
      `;
      grid.appendChild(imgDiv);
      
      // Log each image being added
      console.log(`Added image: ${imgSrc}`);
    });
    
  } catch (error) {
    console.error('Error in showCategory:', error);
    alert(`Error loading gallery: ${error.message}`);
  }
};

// 5. Back to categories
window.showCategories = function() {
  document.getElementById('categoriesView').style.display = 'block';
  document.getElementById('categoryGalleryView').style.display = 'none';
};

// 6. Lightbox functions
window.openLightbox = function(src) {
  const img = document.getElementById('lightboxImage');
  if (img) {
    img.src = src;
    document.getElementById('lightbox').style.display = 'flex';
  }
};

window.closeLightbox = function() {
  document.getElementById('lightbox').style.display = 'none';
};

// 7. Initialize - verify everything on load
document.addEventListener('DOMContentLoaded', function() {
  verifyElements();
  
  // Set up lightbox click handler
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.onclick = function(e) {
      if (e.target === this) closeLightbox();
    };
  }
  
  console.log('Gallery navigation initialized');
});