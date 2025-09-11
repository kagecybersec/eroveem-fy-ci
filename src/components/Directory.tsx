import { Phone, Mail, MapPin, MessageCircle, Clock, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Directory = () => {
  const contactInfo = {
    standard: '(+225) 25 21 00 98 33',
    mobiles: ['+225 0505050508', '+225 0748484948'],
    email: 'euphrasieyavo@yahoo.fr',
    address: 'II Plateaux Aghien – Cocody Mermoz (en face du CNRA)',
    district: 'Plateau, Abidjan – Côte d\'Ivoire'
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '2250505050508'; // Format international sans +
    const message = 'Bonjour, je souhaite obtenir des informations sur vos services.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallClick = (number: string) => {
    window.open(`tel:${number}`, '_self');
  };

  return (
    <section id="annuaire" className="section-corporate bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-6">
            ANNUAIRE DES PROFESSIONNELS ET ENTREPRISES
          </h2>
          <p className="text-xl text-corporate max-w-3xl mx-auto">
            Retrouvez toutes nos coordonnées et contactez-nous facilement pour vos besoins 
            en transformation de manioc et produits amylacés.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Standard Phone */}
          <div className="card-corporate group hover:shadow-corporate transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Standard Téléphonique</h3>
              <p className="text-2xl font-bold text-primary mb-4">{contactInfo.standard}</p>
              <Button 
                className="btn-primary w-full"
                onClick={() => handleCallClick(contactInfo.standard)}
              >
                Appeler maintenant
              </Button>
            </div>
          </div>

          {/* Mobile Phones */}
          <div className="card-corporate group hover:shadow-corporate transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex p-4 bg-secondary/10 rounded-full mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                <MessageCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Mobiles</h3>
              <div className="space-y-2 mb-4">
                {contactInfo.mobiles.map((mobile, index) => (
                  <p key={index} className="text-lg font-medium text-primary">{mobile}</p>
                ))}
              </div>
              <Button 
                className="btn-secondary w-full"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Email */}
          <div className="card-corporate group hover:shadow-corporate transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
              <p className="text-lg font-medium text-primary mb-4 break-all">{contactInfo.email}</p>
              <Button 
                className="btn-outline w-full"
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_self')}
              >
                Envoyer un email
              </Button>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="card-corporate mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Notre Adresse</h3>
              </div>
              <div className="space-y-3">
                <p className="text-lg text-foreground font-medium">{contactInfo.address}</p>
                <p className="text-lg text-primary font-semibold">{contactInfo.district}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Building className="h-5 w-5 text-secondary" />
                <span className="text-muted-foreground">Quartier d'affaires du Plateau</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-secondary" />
                <span className="text-muted-foreground">Lun - Ven: 8h00 - 17h00</span>
              </div>
              <Button className="btn-primary">
                Voir sur la carte
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-card rounded-2xl p-8">
          <h3 className="heading-md text-center text-foreground mb-8">Actions Rapides</h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button 
              className="btn-primary h-14 text-lg"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Contacter via WhatsApp
            </Button>
            <Button 
              className="btn-outline h-14 text-lg"
              onClick={() => handleCallClick(contactInfo.standard)}
            >
              <Phone className="h-5 w-5 mr-2" />
              Appeler directement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directory;