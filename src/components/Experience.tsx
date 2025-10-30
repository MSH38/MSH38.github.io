import { Card, CardContent } from './ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { experiences } from '@/data/portfolio';

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('Experience', 'الخبرة العملية')}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[7px] hidden md:block" />

                  <Card className="md:ml-20 hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                          <p className="text-lg font-semibold">
                            {t(exp.position.en, exp.position.ar)}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                          {t(exp.period.en, exp.period.ar)}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {t(exp.description.en, exp.description.ar)}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
