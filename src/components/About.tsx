import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { skills } from '@/data/portfolio';
import { motion } from 'framer-motion';

export const About = () => {
  const { t } = useLanguage();

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('About Me', 'نبذة عني')}
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                {t('Skills & Technologies', 'المهارات والتقنيات')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.03,
                      ease: 'easeOut'
                    }}
                    whileHover={prefersReducedMotion ? {} : { 
                      scale: 1.05, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Badge
                      variant="secondary"
                      // className="px-4 py-2 text-sm bg-slate-100 text-slate-600 dark:bg-slate-800 dark:border-primary dark:text-primary dark:hover-bg-white hover:bg-primary hover:text-primary-foreground transition-colors cursor-default shadow-sm"
                      className="px-4 py-2 text-sm bg-slate-100 text-slate-600 
             dark:bg-slate-800 dark:border-primary dark:text-primary 
             hover:bg-primary hover:text-primary-foreground 
             dark:hover:bg-white dark:hover:text-slate-900 
             transition-colors cursor-default shadow-sm"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">2+</div>
                <p className="text-muted-foreground">
                  {t('Years Experience', 'سنوات الخبرة')}
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-muted-foreground">
                  {t('Projects Completed', 'مشروع مكتمل')}
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">
                  {t('Happy Clients', 'عميل راضٍ')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
