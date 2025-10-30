import { Badge } from './ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { certificates, plugins } from '@/data/portfolio';
import { getTechColors } from '@/lib/brandColors';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Certificates = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('Certificates & Skills', 'الشهادات والمهارات')}
        </h2>

        {/* Certificates Ticker */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">
            {t('Certificates', 'الشهادات')}
          </h3>
          <div className="relative">
            <div className="flex gap-4 animate-scroll">
              {[...certificates, ...certificates].map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-card border border-border rounded-lg p-4 min-w-[280px] hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold mb-1">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm flex items-center gap-1 hover:underline"
                    >
                      {t('Verify', 'تحقق')}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plugins Ticker */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            {t('Technologies & Integrations', 'التقنيات والتكاملات')}
          </h3>
          <div className="relative">
            <div className="flex gap-3 animate-scroll-reverse">
              {[...plugins, ...plugins, ...plugins].map((plugin, index) => {
                const colors = getTechColors(plugin);
                return (
                  <Badge
                    key={index}
                    className={cn(
                      colors.bg,
                      colors.text,
                      colors.border,
                      "flex-shrink-0 px-4 py-2 text-sm shadow-sm hover:shadow-md transition-shadow"
                    )}
                  >
                    {plugin}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 25s linear infinite;
        }
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
