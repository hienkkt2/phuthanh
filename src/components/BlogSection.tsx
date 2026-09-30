import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, Phone } from 'lucide-react';
import { ARTICLES_DATA, SPA_INFO } from '../data/spaData';
import { Article } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const { language, t } = useLanguage();

  return (
    <section id="cam-nang" className="py-16 sm:py-24 bg-[#F8F2E8] border-b border-[#DDC6AB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C5E2D] uppercase mb-2 bg-[#EADAC5] px-3 py-1 rounded-full border border-[#D5C0A4]">
            <BookOpen className="w-3.5 h-3.5 text-[#8C5E2D]" />
            <span>{t('blog_tag')}</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#381F0B] text-balance">
            {language === 'vi' ? 'Cẩm Nang Sống Khỏe & ' : 'Wellness Guide & '}
            <span className="italic text-[#8C5E2D]">
              {language === 'vi' ? 'Bảo Vệ Cột Sống' : 'Spinal Health'}
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5D3F24]">
            {t('blog_subtitle')}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ARTICLES_DATA.map((art) => (
            <article
              key={art.id}
              className="bg-[#FCF9F3] rounded-xl border-2 border-[#DEC9B2] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E2CEA7]">
                  <img
                    src={art.image}
                    alt={language === 'vi' ? art.title : (art.titleEn || art.title)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#5F3514]/90 backdrop-blur-sm text-[11px] font-bold text-[#F3D5A5] px-2.5 py-1 rounded border border-[#80481B]">
                    {language === 'vi' ? art.category : (art.categoryEn || art.category)}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-[#8A6749] mb-2 font-medium">
                    <span>{art.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#8C5E2D]" />
                      <span>{language === 'vi' ? art.readTime : (art.readTimeEn || art.readTime)}</span>
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-xl font-bold text-[#381F0B] leading-snug group-hover:text-[#8C5E2D] transition-colors mb-3">
                    {language === 'vi' ? art.title : (art.titleEn || art.title)}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C3E24] line-clamp-3 leading-relaxed">
                    {language === 'vi' ? art.excerpt : (art.excerptEn || art.excerpt)}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="text-xs font-bold text-[#8C5E2D] hover:text-[#5F3514] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{t('blog_read_more')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-[#FAF5EE] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#D5BF9F] shadow-2xl p-6 sm:p-8 animate-in fade-in duration-200">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 text-[#7C5A3C] hover:text-[#381F0B] hover:bg-[#EBDBC6] rounded-full transition-colors cursor-pointer"
              aria-label={t('modal_close')}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-bold text-[#8C5E2D] uppercase tracking-wider mb-2">
              {language === 'vi' ? selectedArticle.category : (selectedArticle.categoryEn || selectedArticle.category)}
            </div>

            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#381F0B] mb-3 pr-6">
              {language === 'vi' ? selectedArticle.title : (selectedArticle.titleEn || selectedArticle.title)}
            </h2>

            <div className="flex items-center gap-2 text-xs text-[#704E31] mb-6 font-medium">
              <span>{language === 'vi' ? `Đăng ngày: ${selectedArticle.date}` : `Date: ${selectedArticle.date}`}</span>
              <span>·</span>
              <span>{language === 'vi' ? selectedArticle.readTime : (selectedArticle.readTimeEn || selectedArticle.readTime)}</span>
            </div>

            <div className="rounded-xl overflow-hidden aspect-[16/9] mb-6 border border-[#D5C0A4]">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#4D311A] leading-relaxed">
              {(language === 'vi' ? selectedArticle.content : (selectedArticle.contentEn || selectedArticle.content)).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-[#DEC9B2] flex items-center justify-between">
              <a
                href={`tel:${SPA_INFO.hotlineRaw}`}
                className="text-xs font-bold text-[#8C5E2D] flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Hotline: {SPA_INFO.hotline}</span>
              </a>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 bg-[#5F3514] text-white text-xs font-bold rounded-md hover:bg-[#77441B] transition-colors cursor-pointer"
              >
                {language === 'vi' ? 'Đóng bài viết' : 'Close Article'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
