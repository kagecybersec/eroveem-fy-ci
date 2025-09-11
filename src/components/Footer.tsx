import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">GROUP EROVEEM-FY</h3>
              <p className="text-xl text-secondary mb-4">CÔTE D'IVOIRE</p>
              <p className="text-background/80 leading-relaxed mb-6">
                Leader dans la transformation du manioc et la fabrication de produits amylacés de qualité en Côte d'Ivoire. 
                Nous contribuons au développement agricole et industriel local depuis plus de 15 ans.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/2250505050508" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/90 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a 
                  href="tel:+22525210098233"
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:euphrasieyavo@yahoo.fr"
                  className="inline-flex items-center justify-center w-10 h-10 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#accueil" className="text-background/80 hover:text-secondary transition-colors">Accueil</a></li>
                <li><a href="#apropos" className="text-background/80 hover:text-secondary transition-colors">À propos</a></li>
                <li><a href="#activites" className="text-background/80 hover:text-secondary transition-colors">Nos Activités</a></li>
                <li><a href="#annuaire" className="text-background/80 hover:text-secondary transition-colors">Annuaire</a></li>
                <li><a href="#contact" className="text-background/80 hover:text-secondary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                  <div className="text-sm text-background/80">
                    <p>II Plateaux Aghien – Cocody Mermoz</p>
                    <p>(en face du CNRA)</p>
                    <p className="text-secondary">Plateau, Abidjan</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-background/80">(+225) 25 21 00 98 33</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-background/80">euphrasieyavo@yahoo.fr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} GROUP EROVEEM-FY CÔTE D'IVOIRE. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-background/60">
              <span>Visiteurs: 978</span>
              <span>|</span>
              <span>Plateau, Abidjan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;