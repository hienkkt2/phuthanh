import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, Globe } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';
import { useLanguage } from '../context/LanguageContext';

interface TopBarProps {
  onDirectCall: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onDirectCall }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_services'), href: '#dich-vu' },
    { name: t('nav_gallery'), href: '#hinh-anh' },
    { name: t('nav_about'), href: '#ve-chung-toi' },
    { name: t('nav_reviews'), href: '#cam-nhan' },
    { name: t('nav_location'), href: '#co-so' },
  ];

  return (
    <>
      {/* Top informational bar with warm wood color */}
      <div className="bg-[#42250E] text-[#E8D6C0] text-xs py-2 px-4 border-b border-[#593213] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href={SPA_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#E0B57C] hover:text-white transition-colors"
              title="Mở chỉ đường trên Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E0B57C]" />
              <span className="font-medium underline underline-offset-2 decoration-[#8C643E]">{SPA_INFO.address}</span>
            </a>
            <span className="text-[#8C643E]">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E0B57C]" />
              <span>{t('topbar_hours')}</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#D8C0A6]">
            <a
              href={SPA_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F3D5A5] transition-colors"
            >
              {t('topbar_maps')}
            </a>
            <span className="text-[#8C643E]">·</span>
            <a
              href={`tel:${SPA_INFO.hotlineRaw}`}
              className="inline-flex items-center gap-1.5 text-[#F3D5A5] hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>{t('topbar_call_advice')}</span>
            </a>
            <span className="text-[#8C643E]">·</span>

            {/* Language Switcher Desktop in top bar */}
            <div className="inline-flex items-center bg-[#2F1807] rounded-md p-0.5 border border-[#5A3114]">
              <button
                onClick={() => setLanguage('vi')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  language === 'vi'
                    ? 'bg-[#8C5E2D] text-white shadow-xs'
                    : 'text-[#C5A88B] hover:text-white'
                }`}
                title="Tiếng Việt"
              >
                <span>🇻🇳</span>
                <span>VI</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  language === 'en'
                    ? 'bg-[#8C5E2D] text-white shadow-xs'
                    : 'text-[#C5A88B] hover:text-white'
                }`}
                title="English"
              >
                <span>🇬🇧</span>
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header in warm wood-toned styling */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-md border-b border-[#DFCEBA] py-2.5'
            : 'bg-[#F8F3EA] border-b border-[#E5D5C2] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Wordmark */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#5A3314] text-[#F3D5A5] flex items-center justify-center font-serif-luxury font-bold text-xl shadow-sm border border-[#855123] group-hover:bg-[#6F3F19] transition-colors">
              PT
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight text-[#3A220F] group-hover:text-[#8C5E2D] transition-colors leading-tight">
                Phú Thành
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#8C5E2D]">
                {t('topbar_brand_tag')}
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-[#5F4532]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#3A220F] hover:underline underline-offset-8 decoration-[#B07E44] decoration-2 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary Action & Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Pill (Visible on both Mobile & Desktop) */}
            <div className="flex items-center rounded-lg bg-[#EAE0D2] p-0.5 border border-[#D5C2AB] text-xs font-bold shadow-xs">
              <button
                onClick={() => setLanguage('vi')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                  language === 'vi'
                    ? 'bg-[#5F3514] text-[#F3D5A5] shadow-xs'
                    : 'text-[#6B4628] hover:text-[#3A220F]'
                }`}
                title="Tiếng Việt"
              >
                <span>🇻🇳</span>
                <span className="text-[11px] font-bold">VI</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                  language === 'en'
                    ? 'bg-[#5F3514] text-[#F3D5A5] shadow-xs'
                    : 'text-[#6B4628] hover:text-[#3A220F]'
                }`}
                title="English"
              >
                <span>🇬🇧</span>
                <span className="text-[11px] font-bold">EN</span>
              </button>
            </div>

            {/* Direct Call Button (Hidden on mobile as previously requested) */}
            <a
              href={`tel:${SPA_INFO.hotlineRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#5F3514] rounded-lg hover:bg-[#77441B] transition-colors shadow-md cursor-pointer whitespace-nowrap active:scale-[0.98] border border-[#80481B]"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F3D5A5] animate-bounce" />
              <span>{t('topbar_call_btn')} {SPA_INFO.hotline}</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#5F4532] hover:text-[#3A220F] hover:bg-[#EEDCC7] rounded-lg transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FBF7F0] border-b border-[#DFCEBA] px-4 pt-3 pb-5 space-y-3">
            <div className="p-2.5 bg-[#EFE3D2] rounded-lg border border-[#D9C4AB] text-xs text-[#523318] mb-2">
              <div className="font-semibold flex items-center gap-1 text-[#3A220F]">
                <MapPin className="w-3.5 h-3.5 text-[#8C5E2D]" />
                <span>{t('hero_only_branch')}</span>
              </div>
              <div className="mt-0.5">{SPA_INFO.address}</div>
            </div>

            {/* Language Switcher in Mobile Drawer */}
            <div className="flex items-center justify-between p-2 bg-[#EFE3D2] rounded-lg border border-[#D9C4AB] text-xs">
              <div className="flex items-center gap-1.5 font-medium text-[#4D321A]">
                <Globe className="w-4 h-4 text-[#8C5E2D]" />
                <span>{language === 'vi' ? 'Ngôn ngữ hiển thị:' : 'Language:'}</span>
              </div>
              <div className="flex items-center bg-[#DFCBB3] p-0.5 rounded-md">
                <button
                  onClick={() => setLanguage('vi')}
                  className={`px-2 py-0.5 rounded text-xs font-bold transition-all ${
                    language === 'vi' ? 'bg-[#5F3514] text-[#F3D5A5]' : 'text-[#5A381E]'
                  }`}
                >
                  Tiếng Việt
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded text-xs font-bold transition-all ${
                    language === 'en' ? 'bg-[#5F3514] text-[#F3D5A5]' : 'text-[#5A381E]'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#4D321A] hover:bg-[#EEDCC7] rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-[#DFCEBA]">
              <a
                href={`tel:${SPA_INFO.hotlineRaw}`}
                className="w-full py-2.5 text-xs font-semibold text-white bg-[#5F3514] rounded-md flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#F3D5A5]" />
                <span>{t('topbar_call_now')}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
