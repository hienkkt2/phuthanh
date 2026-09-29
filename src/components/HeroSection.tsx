import React from 'react';
import { Phone, MapPin, ShieldCheck, HeartHandshake, ArrowRight, MessageCircle } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

interface HeroSectionProps {
  onDirectCall: () => void;
  onOpenConsult: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDirectCall,
  onOpenConsult,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5EE] via-[#F4ECE0] to-[#EFE3D2] pt-6 pb-12 lg:pt-10 lg:pb-16 border-b border-[#DECBB4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C5E2D] uppercase bg-[#EBD9C3] px-3 py-1 rounded-full border border-[#D8C1A4]">
              <HeartHandshake className="w-3.5 h-3.5 text-[#8C5E2D]" />
              <span>Phú Thành — Massage Khiếm Thị TP. Huế</span>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#381F0B] leading-[1.18] text-balance">
              Đôi Bàn Tay Kỳ Diệu, <br />
              <span className="italic font-normal text-[#8C5E2D]">Trị Liệu Bằng Cả Trái Tim</span>
            </h1>

            <p className="text-base sm:text-lg text-[#523720] leading-relaxed max-w-xl font-normal">
              Đội ngũ kỹ thuật viên khiếm thị tay nghề cao, được đào tạo chính quy từ Hội Người Mù & Viện Y Dược Học Dân Tộc. Đôi bàn tay bắt trúng huyệt đạo, gỡ sạch nút thắt co cơ cổ vai gáy, thoát vị đĩa đệm, đau lưng và mất ngủ.
            </p>

            {/* Address Banner Notice */}
            <div className="p-3.5 rounded-xl bg-[#EFE3D1] border border-[#D5BF9F] text-[#45270E] flex items-start justify-between gap-2.5 shadow-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8C5E2D] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-[#331B07]">Cơ sở duy nhất:</strong> {SPA_INFO.address}
                  <div className="text-[12px] text-[#6E4723] mt-0.5 font-medium">
                    (Kiệt 186 Nguyễn Sinh Cung cách đường lớn 20m, bãi đỗ xe máy & ô tô thông thoáng)
                  </div>
                </div>
              </div>
              <a
                href={SPA_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-2.5 py-1 bg-[#8C5E2D] text-white hover:bg-[#5F3514] text-[11px] font-bold rounded transition-colors whitespace-nowrap"
              >
                Chỉ Đường
              </a>
            </div>

            {/* Direct Call to Action */}
            <div className="space-y-3 pt-1 max-w-xl">
              <a
                href={`tel:${SPA_INFO.hotlineRaw}`}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-[#5F3514] rounded-xl hover:bg-[#77441B] transition-all shadow-md active:scale-[0.99] border border-[#80481B]"
              >
                <Phone className="w-5 h-5 text-[#F3D5A5] animate-bounce" />
                <span>Gọi Điện Đặt Chỗ: {SPA_INFO.hotline}</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://zalo.me/${SPA_INFO.hotlineRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#3D2510] bg-[#E9D9C3] border border-[#CBB092] rounded-xl hover:bg-[#DFCDB4] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#0068FF] shrink-0" />
                  <span>Nhắn Tin Zalo</span>
                </a>

                <a
                  href={SPA_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#5F3514] bg-[#FAF5EE] border border-[#D5C0A4] rounded-xl hover:bg-[#EFE3D2] transition-colors shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-[#8C5E2D] shrink-0" />
                  <span>Xem Google Map</span>
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
                  Năm kinh nghiệm
                </div>
              </div>

              <div className="bg-[#EFE3D2]/70 border border-[#D8C2A7] rounded-xl p-3 flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#381F0B] tracking-tight leading-none">
                  100%
                </div>
                <div className="text-xs text-[#6F4B2B] mt-1.5 font-medium leading-snug">
                  KTV có chứng chỉ
                </div>
              </div>

              <div className="bg-[#EFE3D2]/70 border border-[#D8C2A7] rounded-xl p-3 flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#381F0B] tracking-tight leading-none">
                  100%
                </div>
                <div className="text-xs text-[#6F4B2B] mt-1.5 font-medium leading-snug">
                  Khăn ga thơm sạch
                </div>
              </div>

              <div className="bg-[#EFE3D2]/70 border border-[#D8C2A7] rounded-xl p-3 flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#381F0B] tracking-tight leading-none">
                  Từ 140k
                </div>
                <div className="text-xs text-[#6F4B2B] mt-1.5 font-medium leading-snug">
                  Gói xoa bóp 60 phút
                </div>
              </div>
            </div>
          </div>

          {/* Right Marquee Visual Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#D3BA9E] bg-[#E0CDAF] aspect-[16/11]">
              <img
                src="/src/assets/images/phu_thanh_hero_1790648702096.jpg"
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
                    <span>Không Gian Ấm Cúng — Sạch Sẽ — Văn Minh</span>
                  </div>
                  <div className="text-[11px] text-[#694729] mt-0.5 font-medium">
                    Phòng máy lạnh, khăn ga giặt sấy thơm mùi sả chanh thay mới 100%
                  </div>
                </div>
                <a
                  href="#dich-vu"
                  className="text-xs font-bold text-[#8C5E2D] hover:text-[#5F3514] flex items-center gap-1 whitespace-nowrap pl-3 border-l border-[#DCC7AF]"
                >
                  <span>Bảng Giá</span>
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
