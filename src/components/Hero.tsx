import { ArrowRight, TrendingUp, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cassavaProcessing from '@/assets/cassava-processing.jpg';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={cassavaProcessing}
          alt="Transformation du manioc - GROUP EROVEEM-FY"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="heading-xl text-foreground">
                GROUP EROVEEM-FY
                <span className="block text-primary">CÔTE D'IVOIRE</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Leader dans la transformation du manioc et la fabrication de produits amylacés de qualité en Côte d'Ivoire.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group">
                Découvrez nos activités
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="btn-outline">
                Nos Coordonnées
              </Button>
            </div>

            {/* Location Badge */}
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Plateau, Abidjan - Côte d'Ivoire</span>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Stats Cards */}
              <div className="card-corporate bg-gradient-card">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">978</p>
                    <p className="text-sm text-muted-foreground">Visites</p>
                  </div>
                </div>
              </div>

              <div className="card-corporate bg-gradient-card">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">15+</p>
                    <p className="text-sm text-muted-foreground">Années d'expérience</p>
                  </div>
                </div>
              </div>

              <div className="card-corporate bg-gradient-card sm:col-span-2">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary mb-2">Impact Local</p>
                  <p className="text-muted-foreground">
                    Contribution significative au développement agricole et industriel de la Côte d'Ivoire
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;