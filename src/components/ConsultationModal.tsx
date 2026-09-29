import React, { useState } from 'react';
import { X, Activity, Phone, ArrowRight, MessageCircle, Check } from 'lucide-react';
import { SERVICES_DATA, SPA_INFO } from '../data/spaData';

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

  if (!isOpen) return null;

  const concerns = [
    {
      id: 'neck',
      title: 'Đau mỏi cổ vai gáy, cứng cổ & đau nửa đầu',
      desc: 'Ngồi máy tính nhiều giờ, bả vai căng cứng như đá, đau lan lên vùng chẩm và tê bì cánh tay.',
      recommend: 'Xoa Bóp - Bấm Huyệt (140.000đ / 60p — 210.000đ / 90p)',
    },
    {
      id: 'back',
      title: 'Đau lưng, thắt lưng & đau nhói dây thần kinh tọa',
      desc: 'Khó cúi người, đau ê ẩm vùng thắt lưng L4-L5, nhói buốt lan từ mông xuống bắp chân.',
      recommend: 'Xoa Bóp - Bấm Huyệt - Đá Nóng (170.000đ / 60p — 240.000đ / 90p)',
    },
    {
      id: 'insomnia',
      title: 'Mất ngủ kinh niên, lạnh bàn chân & mệt mỏi',
      desc: 'Chân tay lạnh, khó vào giấc, đêm trằn trọc nhiều mộng mị, thức dậy người uể oải.',
      recommend: 'Massage Chân - Ngâm Chân Thảo Dược (170.000đ / 60p — 240.000đ / 90p)',
    },
    {
      id: 'fatigue',
      title: 'Toàn thân nhức mỏi, cảm gió, nhiễm lạnh hàn ẩm',
      desc: 'Cơ bắp rã rời sau những ngày đi lại tham quan xứ Huế hoặc lao động mệt mỏi.',
      recommend: 'Xoa Bóp - Bấm Huyệt - Giác Hơi - Đá Nóng (200.000đ / 60p — 270.000đ / 90p)',
    },
  ];

  const currentConcern = concerns.find((c) => c.id === selectedConcern) || concerns[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-[#FAF5EE] rounded-2xl max-w-lg w-full border-2 border-[#D5BF9F] shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#7C5A3C] hover:text-[#381F0B] hover:bg-[#EBDBC6] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C5E2D] uppercase tracking-wider mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>Tư Vấn Tình Trạng Đau Mỏi</span>
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#381F0B] mb-2">
              Bạn đang gặp vấn đề ở vùng cơ thể nào?
            </h3>
            <p className="text-xs text-[#5D3F24] mb-5">
              Chọn triệu chứng để Phú Thành gợi ý bài xoa bóp bấm huyệt hiệu quả nhất.
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
              <span>Xem Liệu Trình Đề Xuất & Liên Hệ</span>
              <ArrowRight className="w-4 h-4 text-[#F3D5A5]" />
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C5E2D] uppercase tracking-wider mb-2">
              <Check className="w-4 h-4 text-emerald-700" />
              <span>Phác Đồ Bấm Huyệt Đề Xuất Cho Bạn</span>
            </div>

            <h3 className="font-serif-luxury text-2xl font-bold text-[#381F0B] mb-2">
              {currentConcern.recommend}
            </h3>

            <div className="p-4 bg-[#F2E5D4] rounded-xl border border-[#D5C0A4] text-xs text-[#54361C] space-y-2 mb-6">
              <p>
                Kỹ thuật viên khiếm thị sẽ dùng kỹ thuật miết cơ sâu, bấm chuẩn các huyệt đạo trọng yếu để gỡ bỏ điểm co cứng và giải tỏa chèn ép dây thần kinh.
              </p>
              <div className="font-semibold text-[#8C5E2D] pt-1">
                Địa chỉ: {SPA_INFO.address}
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${SPA_INFO.hotlineRaw}`}
                className="w-full py-3.5 bg-[#5F3514] text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-[#77441B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md border border-[#80481B] active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#F3D5A5] animate-bounce" />
                <span>Gọi 0905 700 923 Để Giữ Chỗ Ngay</span>
              </a>

              <a
                href={`https://zalo.me/${SPA_INFO.hotlineRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#E4D1BA] text-[#3D2510] text-xs font-bold rounded-lg hover:bg-[#D9C4AB] transition-colors flex items-center justify-center gap-2 border border-[#C5AF96]"
              >
                <MessageCircle className="w-4 h-4 text-[#0068FF]" />
                <span>Nhắn Tin Trao Đổi Qua Zalo</span>
              </a>

              <button
                onClick={() => setStep(1)}
                className="w-full py-1 text-xs text-[#704E31] hover:underline text-center"
              >
                Kiểm tra lại triệu chứng khác
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
