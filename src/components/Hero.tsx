import { Button } from './ui/button';
import { Github, Linkedin, Mail, ExternalLink, Download, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/portfolio';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8 inline-block animate-float">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img
                  src="images/msh.jpeg"
                  alt="Mahmoud Samy Heikal"
                  className="w-full h-full object-cover object-center scale-110 translate-y-2 md:translate-y-0"
                  loading="eager"
                  width={256}
                  height={256}
                />
              </div>
              {/* <div className="w-64 h-64 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img
                    src="images/msh.jpeg"
                    alt="Mahmoud Samy Heikal"
                    className="w-full h-full object-cover object-center object-[center_45%] scale-110 translate-y-2 md:translate-y-3 will-change-transform"
                    loading="eager"
                    width={256}
                    height={256}
                  />
                </div>
              </div> */}

            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            {t(personalInfo.title.en, personalInfo.title.ar)}
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(personalInfo.bio.en, personalInfo.bio.ar)}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow" asChild>
              <a href="#contact">
                <Mail className="w-4 h-4" />
                {t('Contact Me', 'تواصل معي')}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 shadow-md hover:shadow-lg transition-shadow border-2" asChild>
              <a href="#projects">
                <ExternalLink className="w-4 h-4" />
                {t('View Projects', 'عرض المشاريع')}
              </a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 shadow-md hover:shadow-lg transition-shadow bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white"
              asChild
            >
              <a href="https://drive.google.com/file/d/1B3zF5bvnpK4QxJIvwoxR1XcL5q3ACHjy/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                {t('Download CV', 'تحميل السيرة الذاتية')}
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" asChild>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href={`https://wa.me/+201017011391`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center shadow-lg">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
