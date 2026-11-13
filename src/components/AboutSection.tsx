import { Volume2, VolumeX, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';
import { ABOUT_CONTENT, BRAND, type LanguageMode } from '../data/content';

interface AboutSectionProps {
  langMode: LanguageMode;
}

export function AboutSection({ langMode }: AboutSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const showTa = langMode === 'bilingual' || langMode === 'ta';
  const showEn = langMode === 'bilingual' || langMode === 'en';

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="about" className="bg-[#FAFBFD] py-16 sm:py-24 border-b border-[#E2E7EF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Official Brand Film & Mark */}
          <div id="brand-film" className="lg:col-span-5 flex flex-col justify-between gap-5">
            <div className="relative overflow-hidden rounded-lg border border-[#E2E7EF] bg-[#0B1D3A]">
              <video
                ref={videoRef}
                src={BRAND.brandVideoPath}
                controls
                muted={isMuted}
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover block"
              >
                Your browser does not support the video tag.
              </video>

              <div className="flex items-center justify-between gap-3 px-4 py-3 bg-[#0B1D3A] text-white border-t border-white/10">
                <p className="text-xs text-slate-200 leading-snug">
                  {langMode === 'en'
                    ? ABOUT_CONTENT.videoCaption.en
                    : ABOUT_CONTENT.videoCaption.ta}
                </p>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-white/10 hover:bg-white/20 text-xs font-medium text-[#DFB664] shrink-0 min-h-[34px] focus-visible:outline-2 focus-visible:outline-[#DFB664]"
                  aria-label={isMuted ? 'Unmute brand video' : 'Mute brand video'}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Unmute</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Sound On</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Official Logo & Udangudi Regional Identity Block */}
            <div className="p-5 sm:p-6 rounded-lg bg-white border border-[#E2E7EF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <img
                src={BRAND.logoPath}
                alt="ELITE BUILDERS Official Emblem"
                referrerPolicy="no-referrer"
                className="h-14 sm:h-16 w-auto object-contain"
              />
              <div className="flex items-start gap-2 text-xs text-[#333C48]">
                <MapPin className="w-4 h-4 text-[#8A611B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0B1D3A]">
                    {langMode === 'en' ? BRAND.location.en : BRAND.location.ta}
                  </p>
                  {langMode === 'bilingual' && (
                    <p className="text-[#5A6472] mt-0.5">{BRAND.location.en}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bilingual About Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs sm:text-[13px] font-semibold tracking-wide text-[#8A611B]">
              {langMode === 'ta'
                ? ABOUT_CONTENT.kicker.ta
                : langMode === 'en'
                  ? ABOUT_CONTENT.kicker.en
                  : `${ABOUT_CONTENT.kicker.ta} · ${ABOUT_CONTENT.kicker.en}`}
            </p>

            {showTa && (
              <h2 className="tamil-copy mt-3 text-2xl sm:text-[2rem] font-bold text-[#0B1D3A] leading-[1.35]">
                {ABOUT_CONTENT.headline.ta}
              </h2>
            )}

            {showEn && (
              <p
                className={
                  langMode === 'en'
                    ? 'mt-3 text-2xl sm:text-[2rem] font-bold text-[#0B1D3A] leading-tight'
                    : 'mt-2.5 text-base sm:text-lg font-semibold text-[#333C48] leading-snug'
                }
              >
                {ABOUT_CONTENT.headline.en}
              </p>
            )}

            <div className="mt-6 space-y-5 text-[15px] sm:text-base text-[#333C48]">
              {ABOUT_CONTENT.paragraphs.map((para, index) => (
                <div key={index} className="space-y-1.5">
                  {showTa && <p className="tamil-copy">{para.ta}</p>}
                  {showEn && (
                    <p className="text-[14.5px] sm:text-[15px] text-[#5A6472] leading-relaxed">
                      {para.en}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Natural Local Search Visibility Note (Unboxed Typographic Line) */}
            <div className="mt-8 pt-5 border-t border-[#E2E7EF]">
              <p className="text-xs sm:text-[13px] font-medium text-[#0B1D3A]">
                {langMode === 'en'
                  ? ABOUT_CONTENT.regionalKeywordsNote.en
                  : ABOUT_CONTENT.regionalKeywordsNote.ta}
              </p>
              {langMode === 'bilingual' && (
                <p className="text-xs text-[#5A6472] mt-1">
                  {ABOUT_CONTENT.regionalKeywordsNote.en}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
