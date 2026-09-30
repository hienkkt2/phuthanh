import React, { useState } from 'react';
import { X, Activity, Phone, ArrowRight, MessageCircle, Check } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';
import { useLanguage } from '../context/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedConcern, setSelectedConcern] = useState<string>('neck');
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const concerns = [
    {
      id: 'neck',
      title: language === 'vi' ? 'Đau mỏi cổ vai gáy, cứng cổ & đau nửa đầu' : 'Stiff neck, shoulder tension & tension headaches',
      desc: language === 'vi' ? 'Ngồi máy tính nhiều giờ, bả vai căng cứng như đá, đau lan lên vùng chẩm và tê bì cánh tay.' : 'Prolonged screen time, rock-solid shoulder muscles, tension radiating to occiput and arm numbness.',
      recommend: language === 'vi' ? 'Xoa Bóp - Bấm Huyệt (140.000đ / 60p — 210.000đ / 90p)' : 'Acupressure & Body Massage (140k / 60m — 210k / 90m)',
    },
    {
      id: 'back',
      title: language === 'vi' ? 'Đau lưng, thắt lưng & đau nhói dây thần kinh tọa' : 'Lower back pain, lumbar strain & sciatica discomfort',
      desc: language === 'vi' ? 'Khó cúi người, đau ê ẩm vùng thắt lưng L4-L5, nhói buốt lan từ mông xuống bắp chân.' : 'Difficulty bending, chronic ache in lumbar L4-L5, sciatic nerve tingling down to calf.',
      recommend: language === 'vi' ? 'Xoa Bóp - Bấm Huyệt - Đá Nóng (170.000đ / 60p — 240.000đ / 90p)' : 'Massage & Basalt Hot Stone (170k / 60m — 240k / 90m)',
    },
    {
      id: 'insomnia',
      title: language === 'vi' ? 'Mất ngủ kinh niên, lạnh bàn chân & mệt mỏi' : 'Chronic insomnia, cold feet & restless sleep',
      desc: language === 'vi' ? 'Chân tay lạnh, khó vào giấc, đêm trằn trọc nhiều mộng mị, thức dậy người uể oải.' : 'Cold extremities, trouble falling asleep, unrestful nights, waking up exhausted.',
      recommend: language === 'vi' ? 'Massage Chân - Ngâm Chân Thảo Dược (170.000đ / 60p — 240.000đ / 90p)' : 'Foot Reflexology & Herbal Foot Bath (170k / 60m — 240k / 90m)',
    },
    {
      id: 'fatigue',
      title: language === 'vi' ? 'Toàn thân nhức mỏi, cảm gió, nhiễm lạnh hàn ẩm' : 'Full body fatigue, wind-chill & travel exhaustion',
      desc: language === 'vi' ? 'Cơ bắp rã rời sau những ngày đi lại tham quan xứ Huế hoặc lao động mệt mỏi.' : 'Exhausted muscles after long walking tours around Hue or strenuous work.',
      recommend: language === 'vi' ? 'Xoa Bóp - Bấm Huyệt - Giác Hơi - Đá Nóng (200.000đ / 60p — 270.000đ / 90p)' : 'VIP Acupressure + Bamboo Cupping + Hot Stone (200k / 60m — 270k / 90m)',
    },
  ];

  const currentConcern = concerns.find((c) => c.id === selectedConcern) || concerns[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-[#FAF5EE] rounded-2xl max-w-lg w-full border-2 border-[#D5BF9F] shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#7C5A3C] hover:text-[#381F0B] hover:bg-[#EBDBC6] rounded-full transition-colors cursor-pointer"
          aria-label={t('modal_close')}
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C5E2D] uppercase tracking-wider mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>{language === 'vi' ? 'Tư Vấn Tình Trạng Đau Mỏi' : 'Condition Consultation'}</span>
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#381F0B] mb-2">
              {language === 'vi' ? 'Bạn đang gặp vấn đề ở vùng cơ thể nào?' : 'Where do you feel soreness or fatigue?'}
            </h3>
            <p className="text-xs text-[#5D3F24] mb-5">
              {language === 'vi'
                ? 'Chọn triệu chứng để Phú Thành gợi ý bài xoa bóp bấm huyệt hiệu quả nhất.'
                : 'Select your symptoms so our therapists can recommend the optimal therapy.'}
            </p>

            <div className="space-y-3 mb-6">
              {concerns.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedConcern(item.id)}
                  className={`w-full text-left p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                    selectedConcern === item.id
                      ? 'bg-[#FCF9F3] border-[#8C5E2D] shadow-sm'
                      : 'bg-[#F2E5D4] border-[#DCC7AF] hover:bg-[#FCF9F3]'
                  }`}
                >
                  <div className="text-xs font-bold text-[#381F0B]">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#694729] mt-1 font-medium">
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3 bg-[#5F3514] text-white text-xs font-bold rounded-lg hover:bg-[#77441B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>{language === 'vi' ? 'Xem Liệu Trình Đề Xuất & Liên Hệ' : 'View Recommended Therapy & Contact'}</span>
              <ArrowRight className="w-4 h-4 text-[#F3D5A5]" />
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C5E2D] uppercase tracking-wider mb-2">
              <Check className="w-4 h-4 text-emerald-700" />
              <span>{language === 'vi' ? 'Phác Đồ Bấm Huyệt Đề Xuất Cho Bạn' : 'Recommended Protocol For You'}</span>
            </div>

            <h3 className="font-serif-luxury text-2xl font-bold text-[#381F0B] mb-2">
              {currentConcern.recommend}
            </h3>

            <div className="p-4 bg-[#F2E5D4] rounded-xl border border-[#D5C0A4] text-xs text-[#54361C] space-y-2 mb-6">
              <p>
                {language === 'vi'
                  ? 'Kỹ thuật viên khiếm thị sẽ dùng kỹ thuật miết cơ sâu, bấm chuẩn các huyệt đạo trọng yếu để gỡ bỏ điểm co cứng và giải tỏa chèn ép dây thần kinh.'
                  : 'Our blind therapists will apply deep trigger-point strokes and authentic acupressure to release muscular tension and free compressed nerves.'}
              </p>
              <div className="font-semibold text-[#8C5E2D] pt-1">
                {t('quick_address_label')} {SPA_INFO.address}
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${SPA_INFO.hotlineRaw}`}
                className="w-full py-3.5 bg-[#5F3514] text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-[#77441B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md border border-[#80481B] active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#F3D5A5] animate-bounce" />
                <span>{language === 'vi' ? 'Gọi 0905 700 923 Để Giữ Chỗ Ngay' : 'Call 0905 700 923 to Reserve'}</span>
              </a>

              <a
                href={`https://zalo.me/${SPA_INFO.hotlineRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#E4D1BA] text-[#3D2510] text-xs font-bold rounded-lg hover:bg-[#D9C4AB] transition-colors flex items-center justify-center gap-2 border border-[#C5AF96]"
              >
                <MessageCircle className="w-4 h-4 text-[#0068FF]" />
                <span>{language === 'vi' ? 'Nhắn Tin Trao Đổi Qua Zalo' : 'Chat via Zalo / WhatsApp'}</span>
              </a>

              <button
                onClick={() => setStep(1)}
                className="w-full py-1 text-xs text-[#704E31] hover:underline text-center cursor-pointer"
              >
                {language === 'vi' ? 'Kiểm tra lại triệu chứng khác' : 'Check other symptoms'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
