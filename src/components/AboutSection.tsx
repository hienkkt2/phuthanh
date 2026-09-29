import React, { useState } from 'react';
import { HeartHandshake, ShieldCheck, Sparkles, MapPin, Coffee, CheckCircle2 } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

export const AboutSection: React.FC = () => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const realPhotos = [
    {
      title: 'Phòng Trị Liệu Bấm Huyệt Máy Lạnh',
      subtitle: 'Không gian ốp gỗ ấm cúng, 3 giường nệm êm ái, khăn ga thơm sạch thay mới 100%',
      image: '/src/assets/images/phu_thanh_real_room_1790649556393.jpg',
      badge: 'Phòng Trị Liệu 3 Giường',
    },
    {
      title: 'Khu Vực Ngâm Chân Thảo Mộc Thùng Gỗ',
      subtitle: 'Nước lá gừng quế ấm nóng khai thông huyệt đạo bàn chân, kết hợp thưởng trà gừng',
      image: '/src/assets/images/phu_thanh_real_footsoak_1790649584369.jpg',
      badge: 'Ngâm Chân Thảo Mộc',
    },
    {
      title: 'Cổng Vào & Biển Hiệu Số 2 Kiệt 186 Nguyễn Sinh Cung',
      subtitle: 'Cổng vào thông thoáng, biển hiệu sáng rõ, ô tô vào tận cổng cơ sở Vỹ Dạ',
      image: '/src/assets/images/phu_thanh_real_gate_1790649534752.jpg',
      badge: 'Cổng Cơ Sở Vỹ Dạ',
    },
  ];

  const currentPhoto = realPhotos[activePhotoIdx];

  const pillars = [
    {
      title: '01. Xúc Giác Nhạy Bén Bấm Chuẩn Từng Huyệt Vị',
      desc: 'Khi thị giác không còn phân tán, đôi bàn tay của kỹ thuật viên khiếm thị phát triển trực giác xúc giác tuyệt vời. Lần theo từng dải cơ, phát hiện chính xác nơi co cứng bó cơ, kinh lạc bị nghẽn tắc.',
    },
    {
      title: '02. Đào Tạo Bài Bản Từ Hội Người Mù & Viện Y Học Cổ Truyền',
      desc: '100% người khiếm thị làm việc tại Phú Thành đều trải qua hàng ngàn giờ học giải phẫu cơ xương và xoa bóp bấm huyệt trị liệu, có chứng chỉ hành nghề chính quy.',
    },
    {
      title: '03. Không Gian Sạch Sẽ, Lịch Sự & Riêng Tư',
      desc: 'Phòng máy lạnh kín đáo, có phòng riêng nam/nữ, phòng cho gia đình hoặc cặp đôi. Ga giường và khăn trải giặt sấy thơm mùi sả chanh, thay mới 100% sau mỗi lượt khách.',
    },
    {
      title: '04. Giá Bình Dân — Minh Bạch Niêm Yết Rõ Ràng',
      desc: 'Phục vụ bằng cái tâm chân chất của người Huế. Bảng giá niêm yết công khai từ 140.000đ (dịch vụ thêm từ 40.000đ), miễn phí nước ngâm chân thảo dược ấm và tách trà gừng thơm sau liệu trình.',
    },
  ];

  return (
    <section id="ve-chung-toi" className="py-16 sm:py-24 bg-[#F8F2E8] border-b border-[#DDC6AB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C5E2D] uppercase mb-2 bg-[#EADAC5] px-3 py-1 rounded-full border border-[#D5C0A4]">
            <HeartHandshake className="w-3.5 h-3.5 text-[#8C5E2D]" />
            <span>Nghị Lực & Chân Thành Xứ Huế</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#381F0B] text-balance">
            Nâng Cao Thể Lực, <span className="italic text-[#8C5E2D]">Chắp Cánh Sinh Kế</span> Từ Đôi Bàn Tay
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5D3F24] leading-relaxed">
            Cơ sở <strong>Phú Thành - Massage Khiếm Thị</strong> tại số 2 kiệt 186 Nguyễn Sinh Cung, Vỹ Dạ, Huế là mái nhà chung của những người khiếm thị yêu nghề. Chúng tôi mang đến dịch vụ xoa bóp bấm huyệt đàng hoàng, tử tế, trị liệu tận gốc cơn đau mỏi cho người dân địa phương và du khách.
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
              <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm p-1 rounded-lg border border-white/20 z-10">
                {realPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${
                      activePhotoIdx === idx
                        ? 'bg-[#5F3514] text-[#F3D5A5] shadow border border-[#8C5E2D]'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {photo.badge}
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
