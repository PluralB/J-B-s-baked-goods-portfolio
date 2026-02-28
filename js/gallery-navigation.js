// ==============================
// Gallery + Lightbox + Swipe Nav
// ==============================

// 1) All image data in one place
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
    "baked-goods/gallery-pictures/cakes/image_050.jpg",
    "baked-goods/gallery-pictures/cakes/image_051.jpg",
    "baked-goods/gallery-pictures/cakes/image_052.jpg",
    "baked-goods/gallery-pictures/cakes/image_053.jpg",
    "baked-goods/gallery-pictures/cakes/image_054.jpg",
    "baked-goods/gallery-pictures/cakes/image_055.jpg",
    "baked-goods/gallery-pictures/cakes/image_056.jpg",
    "baked-goods/gallery-pictures/cakes/image_057.jpg"
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

// 2) Basic debug helper (optional)
function debugElements() {
  console.log("=== DEBUGGING GALLERY ===");
  console.log("categoriesView exists:", !!document.getElementById("categoriesView"));
  console.log("categoryGalleryView exists:", !!document.getElementById("categoryGalleryView"));
  console.log("categoryGalleryGrid exists:", !!document.getElementById("categoryGalleryGrid"));
  console.log("lightbox exists:", !!document.getElementById("lightbox"));
  console.log("lightboxImage exists:", !!document.getElementById("lightboxImage"));
  console.log("Gallery data loaded:", Object.keys(galleryData));
}

// ==============================
// Lightbox navigation state
// ==============================
let currentCategory = null;
let currentIndex = 0;

function showLightboxImage() {
  const img = document.getElementById("lightboxImage");
  if (!img || !currentCategory) return;

  const list = galleryData[currentCategory];
  if (!list || list.length === 0) return;

  // Wrap-around
  if (currentIndex < 0) currentIndex = list.length - 1;
  if (currentIndex >= list.length) currentIndex = 0;

  img.src = list[currentIndex];
}

function nextImage() {
  if (!currentCategory) return;
  currentIndex++;
  showLightboxImage();
}

function prevImage() {
  if (!currentCategory) return;
  currentIndex--;
  showLightboxImage();
}


// ==============================
// Randomize / Shuffle function
// ==============================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // swap
  }
}

// ==============================
// Views: Categories -> Items
// ==============================
window.showCategory = function (category) {
  console.log("=== SHOW CATEGORY CALLED ===");
  console.log("Category:", category);

  try {
    if (!galleryData[category]) {
      console.error("No data for category:", category);
      alert("No images found for this category!");
      return;
    }

    const categoriesView = document.getElementById("categoriesView");
    const galleryView = document.getElementById("categoryGalleryView");
    const grid = document.getElementById("categoryGalleryGrid");
    const title = document.getElementById("currentCategoryTitle");

    if (!categoriesView || !galleryView || !grid) {
      console.error("Missing DOM elements!");
      debugElements();
      return;
    }

    // Switch views
    categoriesView.style.display = "none";
    galleryView.style.display = "block";

    // Title
    if (title) {
      title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    }

    // Populate grid
    grid.innerHTML = "";

    galleryData[category].forEach((imgSrc, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "gallery-item";
      itemDiv.style.cssText = `
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        background: #f0f0f0;
        min-height: 250px;
      `;

      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = `${category} image ${index + 1}`;
      img.style.cssText = `
        width: 100%;
        height: 250px;
        object-fit: cover;
        cursor: pointer;
        transition: transform 0.3s ease;
      `;

      img.onerror = function () {
        console.error("FAILED to load:", imgSrc);
        this.style.background = "#ffebee";
        this.alt = "Failed to load image";

        const errorText = document.createElement("div");
        errorText.textContent = "Image not found";
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

      img.onload = function () {
        console.log("SUCCESS loaded:", imgSrc);
      };

      // Open lightbox with swipe-enabled navigation state
      img.onclick = () => {
        currentCategory = category;
        currentIndex = index;
        openLightbox();
      };

      img.onmouseover = () => (img.style.transform = "scale(1.05)");
      img.onmouseout = () => (img.style.transform = "scale(1)");

      itemDiv.appendChild(img);
      grid.appendChild(itemDiv);
    });

    console.log("Gallery populated:", galleryData[category].length, "images");
  } catch (error) {
    console.error("Error in showCategory:", error);
    alert("Error loading gallery: " + error.message);
  }
};

window.showCategories = function () {
  console.log("Returning to categories");
  const categoriesView = document.getElementById("categoriesView");
  const galleryView = document.getElementById("categoryGalleryView");
  if (categoriesView) categoriesView.style.display = "block";
  if (galleryView) galleryView.style.display = "none";
};

// ==============================
// Lightbox open/close
// ==============================
window.openLightbox = function () {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) {
    console.error("Lightbox element not found");
    return;
  }
  lightbox.style.display = "flex";
  showLightboxImage();
};

window.closeLightbox = function () {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
  }
};

// ==============================
// Init + swipe + keyboard support
// ==============================
document.addEventListener("DOMContentLoaded", function () {
  console.log("Gallery navigation script loaded");

  // Randomize images in every category
  Object.keys(galleryData).forEach(category => {
    shuffleArray(galleryData[category]);
  });

  debugElements();

  // Close lightbox when clicking outside image
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImage");

  if (lightbox) {
    lightbox.onclick = function (e) {
      if (e.target === this) closeLightbox();
    };
  }

  // Prevent clicking the image from closing the lightbox
  if (lightboxImg) {
    lightboxImg.addEventListener("click", (e) => e.stopPropagation());
  }

  // ---- Swipe support (mobile) ----
  let startX = 0;
  let startY = 0;
  let isSwiping = false;

  if (lightboxImg) {
    // Stops browser from intercepting swipe as scroll on image
    lightboxImg.style.touchAction = "none";

    lightboxImg.addEventListener(
      "touchstart",
      (e) => {
        if (!e.touches || e.touches.length !== 1) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isSwiping = true;
      },
      { passive: true }
    );

    lightboxImg.addEventListener(
      "touchend",
      (e) => {
        if (!isSwiping) return;
        isSwiping = false;

        const touch = e.changedTouches && e.changedTouches[0];
        if (!touch) return;

        const endX = touch.clientX;
        const endY = touch.clientY;

        const dx = endX - startX;
        const dy = endY - startY;

        const minSwipeX = 40; // required horizontal movement
        const maxSwipeY = 90; // ignore if too vertical

        if (Math.abs(dx) >= minSwipeX && Math.abs(dy) <= maxSwipeY) {
          if (dx < 0) nextImage(); // swipe left -> next
          else prevImage(); // swipe right -> prev
        }
      },
      { passive: true }
    );
  }

  // ---- Keyboard support (desktop) ----
  document.addEventListener("keydown", (e) => {
    const lb = document.getElementById("lightbox");
    const isOpen = lb && lb.style.display === "flex";
    if (!isOpen) return;

    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeLightbox();
  });
});