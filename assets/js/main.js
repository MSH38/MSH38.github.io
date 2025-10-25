// Main JavaScript for Mahmoud Heikal Portfolio Website

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeLanguage();
    initializeTheme();
    initializeNavigation();
    initializeBackgroundSlider();
    initializeHeroCarousel();
    initializeProjectsCarousel();
    initializeTestimonialsCarousel();
    initializeContactForm();
    initializeScrollAnimations();
    initializeSmoothScrolling();
});

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

// Navigation Management
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
    
    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section link
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });
}

// Hero Background Slider
function initializeBackgroundSlider() {
    const slides = document.querySelectorAll('.hero-bg-slide');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Show current slide
        slides[index].classList.add('active');
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    function stopSlider() {
        clearInterval(slideInterval);
    }
    
    // Pause on hover
    const heroSection = document.querySelector('#home');
    heroSection.addEventListener('mouseenter', stopSlider);
    heroSection.addEventListener('mouseleave', startSlider);
    
    // Start slider
    startSlider();
}

// Hero Carousel
function initializeHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    function startCarousel() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    function stopCarousel() {
        clearInterval(slideInterval);
    }
    
    // Dot click events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            stopCarousel();
            showSlide(index);
            startCarousel();
        });
    });
    
    // Pause on hover
    const heroSection = document.querySelector('#home');
    heroSection.addEventListener('mouseenter', stopCarousel);
    heroSection.addEventListener('mouseleave', startCarousel);
    
    // Start carousel
    startCarousel();
}

// Projects Carousel
function initializeProjectsCarousel() {
    const container = document.querySelector('.projects-container');
    const cards = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    let currentIndex = 0;
    const cardsPerView = getCardsPerView();
    
    function getCardsPerView() {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }
    
    function updateCarousel() {
        const cardWidth = 100 / cardsPerView;
        const translateX = -currentIndex * cardWidth;
        container.style.transform = `translateX(${translateX}%)`;
    }
    
    function nextSlide() {
        const maxIndex = Math.max(0, cards.length - cardsPerView);
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateCarousel();
    }
    
    function prevSlide() {
        const maxIndex = Math.max(0, cards.length - cardsPerView);
        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-play
    let autoPlayInterval = setInterval(nextSlide, 4000);
    
    // Pause on hover
    const projectsSection = document.querySelector('#projects');
    projectsSection.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    projectsSection.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(nextSlide, 4000);
    });
    
    // Responsive handling
    window.addEventListener('resize', function() {
        const newCardsPerView = getCardsPerView();
        if (newCardsPerView !== cardsPerView) {
            currentIndex = 0;
            updateCarousel();
        }
    });
    
    // Initialize
    updateCarousel();
}

// Testimonials Carousel
function initializeTestimonialsCarousel() {
    const container = document.querySelector('.testimonials-container');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    let currentIndex = 0;
    const cardsPerView = getCardsPerView();
    
    function getCardsPerView() {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }
    
    function updateCarousel() {
        const cardWidth = 100 / cardsPerView;
        const translateX = -currentIndex * cardWidth;
        container.style.transform = `translateX(${translateX}%)`;
    }
    
    function nextSlide() {
        const maxIndex = Math.max(0, cards.length - cardsPerView);
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateCarousel();
    }
    
    function prevSlide() {
        const maxIndex = Math.max(0, cards.length - cardsPerView);
        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-play (opposite direction from projects)
    let autoPlayInterval = setInterval(prevSlide, 3500);
    
    // Pause on hover
    const testimonialsSection = document.querySelector('#testimonials');
    testimonialsSection.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    testimonialsSection.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(prevSlide, 3500);
    });
    
    // Responsive handling
    window.addEventListener('resize', function() {
        const newCardsPerView = getCardsPerView();
        if (newCardsPerView !== cardsPerView) {
            currentIndex = 0;
            updateCarousel();
        }
    });
    
    // Initialize
    updateCarousel();
}

// Enhanced Contact Form
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Reset form
            form.reset();
            
            // Show success message
            showNotification('Message sent! (Demo only)', 'success');
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
    
    const colors = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white',
        warning: 'bg-yellow-500 text-black'
    };
    
    notification.className += ` ${colors[type]}`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} mr-2"></i>
            <span>${message}</span>
            <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Scroll Animations
function initializeScrollAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
    
    // Custom scroll animations for elements without AOS
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that need custom animations
    const animateElements = document.querySelectorAll('.skill-badge, .feature-card, .experience-card, .project-card, .testimonial-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimizations
const debouncedResize = debounce(function() {
    // Handle resize events
    const projectsCarousel = document.querySelector('.projects-container');
    const testimonialsCarousel = document.querySelector('.testimonials-container');
    
    if (projectsCarousel) {
        projectsCarousel.style.transform = 'translateX(0%)';
    }
    
    if (testimonialsCarousel) {
        testimonialsCarousel.style.transform = 'translateX(0%)';
    }
}, 250);

window.addEventListener('resize', debouncedResize);

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            const icon = document.querySelector('#mobile-menu-button i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }
    
    // Arrow keys for carousel navigation
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const activeCarousel = document.activeElement.closest('.projects-carousel, .testimonials-carousel');
        if (activeCarousel) {
            e.preventDefault();
            const isProjects = activeCarousel.classList.contains('projects-carousel');
            const btnClass = isProjects ? '.carousel-prev, .carousel-next' : '.testimonial-prev, .testimonial-next';
            const btn = e.key === 'ArrowLeft' ? 
                activeCarousel.querySelector(btnClass.split(', ')[0]) : 
                activeCarousel.querySelector(btnClass.split(', ')[1]);
            if (btn) btn.click();
        }
    }
});

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send error reports to a logging service here
});

// Console welcome message
console.log(`
🚀 Welcome to Mahmoud Heikal's Portfolio!
📧 Contact: m.samy1011997@gmail.com
💼 Specializing in PHP, Laravel, and Full Stack Development
`);

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeLanguage,
        initializeTheme,
        initializeNavigation,
        initializeBackgroundSlider,
        initializeHeroCarousel,
        initializeProjectsCarousel,
        initializeTestimonialsCarousel,
        initializeContactForm,
        showNotification
    };
}
