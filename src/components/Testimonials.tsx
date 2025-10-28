import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { testimonials } from '@/data/portfolio';
import Autoplay from 'embla-carousel-autoplay';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const { t, language } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('Testimonials', 'التوصيات')}
        </h2>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-2">
                    <CardContent className="p-8">
                      <Quote className="w-12 h-12 text-primary mb-4" />
                      <p className="text-lg mb-6 italic">
                        "{t(testimonial.text.en, testimonial.text.ar)}"
                      </p>
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {language === 'en' 
                              ? testimonial.name.split(' ').map(n => n[0]).join('')
                              : testimonial.nameAr.split(' ').map(n => n[0]).join('')
                            }
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">
                            {language === 'en' ? testimonial.name : testimonial.nameAr}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {t(testimonial.position.en, testimonial.position.ar)}
                          </p>
                        </div>
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
