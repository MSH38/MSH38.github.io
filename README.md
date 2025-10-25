# Mahmoud Samy Heikal - Portfolio Website

A modern, responsive, and bilingual portfolio website for Mahmoud Samy Heikal, a Software Engineer and Backend Developer specializing in PHP, Laravel, and Full Stack Development.

## 🌟 Features

- **Bilingual Support**: English and Arabic with RTL layout
- **Dark/Light Mode**: Smooth theme switching with localStorage persistence
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modular Structure**: Organized codebase with separate layout files
- **Interactive Animations**: AOS scroll animations and custom hover effects
- **Background Slider**: Auto-playing tech-themed backgrounds
- **Flip Animation**: 3D card flip effect in About section
- **Carousel Sliders**: Projects and testimonials with opposite directions
- **Real Social Links**: LinkedIn, GitHub, HackerRank integration
- **SEO Optimized**: Meta tags and structured data

## 📁 Project Structure

```
Portfolio/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   ├── style.css          # Main styles and animations
│   │   ├── dark.css           # Dark theme styles
│   │   └── responsive.css     # Responsive design and RTL support
│   ├── js/
│   │   ├── main.js            # Core functionality
│   │   ├── theme.js           # Theme management
│   │   └── language.js        # Language switching
│   └── images/
│       ├── MSH-logo.png       # Personal logo
│       ├── msh.jpeg           # Personal photo
│       ├── shahbandr.webp      # Company logos
│       ├── bww-logo.webp
│       ├── semicolon.webp
│       ├── poslix_logo.webp
│       ├── folder-group.webp
│       ├── dackatra.png       # Project images
│       ├── ITI.svg
│       ├── man.webp           # Testimonial photos
│       └── woman.webp
└── layouts/
    ├── header.html            # Navigation and controls
    ├── hero.html              # Hero section with slider
    ├── about.html             # About section with flip animation
    ├── experience.html        # Work experience timeline
    ├── projects.html          # Projects carousel
    ├── testimonials.html      # Testimonials slider
    ├── contact.html           # Contact form and info
    └── footer.html            # Footer with social links
```

## 🚀 Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom styles, animations, and responsive design
- **JavaScript**: Vanilla JS for all interactions
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **AOS**: Animate On Scroll library
- **Font Awesome**: Icons
- **Google Fonts**: Inter (English) and Cairo (Arabic)

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#3b82f6)
- **Dark Mode**: Deep navy (#111827) with gray accents
- **Light Mode**: White and light gray tones

### Animations
- Smooth transitions between themes and languages
- Hover scale effects on buttons and cards
- Background slider with fade transitions
- 3D flip card animation
- Scroll reveal animations

### Responsive Breakpoints
- Mobile: < 576px
- Small: 576px - 767px
- Medium: 768px - 991px
- Large: 992px - 1199px
- Extra Large: ≥ 1200px

## 🌍 Bilingual Support

### Languages
- **English (EN)**: Default language, LTR layout
- **Arabic (AR)**: RTL layout with Cairo font

### Features
- Language toggle button in navbar
- RTL layout adjustments for Arabic
- Bilingual meta tags for SEO
- Font switching (Inter ↔ Cairo)
- localStorage persistence

## 🎯 Sections Overview

### 1. Navigation
- Sticky navbar with smooth scroll
- Language toggle (EN/AR)
- Dark/Light mode toggle
- Mobile-responsive menu

### 2. Hero Section
- Auto-playing background slider
- Professional introduction
- Call-to-action buttons
- Tech-themed backgrounds

### 3. About Section
- 3D flip card animation
- Personal description (bilingual)
- Skills badges
- Professional highlights

### 4. Experience Section
- Timeline layout with company logos
- 5 work experiences
- Detailed descriptions
- Responsive design

### 5. Projects Section
- Carousel slider (left → right)
- 5 featured projects
- Tech stack badges
- Live demo and GitHub links

### 6. Testimonials Section
- Carousel slider (right → left)
- 3 client testimonials
- Professional photos
- Opposite direction from projects

### 7. Contact Section
- Contact form with validation
- Real contact information
- Social media links
- Professional layout

### 8. Footer
- Social media icons
- Quick navigation links
- Contact information
- Copyright notice

## 🔧 Image Controllers

CSS classes for consistent image sizing:
- `.project-img`: Max 200x200px, cover fit
- `.company-logo`: Max 160x80px, contain fit
- `.profile-photo`: Max 180x180px, circular

## 📱 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers

## 🚀 Deployment

Ready for deployment on:
- GitHub Pages: `https://msh38.github.io/`
- GitHub Pages: `https://mahmoudheikal.github.io/`

### Deployment Steps
1. Upload all files to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)
4. Website will be available at `https://username.github.io/repository-name`

## 📞 Contact Information

- **Email**: m.samy1011997@gmail.com
- **Phone**: 01017011391
- **Location**: Cairo, Egypt
- **LinkedIn**: https://www.linkedin.com/in/mahmoud-heikal/
- **GitHub**: https://github.com/MSH38
- **HackerRank**: https://www.hackerrank.com/profile/Mahmoud_Heikal

## 🛠️ Development

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. No build process required (static files only)

### Customization
- Modify content in `index.html` or layout files
- Update styles in CSS files
- Add functionality in JavaScript files
- Replace images in `assets/images/`

## 📄 License

© 2025 Mahmoud Samy Heikal. All rights reserved.

## 🙏 Acknowledgments

- Tailwind CSS for utility classes
- AOS for scroll animations
- Font Awesome for icons
- Google Fonts for typography
- Unsplash for background images