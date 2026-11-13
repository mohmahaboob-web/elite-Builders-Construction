import { ArrowUpRight } from 'lucide-react';
import { SERVICES, SERVICES_CONTENT, type LanguageMode } from '../data/content';

interface ServicesSectionProps {
  langMode: LanguageMode;
  onSelectService: (serviceId: string) => void;
}

export function ServicesSection({ langMode, onSelectService }: ServicesSectionProps) {
  const showTa = langMode === 'bilingual' || langMode === 'ta';
  const showEn = langMode === 'bilingual' || langMode === 'en';

  const handleServiceClick = (serviceId: string) => {
    onSelectService(serviceId);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-white py-16 sm:py-24 border-b border-[#E2E7EF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs sm:text-[13px] font-semibold tracking-wide text-[#8A611B]">
            {langMode === 'ta'
              ? SERVICES_CONTENT.kicker.ta
              : langMode === 'en'
                ? SERVICES_CONTENT.kicker.en
                : `${SERVICES_CONTENT.kicker.ta} · ${SERVICES_CONTENT.kicker.en}`}
          </p>

          {showTa && (
            <h2 className="tamil-copy mt-3 text-2xl sm:text-[2.1rem] font-bold text-[#0B1D3A] leading-[1.35]">
              {SERVICES_CONTENT.headline.ta}
            </h2>
          )}
          {showEn && (
            <p
              className={
                langMode === 'en'
                  ? 'mt-3 text-2xl sm:text-[2.1rem] font-bold text-[#0B1D3A] leading-tight'
                  : 'mt-2 text-base sm:text-lg font-semibold text-[#333C48]'
              }
            >
              {SERVICES_CONTENT.headline.en}
            </p>
          )}

          <div className="mt-4 space-y-1.5 text-sm sm:text-[15px] text-[#5A6472]">
            {showTa && <p className="tamil-copy">{SERVICES_CONTENT.subtitle.ta}</p>}
            {showEn && <p>{SERVICES_CONTENT.subtitle.en}</p>}
          </div>
        </div>

        {/* Asymmetric Editorial Bento Grid (6 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mt-12">
          {SERVICES.map((service, index) => {
            // First 2 marquee services span 6 cols each on lg; remaining 4 span 6 cols (2 rows of 2) or asymmetric 7/5 & 5/7
            const spanClass =
              index === 0
                ? 'lg:col-span-7 bg-[#0B1D3A] text-white border-[#0B1D3A]'
                : index === 1
                  ? 'lg:col-span-5 bg-[#FAFBFD] text-[#1E242B] border-[#E2E7EF]'
                  : index === 2 || index === 5
                    ? 'lg:col-span-5 bg-[#FAFBFD] text-[#1E242B] border-[#E2E7EF]'
                    : 'lg:col-span-7 bg-white text-[#1E242B] border-[#E2E7EF]';

            const isDark = index === 0;

            return (
              <div
                key={service.id}
                className={`${spanClass} rounded-lg border p-6 sm:p-8 flex flex-col justify-between gap-6 transition-transform duration-150 hover:-translate-y-0.5`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-current/10">
                    <span
                      className={`text-sm font-semibold tabular-nums ${
                        isDark ? 'text-[#DFB664]' : 'text-[#8A611B]'
                      }`}
                    >
                      {service.number}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleServiceClick(service.id)}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[36px] px-2 -mr-2 rounded focus-visible:outline-2 ${
                        isDark
                          ? 'text-[#DFB664] hover:text-white focus-visible:outline-[#DFB664]'
                          : 'text-[#0B1D3A] hover:text-[#8A611B] focus-visible:outline-[#0B1D3A]'
                      }`}
                    >
                      <span>
                        {langMode === 'ta'
                          ? 'ஆலோசனை பெற'
                          : langMode === 'en'
                            ? 'Enquire'
                            : 'ஆலோசனை · Enquire'}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="mt-5 space-y-1.5">
                    {showTa && (
                      <h3
                        className={`tamil-copy text-xl sm:text-[1.35rem] font-bold leading-snug ${
                          isDark ? 'text-white' : 'text-[#0B1D3A]'
                        }`}
                      >
                        {service.title.ta}
                      </h3>
                    )}
                    {showEn && (
                      <p
                        className={
                          langMode === 'en'
                            ? `text-xl font-bold ${isDark ? 'text-white' : 'text-[#0B1D3A]'}`
                            : `text-sm font-semibold ${isDark ? 'text-[#DFB664]' : 'text-[#333C48]'}`
                        }
                      >
                        {service.title.en}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 space-y-2">
                    {showTa && (
                      <p
                        className={`tamil-copy text-sm sm:text-[15px] ${
                          isDark ? 'text-slate-200' : 'text-[#333C48]'
                        }`}
                      >
                        {service.description.ta}
                      </p>
                    )}
                    {showEn && (
                      <p
                        className={`text-sm leading-relaxed ${
                          isDark ? 'text-slate-300' : 'text-[#5A6472]'
                        }`}
                      >
                        {service.description.en}
                      </p>
                    )}
                  </div>
                </div>

                {/* Unboxed Metadata Separators */}
                <div
                  className={`pt-4 border-t flex flex-wrap items-center gap-x-3 gap-y-1 text-xs ${
                    isDark
                      ? 'border-white/10 text-slate-300'
                      : 'border-[#E2E7EF] text-[#5A6472]'
                  }`}
                >
                  {service.highlights.map((h, hIdx) => (
                    <span key={hIdx} className="inline-flex items-center gap-2">
                      {hIdx > 0 && <span aria-hidden="true">·</span>}
                      <span>
                        {langMode === 'en'
                          ? h.en
                          : langMode === 'ta'
                            ? h.ta
                            : `${h.ta} / ${h.en}`}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
