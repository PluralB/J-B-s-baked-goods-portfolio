// Complete bakery data with all categories
const bakeryData = {
  breads: {
    title: "Breads",
    items: {
      sourdough: {
        title: "Sourdough Bread",
        images: [
          "https://via.placeholder.com/800x800?text=Sourdough+1",
          "https://via.placeholder.com/800x800?text=Sourdough+2",
          "https://via.placeholder.com/800x800?text=Sourdough+3"
        ]
      },
      baguette: {
        title: "French Baguette",
        images: [
          "https://via.placeholder.com/800x800?text=Baguette+1",
          "https://via.placeholder.com/800x800?text=Baguette+2"
        ]
      }
    }
  },
  cakes: {
    title: "Cakes & Cupcakes",
    items: {
      chocolate: {
        title: "Chocolate Cake",
        images: [
          "https://via.placeholder.com/800x800?text=Chocolate+Cake+1",
          "https://via.placeholder.com/800x800?text=Chocolate+Cake+2"
        ]
      },
      cupcakes: {
        title: "Vanilla Cupcakes",
        images: [
          "https://via.placeholder.com/800x800?text=Cupcakes+1",
          "https://via.placeholder.com/800x800?text=Cupcakes+2",
          "https://via.placeholder.com/800x800?text=Cupcakes+3"
        ]
      }
    }
  },
  cookies: {
    title: "Cookies & Biscuits",
    items: {
      chocolate_chip: {
        title: "Chocolate Chip Cookies",
        images: [
          "https://via.placeholder.com/800x800?text=Chocolate+Chip+1",
          "https://via.placeholder.com/800x800?text=Chocolate+Chip+2"
        ]
      },
      shortbread: {
        title: "Shortbread Biscuits",
        images: [
          "https://via.placeholder.com/800x800?text=Shortbread+1",
          "https://via.placeholder.com/800x800?text=Shortbread+2"
        ]
      }
    }
  },
  pastries: {
    title: "Pastries",
    items: {
      croissant: {
        title: "Butter Croissant",
        images: [
          "https://via.placeholder.com/800x800?text=Croissant+1",
          "https://via.placeholder.com/800x800?text=Croissant+2"
        ]
      },
      danish: {
        title: "Danish Pastry",
        images: [
          "https://via.placeholder.com/800x800?text=Danish+1",
          "https://via.placeholder.com/800x800?text=Danish+2"
        ]
      }
    }
  }
};

// View Management Functions
function showCategories() {
  document.getElementById('categoriesView').style.display = 'block';
  document.getElementById('itemsView').style.display = 'none';
  document.getElementById('itemDetailView').style.display = 'none';
}

function showCategory(categoryId) {
  const category = bakeryData[categoryId];
  if (!category) {
    console.error('Category not found:', categoryId);
    return;
  }
  
  document.getElementById('categoriesView').style.display = 'none';
  document.getElementById('itemsView').style.display = 'block';
  document.getElementById('itemDetailView').style.display = 'none';
  
  document.getElementById('categoryHeader').textContent = category.title;
  
  const itemsGrid = document.getElementById('itemsGrid');
  itemsGrid.innerHTML = '';
  
  for (const [itemId, item] of Object.entries(category.items)) {
    const itemCard = document.createElement('div');
    itemCard.className = 'item-card';
    itemCard.innerHTML = `
      <div class="item-image" style="background-image: url('${item.images[0]}')"></div>
      <h4>${item.title}</h4>
    `;
    itemCard.onclick = () => showItemDetail(categoryId, itemId);
    itemsGrid.appendChild(itemCard);
  }
}

function showItems() {
  document.getElementById('categoriesView').style.display = 'none';
  document.getElementById('itemsView').style.display = 'block';
  document.getElementById('itemDetailView').style.display = 'none';
}

function showItemDetail(categoryId, itemId) {
  const category = bakeryData[categoryId];
  if (!category) {
    console.error('Category not found:', categoryId);
    return;
  }
  
  const item = category.items[itemId];
  if (!item) {
    console.error('Item not found:', itemId);
    return;
  }
  
  document.getElementById('categoriesView').style.display = 'none';
  document.getElementById('itemsView').style.display = 'none';
  document.getElementById('itemDetailView').style.display = 'block';
  
  document.getElementById('itemHeader').textContent = item.title;
  
  const itemGallery = document.getElementById('itemGallery');
  itemGallery.innerHTML = '';
  
  item.images.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `${item.title} ${index + 1}`;
    img.onclick = (e) => {
      e.stopPropagation();
      openLightbox(imgSrc);
    };
    itemGallery.appendChild(img);
  });
}

// Lightbox Functions
function openLightbox(imgSrc) {
  const lightboxImg = document.getElementById('lightboxImage');
  if (lightboxImg) {
    lightboxImg.src = imgSrc;
    document.getElementById('lightbox').style.display = 'flex';
  }
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // ===== LOADER =====
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => loader.style.display = 'none');
    setTimeout(() => loader.style.display = 'none', 3000);
  }

  // ===== HAMBURGER MENU =====
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }

  // ===== SCROLL ANIMATIONS =====
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    function checkAnimation() {
      const triggerPoint = window.innerHeight * 0.8;
      
      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < triggerPoint && rect.bottom > 0;
        
        if (isVisible) {
          el.classList.add('animate');
        } else {
          el.classList.remove('animate');
        }
      });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkAnimation();
          ticking = false;
        });
        ticking = true;
      }
    });

    checkAnimation();
  }

  initScrollAnimations();

  // ===== LIGHTBOX =====
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === this || e.target.classList.contains('close-lightbox')) {
        closeLightbox();
      }
    });
  }

  // Initialize category click handlers
  document.querySelectorAll('.category-card').forEach(card => {
    const categoryId = card.getAttribute('onclick').match(/'([^']+)'/)[1];
    card.onclick = () => showCategory(categoryId);
  });
});