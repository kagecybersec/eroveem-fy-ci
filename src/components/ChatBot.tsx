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

const predefinedResponses = {
  greeting: {
    keywords: ['bonjour', 'salut', 'hello', 'bonsoir'],
    response: "Bonjour ! Je suis l'assistant virtuel de GROUP EROVEEM-FY Côte d'Ivoire. Comment puis-je vous aider aujourd'hui ?"
  },
  activities: {
    keywords: ['activité', 'service', 'manioc', 'transformation', 'amidon'],
    response: "Nous sommes spécialisés dans la transformation du manioc en produits dérivés de qualité : farine, amidon, et autres solutions agro-industrielles. Souhaitez-vous plus de détails sur nos activités ?"
  },
  contact: {
    keywords: ['contact', 'téléphone', 'adresse', 'email', 'localisation'],
    response: "Voici nos coordonnées :\n📍 II Plateaux Aghien – Cocody Mermoz (en face du CNRA)\n📞 (+225) 25 21 00 98 33\n📱 +225 0505050508\n📧 euphrasieyavo@yahoo.fr"
  },
  quote: {
    keywords: ['devis', 'prix', 'tarif', 'coût', 'commande'],
    response: "Pour obtenir un devis personnalisé, je vous invite à nous contacter directement par téléphone au (+225) 25 21 00 98 33 ou par WhatsApp. Nos équipes vous répondront rapidement !"
  },
  default: "Je comprends votre question. Pour une réponse plus précise, n'hésitez pas à nous contacter directement. Puis-je vous aider avec autre chose concernant nos activités ou nos coordonnées ?"
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
    
    for (const [key, responseData] of Object.entries(predefinedResponses)) {
      if (key === 'default') continue;
      
      if (typeof responseData === 'object' && 'keywords' in responseData) {
        if (responseData.keywords.some(keyword => message.includes(keyword))) {
          return responseData.response;
        }
      }
    }
    
    return predefinedResponses.default;
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
      <div className="relative glass-card w-full max-w-md h-[500px] flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Assistant Virtuel</h3>
              <p className="text-sm text-muted-foreground">En ligne</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
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