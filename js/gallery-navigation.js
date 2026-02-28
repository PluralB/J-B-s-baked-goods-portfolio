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

// ==============================
// Lightbox navigation state
// ==============================
let currentCategory = null;
let currentIndex = 0;

function showLightboxImage() {
  const img = document.getElementById("lightboxImage");
  if (!img || !currentCategory) return;

  const list = galleryData[currentCategory];

  if (currentIndex < 0) currentIndex = list.length - 1;
  if (currentIndex >= list.length) currentIndex = 0;

  img.src = list[currentIndex];
}

function nextImage() {
  currentIndex++;
  showLightboxImage();
}

function prevImage() {
  currentIndex--;
  showLightboxImage();
}

// ==============================
// Shuffle function
// ==============================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ==============================
// Category view
// ==============================
window.showCategory = function (category) {
  const categoriesView = document.getElementById("categoriesView");
  const galleryView = document.getElementById("categoryGalleryView");
  const grid = document.getElementById("categoryGalleryGrid");
  const title = document.getElementById("currentCategoryTitle");

  categoriesView.style.display = "none";
  galleryView.style.display = "block";

  title.textContent = category.charAt(0).toUpperCase() + category.slice(1);

  grid.innerHTML = "";

  galleryData[category].forEach((imgSrc, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "gallery-item";

    const img = document.createElement("img");
    img.src = imgSrc;
    img.style.cssText = `
      width: 100%;
      height: 250px;
      object-fit: cover;
      cursor: pointer;
    `;

    img.onclick = () => {
      currentCategory = category;
      currentIndex = index;
      openLightbox();
    };

    itemDiv.appendChild(img);
    grid.appendChild(itemDiv);
  });
};

window.showCategories = function () {
  document.getElementById("categoriesView").style.display = "block";
  document.getElementById("categoryGalleryView").style.display = "none";
};

// ==============================
// Lightbox
// ==============================
window.openLightbox = function () {
  document.getElementById("lightbox").style.display = "flex";
  showLightboxImage();
};

window.closeLightbox = function () {
  document.getElementById("lightbox").style.display = "none";
};

// ==============================
// Init
// ==============================
document.addEventListener("DOMContentLoaded", function () {

  // Randomize all categories
  Object.keys(galleryData).forEach(category => {
    shuffleArray(galleryData[category]);
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImage");

  // Click outside to close
  if (lightbox) {
    lightbox.onclick = function (e) {
      if (e.target === this) closeLightbox();
    };
  }

  if (lightboxImg) {
    lightboxImg.addEventListener("click", e => e.stopPropagation());

    let startX = 0;
    let startY = 0;
    let isSwiping = false;

    lightboxImg.style.touchAction = "none";

    lightboxImg.addEventListener("touchstart", (e) => {
      if (!e.touches || e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = true;
    }, { passive: true });

    lightboxImg.addEventListener("touchend", (e) => {
      if (!isSwiping) return;
      isSwiping = false;

      const touch = e.changedTouches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;

      const minSwipeX = 40;
      const minSwipeDown = 60;
      const maxSwipeXForClose = 80;

      // Swipe down to close
      if (dy > minSwipeDown && Math.abs(dx) <= maxSwipeXForClose) {
        closeLightbox();
        return;
      }

      // Swipe left/right
      if (Math.abs(dx) >= minSwipeX && Math.abs(dy) <= 90) {
        if (dx < 0) nextImage();
        else prevImage();
      }

    }, { passive: true });
  }

  // Keyboard support
  document.addEventListener("keydown", (e) => {
    const isOpen = lightbox && lightbox.style.display === "flex";
    if (!isOpen) return;

    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeLightbox();
  });

});