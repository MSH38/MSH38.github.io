import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/portfolio';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('Message Sent!', 'تم إرسال الرسالة!'),
      description: t(
        'Thank you for your message. I will get back to you soon.',
        'شكراً لرسالتك. سأقوم بالرد عليك قريباً.'
      ),
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('Get In Touch', 'تواصل معي')}
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t('Contact Information', 'معلومات التواصل')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{t(personalInfo.location.en, personalInfo.location.ar)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t('Send a Message', 'أرسل رسالة')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={t('Your Name', 'اسمك')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t('Your Email', 'بريدك الإلكتروني')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t('Your Message', 'رسالتك')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  {t('Send Message', 'إرسال')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
