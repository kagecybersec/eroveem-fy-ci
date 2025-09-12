import { useState } from 'react';
import { X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const knowledgeBase = {
  company: {
    name: "GROUP EROVEEM-FY Côte d'Ivoire",
    description: "Entreprise ivoirienne spécialisée dans la transformation agro-industrielle. Nous valorisons le manioc et d'autres ressources locales pour fournir des solutions alimentaires et industrielles durables.",
    mission: "Contribuer à la sécurité alimentaire, au développement économique et à la valorisation des ressources locales en Côte d'Ivoire et en Afrique."
  },
  activities: {
    main: "Transformation du manioc en produits dérivés de qualité",
    products: ["Farine de manioc", "Amidon", "Produits amylacés", "Solutions agro-industrielles innovantes"],
    focus: "Solutions adaptées aux besoins locaux et internationaux"
  },
  location: {
    main: "Plateau – Abidjan, Côte d'Ivoire",
    detailed: "II Plateaux Aghien – Cocody Mermoz, en face du CNRA",
    accessibility: "Facilement accessibles, accueil sur rendez-vous"
  },
  contact: {
    phone: "(+225) 25 21 00 98 33",
    mobile: ["+225 0505050508", "+225 0748484948"],
    email: "euphrasieyavo@yahoo.fr",
    whatsapp: "+225 0505050508"
  },
  clients: {
    types: [
      "Entreprises agroalimentaires cherchant des matières premières locales de qualité",
      "Partenaires institutionnels et ONG engagés dans le développement agricole",
      "Distributeurs et commerçants en quête de produits amylacés fiables et compétitifs",
      "Communautés rurales pour valoriser la production agricole locale"
    ],
    philosophy: "Collaboration gagnant-gagnant et impact positif sur toute la chaîne de valeur"
  }
};

const ChatBot = ({ isOpen, onClose }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Bonjour 👋, je suis l'assistant virtuel de GROUP EROVEEM-FY Côte d'Ivoire. Comment puis-je vous aider aujourd'hui ?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Analyse intelligente basée sur la base de connaissances
    if (message.includes('qui') && (message.includes('êtes') || message.includes('vous') || message.includes('entreprise'))) {
      return `${knowledgeBase.company.name} est une ${knowledgeBase.company.description.toLowerCase()}\n\n🎯 ${knowledgeBase.company.mission}`;
    }
    
    if (message.includes('activité') || message.includes('service') || message.includes('manioc') || message.includes('transformation') || message.includes('produit')) {
      return `Nos principales activités :\n\n✅ ${knowledgeBase.activities.main}\n✅ Fabrication : ${knowledgeBase.activities.products.join(', ')}\n✅ ${knowledgeBase.activities.focus}\n\nSouhaitez-vous plus de détails sur un produit spécifique ?`;
    }
    
    if (message.includes('où') || message.includes('adresse') || message.includes('localisation') || message.includes('situé')) {
      return `📍 Nous sommes situés à :\n\n🏢 ${knowledgeBase.location.main}\n📍 ${knowledgeBase.location.detailed}\n\n${knowledgeBase.location.accessibility}`;
    }
    
    if (message.includes('contact') || message.includes('téléphone') || message.includes('email') || message.includes('joindre')) {
      return `📞 Contactez-nous :\n\n📞 Standard : ${knowledgeBase.contact.phone}\n📱 Mobiles : ${knowledgeBase.contact.mobile.join(' / ')}\n📧 Email : ${knowledgeBase.contact.email}\n💬 WhatsApp : ${knowledgeBase.contact.whatsapp}`;
    }
    
    if (message.includes('client') || message.includes('partenaire') || message.includes('qui') && message.includes('travail')) {
      return `🤝 Nos partenaires et clients :\n\n${knowledgeBase.clients.types.map((type, index) => `${index + 1}. ${type}`).join('\n')}\n\n💡 ${knowledgeBase.clients.philosophy}`;
    }
    
    if (message.includes('devis') || message.includes('prix') || message.includes('tarif') || message.includes('commande')) {
      return `💼 Pour un devis personnalisé :\n\n📞 Appelez-nous au ${knowledgeBase.contact.phone}\n📱 WhatsApp : ${knowledgeBase.contact.whatsapp}\n📧 Email : ${knowledgeBase.contact.email}\n\nNos équipes vous répondront rapidement avec une proposition adaptée à vos besoins !`;
    }
    
    if (message.includes('bonjour') || message.includes('salut') || message.includes('hello') || message.includes('bonsoir')) {
      return `Bonjour ! 👋\n\nJe suis l'assistant virtuel de ${knowledgeBase.company.name}. Je peux vous renseigner sur :\n\n• Nos activités et produits\n• Nos coordonnées\n• Nos partenaires\n• Demande de devis\n\nComment puis-je vous aider ?`;
    }
    
    return `Je vous remercie pour votre question. Pour une réponse précise et personnalisée, je vous invite à :\n\n📞 Nous appeler : ${knowledgeBase.contact.phone}\n📧 Nous écrire : ${knowledgeBase.contact.email}\n💬 WhatsApp : ${knowledgeBase.contact.whatsapp}\n\nPuis-je vous aider avec autre chose concernant ${knowledgeBase.company.name} ?`;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "Nos activités", action: () => setInputMessage("Quelles sont vos activités ?") },
    { text: "Nos coordonnées", action: () => setInputMessage("Comment vous contacter ?") },
    { text: "Demander un devis", action: () => setInputMessage("Je souhaite un devis") }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-6">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Chat Window */}
      <div className="relative glass-card w-full max-w-md h-[500px] flex flex-col animate-slide-in-right border-2 border-primary/20 shadow-2xl shadow-primary/10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center shadow-lg">
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/0 to-white/20"></div>
              <Bot className="h-6 w-6 text-primary-foreground relative z-10" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <h3 className="font-bold text-foreground">Assistant IA Expert</h3>
              <p className="text-sm text-green-500 font-medium flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                En ligne • Base de connaissances active
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-destructive/10 hover:text-destructive">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-[80%] rounded-lg p-3 ${
                message.isBot 
                  ? 'bg-muted text-foreground' 
                  : 'bg-primary text-primary-foreground'
              }`}>
                <div className="flex items-start space-x-2">
                  {message.isBot && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                  {!message.isBot && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <div className="px-4 py-2 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Actions rapides :</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={action.action}
                  className="text-xs"
                >
                  {action.text}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tapez votre message..."
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;