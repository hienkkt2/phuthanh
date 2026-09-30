import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { REVIEWS_DATA } from '../data/spaData';
import { useLanguage } from '../context/LanguageContext';

export const ReviewsSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="cam-nhan" className="py-16 sm:py-24 bg-[#F8F2E8] border-b border-[#DDC6AB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C5E2D] uppercase mb-2 bg-[#EADAC5] px-3 py-1 rounded-full border border-[#D5C0A4]">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#8C5E2D]" />
            <span>{t('reviews_tag')}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#381F0B] text-balance">
            {t('reviews_title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5D3F24]">
            {t('reviews_subtitle')}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FCF9F3] rounded-xl border-2 border-[#DEC9B2] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Rating stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#8A6749]">
                    {language === 'vi' ? rev.date : (rev.date === '3 ngày trước' ? '3 days ago' : rev.date === '1 tuần trước' ? '1 week ago' : '2 weeks ago')}
                  </span>
                </div>

                {/* Service tag */}
                <div className="text-xs font-bold text-[#8C5E2D] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{language === 'vi' ? rev.serviceUsed : (rev.serviceUsedEn || rev.serviceUsed)}</span>
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-[#4E311A] leading-relaxed italic mb-6">
                  "{language === 'vi' ? rev.comment : (rev.commentEn || rev.comment)}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-[#E8D4BE]">
                <div className="font-bold text-sm text-[#381F0B]">
                  {rev.customerName}
                </div>
                <div className="text-xs text-[#7A5636] mt-0.5">
                  {language === 'vi' ? rev.role : (rev.roleEn || rev.role)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
