// Language Management JavaScript

// Language Management
function initializeLanguage() {
    const languageToggle = document.getElementById('language-toggle');
    const languageText = document.getElementById('language-text');
    const body = document.body;
    const html = document.documentElement;
    
    // Check for saved language preference or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    
    // Apply language
    applyLanguage(savedLanguage);
    
    // Language toggle event listener
    languageToggle.addEventListener('click', function() {
        const currentLang = html.getAttribute('lang');
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        applyLanguage(newLang);
        localStorage.setItem('language', newLang);
    });
}

function applyLanguage(lang) {
    const html = document.documentElement;
    const body = document.body;
    const languageText = document.getElementById('language-text');
    
    // Update HTML attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update body font family
    if (lang === 'ar') {
        body.classList.remove('font-sans');
        body.classList.add('font-arabic');
    } else {
        body.classList.remove('font-arabic');
        body.classList.add('font-sans');
    }
    
    // Update language toggle button
    languageText.textContent = lang === 'en' ? 'AR' : 'EN';
    
    // Update all elements with data attributes
    updateBilingualContent(lang);
    
    // Update meta tags
    updateMetaTags(lang);
    
    // Trigger custom event for other components
    document.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
    }));
}

function updateBilingualContent(lang) {
    const elements = document.querySelectorAll('[data-en][data-ar]');
    
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
}

function updateMetaTags(lang) {
    // Update title
    const title = document.querySelector('title');
    if (title) {
        title.textContent = title.getAttribute(`data-${lang}`) || title.textContent;
    }
    
    // Update description
    const description = document.querySelector('meta[name="description"]');
    if (description) {
        description.setAttribute('content', description.getAttribute(`data-${lang}`) || description.getAttribute('content'));
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', ogTitle.getAttribute(`data-${lang}`) || ogTitle.getAttribute('content'));
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', ogDescription.getAttribute(`data-${lang}`) || ogDescription.getAttribute('content'));
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
        twitterTitle.setAttribute('content', twitterTitle.getAttribute(`data-${lang}`) || twitterTitle.getAttribute('content'));
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
        twitterDescription.setAttribute('content', twitterDescription.getAttribute(`data-${lang}`) || twitterDescription.getAttribute('content'));
    }
}

// Language persistence
function saveLanguagePreference(lang) {
    try {
        localStorage.setItem('language', lang);
    } catch (e) {
        console.warn('Could not save language preference:', e);
    }
}

function loadLanguagePreference() {
    try {
        return localStorage.getItem('language') || 'en';
    } catch (e) {
        console.warn('Could not load language preference:', e);
        return 'en';
    }
}

// Language detection utilities
function getCurrentLanguage() {
    return document.documentElement.getAttribute('lang') || 'en';
}

function isRTL() {
    return document.documentElement.getAttribute('dir') === 'rtl';
}

// RTL-specific adjustments
function applyRTLAdjustments() {
    const isRTLMode = isRTL();
    
    // Adjust carousel directions
    const projectsCarousel = document.querySelector('.projects-carousel');
    const testimonialsCarousel = document.querySelector('.testimonials-carousel');
    
    if (projectsCarousel) {
        projectsCarousel.setAttribute('data-direction', isRTLMode ? 'rtl' : 'ltr');
    }
    
    if (testimonialsCarousel) {
        testimonialsCarousel.setAttribute('data-direction', isRTLMode ? 'rtl' : 'ltr');
    }
    
    // Adjust timeline direction
    const timeline = document.querySelector('.timeline-dot');
    if (timeline) {
        timeline.setAttribute('data-rtl', isRTLMode);
    }
}

// Language change listeners
function addLanguageChangeListeners() {
    // Listen for language changes from other components
    document.addEventListener('languageChanged', function(e) {
        console.log('Language changed to:', e.detail.language);
        
        // Apply RTL adjustments
        applyRTLAdjustments();
        
        // Update any language-dependent components
        updateLanguageDependentComponents(e.detail.language);
    });
}

function updateLanguageDependentComponents(lang) {
    // Update any components that need language-specific behavior
    const components = document.querySelectorAll('[data-language-dependent]');
    components.forEach(component => {
        component.setAttribute('data-lang', lang);
    });
}

// Initialize language change listeners
document.addEventListener('DOMContentLoaded', addLanguageChangeListeners);

// Language utilities for external use
window.LanguageManager = {
    applyLanguage,
    getCurrentLanguage,
    isRTL,
    saveLanguagePreference,
    loadLanguagePreference,
    updateBilingualContent
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeLanguage,
        applyLanguage,
        getCurrentLanguage,
        isRTL,
        saveLanguagePreference,
        loadLanguagePreference,
        updateBilingualContent
    };
}
