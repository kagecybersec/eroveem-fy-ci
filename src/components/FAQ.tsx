import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle, MapPin, Phone, Mail, Users, Building2 } from "lucide-react";

const FAQ = () => {
  const faqData = [
    {
      id: "faq-1",
      question: "Qui est GROUP EROVEEM-FY Côte d'Ivoire ?",
      answer: "GROUP EROVEEM-FY Côte d'Ivoire – Plateau est une entreprise ivoirienne spécialisée dans la transformation agro-industrielle. Nous valorisons le manioc et d'autres ressources locales pour fournir des solutions alimentaires et industrielles durables. Notre mission est de contribuer à la sécurité alimentaire, au développement économique et à la valorisation des ressources locales en Côte d'Ivoire et en Afrique.",
      icon: Building2
    },
    {
      id: "faq-2", 
      question: "Quels sont vos domaines d'activité ?",
      answer: "Nous intervenons principalement dans :",
      activities: [
        "La transformation du manioc en produits dérivés de qualité",
        "La fabrication de produits amylacés (farine, amidon, dérivés)",
        "La promotion de solutions agro-industrielles innovantes adaptées aux besoins locaux et internationaux"
      ],
      icon: CheckCircle
    },
    {
      id: "faq-3",
      question: "Où êtes-vous situés ?",
      answer: "Nos bureaux et installations se trouvent à :",
      locations: [
        "Plateau – Abidjan, Côte d'Ivoire",
        "II Plateaux Aghien – Cocody Mermoz, en face du CNRA"
      ],
      additionalInfo: "Nous sommes facilement accessibles et accueillons nos partenaires, clients et visiteurs sur rendez-vous.",
      icon: MapPin
    },
    {
      id: "faq-4",
      question: "Comment vous contacter ?",
      answer: "Vous pouvez nous joindre à tout moment via :",
      contacts: [
        { type: "Standard", value: "(+225) 25 21 00 98 33", icon: Phone },
        { type: "Mobiles", value: "+225 0505050508 / +225 0748484948", icon: Phone },
        { type: "Email", value: "euphrasieyavo@yahoo.fr", icon: Mail },
        { type: "Adresse", value: "II Plateaux Aghien, Cocody Mermoz – en face du CNRA", icon: MapPin }
      ],
      icon: Phone
    },
    {
      id: "faq-5",
      question: "Avec qui travaillez-vous et qui peut bénéficier de vos services ?",
      answer: "Nos services s'adressent à :",
      partners: [
        "Les entreprises agroalimentaires cherchant des matières premières locales de qualité",
        "Les partenaires institutionnels et ONG engagés dans le développement agricole", 
        "Les distributeurs et commerçants en quête de produits amylacés fiables et compétitifs",
        "Les communautés rurales avec lesquelles nous collaborons pour valoriser la production agricole locale"
      ],
      additionalInfo: "Nous croyons à la collaboration gagnant-gagnant et à l'impact positif sur toute la chaîne de valeur.",
      icon: Users
    }
  ];

  return (
    <section className="section-corporate py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
            <h2 className="heading-xl">
              Foire Aux Questions
            </h2>
          </div>
          <p className="text-corporate text-lg max-w-3xl mx-auto">
            Découvrez tout ce que vous devez savoir sur GROUP EROVEEM-FY Côte d'Ivoire, 
            nos services, notre mission et comment nous pouvons collaborer ensemble.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => {
              const IconComponent = faq.icon;
              return (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="card-corporate border-none bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left px-6 py-6 hover:no-underline group">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="heading-md text-left group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-16">
                      <p className="text-corporate mb-4 leading-relaxed">
                        {faq.answer}
                      </p>
                      
                      {/* Activities list */}
                      {faq.activities && (
                        <div className="space-y-3 mb-4">
                          {faq.activities.map((activity, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-corporate">{activity}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Locations list */}
                      {faq.locations && (
                        <div className="space-y-3 mb-4">
                          {faq.locations.map((location, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-corporate font-medium">{location}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Contacts list */}
                      {faq.contacts && (
                        <div className="space-y-4 mb-4">
                          {faq.contacts.map((contact, index) => {
                            const ContactIcon = contact.icon;
                            return (
                              <div key={index} className="flex items-start gap-3">
                                <ContactIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                  <span className="text-primary font-medium">{contact.type}: </span>
                                  <span className="text-corporate">{contact.value}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      
                      {/* Partners list */}
                      {faq.partners && (
                        <div className="space-y-3 mb-4">
                          {faq.partners.map((partner, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-corporate">{partner}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Additional info */}
                      {faq.additionalInfo && (
                        <p className="text-corporate italic border-l-4 border-primary/30 pl-4 bg-primary/5 py-3 rounded-r-lg">
                          {faq.additionalInfo}
                        </p>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-gradient-primary p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="heading-lg text-white mb-4">
              Une question spécifique ?
            </h3>
            <p className="text-white/90 mb-6">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et discuter de vos projets de collaboration.
            </p>
            <button className="btn-corporate bg-white text-primary hover:bg-white/90">
              Nous Contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;