import React from 'react';
import { X, Clock, CheckCircle2, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { Service } from '../types';
import { formatPrice } from '../utils/format';
import { SPA_INFO } from '../data/spaData';
import { useLanguage } from '../context/LanguageContext';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {
  const { language, t } = useLanguage();

  if (!service) return null;

  const title = language === 'vi' ? service.name : (service.nameEn || service.name);
  const description = language === 'vi' ? service.description : (service.descriptionEn || service.description);
  const steps = language === 'vi' ? service.steps : (service.stepsEn || service.steps);
  const benefits = language === 'vi' ? service.benefits : (service.benefitsEn || service.benefits);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-[#FAF5EE] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#D5BF9F] shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#7C5A3C] hover:text-[#381F0B] hover:bg-[#EBDBC6] rounded-full transition-colors cursor-pointer"
          aria-label={t('modal_close')}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-bold text-[#8C5E2D] uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'vi' ? 'Chi Tiết Liệu Trình Bấm Huyệt Phú Thành' : 'Phu Thanh Treatment Details'}</span>
        </div>

        <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#381F0B] pr-8">
          {title}
        </h2>

        {/* Unboxed Metadata & Pricing */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#704E31] mt-3 pb-4 border-b border-[#E3D0BC] font-medium">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-[#381F0B]">
              <Clock className="w-3.5 h-3.5 text-[#8C5E2D]" />
              <span>
                {language === 'vi'
                  ? `Thời lượng: ${service.price90 ? '60 phút / 90 phút' : `${service.durationMinutes} phút`}`
                  : `Duration: ${service.price90 ? '60 min / 90 min' : `${service.durationMinutes} min`}`}
              </span>
            </span>
            <span>·</span>
            <span>{language === 'vi' ? `Quy trình: ${steps.length} bước` : `Procedure: ${steps.length} steps`}</span>
          </div>

          <div>
            {service.price90 ? (
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-[#EAE0D2] rounded text-xs font-bold text-[#643D1A] border border-[#D5C2AB]">
                  60p: <strong className="text-[#8C5E2D]">{formatPrice(service.price60 || service.price)}</strong>
                </span>
                <span className="px-2.5 py-1 bg-[#5F3514] rounded text-xs font-bold text-[#F3D5A5]">
                  90p: {formatPrice(service.price90)}
                </span>
              </div>
            ) : service.isGift ? (
              <span className="px-3 py-1 bg-[#E5F5E9] text-[#1B6634] text-xs sm:text-sm font-bold rounded-lg border border-[#B6E2C1]">
                {language === 'vi' ? (service.giftText || 'Tặng Miễn Phí 100%') : (service.giftTextEn || '100% Free Gift')}
              </span>
            ) : (
              <span className="text-base font-bold text-[#8C5E2D] tabular-nums">
                {formatPrice(service.price)}
              </span>
            )}
          </div>
        </div>

        {/* Service Image Banner */}
        <div className="my-5 rounded-xl overflow-hidden aspect-[16/8] border border-[#D5C0A4] relative shadow-inner">
          <img
            src={service.image}
            alt={title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-[#54361C] leading-relaxed mb-6 font-normal">
          {description}
        </p>

        {/* Step-by-step Protocol */}
        <div className="mb-6">
          <h3 className="font-serif-luxury text-lg font-bold text-[#381F0B] mb-3">
            {language === 'vi' ? `Quy Trình ${steps.length} Bước Chuyên Nghiệp` : `${steps.length}-Step Professional Procedure`}
          </h3>
          <div className="space-y-2.5">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#4D311A]">
                <span className="w-5 h-5 rounded-full bg-[#E5D2BA] text-[#6F451F] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                  {idx + 1}
                </span>
                <span className="leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8 p-4 bg-[#EFE3D2] rounded-xl border border-[#D8C1A4]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#6F451F] mb-2">
            {t('modal_benefits_title')}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {benefits.map((b, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#4F331C] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5E2D] shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action Footer: Direct Call */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#E3D0BC]">
          <div className="text-xs text-[#704E31] text-center sm:text-left">
            <span>{t('quick_address_label')} <strong>{SPA_INFO.addressShort}</strong></span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`https://zalo.me/${SPA_INFO.hotlineRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#E4D1BA] text-[#3D2510] text-xs font-semibold rounded-md hover:bg-[#D9C4AB] transition-colors border border-[#C5AF96]"
            >
              <MessageCircle className="w-4 h-4 text-[#0068FF]" />
              <span>Zalo</span>
            </a>

            <a
              href={`tel:${SPA_INFO.hotlineRaw}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#5F3514] text-white text-xs font-bold rounded-md hover:bg-[#77441B] transition-colors shadow-md cursor-pointer whitespace-nowrap active:scale-[0.98] border border-[#80481B]"
            >
              <Phone className="w-4 h-4 text-[#F3D5A5]" />
              <span>{t('modal_call_book')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
