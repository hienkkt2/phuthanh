import React from 'react';
import { MapPin, Phone, Clock, Navigation, ShieldCheck } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';
import { useLanguage } from '../context/LanguageContext';

export const BranchSection: React.FC = () => {
  const googleMapsUrl = SPA_INFO.mapUrl;
  const { language, t } = useLanguage();

  return (
    <section id="co-so" className="py-16 sm:py-24 bg-[#FAF5EE] border-b border-[#DDC6AB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C5E2D] uppercase mb-2 bg-[#EADAC5] px-3 py-1 rounded-full border border-[#D5C0A4]">
            <MapPin className="w-3.5 h-3.5 text-[#8C5E2D]" />
            <span>{t('branch_tag')}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#381F0B] text-balance">
            {language === 'vi' ? 'Về Với Vỹ Dạ, ' : 'Visit Vy Da, '}
            <span className="italic text-[#8C5E2D]">
              {language === 'vi' ? 'Ghé Thăm Phú Thành' : 'Welcome to Phu Thanh'}
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5D3F24]">
            {t('branch_desc')}
          </p>
        </div>

        {/* Single Branch Card Big Feature */}
        <div className="max-w-4xl mx-auto bg-[#FCF9F3] rounded-2xl border-2 border-[#D5BF9F] p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Info details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C5E2D] bg-[#EFE3D2] px-3 py-1 rounded-full border border-[#D8C1A4]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8C5E2D]" />
                <span>{t('branch_single_location')}</span>
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#381F0B]">
                {language === 'vi' ? 'Phú Thành - Massage Khiếm Thị' : 'Phu Thanh - Blind Massage Hue'}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-[#50331A] pt-1">
                <div className="flex items-start gap-3 p-3 bg-[#F4EBE0] rounded-xl border border-[#DCC7AE]">
                  <MapPin className="w-5 h-5 text-[#8C5E2D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#381F0B] block text-sm sm:text-base">
                      {SPA_INFO.address}
                    </strong>
                    <span className="text-xs text-[#704E31] mt-0.5 block">
                      {language === 'vi'
                        ? '(Đầu kiệt 186 Nguyễn Sinh Cung, rẽ vào nhà số 2 ngay đầu kiệt, biển hiệu Phú Thành rõ ràng)'
                        : '(Alley 186 Nguyen Sinh Cung, turn into house No. 2 at the alley entrance, bright signboard)'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#F4EBE0] rounded-xl border border-[#DCC7AE]">
                  <Phone className="w-5 h-5 text-[#8C5E2D] shrink-0" />
                  <div>
                    <span className="text-xs text-[#704E31] block">
                      {language === 'vi' ? 'Điện thoại đặt lịch & chỉ đường:' : 'Booking & directions hotline:'}
                    </span>
                    <a
                      href={`tel:${SPA_INFO.hotlineRaw}`}
                      className="text-base sm:text-lg font-bold text-[#8C5E2D] hover:underline"
                    >
                      {SPA_INFO.hotline}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#F4EBE0] rounded-xl border border-[#DCC7AE]">
                  <Clock className="w-5 h-5 text-[#8C5E2D] shrink-0" />
                  <div>
                    <span className="text-xs text-[#704E31] block">
                      {language === 'vi' ? 'Thời gian phục vụ:' : 'Opening hours:'}
                    </span>
                    <strong className="text-xs sm:text-sm text-[#381F0B]">
                      {language === 'vi'
                        ? SPA_INFO.workingHours
                        : '08:30 AM - 11:00 PM (Open 7 days a week, including holidays)'}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`tel:${SPA_INFO.hotlineRaw}`}
                  className="w-full sm:w-auto flex-1 py-3 px-5 bg-[#5F3514] text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-[#77441B] transition-colors flex items-center justify-center gap-2 shadow-md border border-[#80481B] active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#F3D5A5] animate-bounce" />
                  <span>{t('branch_call_reserve')}</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-5 text-[#3D2510] bg-[#E9D9C3] border border-[#CBB092] rounded-xl hover:bg-[#DFCDB4] transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm font-bold cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#8C5E2D]" />
                  <span>{t('branch_maps_btn')}</span>
                </a>
              </div>
            </div>

            {/* Visual Guide / Map Preview */}
            <div className="lg:col-span-5">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative rounded-2xl overflow-hidden border-2 border-[#D5BF9F] bg-[#DEC8AC] aspect-[4/3] shadow-md cursor-pointer"
                title="Bấm để mở bản đồ Google Maps"
              >
                <img
                  src="/images/phu_thanh_real_gate_1790649534752.jpg"
                  alt="Cổng vào và biển hiệu cơ sở Phú Thành tại số 2 kiệt 186 Nguyễn Sinh Cung, Vỹ Dạ, Huế"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4 text-white">
                  <div className="text-xs font-bold text-[#F3D5A5] uppercase tracking-wider flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-[#F3D5A5]" />
                    <span>{t('branch_open_maps')}</span>
                  </div>
                  <div className="font-serif-luxury text-base sm:text-lg font-bold">
                    {t('branch_gate_caption')}
                  </div>
                  <div className="text-xs text-[#E8D6C0] mt-0.5">
                    {t('branch_gate_subcaption')}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
