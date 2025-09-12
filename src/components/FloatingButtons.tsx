import { useState } from 'react';
import { MessageCircle, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatBot from './ChatBot';

const FloatingButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '2250505050508';
    const message = encodeURIComponent(
      'Bonjour, je souhaite obtenir plus d\'informations sur vos activités chez GROUP EROVEEM-FY Côte d\'Ivoire.'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20b958] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          aria-label="Contactez-nous sur WhatsApp"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        </Button>

        {/* Virtual Assistant Button */}
        <Button
          onClick={() => setIsChatOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          aria-label="Discuter avec notre assistant virtuel"
        >
          <Bot className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        </Button>
      </div>

      {/* Tooltip Labels (visible on hover) */}
      <div className="fixed bottom-6 right-24 z-30 flex flex-col space-y-4 pointer-events-none">
        {/* WhatsApp Tooltip */}
        <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 group-hover:opacity-100">
          <div className="bg-background text-foreground px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap border border-border">
            Écrivez-nous sur WhatsApp
          </div>
        </div>

        {/* Assistant Tooltip */}
        <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 group-hover:opacity-100">
          <div className="bg-background text-foreground px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap border border-border">
            Assistant virtuel
          </div>
        </div>
      </div>

      {/* ChatBot Component */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default FloatingButtons;