import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND, NAV_LINKS, type LanguageMode } from '../data/content';

interface NavbarProps {
  langMode: LanguageMode;
}

export function Navbar({ langMode }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isTa = langMode === 'ta';
  const ctaLabel = isTa ? 'இலவச ஆலோசனை' : 'Free Estimate';

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E2E7EF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4 xl:gap-6">
        {/* Zone 1: Single-Line Brand Logo & Name matching logo typography */}
        <a
          href="#top"
          className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B1D3A] rounded-sm"
          aria-label="elite Builders Home"
        >
          <img
            src={BRAND.logoIconPath}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover shrink-0"
          />
          <span className="font-display text-2xl sm:text-[28px] lg:text-[30px] leading-none tracking-tight whitespace-nowrap shrink-0">
            <span className="font-light text-[#B88A35]">elite</span>{' '}
            <span className="font-semibold text-[#0B1D3A]">Builders</span>
          </span>
        </a>

        {/* Zone 2: Single-Language Clean Nav Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#333C48]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#C69749] hover:text-[#0B1D3A] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B1D3A]"
            >
              {isTa ? link.ta : link.en}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-[13px] font-semibold text-white bg-[#0B1D3A] hover:bg-[#132C54] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1D3A]"
          >
            {ctaLabel}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#E2E7EF] text-[#0B1D3A] hover:bg-[#F7F8FA] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#0B1D3A]"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E2E7EF] bg-white px-4 py-4">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center px-3 py-3 text-sm font-semibold text-[#1E242B] hover:bg-[#FAFBFD] hover:text-[#0B1D3A] rounded-md min-h-[44px]"
              >
                {isTa ? link.ta : link.en}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-[#0B1D3A] hover:bg-[#132C54] rounded-md min-h-[44px]"
            >
              {ctaLabel}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
