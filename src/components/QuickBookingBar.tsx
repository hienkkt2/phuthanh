import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

export const QuickBookingBar: React.FC = () => {
  return (
    <div className="relative z-20 -mt-6 sm:-mt-8 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-[#FAF5ED] rounded-xl shadow-xl border-2 border-[#D5BF9F] p-4 sm:p-6 transition-all">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Left: Hotline Highlight */}
          <div className="md:col-span-7 space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8C5E2D] animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E2D]">
                Liên Hệ Trực Tiếp Để Được Phục Vụ Chu Đáo Nhất
              </span>
            </div>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#381F0B]">
              Cần Tư Vấn Liệu Trình Hay Giữ Phòng?
            </h3>
            <p className="text-xs text-[#5D3F24] leading-relaxed">
              Quý khách vui lòng gọi trực tiếp hotline hoặc nhắn Zalo trước 15-30 phút để chúng tôi chuẩn bị nước ngâm chân thảo dược và phòng riêng sạch sẽ đón tiếp.
            </p>
          </div>

          {/* Right: Quick Action Call & Zalo */}
          <div className="md:col-span-5 flex flex-col sm:flex-row items-center gap-2.5 justify-end">
            <a
              href={`https://zalo.me/${SPA_INFO.hotlineRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#E9DAC5] text-[#3D2510] text-xs font-bold rounded-lg border border-[#CBB092] hover:bg-[#DFCDB4] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#0068FF]" />
              <span>Nhắn Zalo</span>
            </a>

            <a
              href={`tel:${SPA_INFO.hotlineRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#5F3514] text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-[#77441B] transition-colors shadow-md border border-[#80481B] active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#F3D5A5] animate-bounce" />
              <span>Gọi: {SPA_INFO.hotline}</span>
            </a>
          </div>
        </div>

        {/* Quiet footer strip */}
        <div className="mt-4 pt-3 border-t border-[#E3D0BB] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6F4B2B] gap-2 font-medium">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#8C5E2D] shrink-0" />
            <span>Địa chỉ: <strong>{SPA_INFO.address}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-[#8C5E2D]">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span>Giờ mở cửa: {SPA_INFO.workingHours}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
