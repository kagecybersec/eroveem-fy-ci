import { Target, Eye, Heart, Award } from 'lucide-react';
import plateauOffice from '@/assets/plateau-office.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tous nos processus de transformation.',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Adoption de technologies modernes pour optimiser notre production.',
    },
    {
      icon: Heart,
      title: 'Durabilité',
      description: 'Engagement envers des pratiques agricoles et industrielles durables.',
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Produits de haute qualité respectant les standards internationaux.',
    },
  ];

  return (
    <section id="apropos" className="section-corporate section-gradient animate-on-scroll">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-6 text-glow">À Propos de Nous</h2>
          <p className="text-xl text-corporate max-w-3xl mx-auto">
            GROUP EROVEEM-FY Côte d'Ivoire est une entreprise leader dans la transformation du manioc, 
            basée au cœur du district économique du Plateau à Abidjan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 animate-on-scroll">
          {/* Left Column - Image */}
          <div className="relative group">
            <div className="aspect-w-16 aspect-h-10 rounded-2xl overflow-hidden shadow-floating group-hover:shadow-glow transition-all duration-500">
              <img
                src={plateauOffice}
                alt="Siège social GROUP EROVEEM-FY au Plateau"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl shadow-gold hover:shadow-glow transition-all duration-300 group-hover:scale-105">
              <p className="text-primary font-bold text-2xl text-glow">Depuis 2008</p>
              <p className="text-muted-foreground text-sm">Au service de l'excellence</p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-md text-foreground mb-4">Notre Historique</h3>
              <p className="text-corporate text-lg leading-relaxed">
                Fondée au Plateau d'Abidjan, GROUP EROVEEM-FY s'est imposée comme un acteur majeur 
                de la transformation agroalimentaire en Côte d'Ivoire. Notre expertise dans la 
                transformation du manioc nous permet de contribuer à la sécurité alimentaire 
                et au développement économique local.
              </p>
            </div>

            <div>
              <h3 className="heading-md text-foreground mb-4">Notre Mission</h3>
              <p className="text-corporate text-lg leading-relaxed">
                Transformer le manioc en produits amylacés de haute qualité, tout en soutenant 
                les producteurs locaux et en contribuant au développement durable de la filière 
                agricole ivoirienne.
              </p>
            </div>

            <div>
              <h3 className="heading-md text-foreground mb-4">Notre Vision</h3>
              <p className="text-corporate text-lg leading-relaxed">
                Devenir la référence régionale en matière de transformation du manioc et de 
                production de produits amylacés, en alliant innovation technologique et 
                respect de l'environnement.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="heading-md text-center text-foreground mb-12 text-glow">Nos Valeurs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-corporate card-floating text-center group hover:shadow-glow transition-all duration-500">
                <div className="mb-6">
                  <div className="inline-flex p-5 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:from-primary/30 group-hover:to-primary/20 group-hover:scale-110 transition-all duration-300">
                    <value.icon className="h-10 w-10 text-primary group-hover:animate-pulse" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-corporate">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;