import React from 'react';
import { Clock, Phone, Info, Sparkles } from 'lucide-react';
import { SERVICES_DATA, SPA_INFO, OFFICIAL_MENU_BOARD } from '../data/spaData';
import { Service } from '../types';
import { formatPrice } from '../utils/format';

interface ServicesSectionProps {
  onSelectServiceDetail: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceDetail,
}) => {
  return (
    <section id="dich-vu" className="py-16 sm:py-24 bg-[#FAF5ED] border-b border-[#DDC6AB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C5E2D] uppercase mb-2 bg-[#EADAC5] px-3.5 py-1 rounded-full border border-[#D5C0A4]">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5E2D]" />
            <span>Bảng Giá & Dịch Vụ Niêm Yết Chính Thức</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#381F0B] text-balance">
            Bảng Menu Dịch Vụ <span className="italic text-[#8C5E2D]">Phú Thành</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5D3F24] leading-relaxed">
            Bảng giá niêm yết rõ ràng theo từng gói thời gian <strong>60 phút</strong> và <strong>90 phút</strong>. Giá trọn gói bình dân, không phát sinh phụ phí. Quý khách vui lòng gọi điện thoại trước để cơ sở chuẩn bị nước ngâm chân thảo mộc chu đáo.
          </p>
        </div>

        {/* 1. OFFICIAL FRAMED MENU BOARD (Styled after real in-store printed menu) */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* GÓI 60 PHÚT BOARD */}
            <div className="relative bg-[#FFFDF9] rounded-2xl border-4 border-[#5A3114] shadow-2xl p-4 sm:p-8 flex flex-col justify-between overflow-hidden">
              {/* Corner floral motif subtle accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#EAD8C3]/50 to-transparent pointer-events-none rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#EAD8C3]/50 to-transparent pointer-events-none rounded-tr-full" />

              <div>
                {/* Brand header on menu */}
                <div className="text-center pb-4 border-b border-[#E4D1BA] relative">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#5A3114] text-[#F3D5A5] font-serif-luxury font-bold text-lg mb-1 shadow border border-[#8C5226]">
                    PT
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#3E2108] tracking-wide">
                    Phú Thành
                  </h3>
                  <div className="text-xs tracking-wider uppercase font-semibold text-[#8C5E2D]">
                    Massage Khiếm Thị
                  </div>
                  <div className="text-sm font-bold tracking-widest text-[#5A3114] mt-1 uppercase">
                    MENU
                  </div>
                </div>

                {/* Ribbon Tag: GÓI 60 PHÚT */}
                <div className="my-5 flex justify-center">
                  <div className="relative bg-[#5F3514] text-[#F9F3EA] text-sm font-bold uppercase tracking-wider py-1.5 px-8 rounded shadow-md border border-[#854E20] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#E8C488]" />
                    <span>GÓI 60 PHÚT</span>
                  </div>
                </div>

                {/* List items */}
                <div className="space-y-3.5 my-4">
                  {OFFICIAL_MENU_BOARD.packages[0].items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs sm:text-sm border-b border-[#F0E2D1] pb-2 last:border-0"
                    >
                      <div className="flex items-start gap-2 pr-2">
                        <span className="text-[#8C5E2D] font-bold mt-0.5">•</span>
                        <span className={`font-semibold ${item.isHot ? 'text-[#7A3608] font-bold' : 'text-[#3E2410]'}`}>
                          {item.name}
                          {item.isAddon && !item.isGift && (
                            <span className="text-[10px] ml-1.5 px-1.5 py-0.2 bg-[#EADAC5] text-[#694420] rounded font-normal">
                              Dịch vụ thêm
                            </span>
                          )}
                          {item.isGift && (
                            <span className="text-[10px] ml-1.5 px-1.5 py-0.5 bg-[#E5F5E9] text-[#1B6634] rounded font-bold border border-[#B6E2C1]">
                              Quà tặng
                            </span>
                          )}
                        </span>
                      </div>
                      {item.isGift ? (
                        <span className="font-bold text-xs sm:text-sm text-[#1B6634] bg-[#E5F5E9] px-2 py-0.5 rounded border border-[#B6E2C1] whitespace-nowrap">
                          {item.giftText || 'Tặng Miễn Phí'}
                        </span>
                      ) : (
                        <span className="font-bold text-sm sm:text-base text-[#8C5E2D] tabular-nums whitespace-nowrap">
                          {formatPrice(item.price)}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Call for 60 min */}
              <div className="pt-4 mt-2 border-t border-[#E8D6C0]">
                <a
                  href={`tel:${SPA_INFO.hotlineRaw}`}
                  className="w-full py-3.5 bg-[#5F3514] hover:bg-[#77441B] text-white text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-[#80481B] active:scale-[0.98] group cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#F3D5A5] group-hover:rotate-12 transition-transform" />
                  <span>Đặt Gói 60 Phút</span>
                </a>
              </div>
            </div>

            {/* GÓI 90 PHÚT BOARD (VIP FEATURED) */}
            <div className="relative bg-[#FFFDF9] rounded-2xl border-4 border-[#8C5226] shadow-2xl p-4 sm:p-8 flex flex-col justify-between overflow-hidden ring-2 ring-[#D4AF37]/50">
              {/* Badge: Best Seller */}
              <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#3A1E06] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow-sm border border-[#E8C556]">
                VIP Phục Hồi
              </div>

              <div>
                {/* Brand header on menu */}
                <div className="text-center pb-4 border-b border-[#E4D1BA] relative">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#8C5226] text-[#F3D5A5] font-serif-luxury font-bold text-lg mb-1 shadow border border-[#AC6F3E]">
                    PT
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#3E2108] tracking-wide">
                    Phú Thành
                  </h3>
                  <div className="text-xs tracking-wider uppercase font-semibold text-[#8C5E2D]">
                    Massage Khiếm Thị
                  </div>
                  <div className="text-sm font-bold tracking-widest text-[#8C5226] mt-1 uppercase">
                    MENU
                  </div>
                </div>

                {/* Ribbon Tag: GÓI 90 PHÚT */}
                <div className="my-5 flex justify-center">
                  <div className="relative bg-[#422208] text-[#F9F3EA] text-sm font-bold uppercase tracking-wider py-1.5 px-8 rounded shadow-md border border-[#D4AF37] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span>GÓI 90 PHÚT</span>
                  </div>
                </div>

                {/* List items */}
                <div className="space-y-3.5 my-4">
                  {OFFICIAL_MENU_BOARD.packages[1].items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs sm:text-sm border-b border-[#F0E2D1] pb-2 last:border-0"
                    >
                      <div className="flex items-start gap-2 pr-2">
                        <span className="text-[#8C5E2D] font-bold mt-0.5">•</span>
                        <span className={`font-semibold ${item.isHot ? 'text-[#7A3608] font-bold' : 'text-[#3E2410]'}`}>
                          {item.name}
                          {item.isAddon && !item.isGift && (
                            <span className="text-[10px] ml-1.5 px-1.5 py-0.2 bg-[#EADAC5] text-[#694420] rounded font-normal">
                              Dịch vụ thêm
                            </span>
                          )}
                          {item.isGift && (
                            <span className="text-[10px] ml-1.5 px-1.5 py-0.5 bg-[#E5F5E9] text-[#1B6634] rounded font-bold border border-[#B6E2C1]">
                              Quà tặng
                            </span>
                          )}
                        </span>
                      </div>
                      {item.isGift ? (
                        <span className="font-bold text-xs sm:text-sm text-[#1B6634] bg-[#E5F5E9] px-2 py-0.5 rounded border border-[#B6E2C1] whitespace-nowrap">
                          {item.giftText || 'Tặng Miễn Phí'}
                        </span>
                      ) : (
                        <span className="font-bold text-sm sm:text-base text-[#8C5E2D] tabular-nums whitespace-nowrap">
                          {formatPrice(item.price)}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Call for 90 min */}
              <div className="pt-4 mt-2 border-t border-[#E8D6C0]">
                <a
                  href={`tel:${SPA_INFO.hotlineRaw}`}
                  className="w-full py-3.5 bg-gradient-to-r from-[#422208] to-[#5F3514] hover:from-[#5C3210] hover:to-[#77441B] text-[#FDF6EC] text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 border-2 border-[#D4AF37] active:scale-[0.98] group cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
                  <span>Đặt Gói 90 Phút (VIP)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. INTERACTIVE SERVICE CARDS (WITH PHOTOS & STEP DETAILS) */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#381F0B]">
              Chi Tiết Quy Trình Từng Liệu Trình
            </h3>
            <p className="text-xs sm:text-sm text-[#6C4B2F] mt-1.5">
              Bấm vào từng dịch vụ để xem các bước trị liệu và lợi ích phục hồi sức khỏe
            </p>
          </div>

          {/* Cards Grid: Render all services cleanly without tabs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-[#FCF9F3] rounded-xl border-2 border-[#DEC9B2] overflow-hidden flex flex-col justify-between hover:border-[#8C5E2D] transition-all hover:shadow-lg group"
              >
                {/* Image */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#E2CEA7]">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {service.isHot && (
                      <div className="absolute top-3 left-3 bg-[#5F3514]/90 backdrop-blur-sm text-[#F3D5A5] text-[11px] font-bold px-2.5 py-1 rounded border border-[#80481B]">
                        Khuyên Dùng
                      </div>
                    )}
                    {service.isGift && (
                      <div className="absolute top-3 right-3 bg-[#1B6634] text-[#E5F5E9] text-[11px] font-bold px-2.5 py-0.5 rounded shadow border border-[#B6E2C1]">
                        Quà Tặng Miễn Phí
                      </div>
                    )}
                    {service.isAddon && !service.isGift && (
                      <div className="absolute top-3 right-3 bg-[#8C5E2D] text-white text-[11px] font-bold px-2 py-0.5 rounded">
                        Dịch Vụ Thêm
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-4 sm:p-5">
                    <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#381F0B] group-hover:text-[#8C5E2D] transition-colors mb-1.5 sm:mb-2 leading-snug">
                      {service.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#5C3E24] line-clamp-2 leading-relaxed mb-3 sm:mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Dual Pricing Pill (60p and 90p) */}
                    <div className="p-2.5 sm:p-3 bg-[#F2E5D4] rounded-xl border border-[#DECBB4] mb-3">
                      <div className="text-[10px] sm:text-[11px] font-bold text-[#6D492A] uppercase mb-1 sm:mb-1.5">
                        Mức Giá Niêm Yết:
                      </div>
                      {service.price90 ? (
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-[#FAF5ED] p-2 rounded-lg border border-[#D5C0A4] text-center">
                            <span className="block text-[10px] sm:text-[11px] text-[#7E5735] font-medium">Gói 60 phút</span>
                            <strong className="text-xs sm:text-sm font-bold text-[#8C5E2D] tabular-nums">
                              {formatPrice(service.price60 || service.price)}
                            </strong>
                          </div>
                          <div className="bg-[#FAF5ED] p-2 rounded-lg border border-[#D5C0A4] text-center">
                            <span className="block text-[10px] sm:text-[11px] text-[#7E5735] font-medium">Gói 90 phút</span>
                            <strong className="text-xs sm:text-sm font-bold text-[#5F3514] tabular-nums">
                              {formatPrice(service.price90)}
                            </strong>
                          </div>
                        </div>
                      ) : service.isGift ? (
                        <div className="flex items-center justify-between text-xs py-0.5">
                          <span className="text-[#1B6634] font-bold">Ưu đãi tri ân:</span>
                          <span className="text-xs sm:text-sm font-bold text-[#1B6634] bg-[#E5F5E9] px-2 py-0.5 rounded border border-[#B6E2C1]">
                            {service.giftText || 'Tặng Miễn Phí 100%'}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between text-xs py-0.5">
                          <span className="text-[#6D492A] font-medium">Trọn gói dịch vụ:</span>
                          <span className="text-sm sm:text-base font-bold text-[#8C5E2D] tabular-nums">
                            {formatPrice(service.price)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-4 pt-0 sm:p-5 sm:pt-0">
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#E8D4BE]">
                    <button
                      onClick={() => onSelectServiceDetail(service)}
                      className="px-2.5 sm:px-3 py-2.5 text-[11px] sm:text-xs font-semibold text-[#4A2F17] bg-[#EFE3D2] border border-[#D5C0A4] rounded-xl hover:bg-[#E5D2BC] transition-colors flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap active:scale-95"
                    >
                      <Info className="w-3.5 h-3.5 text-[#8C5E2D] shrink-0" />
                      <span>Xem Chi Tiết</span>
                    </button>
                    <a
                      href={`tel:${SPA_INFO.hotlineRaw}`}
                      className="px-2.5 sm:px-3 py-2.5 text-[11px] sm:text-xs font-bold text-white bg-[#5F3514] rounded-xl hover:bg-[#77441B] transition-colors flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap active:scale-[0.98] border border-[#80481B]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#F3D5A5] shrink-0" />
                      <span>Gọi Giữ Chỗ</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
