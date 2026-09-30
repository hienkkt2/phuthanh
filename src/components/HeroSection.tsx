import React from 'react';
import { Phone, MapPin, ShieldCheck, HeartHandshake, ArrowRight, MessageCircle } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onDirectCall: () => void;
  onOpenConsult: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDirectCall,
  onOpenConsult,
}) => {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5EE] via-[#F4ECE0] to-[#EFE3D2] pt-6 pb-12 lg:pt-10 lg:pb-16 border-b border-[#DECBB4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C5E2D] uppercase bg-[#EBD9C3] px-3 py-1 rounded-full border border-[#D8C1A4]">
              <HeartHandshake className="w-3.5 h-3.5 text-[#8C5E2D]" />
              <span>{t('hero_tag')}</span>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#381F0B] leading-[1.18] text-balance">
              {t('hero_title_line1')} <br />
              <span className="italic font-normal text-[#8C5E2D]">{t('hero_title_line2')}</span>
            </h1>

            <p className="text-base sm:text-lg text-[#523720] leading-relaxed max-w-xl font-normal">
              {t('hero_desc')}
            </p>

            {/* Address Banner Notice */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-[#EFE3D1] border border-[#D5BF9F] text-[#45270E] flex items-center justify-between gap-2.5 shadow-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8C5E2D] shrink-0" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-[#331B07]">{t('hero_only_branch')}</span>{' '}
                  <span className="text-[#5F3514] font-medium">{SPA_INFO.address}</span>
                </div>
              </div>
              <a
                href={SPA_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-2.5 py-1 bg-[#8C5E2D] text-white hover:bg-[#5F3514] text-[11px] font-bold rounded-lg transition-colors whitespace-nowrap"
              >
                {t('hero_directions_btn')}
              </a>
            </div>

            {/* Direct Call to Action */}
            <div className="space-y-3 pt-1 max-w-xl">
              <a
                href={`tel:${SPA_INFO.hotlineRaw}`}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-[#5F3514] rounded-xl hover:bg-[#77441B] transition-all shadow-md active:scale-[0.99] border border-[#80481B]"
              >
                <Phone className="w-5 h-5 text-[#F3D5A5] animate-bounce" />
                <span>{t('hero_call_book')}</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://zalo.me/${SPA_INFO.hotlineRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#3D2510] bg-[#E9D9C3] border border-[#CBB092] rounded-xl hover:bg-[#DFCDB4] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#0068FF] shrink-0" />
                  <span>{t('hero_chat_zalo')}</span>
                </a>

                <a
                  href={SPA_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#5F3514] bg-[#FAF5EE] border border-[#D5C0A4] rounded-xl hover:bg-[#EFE3D2] transition-colors shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-[#8C5E2D] shrink-0" />
                  <span>{t('hero_view_maps')}</span>
                </a>
              </div>
            </div>

            {/* Quantitative Proof Strip */}
            <div className="pt-4 border-t border-[#DCC7AF] grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
              <div className="bg-[#EFE3D2]/70 border border-[#D8C2A7] rounded-xl p-3 flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#381F0B] tracking-tight leading-none">
                  18+
                </div>
                <div className="text-xs text-[#6F4B2B] mt-1.5 font-medium leading-snug">
                  {language === 'vi' ? 'Năm kinh nghiệm' : 'Years Experience'}
                </div>
              </div>

              <div className="bg-[#EFE3D2]/70 border border-[#D8C2A7] rounded-xl p-3 flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#381F0B] tracking-tight leading-none">
                  100%
                </div>
                <div className="text-xs text-[#6F4B2B] mt-1.5 font-medium leading-snug">
                  {language === 'vi' ? 'KTV có chứng chỉ' : 'Certified Staff'}
                </div>
              </div>

              <div className="bg-[#EFE3D2]/70 border border-[#D8C2A7] rounded-xl p-3 flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#381F0B] tracking-tight leading-none">
                  100%
                </div>
                <div className="text-xs text-[#6F4B2B] mt-1.5 font-medium leading-snug">
                  {language === 'vi' ? 'Khăn ga thơm sạch' : 'Fresh Clean Linens'}
                </div>
              </div>

              <div className="bg-[#EFE3D2]/70 border border-[#D8C2A7] rounded-xl p-3 flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#381F0B] tracking-tight leading-none">
                  {language === 'vi' ? 'Từ 140k' : 'From 140k'}
                </div>
                <div className="text-xs text-[#6F4B2B] mt-1.5 font-medium leading-snug">
                  {language === 'vi' ? 'Gói xoa bóp 60 phút' : '60-min Massage'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Marquee Visual Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#D3BA9E] bg-[#E0CDAF] aspect-[16/11]">
              <img
                src="/images/phu_thanh_hero_1790648702096.jpg"
                alt="Kỹ thuật viên khiếm thị Phú Thành thực hiện bấm huyệt trị liệu tại cơ sở Vỹ Dạ, Huế"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Serene Floating Trust Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF5ED]/95 backdrop-blur-md p-4 rounded-xl border border-[#D5BF9F] shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#3D2510] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#8C5E2D]" />
                    <span>{language === 'vi' ? 'Không Gian Ấm Cúng — Sạch Sẽ — Văn Minh' : 'Cozy, Clean & Respectful Space'}</span>
                  </div>
                  <div className="text-[11px] text-[#694729] mt-0.5 font-medium">
                    {language === 'vi' ? 'Phòng máy lạnh, khăn ga giặt sấy thơm mùi sả chanh thay mới 100%' : 'Air-conditioned rooms, 100% fresh lemongrass-scented sanitized linens'}
                  </div>
                </div>
                <a
                  href="#dich-vu"
                  className="text-xs font-bold text-[#8C5E2D] hover:text-[#5F3514] flex items-center gap-1 whitespace-nowrap pl-3 border-l border-[#DCC7AF]"
                >
                  <span>{language === 'vi' ? 'Bảng Giá' : 'Menu'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
