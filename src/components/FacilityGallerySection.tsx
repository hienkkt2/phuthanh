import React, { useState } from 'react';
import { Camera, MapPin, Sparkles, X, ChevronRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';
import { useLanguage } from '../context/LanguageContext';

interface GalleryItem {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  image: string;
  tag: string;
  tagEn: string;
  description: string;
  descriptionEn: string;
}

export const FacilityGallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const { language, t } = useLanguage();

  const galleryItems: GalleryItem[] = [
    {
      id: 'cong-bien-hieu',
      title: 'Cổng Vào & Biển Hiệu Nhận Diện',
      titleEn: 'Entrance Gate & Official Signboard',
      category: 'Mặt Tiền Cơ Sở',
      categoryEn: 'Exterior & Entrance',
      image: '/images/phu_thanh_real_gate_1790649534752.jpg',
      tag: 'Số 2 Kiệt 186 Nguyễn Sinh Cung',
      tagEn: 'No. 2, Alley 186 Nguyen Sinh Cung',
      description: 'Biển hiệu chính thức sáng đèn với logo bàn tay nâng niu đôi mắt. Cổng gạch đỏ rộng rãi, sân trong có chỗ để xe máy và bãi đậu ô tô vào tận cửa cơ sở.',
      descriptionEn: 'Official illuminated signboard featuring the healing hands logo. Spacious red brick entrance gate with safe motorbike and car parking right at the doorstep.',
    },
    {
      id: 'phong-tri-lieu',
      title: 'Phòng Trị Liệu Bấm Huyệt 3 Giường',
      titleEn: '3-Bed Acupressure Treatment Room',
      category: 'Phòng Trị Liệu',
      categoryEn: 'Treatment Room',
      image: '/images/phu_thanh_real_room_1790649556393.jpg',
      tag: 'Phòng Máy Lạnh — Ốp Gỗ Ấm Cúng',
      tagEn: 'Air-conditioned — Warm Wood Paneling',
      description: 'Không gian tĩnh lặng, vách tường ốp gỗ ấm áp. Giường nệm êm ái, gối úp mặt chuyên dụng và khăn trải giặt sấy sả chanh thơm tho, thay mới 100% sau mỗi lượt khách.',
      descriptionEn: 'Peaceful quiet ambiance with warm wooden wall cladding. Comfortable orthopedic massage beds, face cradles, and 100% freshly sanitized lemongrass-scented linens.',
    },
    {
      id: 'sanh-don-tiep',
      title: 'Sảnh Đón Tiếp Nhà Rường Gỗ Truyền Thống',
      titleEn: 'Traditional Hue Wooden Reception Hall',
      category: 'Sảnh Chờ & Tiếp Khách',
      categoryEn: 'Reception Lounge',
      image: '/images/phu_thanh_real_interior_1790649966059.jpg',
      tag: 'Kiến Trúc Rường Gỗ Huế',
      tagEn: 'Hue Wooden Architecture',
      description: 'Khu vực đón tiếp mang đậm hồn cốt xứ Huế với bộ bàn ghế trường kỷ gỗ tự nhiên, trần gỗ bát giác sang trọng, nơi khách ngồi uống trà gừng và nghỉ ngơi trước sau buổi trị liệu.',
      descriptionEn: 'Authentic royal Hue atmosphere featuring handcrafted wooden settees, classic octagonal ceiling woodwork, where guests relax and enjoy fresh ginger tea.',
    },
    {
      id: 'ngam-chan-thao-moc',
      title: 'Góc Ngâm Chân Thảo Mộc Thùng Gỗ',
      titleEn: 'Wooden Bucket Herbal Foot Soak Lounge',
      category: 'Chăm Sóc & Thư Giãn',
      categoryEn: 'Foot Care & Relaxation',
      image: '/images/phu_thanh_real_footsoak_1790649584369.jpg',
      tag: 'Thảo Dược Gừng Quế Ấm Áp',
      tagEn: 'Warm Ginger & Cinnamon Broth',
      description: 'Thùng gỗ thông tự nhiên ngâm chân nước lá thảo mộc đun ấm, giúp giải độc hàn ẩm, kích hoạt huyệt Dũng Tuyền và mang lại cảm giác thư thái tối đa.',
      descriptionEn: 'Natural pine wood foot basins filled with warm boiled medicinal herbal water, dispelling damp chill, stimulating Yongquan reflex points, and restoring vitality.',
    },
  ];

  return (
    <section id="hinh-anh" className="py-16 sm:py-24 bg-[#F5ECE0] border-b border-[#DBC4A8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C5E2D] uppercase mb-2 bg-[#E6D4BE] px-3.5 py-1 rounded-full border border-[#D0BA9F]">
            <Camera className="w-3.5 h-3.5 text-[#8C5E2D]" />
            <span>{t('gallery_tag')}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#381F0B] text-balance">
            {t('gallery_title_1')} <span className="italic text-[#8C5E2D]">{t('gallery_title_2')}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5D3F24] leading-relaxed">
            {t('gallery_desc')}
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
                  alt={language === 'vi' ? item.title : item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge Top Left */}
                <div className="absolute top-3 left-3 bg-[#5A3114]/90 backdrop-blur-xs text-[#F5DEBF] text-[11px] font-semibold px-2.5 py-1 rounded-md shadow border border-[#8C5226]">
                  {language === 'vi' ? item.category : item.categoryEn}
                </div>

                {/* Bottom title on image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-semibold text-[#F3D5A5] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#F3D5A5]" />
                    <span>{language === 'vi' ? item.tag : item.tagEn}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-lg font-bold text-[#381F0B] group-hover:text-[#8C5E2D] transition-colors leading-snug">
                    {language === 'vi' ? item.title : item.titleEn}
                  </h3>
                  <p className="text-xs text-[#6F4B2B] mt-2 line-clamp-2 leading-relaxed">
                    {language === 'vi' ? item.description : item.descriptionEn}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#EFE0CE] flex items-center justify-between text-xs font-semibold text-[#8C5E2D]">
                  <span>{t('gallery_view_large')}</span>
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
            <span>{t('gallery_reassure_1')}</span>
          </div>

          <div className="h-4 w-px bg-[#D5BF9F] hidden sm:block" />

          <div className="flex items-center gap-2.5 text-[#3D2510] text-xs sm:text-sm font-semibold">
            <HeartHandshake className="w-5 h-5 text-[#8C5E2D] shrink-0" />
            <span>{t('gallery_reassure_2')}</span>
          </div>

          <div className="h-4 w-px bg-[#D5BF9F] hidden sm:block" />

          <div className="flex items-center gap-2.5 text-[#3D2510] text-xs sm:text-sm font-semibold">
            <MapPin className="w-5 h-5 text-[#8C5E2D] shrink-0" />
            <span>{t('gallery_reassure_3')}</span>
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
              aria-label={t('modal_close')}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[4/3] bg-black shrink-0">
              <img
                src={selectedPhoto.image}
                alt={language === 'vi' ? selectedPhoto.title : selectedPhoto.titleEn}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-4 sm:p-5 bg-[#FAF3EA] border-t border-[#DECBB4] overflow-y-auto">
              <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#E4D1BA] text-[#5F3514] mb-1.5 uppercase tracking-wide">
                {language === 'vi' ? selectedPhoto.category : selectedPhoto.categoryEn} — {language === 'vi' ? selectedPhoto.tag : selectedPhoto.tagEn}
              </div>
              <h3 className="font-serif-luxury text-lg sm:text-2xl font-bold text-[#381F0B]">
                {language === 'vi' ? selectedPhoto.title : selectedPhoto.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-[#5D3F24] mt-1.5 leading-relaxed">
                {language === 'vi' ? selectedPhoto.description : selectedPhoto.descriptionEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
