import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/portfolio';

export const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { en: 'About', ar: 'نبذة', href: '#about' },
    { en: 'Experience', ar: 'الخبرة', href: '#experience' },
    { en: 'Projects', ar: 'المشاريع', href: '#projects' },
    { en: 'Contact', ar: 'تواصل', href: '#contact' }
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-muted-foreground">
              {t(personalInfo.title.en, personalInfo.title.ar)}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t('Quick Links', 'روابط سريعة')}</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(link.en, link.ar)}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('Connect', 'تواصل')}</h4>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href={`https://wa.me/${personalInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
          </p>
        </div>
      </div>
    </footer>
  );
};
