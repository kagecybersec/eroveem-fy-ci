import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi du formulaire
    toast({
      title: "Message envoyé avec succès!",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-corporate">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-6">Contactez-Nous</h2>
          <p className="text-xl text-corporate max-w-3xl mx-auto">
            N'hésitez pas à nous contacter pour toute question ou demande d'information 
            concernant nos services de transformation du manioc.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-md text-foreground mb-6">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Adresse email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Décrivez votre demande ou votre projet..."
                  />
                </div>

                <Button type="submit" className="btn-primary w-full group">
                  <Send className="h-5 w-5 mr-2 transition-transform group-hover:translate-x-1" />
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="card-corporate">
              <h3 className="text-xl font-semibold text-foreground mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">II Plateaux Aghien – Cocody Mermoz</p>
                    <p className="text-muted-foreground">(en face du CNRA)</p>
                    <p className="text-primary font-medium">Plateau, Abidjan – Côte d'Ivoire</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Téléphones</p>
                    <p className="text-muted-foreground">Standard: (+225) 25 21 00 98 33</p>
                    <p className="text-muted-foreground">Mobile 1: +225 0505050508</p>
                    <p className="text-muted-foreground">Mobile 2: +225 0748484948</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">euphrasieyavo@yahoo.fr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Horaires d'ouverture</p>
                    <p className="text-muted-foreground">Lundi - Vendredi: 8h00 - 17h00</p>
                    <p className="text-muted-foreground">Samedi: 8h00 - 12h00</p>
                    <p className="text-muted-foreground">Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card-corporate">
              <h3 className="text-xl font-semibold text-foreground mb-4">Notre localisation</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gradient-section rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                  <p className="text-foreground font-medium">Carte interactive</p>
                  <p className="text-muted-foreground text-sm">Plateau, Abidjan - Côte d'Ivoire</p>
                  <Button className="btn-outline mt-4">
                    Ouvrir dans Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;