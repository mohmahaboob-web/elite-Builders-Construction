import { useState } from 'react';
import { PhoneCall, ArrowRight, PlayCircle, Building2 } from 'lucide-react';
import { BRAND, HERO_CONTENT, HERO_IMAGE, type LanguageMode } from '../data/content';

interface HeroSectionProps {
  langMode: LanguageMode;
  onChangeLangMode: (mode: LanguageMode) => void;
}

export function HeroSection({ langMode, onChangeLangMode }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  const showTa = langMode === 'bilingual' || langMode === 'ta';
  const showEn = langMode === 'bilingual' || langMode === 'en';

  return (
    <section
      id="top"
      className="bg-[#0B1D3A] text-white border-b border-[#1A335C]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-8 pb-10 sm:pt-12 sm:pb-14">
        {/* Top Utility Strip inside Hero: Regional Marker + Language Mode Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <p className="text-xs sm:text-[13px] font-medium tracking-wide text-[#DFB664]">
            {langMode === 'en'
              ? HERO_CONTENT.kicker.en
              : langMode === 'ta'
                ? HERO_CONTENT.kicker.ta
                : `${HERO_CONTENT.kicker.ta} · ${HERO_CONTENT.kicker.en}`}
          </p>

          <div
            role="group"
            aria-label="Language Display Selector"
            className="inline-flex items-center self-start sm:self-auto p-1 rounded-lg bg-[#071429] border border-white/15"
          >
            {(
              [
                { id: 'bilingual', label: 'தமிழ் + ENG' },
                { id: 'ta', label: 'தமிழ்' },
                { id: 'en', label: 'English' },
              ] as const
            ).map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => onChangeLangMode(option.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[34px] focus-visible:outline-2 focus-visible:outline-[#DFB664] ${
                  langMode === option.id
                    ? 'bg-[#C69749] text-[#071429] font-semibold'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Hero Split with Balanced Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pt-8 sm:pt-10">
          {/* Left Column: Primary Bilingual Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8">
            <div className="space-y-5">
              {showTa && (
                <h1 className="tamil-copy text-[clamp(1.85rem,3.4vw,2.95rem)] font-bold leading-[1.3] text-white tracking-[-0.01em]">
                  {HERO_CONTENT.headline.ta}
                </h1>
              )}

              {showEn && (
                <p
                  className={
                    langMode === 'en'
                      ? 'text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-[1.18] text-white tracking-tight'
                      : 'text-lg sm:text-xl font-semibold text-slate-200 leading-snug'
                  }
                >
                  {HERO_CONTENT.headline.en}
                </p>
              )}

              <div className="pt-2 space-y-2 border-t border-white/15">
                {showTa && (
                  <p className="tamil-copy text-base sm:text-lg font-medium text-[#DFB664]">
                    {HERO_CONTENT.tagline.ta}
                  </p>
                )}
                {showEn && (
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {HERO_CONTENT.tagline.en}
                  </p>
                )}
              </div>
            </div>

            {/* Action Hierarchy: 1 Primary CTA + Direct Call & Video Anchor */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#071429] bg-[#DFB664] hover:bg-[#e8c67f] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[46px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFB664]"
              >
                <span>
                  {langMode === 'ta'
                    ? HERO_CONTENT.primaryCta.ta
                    : langMode === 'en'
                      ? HERO_CONTENT.primaryCta.en
                      : `${HERO_CONTENT.primaryCta.ta} · ${HERO_CONTENT.primaryCta.en}`}
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href={BRAND.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[46px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <PhoneCall className="w-4 h-4 text-[#DFB664] shrink-0" />
                <span className="tabular-nums">{BRAND.phoneDisplay}</span>
              </a>

              <a
                href="#brand-film"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium text-slate-200 hover:text-[#DFB664] transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <PlayCircle className="w-4 h-4 text-[#DFB664] shrink-0" />
                <span>
                  {langMode === 'en'
                    ? HERO_CONTENT.videoCta.en
                    : HERO_CONTENT.videoCta.ta}
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Dominant 16:9 / Full-Height Architectural Hero Photograph */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full overflow-hidden rounded-lg border border-white/15 bg-[#071429] min-h-[280px] sm:min-h-[360px] lg:min-h-full">
              {!imgError ? (
                <img
                  src={HERO_IMAGE}
                  alt="Modern contemporary South Indian villa crafted with natural stone and teak wood louvers"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover lg:absolute lg:inset-0"
                />
              ) : (
                <div className="w-full h-full min-h-[320px] flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-[#0B1D3A] to-[#132C54] text-center">
                  <Building2 className="w-10 h-10 text-[#DFB664]" />
                  <p className="text-sm font-medium text-slate-200">
                    ELITE BUILDERS — Udangudi Architectural Showcase
                  </p>
                </div>
              )}

              {/* Measured Scrim for Text Contrast */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 sm:p-6">
                {showTa && (
                  <p className="tamil-copy text-xs sm:text-sm font-medium text-white">
                    {HERO_CONTENT.heroCaption.ta}
                  </p>
                )}
                {showEn && (
                  <p className="text-xs text-slate-200 mt-0.5">
                    {HERO_CONTENT.heroCaption.en}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Architectural Commitment Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
          {HERO_CONTENT.commitments.map((item, idx) => (
            <div
              key={idx}
              className="px-4 py-3.5 rounded-md bg-[#071429]/80 border border-white/10"
            >
              <p className="text-xs text-slate-300">
                {langMode === 'ta'
                  ? item.label.ta
                  : langMode === 'en'
                    ? item.label.en
                    : `${item.label.ta} · ${item.label.en}`}
              </p>
              <p className="mt-1 text-sm sm:text-[15px] font-semibold text-white tabular-nums">
                {langMode === 'en' ? item.value.en : item.value.ta}
              </p>
              {langMode === 'bilingual' && item.value.en !== item.value.ta && (
                <p className="text-xs text-[#DFB664] mt-0.5">{item.value.en}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
