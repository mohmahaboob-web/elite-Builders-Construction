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

  const isTa = langMode === 'ta';

  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
      setSubmitted(false);
    }
  }, [preselectedServiceId]);

  const selectedService =
    SERVICES.find((s) => s.id === serviceId) ?? SERVICES[0];

  const selectedRegion =
    SERVICE_REGIONS.find((r) => r.en === location);

  const locationDisplay = selectedRegion
    ? isTa
      ? selectedRegion.ta
      : selectedRegion.en
    : isTa
      ? 'மற்ற பகுதிகள்'
      : 'Other South Tamil Nadu';

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = isTa
        ? 'தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.'
        : 'Please enter your name.';
    }
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.phone = isTa
        ? 'சரியான 10 இலக்க கைபேசி எண்ணை உள்ளிடவும்.'
        : 'Please enter a valid 10-digit mobile number.';
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
    isTa
      ? `வணக்கம் elite Builders,\n` +
          `பெயர்: ${name.trim()}\n` +
          `தொலைபேசி: ${phone.trim()}\n` +
          `இடம்: ${locationDisplay}\n` +
          `சேவை: ${selectedService.title.ta}\n` +
          (areaSqFt.trim() ? `அளவு: ${areaSqFt.trim()}\n` : '') +
          (notes.trim() ? `விவரம்: ${notes.trim()}` : '')
      : `Hello elite Builders,\n` +
          `Name: ${name.trim()}\n` +
          `Phone: ${phone.trim()}\n` +
          `Location: ${locationDisplay}\n` +
          `Service: ${selectedService.title.en}\n` +
          (areaSqFt.trim() ? `Area: ${areaSqFt.trim()} sq.ft\n` : '') +
          (notes.trim() ? `Notes: ${notes.trim()}` : '')
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
                {isTa ? CONTACT_CONTENT.kicker.ta : CONTACT_CONTENT.kicker.en}
              </p>

              {isTa ? (
                <h2 className="tamil-copy mt-3 text-2xl sm:text-[2.1rem] font-bold text-[#0B1D3A] leading-[1.35]">
                  {CONTACT_CONTENT.headlinePrimary.ta}
                </h2>
              ) : (
                <h2 className="mt-3 text-2xl sm:text-[2.1rem] font-bold text-[#0B1D3A] leading-tight">
                  {CONTACT_CONTENT.headlinePrimary.en}
                </h2>
              )}

              <p
                className={`mt-3 text-lg font-bold text-[#8A611B] ${
                  isTa ? 'tamil-copy' : ''
                }`}
              >
                {isTa
                  ? CONTACT_CONTENT.headlineSecondary.ta
                  : CONTACT_CONTENT.headlineSecondary.en}
              </p>
            </div>

            <p className={`text-sm sm:text-[15px] text-[#5A6472] ${isTa ? 'tamil-copy' : ''}`}>
              {isTa ? CONTACT_CONTENT.description.ta : CONTACT_CONTENT.description.en}
            </p>

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
                      {isTa ? 'நேரடித் தொலைபேசி அழைப்பு' : 'Direct Phone Call'}
                    </p>
                    <p className="text-base sm:text-lg font-bold tabular-nums text-white">
                      {BRAND.phoneDisplay}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#DFB664] whitespace-nowrap shrink-0">
                  {isTa ? 'அழைக்க' : 'Call Now'}
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
                      {isTa ? 'வாட்ஸ்அப் மூலம் பேச' : 'WhatsApp Consultation'}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#0B1D3A] tabular-nums">
                      {BRAND.phoneDisplay}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#8A611B] whitespace-nowrap shrink-0">
                  {isTa ? 'வாட்ஸ்அப்' : 'WhatsApp'}
                </span>
              </a>
            </div>

            {/* Office Address & Hours */}
            <div className="p-5 rounded-lg bg-[#FAFBFD] border border-[#E2E7EF] space-y-3 text-sm text-[#333C48]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8A611B] shrink-0 mt-1" />
                <p className="font-semibold text-[#0B1D3A]">
                  {isTa ? BRAND.location.ta : BRAND.location.en}
                </p>
              </div>
              <div className="flex items-start gap-3 pt-2 border-t border-[#E2E7EF]">
                <Clock className="w-4 h-4 text-[#8A611B] shrink-0 mt-1" />
                <p className="font-medium text-[#0B1D3A]">
                  {isTa
                    ? 'திங்கள் – சனி: காலை 9:00 – மாலை 7:00'
                    : 'Monday – Saturday: 9:00 AM – 7:00 PM'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Estimate & Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg bg-[#FAFBFD] border border-[#E2E7EF]">
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="pb-4 border-b border-[#E2E7EF]">
                    <h3
                      className={`text-lg sm:text-xl font-bold text-[#0B1D3A] ${
                        isTa ? 'tamil-copy' : ''
                      }`}
                    >
                      {isTa
                        ? 'இலவச இடப் பார்வை & கட்டுமான மதிப்பீடு பெற'
                        : 'Request a Free Site Visit & Construction Estimate'}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#0B1D3A] mb-1.5"
                      >
                        {isTa ? 'உங்கள் பெயர் *' : 'Your Name *'}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder={isTa ? 'உங்கள் பெயர்' : 'Enter your full name'}
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
                        {isTa ? 'கைபேசி எண் *' : 'Mobile / WhatsApp Number *'}
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
                        {isTa ? 'இடம்' : 'Plot / Site Location'}
                      </label>
                      <select
                        id="contact-location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DCE7] rounded-md text-[#1E242B] focus:outline-none focus:border-[#0B1D3A] min-h-[44px]"
                      >
                        {SERVICE_REGIONS.map((region) => (
                          <option key={region.en} value={region.en}>
                            {isTa ? region.ta : region.en}
                          </option>
                        ))}
                        <option value="Other South TN">
                          {isTa ? 'மற்ற பகுதிகள்' : 'Other South Tamil Nadu'}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-area"
                        className="block text-xs font-semibold text-[#0B1D3A] mb-1.5"
                      >
                        {isTa
                          ? 'சுமார் சதுர அடி'
                          : 'Approx. Built-up Area (Sq.Ft)'}
                      </label>
                      <input
                        id="contact-area"
                        type="text"
                        value={areaSqFt}
                        onChange={(e) => setAreaSqFt(e.target.value)}
                        placeholder={isTa ? 'எ.கா: 1200 ச.அடி' : 'e.g. 1200 sq.ft'}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DCE7] rounded-md text-[#1E242B] placeholder:text-[#7E8794] focus:outline-none focus:border-[#0B1D3A] min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-semibold text-[#0B1D3A] mb-1.5"
                    >
                      {isTa ? 'தேவையான சேவை' : 'Required Service'}
                    </label>
                    <select
                      id="contact-service"
                      value={serviceId}
                      onChange={(e) => setServiceId(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DCE7] rounded-md text-[#1E242B] focus:outline-none focus:border-[#0B1D3A] min-h-[44px]"
                    >
                      {SERVICES.map((svc) => (
                        <option key={svc.id} value={svc.id}>
                          {isTa ? svc.title.ta : svc.title.en}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-notes"
                      className="block text-xs font-semibold text-[#0B1D3A] mb-1.5"
                    >
                      {isTa
                        ? 'உங்கள் தேவை குறித்த விவரம்'
                        : 'Project Details / Message'}
                    </label>
                    <textarea
                      id="contact-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={
                        isTa
                          ? 'தரைத் தளம் / மாடி விவரம் அல்லது உங்கள் விருப்பங்களைக் குறிப்பிடலாம்...'
                          : 'Number of floors, plot size, or renovation requirements...'
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
                        {isTa ? 'விவரங்களைச் சமர்ப்பிக்க' : 'Submit Enquiry'}
                      </span>
                    </button>

                    <span className="text-xs text-[#5A6472]">
                      {isTa
                        ? 'அல்லது நேரடியாக அழைக்க: +91-9750424799'
                        : 'Or call directly at +91-9750424799'}
                    </span>
                  </div>
                </form>
              ) : (
                <div className="space-y-6 py-4">
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-6 h-6 text-[#0B1D3A] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h3
                        className={`text-xl font-bold text-[#0B1D3A] ${
                          isTa ? 'tamil-copy' : ''
                        }`}
                      >
                        {isTa
                          ? 'உங்கள் விவரம் பதிவு செய்யப்பட்டது!'
                          : 'Enquiry Ready — Connect Instantly'}
                      </h3>
                      <p className="text-sm text-[#333C48]">
                        {isTa
                          ? 'கீழே உள்ள வாட்ஸ்அப் பொத்தானை அழுத்தி உங்கள் விவரங்களை உடனடியாக ELITE BUILDERS-க்கு அனுப்பலாம் அல்லது +91-9750424799 எண்ணில் அழைக்கலாம்.'
                          : 'Send your prepared project summary directly to ELITE BUILDERS on WhatsApp or call +91-9750424799 for immediate scheduling.'}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-md bg-white border border-[#E2E7EF] text-sm space-y-1.5 text-[#333C48]">
                    <p>
                      <span className="font-semibold text-[#0B1D3A]">
                        {isTa ? 'பெயர்:' : 'Name:'}
                      </span>{' '}
                      {name}
                    </p>
                    <p>
                      <span className="font-semibold text-[#0B1D3A]">
                        {isTa ? 'எண்:' : 'Phone:'}
                      </span>{' '}
                      <span className="tabular-nums">{phone}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-[#0B1D3A]">
                        {isTa ? 'இடம்:' : 'Location:'}
                      </span>{' '}
                      {locationDisplay}
                    </p>
                    <p>
                      <span className="font-semibold text-[#0B1D3A]">
                        {isTa ? 'சேவை:' : 'Service:'}
                      </span>{' '}
                      {isTa ? selectedService.title.ta : selectedService.title.en}
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
                        {isTa
                          ? 'WhatsApp-ல் உடனே அனுப்பவும்'
                          : 'Send Summary via WhatsApp'}
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
                      {isTa ? 'புதிய விண்ணப்பம்' : 'New Enquiry'}
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
