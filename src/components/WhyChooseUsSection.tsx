import { MapPin } from 'lucide-react';
import {
  PROCESS_CONTENT,
  SERVICE_REGIONS,
  WHY_CHOOSE_US,
  type LanguageMode,
} from '../data/content';

interface WhyChooseUsSectionProps {
  langMode: LanguageMode;
}

export function WhyChooseUsSection({ langMode }: WhyChooseUsSectionProps) {
  const isTa = langMode === 'ta';

  return (
    <section id="why-us" className="bg-[#0B1D3A] text-white py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs sm:text-[13px] font-semibold tracking-wide text-[#DFB664]">
            {isTa ? WHY_CHOOSE_US.kicker.ta : WHY_CHOOSE_US.kicker.en}
          </p>

          {isTa ? (
            <h2 className="tamil-copy mt-3 text-2xl sm:text-[2.1rem] font-bold text-white leading-[1.35]">
              {WHY_CHOOSE_US.headline.ta}
            </h2>
          ) : (
            <h2 className="mt-3 text-2xl sm:text-[2.1rem] font-bold text-white leading-tight">
              {WHY_CHOOSE_US.headline.en}
            </h2>
          )}
        </div>

        {/* 3 Core Commitments */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {WHY_CHOOSE_US.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 sm:p-8 rounded-lg bg-[#071429] border border-white/10 flex flex-col gap-4"
            >
              <span className="text-sm font-semibold text-[#DFB664] tabular-nums">
                {pillar.number}
              </span>

              <h3
                className={`text-xl font-bold text-white leading-snug ${
                  isTa ? 'tamil-copy' : ''
                }`}
              >
                {isTa ? pillar.headline.ta : pillar.headline.en}
              </h3>

              <p
                className={`text-sm leading-relaxed text-slate-200 ${
                  isTa ? 'tamil-copy' : ''
                }`}
              >
                {isTa ? pillar.detail.ta : pillar.detail.en}
              </p>
            </div>
          ))}
        </div>

        {/* 4-Step Transparent Building Process */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#DFB664]">
              {isTa ? PROCESS_CONTENT.kicker.ta : PROCESS_CONTENT.kicker.en}
            </p>
            <h3
              className={`mt-2 text-xl sm:text-2xl font-bold text-white ${
                isTa ? 'tamil-copy' : ''
              }`}
            >
              {isTa ? PROCESS_CONTENT.headline.ta : PROCESS_CONTENT.headline.en}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {PROCESS_CONTENT.steps.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-lg border border-white/10 bg-white/[0.03] flex flex-col gap-2.5"
              >
                <span className="text-xs font-semibold text-[#DFB664] tabular-nums">
                  {isTa ? `படி ${item.step}` : `Step ${item.step}`}
                </span>
                <h4
                  className={`text-base font-bold text-white leading-snug ${
                    isTa ? 'tamil-copy' : ''
                  }`}
                >
                  {isTa ? item.title.ta : item.title.en}
                </h4>
                <p
                  className={`text-xs sm:text-[13px] leading-relaxed text-slate-300 ${
                    isTa ? 'tamil-copy' : ''
                  }`}
                >
                  {isTa ? item.description.ta : item.description.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Service Coverage Across South Tamil Nadu */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg bg-[#071429] border border-white/10">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#DFB664] shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-white">
                {isTa
                  ? 'உடன்குடி மற்றும் தென் தமிழகத்தின் முக்கியச் சேவைப் பகுதிகள்'
                  : 'Serving Udangudi & Surrounding South Tamil Nadu Regions'}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-slate-200">
                {SERVICE_REGIONS.map((region, rIdx) => (
                  <span key={region.en} className="inline-flex items-center gap-3">
                    {rIdx > 0 && (
                      <span aria-hidden="true" className="text-[#DFB664]">
                        ·
                      </span>
                    )}
                    <span>{isTa ? region.ta : region.en}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
