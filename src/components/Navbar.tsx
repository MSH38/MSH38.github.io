import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { en: 'About', ar: 'نبذة', href: '#about' },
    { en: 'Experience', ar: 'الخبرة', href: '#experience' },
    { en: 'Projects', ar: 'المشاريع', href: '#projects' },
    { en: 'Reviews', ar: 'اراء العملاء', href: '#testimonials' },
    { en: 'Contact', ar: 'تواصل', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:h-16 py-2 gap-3">
          {/* ===== Brand (stacked: MSH over Mahmoud Heikal) ===== */}
          <div className="flex flex-col items-center justify-center leading-tight">
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              MSH
            </a>
            <small className="text-xs -mt-0.5 text-foreground/60">
              {t('Mahmoud Heikal', 'محمود هيكل')}
            </small>
          </div>
          {/* ================================================ */}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {t(item.en, item.ar)}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={t('Toggle theme', 'تبديل المظهر')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              aria-label={t('Toggle language', 'تبديل اللغة')}
              className="px-3"
            >
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t('Toggle menu', 'فتح القائمة')}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.en, item.ar)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
