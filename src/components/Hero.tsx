import { ArrowRight, TrendingUp, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cassavaProcessing from '@/assets/cassava-processing.jpg';

const Hero = () => {
  return (
    <section id="accueil" className="section-hero parallax-container">`
      {/* Enhanced Background with parallax effect */}
      <div className="absolute inset-0 z-0 parallax-element">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <img
          src={cassavaProcessing}
          alt="Transformation du manioc - GROUP EROVEEM-FY"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content with enhanced animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen">`
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-on-scroll">`
            <div className="space-y-4">
              <h1 className="heading-xl text-glow">
                GROUP EROVEEM-FY
                <span className="block text-primary animate-pulse">CÔTE D'IVOIRE</span>
              </h1>
              <p className="text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                Leader dans la <span className="text-primary font-semibold">transformation du manioc</span> et la fabrication de 
                <span className="text-secondary font-semibold"> produits amylacés de qualité</span> en Côte d'Ivoire.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <Button className="btn-primary group hover:shadow-glow transform hover:scale-105 transition-all duration-500">
                <span className="relative z-10">Découvrez nos activités</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2 duration-300" />
              </Button>
              <Button className="btn-outline group glass-card hover:shadow-floating">
                <span className="relative z-10">Nos Coordonnées</span>
              </Button>
            </div>

            {/* Enhanced Location Badge */}
            <div className="flex items-center space-x-3 text-muted-foreground animate-slideInLeft" style={{animationDelay: '0.9s'}}>
              <div className="p-2 bg-primary/10 rounded-full animate-pulse">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium text-lg">Plateau, Abidjan - Côte d'Ivoire</span>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:pl-12 animate-slideInRight" style={{animationDelay: '1.2s'}}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Stats Cards */}
              <div className="card-corporate glass-card card-floating group hover:shadow-glow transition-all duration-500" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-3">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <TrendingUp className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                  <div>
                    <p className="stats-number">978</p>
                    <p className="text-sm text-muted-foreground">Visites</p>
                  </div>
                </div>
              </div>

              <div className="card-corporate glass-card card-floating group hover:shadow-glow transition-all duration-500">
                <div className="flex items-center space-x-3">
                  <div className="p-4 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-300">
                    <Users className="h-8 w-8 text-secondary animate-pulse" />
                  </div>
                  <div>
                    <p className="stats-number">15+</p>
                    <p className="text-sm text-muted-foreground">Années d'expérience</p>
                  </div>
                </div>
              </div>

              <div className="card-corporate glass-card card-floating sm:col-span-2 group hover:shadow-glow transition-all duration-500" style={{animationDelay: '1.5s'}}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-3 text-glow">Impact Local</p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Contribution significative au <span className="text-primary font-semibold">développement agricole</span> et 
                    <span className="text-secondary font-semibold"> industriel</span> de la Côte d'Ivoire
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