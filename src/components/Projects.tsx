import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/portfolio';
import { getTechColors } from '@/lib/brandColors';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('Projects', 'المشاريع')}
        </h2>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[Autoplay({ delay: 4000 })]}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2">
                    <CardHeader className="flex flex-row items-start justify-between gap-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>

                      {project.live && (
                        <Button
                          asChild
                          size="icon"
                          variant="ghost"
                          className="shrink-0 text-primary hover:text-primary/80"
                          title={t('Open live demo', 'فتح المعاينة المباشرة')}
                          aria-label={t('Open live demo', 'فتح المعاينة المباشرة')}
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </Button>
                      )}
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-4 min-h-[80px]">
                        {t(project.description.en, project.description.ar)}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => {
                          const colors = getTechColors(tech);
                          return (
                            <Badge
                              key={tech}
                              className={cn(
                                colors.bg,
                                colors.text,
                                colors.border,
                                'shadow-sm hover:shadow-md transition-shadow'
                              )}
                            >
                              {tech}
                            </Badge>
                          );
                        })}
                      </div>

                      <div className="flex gap-2">
                        {project.github && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              {t('Code', 'الكود')}
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
