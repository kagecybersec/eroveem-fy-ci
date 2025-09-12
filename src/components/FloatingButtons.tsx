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
        {/* WhatsApp Button - Ultra Premium Style */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] via-[#20b958] to-[#25D366] rounded-full blur-lg opacity-30 group-hover:opacity-70 animate-pulse"></div>
          <Button
            onClick={handleWhatsAppClick}
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:from-[#20b958] hover:to-[#075E54] text-white shadow-2xl hover:shadow-[0_20px_40px_rgba(37,211,102,0.4)] transform hover:scale-110 transition-all duration-500 group border-2 border-white/20 backdrop-blur-sm"
            aria-label="Contactez-nous sur WhatsApp"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/0 to-white/20"></div>
            <MessageCircle className="h-7 w-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10" />
            <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-20 animate-ping"></div>
          </Button>
        </div>

        {/* Virtual Assistant Button - Ultra Premium Style */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg opacity-30 group-hover:opacity-70 animate-pulse"></div>
          <Button
            onClick={() => setIsChatOpen(true)}
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-primary-foreground shadow-2xl hover:shadow-[0_20px_40px_rgba(var(--primary-rgb),0.4)] transform hover:scale-110 transition-all duration-500 group border-2 border-white/20 backdrop-blur-sm"
            aria-label="Discuter avec notre assistant virtuel"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/0 to-white/20"></div>
            <Bot className="h-7 w-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10" />
            <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 animate-ping"></div>
            <div className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border border-white/50"></div>
          </Button>
        </div>
      </div>

      {/* Premium Tooltip Labels */}
      <div className="fixed bottom-6 right-24 z-30 flex flex-col space-y-4 pointer-events-none">
        {/* WhatsApp Tooltip */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
          <div className="bg-gradient-to-r from-background to-background/95 backdrop-blur-lg text-foreground px-4 py-3 rounded-xl shadow-2xl text-sm whitespace-nowrap border border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/10 to-transparent"></div>
            <span className="relative z-10 font-medium">💬 Écrivez-nous sur WhatsApp</span>
          </div>
        </div>

        {/* Assistant Tooltip */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
          <div className="bg-gradient-to-r from-background to-background/95 backdrop-blur-lg text-foreground px-4 py-3 rounded-xl shadow-2xl text-sm whitespace-nowrap border border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
            <span className="relative z-10 font-medium">🤖 Assistant virtuel intelligent</span>
          </div>
        </div>
      </div>

      {/* ChatBot Component */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default FloatingButtons;