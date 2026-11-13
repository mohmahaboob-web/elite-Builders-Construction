import { Volume2, VolumeX, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';
import { ABOUT_CONTENT, BRAND, type LanguageMode } from '../data/content';

interface AboutSectionProps {
  langMode: LanguageMode;
}

export function AboutSection({ langMode }: AboutSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const isTa = langMode === 'ta';

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
                  {isTa ? ABOUT_CONTENT.videoCaption.ta : ABOUT_CONTENT.videoCaption.en}
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
                      <span>{isTa ? 'ஒலி இயக்கு' : 'Unmute'}</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{isTa ? 'ஒலி உண்டு' : 'Sound On'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Official Logo & Udangudi Regional Identity Block */}
            <div className="p-5 sm:p-6 rounded-lg bg-white border border-[#E2E7EF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <img
                src={BRAND.logoPath}
                alt="elite Builders Official Emblem"
                referrerPolicy="no-referrer"
                className="h-14 sm:h-16 w-auto object-contain"
              />
              <div className="flex items-start gap-2 text-xs text-[#333C48]">
                <MapPin className="w-4 h-4 text-[#8A611B] shrink-0 mt-0.5" />
                <p className="font-semibold text-[#0B1D3A]">
                  {isTa ? BRAND.location.ta : BRAND.location.en}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: About Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs sm:text-[13px] font-semibold tracking-wide text-[#8A611B]">
              {isTa ? ABOUT_CONTENT.kicker.ta : ABOUT_CONTENT.kicker.en}
            </p>

            {isTa ? (
              <h2 className="tamil-copy mt-3 text-2xl sm:text-[2rem] font-bold text-[#0B1D3A] leading-[1.35]">
                {ABOUT_CONTENT.headline.ta}
              </h2>
            ) : (
              <h2 className="mt-3 text-2xl sm:text-[2rem] font-bold text-[#0B1D3A] leading-tight">
                {ABOUT_CONTENT.headline.en}
              </h2>
            )}

            <div className="mt-6 space-y-5 text-[15px] sm:text-base text-[#333C48]">
              {ABOUT_CONTENT.paragraphs.map((para, index) => (
                <p
                  key={index}
                  className={isTa ? 'tamil-copy' : 'leading-relaxed'}
                >
                  {isTa ? para.ta : para.en}
                </p>
              ))}
            </div>

            {/* Natural Local Search Visibility Note */}
            <div className="mt-8 pt-5 border-t border-[#E2E7EF]">
              <p className="text-xs sm:text-[13px] font-medium text-[#0B1D3A]">
                {isTa
                  ? ABOUT_CONTENT.regionalKeywordsNote.ta
                  : ABOUT_CONTENT.regionalKeywordsNote.en}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
