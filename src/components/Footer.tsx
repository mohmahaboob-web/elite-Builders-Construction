import { BRAND, NAV_LINKS, type LanguageMode } from '../data/content';

interface FooterProps {
  langMode: LanguageMode;
}

export function Footer({ langMode }: FooterProps) {
  const isTa = langMode === 'ta';

  return (
    <footer className="bg-[#071429] text-slate-300 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Brand Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-block bg-white rounded-md px-3.5 py-2.5">
              <img
                src={BRAND.logoPath}
                alt="elite Builders"
                referrerPolicy="no-referrer"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className={`text-sm text-slate-200 leading-relaxed ${isTa ? 'tamil-copy' : ''}`}>
              {isTa
                ? 'உடன்குடியில் வீடு கட்டித் தருபவர்கள் · உடன்குடி கட்டுமான நிறுவனம் · தூத்துக்குடி மாவட்டம் வீடு கட்டுமானம் மற்றும் வணிகக் கட்டிட ஒப்பந்ததாரர்கள்.'
                : 'Building Construction and Contracting in Udangudi, serving residential and commercial clients across Udangudi, Tiruchendur, Sathankulam, Thisayanvilai, Tirunelveli, and Thoothukudi.'}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold text-[#DFB664]">
              {isTa ? 'விரைவு இணைப்புகள்' : 'Quick Navigation'}
            </p>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {isTa ? link.ta : link.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-[#DFB664]">
              {isTa ? 'நேரடித் தொடர்பு' : 'Direct Contact'}
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-white font-semibold tabular-nums">
                <a href={BRAND.phoneHref} className="hover:text-[#DFB664] transition-colors">
                  {BRAND.phoneDisplay}
                </a>
              </p>
              <p className={`text-xs text-slate-300 ${isTa ? 'tamil-copy' : ''}`}>
                {isTa ? BRAND.location.ta : BRAND.location.en}
              </p>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} elite Builders · Udangudi, Tamil Nadu.</p>
          <p>
            {isTa
              ? 'தரமான கட்டிட கட்டுமானம் மற்றும் ஒப்பந்தப் பணிகள்'
              : 'Building Construction & Contracting'}
          </p>
        </div>
      </div>
    </footer>
  );
}
