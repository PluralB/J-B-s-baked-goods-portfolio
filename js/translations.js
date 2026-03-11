// Translations object
const translations = {
  en: {
    // Header
    'about': 'About',
    'gallery': 'Gallery',
    
    // Hero section
    'hero-title': 'Welcome to J&amp;B\'s baking Portfolio*',
    'hero-subtitle': 'Delicious baked goods, straight from the bottom of our heart.',
    'explore-btn': 'Explore',
    
    // About section
    'about-title': 'About Us',
    'about-subtitle': 'Mother and son, passionate and homely bakers who find true joy and comfort in creating delicious treats from scratch.',
    'about-description': 'Welcome to our amazing portfolio, a heartfelt collection showcasing every delicious baked good we\'ve lovingly crafted over the years.',
    
    // Gallery section
    'gallery-title': 'Gallery',
    'breads': 'Breads',
    'cakes': 'Cakes & Cupcakes',
    'cookies': 'Cookies & Biscuits',
    'pastries': 'Pastries',
    'back-to-categories': '← Back to Categories',
    'back-to-items': '← Back to Items',
    
    // Instagram section
    'instagram-title': 'Follow Our Baking Journey',
    'instagram-text': 'See more creations and behind-the-scenes moments on Instagram.',
    
    // Footer
    'footer-description': 'Delicious baked goods made with love since 2017',
    'footer-credit': 'Website designed with ❤️ by Benny J&amp;B Bakes',
    'footer-disclaimer': '*This website is a <b><u>personal portfolio</u></b> and is <b><u>not primarily operated for commercial or business purposes</u></b>. <br>All content displayed, including images and designs, is original work intended solely to showcase personal baking creations.<br><b><u>Watermarks</u></b> are applied to images as a protective measure to prevent <b><u>unauthorized use</u></b>, reproduction, or distribution.',
    
    // Buttons
    'translate-to-french': 'Français',
    'translate-to-english': 'English'
  },
  fr: {
    // Header
    'about': 'À Propos',
    'gallery': 'Galerie',
    
    // Hero section
    'hero-title': 'Découvrez les créations pâtissières de J&amp;B*',
    'hero-subtitle': 'Des pâtisseries gourmandes, créées avec amour et passion.',
    'explore-btn': 'Explorer',
    
    // About section
    'about-title': 'À Propos de Nous',
    'about-subtitle': 'Une Mère, Un Fils, des boulangers passionnés et chaleureux qui trouvent un immense plaisir à créer de délicieuses pâtisseries faites maison.',
    'about-description': 'Bienvenue dans notre portfolio exceptionnel, une collection artisanale présentant toutes les délicieuses gourmandises que nous avons réalisées avec amour au fil des ans.',
    
    // Gallery section
    'gallery-title': 'Galerie',
    'breads': 'Pains',
    'cakes': 'Gâteaux & Cupcakes',
    'cookies': 'Biscuits',
    'pastries': 'Pâtisseries',
    'back-to-categories': '← Retour aux Catégories',
    'back-to-items': '← Retour aux Articles',
    
    // Instagram section
    'instagram-title': 'Suivez Nous!',
    'instagram-text': 'Plongez dans nos créations et découvrez les coulisses sur Instagram.',
    
    // Footer
    'footer-description': 'Délicieuses pâtisseries faites avec amour depuis 2017',
    'footer-credit': 'Site web conçu avec ❤️ par Benny J&amp;B Bakes',
    'footer-disclaimer': '*Ce site web constitue un <b><u>portfolio personnel</u></b> et n’est <b><u>pas destiné à des fins commerciales ou professionnelles</u></b>. <br>Tous les contenus présentés, y compris les images et les créations, sont des œuvres originales visant uniquement à mettre en valeur nos réalisations pâtissières personnelles.<br>Des <b><u>filigranes</u></b> sont apposés sur les images à titre de protection afin de prévenir toute <b><u>utilisation non autorisée</u></b>, reproduction ou diffusion.',
    
    // Buttons
    'translate-to-french': 'Français',
    'translate-to-english': 'English'
  }
};

// Current language
let currentLanguage = 'en';

// Function to translate the page
function translatePage(lang) {
  currentLanguage = lang;
  
  // Update all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });
  
  // Update toggle button text based on CURRENT language (shows the OTHER language option)
  const toggleBtn = document.getElementById('translate-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'en' ? 'Français' : 'English';
  }
  
  // Save language preference
  localStorage.setItem('preferred-language', lang);
}

// Function to toggle language
function toggleLanguage() {
  const newLang = currentLanguage === 'en' ? 'fr' : 'en';
  translatePage(newLang);
}

// Function to add data-translate attributes to elements
function addTranslateAttributes() {
  // Header navigation
  const navLinks = document.querySelectorAll('nav a');
  if (navLinks[0]) navLinks[0].setAttribute('data-translate', 'about');
  if (navLinks[1]) navLinks[1].setAttribute('data-translate', 'gallery');
  
  // Hero section
  const heroTitle = document.querySelector('.hero-content h1');
  if (heroTitle) heroTitle.setAttribute('data-translate', 'hero-title');
  
  const heroSubtitle = document.querySelector('.hero-content p');
  if (heroSubtitle) heroSubtitle.setAttribute('data-translate', 'hero-subtitle');
  
  const heroButton = document.querySelector('.hero-content button');
  if (heroButton) heroButton.setAttribute('data-translate', 'explore-btn');
  
  // About section
  const aboutTitle = document.querySelector('#about h2');
  if (aboutTitle) aboutTitle.setAttribute('data-translate', 'about-title');
  
  const aboutSubtitles = document.querySelectorAll('#about p');
  if (aboutSubtitles[0]) aboutSubtitles[0].setAttribute('data-translate', 'about-subtitle');
  if (aboutSubtitles[1]) aboutSubtitles[1].setAttribute('data-translate', 'about-description');
  
  // Gallery section title
  const galleryTitle = document.querySelector('#gallery > h2');
  if (galleryTitle) galleryTitle.setAttribute('data-translate', 'gallery-title');
  
  // Category titles
  const categoryTitles = document.querySelectorAll('.category-title');
  if (categoryTitles[0]) categoryTitles[0].setAttribute('data-translate', 'breads');
  if (categoryTitles[1]) categoryTitles[1].setAttribute('data-translate', 'cakes');
  if (categoryTitles[2]) categoryTitles[2].setAttribute('data-translate', 'cookies');
  if (categoryTitles[3]) categoryTitles[3].setAttribute('data-translate', 'pastries');
  
  // Back buttons
  const backButtons = document.querySelectorAll('.back-button');
  if (backButtons[0]) backButtons[0].setAttribute('data-translate', 'back-to-categories');
  if (backButtons[1]) backButtons[1].setAttribute('data-translate', 'back-to-items');
  
  // Instagram section
  const instagramTitle = document.querySelector('.instagram-title');
  if (instagramTitle) instagramTitle.setAttribute('data-translate', 'instagram-title');
  
  const instagramText = document.querySelector('.instagram-text');
  if (instagramText) instagramText.setAttribute('data-translate', 'instagram-text');
  
  // Footer
  const footerDescription = document.querySelector('.footer-section p');
  if (footerDescription) footerDescription.setAttribute('data-translate', 'footer-description');
  
  const footerCredit = document.querySelector('.footer-bottom p:first-child');
  if (footerCredit) footerCredit.setAttribute('data-translate', 'footer-credit');
  
  const footerDisclaimer = document.querySelector('.footer-bottom p:last-child');
  if (footerDisclaimer) footerDisclaimer.setAttribute('data-translate', 'footer-disclaimer');
}

// Add translate button to the page
function addTranslateButton() {
  // Check if button already exists
  if (document.getElementById('translate-toggle')) {
    return;
  }
  
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'translate-button-container';
  buttonContainer.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  `;
  
  const button = document.createElement('button');
  button.id = 'translate-toggle';
  button.className = 'translate-btn';
  
  // Set button text based on saved language preference
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang === 'fr') {
    button.textContent = 'English'; // If current is French, show English option
    currentLanguage = 'fr';
  } else {
    button.textContent = 'Français'; // If current is English, show French option
    currentLanguage = 'en';
  }
  
  button.onclick = toggleLanguage;
  button.style.cssText = `
    padding: 12px 24px;
    background-color: #8B4513;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
  `;
  
  buttonContainer.appendChild(button);
  document.body.appendChild(buttonContainer);
  
  // Add hover effect
  button.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#A0522D';
    this.style.transform = 'scale(1.05)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#8B4513';
    this.style.transform = 'scale(1)';
  });
}

// Initialize everything in the correct order
function initTranslations() {
  // Add data-translate attributes
  addTranslateAttributes();
  
  // Add the translate button
  addTranslateButton();
  
  // Check for saved language preference and apply translation
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
    // Make sure currentLanguage is set correctly
    currentLanguage = savedLang;
    translatePage(savedLang);
  }
}

// Call this after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initTranslations();
});