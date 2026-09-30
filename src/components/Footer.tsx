import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck, Heart } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#381F0B] text-[#EADBCC] pt-14 pb-10 border-t-4 border-[#8C5E2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#523013]">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-3">
            <div>
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-tight text-[#F5E5D0] block">
                Phú Thành
              </span>
              <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">
                Massage Bấm Huyệt Khiếm Thị — TP. Huế
              </span>
            </div>
            <p className="text-xs text-[#D1B89F] leading-relaxed max-w-md">
              Đôi bàn tay kỳ diệu — Trị liệu bằng cả trái tim. Cơ sở xoa bóp bấm huyệt gia truyền của người khiếm thị tại xứ Huế, chuyên phục hồi thoái hóa cột sống, cổ vai gáy, thoát vị đĩa đệm và mất ngủ.
            </p>

            <div className="pt-2 text-xs text-[#F3D5A5] space-y-1.5 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Hotline / Zalo: <strong className="text-white text-sm">{SPA_INFO.hotline}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Giờ mở cửa: {SPA_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Single Address Highlight */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Địa Chỉ Cơ Sở Duy Nhất
            </h4>
            <div className="p-3.5 bg-[#4A2910] rounded-xl border border-[#6B3E19] text-xs text-[#EAD6C0] space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm">
                    {SPA_INFO.address}
                  </strong>
                  <span className="text-[11px] text-[#CBB299] mt-0.5 block">
                    Phường Vỹ Dạ, Thành phố Huế
                  </span>
                </div>
              </div>
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <a
                  href={`tel:${SPA_INFO.hotlineRaw}`}
                  className="px-3 py-1.5 bg-[#8C5E2D] text-white text-[11px] font-bold rounded hover:bg-[#A7773E] transition-colors"
                >
                  Gọi Chỉ Đường: {SPA_INFO.hotline}
                </a>
                <a
                  href={SPA_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#5A3314] border border-[#8C5E2D] text-[#F3D5A5] text-[11px] font-bold rounded hover:bg-[#724119] transition-colors"
                >
                  Xem Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Dịch Vụ Phục Vụ
            </h4>
            <ul className="space-y-1.5 text-xs text-[#D1B89F]">
              <li>
                <a href="#dich-vu" className="hover:text-white transition-colors">· Trị liệu bấm huyệt Cổ Vai Gáy</a>
              </li>
              <li>
                <a href="#dich-vu" className="hover:text-white transition-colors">· Massage Body Đá Nóng Bazan</a>
              </li>
              <li>
                <a href="#dich-vu" className="hover:text-white transition-colors">· Trị liệu Cột Sống Thắt Lưng L4-L5</a>
              </li>
              <li>
                <a href="#dich-vu" className="hover:text-white transition-colors">· Ngâm chân thảo dược nước ấm</a>
              </li>
              <li>
                <a href="#dich-vu" className="hover:text-white transition-colors">· Gội đầu dưỡng sinh bồ kết</a>
              </li>
              <li>
                <a href="#dich-vu" className="hover:text-white transition-colors">· Xông hơi lá tươi & Giác hơi</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B89B7D] gap-3">
          <div>
            © {new Date().getFullYear()} Phú Thành - Massage Khiếm Thị TP. Huế. Phục vụ tận tâm, uy tín.
          </div>
          <div className="flex items-center gap-3">
            <span>Cơ sở Vỹ Dạ, Huế</span>
            <span>·</span>
            <a href={`tel:${SPA_INFO.hotlineRaw}`} className="text-[#D4AF37] font-semibold hover:underline">
              Điện thoại: {SPA_INFO.hotline}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
