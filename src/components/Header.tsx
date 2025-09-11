import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Nos Activités', href: '#activites' },
    { name: 'Annuaire', href: '#annuaire' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-end py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(+225) 25 21 00 98 33</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>euphrasieyavo@yahoo.fr</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary">
                GROUP EROVEEM-FY
              </h1>
              <p className="text-sm text-muted-foreground">Côte d'Ivoire</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-primary">
              Nous Contacter
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="btn-primary w-full">
                Nous Contacter
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;