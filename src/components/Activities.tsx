import { Factory, Wheat, Package, CheckCircle } from 'lucide-react';
import cassavaProducts from '@/assets/cassava-products.jpg';

const Activities = () => {
  const activities = [
    {
      icon: Factory,
      title: 'Transformation du Manioc',
      description: 'Processus industriel moderne de transformation du manioc frais en produits finis.',
      features: [
        'Réception et tri du manioc',
        'Lavage et épluchage automatisé',
        'Râpage et pressage',
        'Séchage et conditionnement'
      ]
    },
    {
      icon: Wheat,
      title: 'Fabrication de Farine',
      description: 'Production de farine de manioc de haute qualité pour diverses applications.',
      features: [
        'Farine extra-fine',
        'Farine pour pâtisserie',
        'Farine enrichie',
        'Conditionnement sur mesure'
      ]
    },
    {
      icon: Package,
      title: 'Produits Amylacés',
      description: 'Gamme complète de produits à base d\'amidon de manioc.',
      features: [
        'Amidon alimentaire',
        'Amidon industriel',
        'Tapioca',
        'Produits dérivés'
      ]
    }
  ];

  return (
    <section id="activites" className="section-corporate">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-6">Nos Activités</h2>
          <p className="text-xl text-corporate max-w-3xl mx-auto">
            Découvrez notre expertise dans la transformation du manioc et la production 
            de produits amylacés de qualité supérieure.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Activities Grid */}
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <div key={index} className="card-corporate group hover:shadow-corporate transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <activity.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{activity.title}</h3>
                    <p className="text-corporate mb-4">{activity.description}</p>
                    <ul className="space-y-2">
                      {activity.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Products Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-corporate">
              <img
                src={cassavaProducts}
                alt="Produits à base de manioc - Farine et amidon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-secondary p-4 rounded-lg shadow-gold">
              <p className="text-secondary-foreground font-bold">Qualité</p>
              <p className="text-secondary-foreground/80 text-sm">Certifiée</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-section rounded-2xl p-12">
          <h3 className="heading-md text-center text-foreground mb-12">Notre Processus de Production</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Réception', desc: 'Contrôle qualité du manioc frais' },
              { step: '02', title: 'Transformation', desc: 'Processus industriel moderne' },
              { step: '03', title: 'Conditionnement', desc: 'Emballage selon standards' },
              { step: '04', title: 'Distribution', desc: 'Livraison produits finis' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{process.title}</h4>
                <p className="text-corporate">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;