import React, { useState } from 'react';
import { Camera, MapPin, Sparkles, X, ChevronRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tag: string;
  description: string;
}

export const FacilityGallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'cong-bien-hieu',
      title: 'Cổng Vào & Biển Hiệu Nhận Diện',
      category: 'Mặt Tiền Cơ Sở',
      image: '/images/phu_thanh_real_gate_1790649534752.jpg',
      tag: 'Số 2 Kiệt 186 Nguyễn Sinh Cung',
      description: 'Biển hiệu chính thức sáng đèn với logo bàn tay nâng niu đôi mắt. Cổng gạch đỏ rộng rãi, sân trong có chỗ để xe máy và bãi đậu ô tô vào tận cửa cơ sở.',
    },
    {
      id: 'phong-tri-lieu',
      title: 'Phòng Trị Liệu Bấm Huyệt 3 Giường',
      category: 'Phòng Trị Liệu',
      image: '/images/phu_thanh_real_room_1790649556393.jpg',
      tag: 'Phòng Máy Lạnh — Ốp Gỗ Ấm Cúng',
      description: 'Không gian tĩnh lặng, vách tường ốp gỗ ấm áp. Giường nệm êm ái, gối úp mặt chuyên dụng và khăn trải giặt sấy sả chanh thơm tho, thay mới 100% sau mỗi lượt khách.',
    },
    {
      id: 'sanh-don-tiep',
      title: 'Sảnh Đón Tiếp Nhà Rường Gỗ Truyền Thống',
      category: 'Sảnh Chờ & Tiếp Khách',
      image: '/images/phu_thanh_real_interior_1790649966059.jpg',
      tag: 'Kiến Trúc Rường Gỗ Huế',
      description: 'Khu vực đón tiếp mang đậm hồn cốt xứ Huế với bộ bàn ghế trường kỷ gỗ tự nhiên, trần gỗ bát giác sang trọng, nơi khách ngồi uống trà gừng và nghỉ ngơi trước sau buổi trị liệu.',
    },
    {
      id: 'ngam-chan-thao-moc',
      title: 'Góc Ngâm Chân Thảo Mộc Thùng Gỗ',
      category: 'Chăm Sóc & Thư Giãn',
      image: '/images/phu_thanh_real_footsoak_1790649584369.jpg',
      tag: 'Thảo Dược Gừng Quế Ấm Áp',
      description: 'Thùng gỗ thông tự nhiên ngâm chân nước lá thảo mộc đun ấm, giúp giải độc hàn ẩm, kích hoạt huyệt Dũng Tuyền và mang lại cảm giác thư thái tối đa.',
    },
  ];

  return (
    <section id="hinh-anh" className="py-16 sm:py-24 bg-[#F5ECE0] border-b border-[#DBC4A8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C5E2D] uppercase mb-2 bg-[#E6D4BE] px-3.5 py-1 rounded-full border border-[#D0BA9F]">
            <Camera className="w-3.5 h-3.5 text-[#8C5E2D]" />
            <span>Hình Ảnh Thực Tế Tại Cơ Sở</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#381F0B] text-balance">
            Không Gian <span className="italic text-[#8C5E2D]">Phú Thành</span> Thực Tế
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5D3F24] leading-relaxed">
            100% hình ảnh thực tế ghi lại không gian nhà rường gỗ ấm cúng, phòng trị liệu máy lạnh riêng tư và góc ngâm chân thảo mộc thanh tịnh tại số 2 kiệt 186 Nguyễn Sinh Cung, Vỹ Dạ, Huế.
          </p>
        </div>

        {/* Gallery Grid: 4 Real Photo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group bg-[#FFFDF9] rounded-2xl overflow-hidden border-2 border-[#D8C1A5] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Image Frame with Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#DEC8AC]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge Top Left */}
                <div className="absolute top-3 left-3 bg-[#5A3114]/90 backdrop-blur-xs text-[#F5DEBF] text-[11px] font-semibold px-2.5 py-1 rounded-md shadow border border-[#8C5226]">
                  {item.category}
                </div>

                {/* Bottom title on image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-semibold text-[#F3D5A5] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#F3D5A5]" />
                    <span>{item.tag}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-lg font-bold text-[#381F0B] group-hover:text-[#8C5E2D] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6F4B2B] mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#EFE0CE] flex items-center justify-between text-xs font-semibold text-[#8C5E2D]">
                  <span>Xem ảnh lớn</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner under Gallery */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-[#EFE1CF] border border-[#D5BF9F] flex flex-col sm:flex-row items-center justify-around gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5 text-[#3D2510] text-xs sm:text-sm font-semibold">
            <ShieldCheck className="w-5 h-5 text-[#8C5E2D] shrink-0" />
            <span>Phòng máy lạnh, ga gối giặt sấy sả chanh thay mới 100%</span>
          </div>

          <div className="h-4 w-px bg-[#D5BF9F] hidden sm:block" />

          <div className="flex items-center gap-2.5 text-[#3D2510] text-xs sm:text-sm font-semibold">
            <HeartHandshake className="w-5 h-5 text-[#8C5E2D] shrink-0" />
            <span>Đón tiếp chu đáo, miễn phí nước ngâm chân & tách trà gừng Huế</span>
          </div>

          <div className="h-4 w-px bg-[#D5BF9F] hidden sm:block" />

          <div className="flex items-center gap-2.5 text-[#3D2510] text-xs sm:text-sm font-semibold">
            <MapPin className="w-5 h-5 text-[#8C5E2D] shrink-0" />
            <span>Cơ sở số 2 kiệt 186 Nguyễn Sinh Cung, Vỹ Dạ, TP. Huế</span>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal when clicking photo */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-[#FFFDF9] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D8C1A5] max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 p-2.5 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors cursor-pointer active:scale-95"
              aria-label="Đóng ảnh"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[4/3] bg-black shrink-0">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-4 sm:p-5 bg-[#FAF3EA] border-t border-[#DECBB4] overflow-y-auto">
              <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#E4D1BA] text-[#5F3514] mb-1.5 uppercase tracking-wide">
                {selectedPhoto.category} — {selectedPhoto.tag}
              </div>
              <h3 className="font-serif-luxury text-lg sm:text-2xl font-bold text-[#381F0B]">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5D3F24] mt-1.5 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
