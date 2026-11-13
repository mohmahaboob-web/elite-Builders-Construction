import { useEffect, useState, type FormEvent } from 'react';
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
} from 'lucide-react';
import {
  BRAND,
  CONTACT_CONTENT,
  SERVICE_REGIONS,
  SERVICES,
  type LanguageMode,
} from '../data/content';

interface ContactSectionProps {
  langMode: LanguageMode;
  preselectedServiceId: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export function ContactSection({ langMode, preselectedServiceId }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Udangudi');
  const [serviceId, setServiceId] = useState(
    preselectedServiceId || SERVICES[0].id
  );
  const [areaSqFt, setAreaSqFt] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
      setSubmitted(false);
    }
  }, [preselectedServiceId]);

  const showTa = langMode === 'bilingual' || langMode === 'ta';
  const showEn = langMode === 'bilingual' || langMode === 'en';

  const selectedService =
    SERVICES.find((s) => s.id === serviceId) ?? SERVICES[0];

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name =
        langMode === 'en'
          ? 'Please enter your name.'
          : 'தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.';
    }
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.phone =
        langMode === 'en'
          ? 'Please enter a valid 10-digit mobile number.'
          : 'சரியான 10 இலக்க கைபேசி எண்ணை உள்ளிடவும்.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setAreaSqFt('');
    setNotes('');
    setErrors({});
    setSubmitted(false);
  };

  const whatsappMessage = encodeURIComponent(
    `வணக்கம் ELITE BUILDERS,\n` +
      `பெயர் / Name: ${name.trim()}\n` +
      `தொலைபேசி / Phone: ${phone.trim()}\n` +
      `இடம் / Location: ${location}\n` +
      `சேவை / Service: ${selectedService.title.ta} (${selectedService.title.en})\n` +
      (areaSqFt.trim() ? `அளவு / Area: ${areaSqFt.trim()} sq.ft\n` : '') +
      (notes.trim() ? `விவரம் / Notes: ${notes.trim()}` : '')
  );

  const whatsappDirectUrl = `https://wa.me/919750424799?text=${whatsappMessage}`;

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Details & Taglines */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs sm:text-[13px] font-semibold tracking-wide text-[#8A611B]">
                {langMode === 'ta'
                  ? CONTACT_CONTENT.kicker.ta
                  : langMode === 'en'
                    ? CONTACT_CONTENT.kicker.en
                    : `${CONTACT_CONTENT.kicker.ta} · ${CONTACT_CONTENT.kicker.en}`}
              </p>

              {showTa && (
                <h2 className="tamil-copy mt-3 text-2xl sm:text-[2.1rem] font-bold text-[#0B1D3A] leading-[1.35]">
                  {CONTACT_CONTENT.headlinePrimary.ta}
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
                  {CONTACT_CONTENT.headlinePrimary.en}
                </p>
              )}

              <p className="tamil-copy mt-3 text-lg font-bold text-[#8A611B]">
                {langMode === 'en'
                  ? CONTACT_CONTENT.headlineSecondary.en
                  : CONTACT_CONTENT.headlineSecondary.ta}
              </p>
              {langMode === 'bilingual' && (
                <p className="text-sm font-semibold text-[#333C48]">
                  {CONTACT_CONTENT.headlineSecondary.en}
                </p>
              )}
            </div>

            <div className="space-y-2 text-sm sm:text-[15px] text-[#5A6472]">
              {showTa && <p className="tamil-copy">{CONTACT_CONTENT.description.ta}</p>}
              {showEn && <p>{CONTACT_CONTENT.description.en}</p>}
            </div>

            {/* Direct Phone & WhatsApp Action Blocks */}
            <div className="space-y-3 pt-2">
              <a
                href={BRAND.phoneHref}
                className="flex items-center justify-between gap-4 p-4 rounded-lg bg-[#0B1D3A] text-white hover:bg-[#132C54] transition-colors duration-150 min-h-[64px]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5 text-[#DFB664]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300">
                      {langMode === 'en' ? 'Direct Phone Call' : 'நேரடித் தொலைபேசி அழைப்பு'}
                    </p>
                    <p className="text-base sm:text-lg font-bold tabular-nums text-white">
                      {BRAND.phoneDisplay}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#DFB664] whitespace-nowrap shrink-0">
                  {langMode === 'en' ? 'Call Now' : 'அழைக்க'}
                </span>
              </a>

              <a
                href={BRAND.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-lg bg-[#FAFBFD] border border-[#E2E7EF] hover:border-[#0B1D3A] transition-colors duration-150 min-h-[64px]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-md bg-[#0B1D3A] text-[#DFB664] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5A6472]">
                      {langMode === 'en'
                        ? 'WhatsApp Consultation'
                        : 'வாட்ஸ்அப் மூலம் பேச'}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#0B1D3A] tabular-nums">
                      {BRAND.phoneDisplay}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#8A611B] whitespace-nowrap shrink-0">
                  WhatsApp
                </span>
              </a>
            </div>

            {/* Office Address & Hours */}
            <div className="p-5 rounded-lg bg-[#FAFBFD] border border-[#E2E7EF] space-y-3 text-sm text-[#333C48]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8A611B] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#0B1D3A]">
                    {langMode === 'en' ? BRAND.location.en : BRAND.location.ta}
                  </p>
                  {langMode === 'bilingual' && (
                    <p className="text-xs text-[#5A6472] mt-0.5">{BRAND.location.en}</p>
                  )}
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2 border-t border-[#E2E7EF]">
                <Clock className="w-4 h-4 text-[#8A611B] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#0B1D3A]">
                    {langMode === 'en'
                      ? 'Monday – Saturday: 9:00 AM – 7:00 PM'
                      : 'திங்கள் – சனி: காலை 9:00 – மாலை 7:00'}
                  </p>
                  {langMode === 'bilingual' && (
                    <p className="text-xs text-[#5A6472]">
                      Monday – Saturday · 9:00 AM – 7:00 PM (Site visits by appointment)
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Bilingual Estimate & Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg bg-[#FAFBFD] border border-[#E2E7EF]">
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="pb-4 border-b border-[#E2E7EF]">
                    <h3 className="tamil-copy text-lg sm:text-xl font-bold text-[#0B1D3A]">
                      {langMode === 'en'
                        ? 'Request a Free Site Visit & Construction Estimate'
                        : 'இலவச இடப் பார்வை & கட்டுமான மதிப்பீடு பெற'}
                    </h3>
                    {langMode === 'bilingual' && (
                      <p className="text-xs sm:text-sm text-[#5A6472] mt-0.5">
                        Request a Free Site Visit & Construction Estimate
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#0B1D3A] mb-1.5"
                      >
                        {langMode === 'en' ? 'Your Name *' : 'உங்கள் பெயர் / Name *'}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder={
                          langMode === 'en' ? 'Enter your full name' : 'உங்கள் பெயர்'
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DCE7] rounded-md text-[#1E242B] placeholder:text-[#7E8794] focus:outline-none focus:border-[#0B1D3A] min-h-[44px]"
                      />
                      {errors.name && (
                        <p role="alert" className="mt-1 text-xs font-medium text-red-700">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[#0B1D3A] mb-1.5"
                      >
                        {langMode === 'en'
                          ? 'Mobile / WhatsApp Number *'
                          : 'கைபேசி எண் / Mobile Number *'}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                        }}
                        placeholder="+91 9XXXXXXXXX"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DCE7] rounded-md text-[#1E242B] placeholder:text-[#7E8794] focus:outline-none focus:border-[#0B1D3A] min-h-[44px] tabular-nums"
                      />
                      {errors.phone && (
                        <p role="alert" className="mt-1 text-xs font-medium text-red-700">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-location"
                        className="block text-xs font-semibold text-[#0B1D3A] mb-1.5"
                      >
                        {langMode === 'en'
                          ? 'Plot / Site Location'
                          : 'இடம் / Site Location'}
                      </label>
                      <select
                        id="contact-location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DCE7] rounded-md text-[#1E242B] focus:outline-none focus:border-[#0B1D3A] min-h-[44px]"
                      >
                        {SERVICE_REGIONS.map((region) => (
                          <option key={region.en} value={region.en}>
                            {region.ta} ({region.en})
                          </option>
                        ))}
                        <option value="Other South TN">
                          மற்ற பகுதிகள் (Other South Tamil Nadu)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-area"
                        className="block text-xs font-semibold text-[#0B1D3A] mb-1.5"
                      >
                        {langMode === 'en'
                          ? 'Approx. Built-up Area (Sq.Ft)'
                          : 'சுமார் சதுர அடி / Area (Sq.Ft)'}
                      </label>
                      <input
                        id="contact-area"
                        type="text"
                        value={areaSqFt}
                        onChange={(e) => setAreaSqFt(e.target.value)}
                        placeholder={langMode === 'en' ? 'e.g. 1200 sq.ft' : 'எ.கா: 1200 ச.அடி'}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DCE7] rounded-md text-[#1E242B] placeholder:text-[#7E8794] focus:outline-none focus:border-[#0B1D3A] min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-semibold text-[#0B1D3A] mb-1.5"
                    >
                      {langMode === 'en'
                        ? 'Required Service'
                        : 'தேவையான சேவை / Service Needed'}
                    </label>
                    <select
                      id="contact-service"
                      value={serviceId}
                      onChange={(e) => setServiceId(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DCE7] rounded-md text-[#1E242B] focus:outline-none focus:border-[#0B1D3A] min-h-[44px]"
                    >
                      {SERVICES.map((svc) => (
                        <option key={svc.id} value={svc.id}>
                          {svc.title.ta} — {svc.title.en}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-notes"
                      className="block text-xs font-semibold text-[#0B1D3A] mb-1.5"
                    >
                      {langMode === 'en'
                        ? 'Project Details / Message'
                        : 'உங்கள் தேவை குறித்த விவரம் / Message'}
                    </label>
                    <textarea
                      id="contact-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={
                        langMode === 'en'
                          ? 'Number of floors, plot size, or renovation requirements...'
                          : 'தரைத் தளம் / மாடி விவரம் அல்லது உங்கள் விருப்பங்களைக் குறிப்பிடலாம்...'
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DCE7] rounded-md text-[#1E242B] placeholder:text-[#7E8794] focus:outline-none focus:border-[#0B1D3A]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B1D3A] hover:bg-[#132C54] rounded-md transition-colors duration-150 min-h-[46px] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1D3A]"
                    >
                      <Send className="w-4 h-4 text-[#DFB664]" />
                      <span>
                        {langMode === 'ta'
                          ? 'விவரங்களைச் சமர்ப்பிக்க'
                          : langMode === 'en'
                            ? 'Submit Enquiry'
                            : 'சமர்ப்பிக்க · Submit Enquiry'}
                      </span>
                    </button>

                    <span className="text-xs text-[#5A6472]">
                      {langMode === 'en'
                        ? 'Or call directly at +91-9750424799'
                        : 'அல்லது நேரடியாக அழைக்க: +91-9750424799'}
                    </span>
                  </div>
                </form>
              ) : (
                <div className="space-y-6 py-4">
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-6 h-6 text-[#0B1D3A] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h3 className="tamil-copy text-xl font-bold text-[#0B1D3A]">
                        {langMode === 'en'
                          ? 'Enquiry Ready — Connect Instantly'
                          : 'உங்கள் விவரம் பதிவு செய்யப்பட்டது!'}
                      </h3>
                      <p className="text-sm text-[#333C48]">
                        {langMode === 'en'
                          ? 'Send your prepared project summary directly to ELITE BUILDERS on WhatsApp or call +91-9750424799 for immediate scheduling.'
                          : 'கீழே உள்ள வாட்ஸ்அப் பொத்தானை அழுத்தி உங்கள் விவரங்களை உடனடியாக ELITE BUILDERS-க்கு அனுப்பலாம் அல்லது +91-9750424799 எண்ணில் அழைக்கலாம்.'}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-md bg-white border border-[#E2E7EF] text-sm space-y-1.5 text-[#333C48]">
                    <p>
                      <span className="font-semibold text-[#0B1D3A]">பெயர் / Name:</span> {name}
                    </p>
                    <p>
                      <span className="font-semibold text-[#0B1D3A]">எண் / Phone:</span>{' '}
                      <span className="tabular-nums">{phone}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-[#0B1D3A]">இடம் / Location:</span>{' '}
                      {location}
                    </p>
                    <p>
                      <span className="font-semibold text-[#0B1D3A]">சேவை / Service:</span>{' '}
                      {selectedService.title.ta} ({selectedService.title.en})
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0B1D3A] hover:bg-[#132C54] rounded-md min-h-[44px]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#DFB664]" />
                      <span>
                        {langMode === 'en'
                          ? 'Send Summary via WhatsApp'
                          : 'WhatsApp-ல் உடனே அனுப்பவும்'}
                      </span>
                    </a>

                    <a
                      href={BRAND.phoneHref}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B1D3A] bg-white border border-[#E2E7EF] hover:border-[#0B1D3A] rounded-md min-h-[44px]"
                    >
                      <PhoneCall className="w-4 h-4 text-[#8A611B]" />
                      <span className="tabular-nums">{BRAND.phoneDisplay}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-2.5 text-xs font-medium text-[#5A6472] hover:text-[#0B1D3A] min-h-[44px]"
                    >
                      {langMode === 'en' ? 'New Enquiry' : 'புதிய விண்ணப்பம்'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
