import { MessageCircle, PhoneCall } from 'lucide-react';
import { BRAND, type LanguageMode } from '../data/content';

interface FloatingActionsProps {
  langMode: LanguageMode;
}

export function FloatingActions({ langMode }: FloatingActionsProps) {
  return (
    <div
      aria-label="Quick Contact Actions"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2.5"
    >
      <a
        href={BRAND.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with ELITE BUILDERS"
        className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 h-12 rounded-full bg-[#15803D] hover:bg-[#166534] text-white shadow-lg border border-white/20 transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D]"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
          {langMode === 'ta' ? 'வாட்ஸ்அப்' : 'WhatsApp'}
        </span>
      </a>

      <a
        href={BRAND.phoneHref}
        aria-label="Call ELITE BUILDERS at +91-9750424799"
        className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 h-12 rounded-full bg-[#0B1D3A] hover:bg-[#132C54] text-white shadow-lg border border-[#DFB664]/60 transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFB664]"
      >
        <PhoneCall className="w-5 h-5 text-[#DFB664] shrink-0" />
        <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
          {langMode === 'ta' ? 'அழைக்க' : 'Call Now'}
        </span>
      </a>
    </div>
  );
}
