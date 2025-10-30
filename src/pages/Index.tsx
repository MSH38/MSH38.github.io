import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { Certificates } from '@/components/Certificates';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FireCursor } from '@/components/FireCursor';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Toaster } from '@/components/ui/toaster';
import { useCursorGlow } from '@/hooks/useCursorGlow';

const Index = () => {
  useCursorGlow();
  
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <FireCursor />
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Testimonials />
          <Certificates />
          <Contact />
          <Footer />
          <Toaster />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
