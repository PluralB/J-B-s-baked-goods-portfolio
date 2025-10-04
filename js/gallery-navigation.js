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
    "baked-goods/gallery-pictures/cakes/image_049.jpg",
    "baked-goods/gallery-pictures/cakes/image_050.jpg"
  ],

  cookies: [
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
    "baked-goods/gallery-pictures/cookies/image_016.jpg"
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
  ]
};

// 2. Debug function
function debugElements() {
  console.log('=== DEBUGGING GALLERY ===');
  console.log('categoriesView exists:', !!document.getElementById('categoriesView'));
  console.log('categoryGalleryView exists:', !!document.getElementById('categoryGalleryView'));
  console.log('categoryGalleryGrid exists:', !!document.getElementById('categoryGalleryGrid'));
  console.log('Gallery data loaded:', Object.keys(galleryData));
}

// 3. FIXED showCategory function
window.showCategory = function(category) {
  console.log('=== SHOW CATEGORY CALLED ===');
  console.log('Category:', category);
  
  try {
    // Check if we have data
    if (!galleryData[category]) {
      console.error('No data for category:', category);
      alert('No images found for this category!');
      return;
    }
    
    console.log('Images for', category, ':', galleryData[category].length);
    
    // Get elements
    const categoriesView = document.getElementById('categoriesView');
    const galleryView = document.getElementById('categoryGalleryView');
    const grid = document.getElementById('categoryGalleryGrid');
    const title = document.getElementById('currentCategoryTitle');
    
    if (!categoriesView || !galleryView || !grid) {
      console.error('Missing DOM elements!');
      debugElements();
      return;
    }
    
    // Hide categories, show gallery
    console.log('Switching views...');
    categoriesView.style.display = 'none';
    galleryView.style.display = 'block';
    
    // Set title
    if (title) {
      title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    }
    
    // Clear and populate grid
    grid.innerHTML = '';
    console.log('Grid cleared, adding images...');
    
    galleryData[category].forEach((imgSrc, index) => {
      console.log(`Adding image ${index + 1}:`, imgSrc);
      
      // Create container
      const itemDiv = document.createElement('div');
      itemDiv.className = 'gallery-item';
      itemDiv.style.cssText = `
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        background: #f0f0f0;
        min-height: 250px;
      `;
      
      // Create image
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = `${category} image ${index + 1}`;
      img.style.cssText = `
        width: 100%;
        height: 250px;
        object-fit: cover;
        cursor: pointer;
        transition: transform 0.3s ease;
      `;
      
      // Add error handling
      img.onerror = function() {
        console.error('FAILED to load:', imgSrc);
        this.style.background = '#ffebee';
        this.alt = 'Failed to load image';
        // Create error text
        const errorText = document.createElement('div');
        errorText.textContent = 'Image not found';
        errorText.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #666;
          font-size: 14px;
        `;
        itemDiv.appendChild(errorText);
      };
      
      img.onload = function() {
        console.log('SUCCESS loaded:', imgSrc);
      };
      
      // Add click handler for lightbox
      img.onclick = () => {
        console.log('Opening lightbox for:', imgSrc);
        openLightbox(imgSrc);
      };
      
      // Add hover effect
      img.onmouseover = () => img.style.transform = 'scale(1.05)';
      img.onmouseout = () => img.style.transform = 'scale(1)';
      
      itemDiv.appendChild(img);
      grid.appendChild(itemDiv);
    });
    
    console.log('Gallery populated with', galleryData[category].length, 'images');
    
  } catch (error) {
    console.error('Error in showCategory:', error);
    alert('Error loading gallery: ' + error.message);
  }
};

// 4. Back to categories
window.showCategories = function() {
  console.log('Returning to categories');
  document.getElementById('categoriesView').style.display = 'block';
  document.getElementById('categoryGalleryView').style.display = 'none';
};

// 5. Lightbox functions
window.openLightbox = function(src) {
  console.log('Opening lightbox:', src);
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImage');
  
  if (lightbox && img) {
    img.src = src;
    lightbox.style.display = 'flex';
  } else {
    console.error('Lightbox elements not found');
  }
};

window.closeLightbox = function() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.style.display = 'none';
  }
};

// 6. Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Gallery navigation script loaded');
  debugElements();
  
  // Test category data
  Object.keys(galleryData).forEach(category => {
    console.log(`${category}: ${galleryData[category].length} images`);
  });
  
  // Set up lightbox click-outside-to-close
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.onclick = function(e) {
      if (e.target === this) {
        closeLightbox();
      }
    };
  }
});