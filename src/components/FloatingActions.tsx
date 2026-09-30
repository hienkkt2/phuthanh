import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle, MapPin } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';
import { useLanguage } from '../context/LanguageContext';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#FAF5EE]/95 backdrop-blur-sm text-[#4D2E12] border-2 border-[#D5BF9F] shadow-lg flex items-center justify-center hover:bg-[#EFE3D2] transition-all cursor-pointer"
          aria-label={t('floating_top')}
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Google Maps Shortcut */}
      <a
        href={SPA_INFO.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FAF5EE] text-[#5F3514] border-2 border-[#D5BF9F] shadow-lg hover:bg-[#EFE3D2] transition-all cursor-pointer text-xs font-bold"
        title={t('floating_maps')}
      >
        <MapPin className="w-4 h-4 text-[#8C5E2D]" />
        <span className="hidden sm:inline">{t('floating_maps')}</span>
      </a>

      {/* Zalo Fast Contact */}
      <a
        href={`https://zalo.me/${SPA_INFO.hotlineRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#EFE3D2] text-[#3D2510] border-2 border-[#D5BF9F] shadow-lg hover:bg-[#E5D2BC] transition-all cursor-pointer text-xs font-bold"
        title={t('floating_zalo')}
      >
        <MessageCircle className="w-4 h-4 text-[#0068FF]" />
        <span className="hidden sm:inline">{t('floating_zalo')}</span>
      </a>

      {/* Main Calling Button pulsating */}
      <a
        href={`tel:${SPA_INFO.hotlineRaw}`}
        className="flex items-center gap-2 px-4 sm:px-5 py-3 rounded-full bg-[#5F3514] text-white shadow-2xl hover:bg-[#77441B] transition-all cursor-pointer text-xs sm:text-sm font-bold border-2 border-[#D4AF37] active:scale-95 group animate-pulse hover:animate-none"
        title={t('floating_call')}
      >
        <Phone className="w-4 h-4 text-[#F3D5A5] group-hover:rotate-12 transition-transform" />
        <span>{t('floating_call')}</span>
      </a>
    </div>
  );
};
