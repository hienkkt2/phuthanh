import React, { useState } from 'react';
import { HeartHandshake, ShieldCheck, Sparkles, MapPin, Coffee, CheckCircle2 } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const { language, t } = useLanguage();

  const realPhotos = [
    {
      title: language === 'vi' ? 'Phòng Trị Liệu Bấm Huyệt Máy Lạnh' : 'Air-conditioned 3-Bed Treatment Room',
      subtitle: language === 'vi' ? 'Không gian ốp gỗ ấm cúng, 3 giường nệm êm ái, khăn ga thơm sạch thay mới 100%' : 'Cozy wooden ambiance, 3 comfortable orthopedic beds, 100% fresh lemongrass linens',
      image: '/images/phu_thanh_real_room_1790649556393.jpg',
      badge: language === 'vi' ? 'Phòng Trị Liệu 3 Giường' : '3-Bed Treatment Room',
      badgeMobile: language === 'vi' ? 'Phòng 3 Giường' : '3-Bed Room',
    },
    {
      title: language === 'vi' ? 'Khu Vực Ngâm Chân Thảo Mộc Thùng Gỗ' : 'Traditional Cedar Foot Soak Lounge',
      subtitle: language === 'vi' ? 'Nước lá gừng quế ấm nóng khai thông huyệt đạo bàn chân, kết hợp thưởng trà gừng' : 'Warm boiled ginger-cinnamon herbal infusion to stimulate foot reflexology points',
      image: '/images/phu_thanh_real_footsoak_1790649584369.jpg',
      badge: language === 'vi' ? 'Ngâm Chân Thảo Mộc' : 'Herbal Foot Soak',
      badgeMobile: language === 'vi' ? 'Ngâm Chân' : 'Foot Soak',
    },
    {
      title: language === 'vi' ? 'Cổng Vào & Biển Hiệu Số 2 Kiệt 186 Nguyễn Sinh Cung' : 'Entrance Gate at No. 2, Alley 186 Nguyen Sinh Cung',
      subtitle: language === 'vi' ? 'Cổng vào thông thoáng, biển hiệu sáng rõ, ô tô vào tận cổng cơ sở Vỹ Dạ' : 'Spacious quiet alley, bright clear signboard, cars drive straight to our gate',
      image: '/images/phu_thanh_real_gate_1790649534752.jpg',
      badge: language === 'vi' ? 'Cổng Cơ Sở Vỹ Dạ' : 'Spa Entrance Gate',
      badgeMobile: language === 'vi' ? 'Cổng Tiệm' : 'Spa Gate',
    },
  ];

  const currentPhoto = realPhotos[activePhotoIdx];

  const pillars = [
    {
      title: t('about_val1_title'),
      desc: t('about_val1_desc'),
    },
    {
      title: t('about_val2_title'),
      desc: t('about_val2_desc'),
    },
    {
      title: t('about_val3_title'),
      desc: t('about_val3_desc'),
    },
    {
      title: t('about_val4_title'),
      desc: t('about_val4_desc'),
    },
  ];

  return (
    <section id="ve-chung-toi" className="py-16 sm:py-24 bg-[#F8F2E8] border-b border-[#DDC6AB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C5E2D] uppercase mb-2 bg-[#EADAC5] px-3 py-1 rounded-full border border-[#D5C0A4]">
            <HeartHandshake className="w-3.5 h-3.5 text-[#8C5E2D]" />
            <span>{t('about_tag')}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#381F0B] text-balance">
            {t('about_title_1')} <span className="italic text-[#8C5E2D]">{t('about_title_2')}</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5D3F24] leading-relaxed">
            {t('about_desc')}
          </p>
        </div>

        {/* Bento Grid / Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Ambiance Image Showcase */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#D5BF9F] aspect-[16/10] bg-[#DEC8AC]">
              <img
                src={currentPhoto.image}
                alt={currentPhoto.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Photo Switcher Tabs Top Right */}
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 flex items-center gap-1 sm:gap-1.5 bg-black/65 backdrop-blur-md p-1 rounded-xl border border-white/20 z-10 max-w-[calc(100%-20px)] overflow-x-auto no-scrollbar">
                {realPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                      activePhotoIdx === idx
                        ? 'bg-[#5F3514] text-[#F3D5A5] shadow border border-[#8C5E2D]'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="sm:hidden">{photo.badgeMobile}</span>
                    <span className="hidden sm:inline">{photo.badge}</span>
                  </button>
                ))}
              </div>

              {/* Caption Bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-widest text-[#EBD7BE] font-semibold">
                  {currentPhoto.title}
                </span>
                <p className="font-serif-luxury text-lg sm:text-xl font-normal text-white mt-1">
                  {currentPhoto.subtitle}
                </p>
                <div className="text-xs text-[#EBD7BE] mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F3D5A5]" />
                  <span>{SPA_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 4 Editorial Pillars */}
          <div className="lg:col-span-5 space-y-5">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="pb-4 border-b border-[#DEC9B2] last:border-0 last:pb-0"
              >
                <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#381F0B]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5D3F24] mt-1 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
