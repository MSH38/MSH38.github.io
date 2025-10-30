// Theme Management JavaScript

// Theme Management
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme === 'auto' ? (prefersDark ? 'dark' : 'light') : savedTheme;
    
    // Apply theme
    applyTheme(currentTheme);
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const isDark = body.classList.contains('dark');
        const newTheme = isDark ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (localStorage.getItem('theme') === 'auto') {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

function applyTheme(theme) {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (theme === 'dark') {
        body.classList.add('dark');
        themeIcon.className = 'fas fa-sun text-gray-300';
        
        // Update meta theme-color for mobile browsers
        updateThemeColor('#111827');
    } else {
        body.classList.remove('dark');
        themeIcon.className = 'fas fa-moon text-gray-600';
        
        // Update meta theme-color for mobile browsers
        updateThemeColor('#ffffff');
    }
    
    // Trigger custom event for other components
    document.dispatchEvent(new CustomEvent('themeChanged', { 
        detail: { theme: theme } 
    }));
}

function updateThemeColor(color) {
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
        themeColorMeta = document.createElement('meta');
        themeColorMeta.name = 'theme-color';
        document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.content = color;
}

// Theme transition effects
function addThemeTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: background-color 0.3s ease, 
                       color 0.3s ease, 
                       border-color 0.3s ease,
                       box-shadow 0.3s ease !important;
        }
        
        *:before,
        *:after {
            transition: background-color 0.3s ease, 
                       color 0.3s ease, 
                       border-color 0.3s ease,
                       box-shadow 0.3s ease !important;
        }
    `;
    document.head.appendChild(style);
}

// Initialize theme transitions
document.addEventListener('DOMContentLoaded', addThemeTransitions);

// Theme persistence
function saveThemePreference(theme) {
    try {
        localStorage.setItem('theme', theme);
    } catch (e) {
        console.warn('Could not save theme preference:', e);
    }
}

function loadThemePreference() {
    try {
        return localStorage.getItem('theme') || 'light';
    } catch (e) {
        console.warn('Could not load theme preference:', e);
        return 'light';
    }
}

// Theme detection utilities
function isDarkMode() {
    return document.body.classList.contains('dark');
}

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Theme change listeners
function addThemeChangeListeners() {
    // Listen for theme changes from other components
    document.addEventListener('themeChanged', function(e) {
        console.log('Theme changed to:', e.detail.theme);
        
        // Update any theme-dependent components
        updateThemeDependentComponents(e.detail.theme);
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'auto' || !currentTheme) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

function updateThemeDependentComponents(theme) {
    // Update any components that need theme-specific behavior
    const components = document.querySelectorAll('[data-theme-dependent]');
    components.forEach(component => {
        component.setAttribute('data-theme', theme);
    });
}

// Initialize theme change listeners
document.addEventListener('DOMContentLoaded', addThemeChangeListeners);

// Theme utilities for external use
window.ThemeManager = {
    applyTheme,
    isDarkMode,
    getSystemTheme,
    saveThemePreference,
    loadThemePreference
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeTheme,
        applyTheme,
        isDarkMode,
        getSystemTheme,
        saveThemePreference,
        loadThemePreference
    };
}
