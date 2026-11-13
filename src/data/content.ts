import heroVillaImg from '../assets/images/hero_modern_villa_1794575449610.jpg';
import residentialHomeImg from '../assets/images/gallery_residential_home_1794575447175.jpg';
import commercialComplexImg from '../assets/images/gallery_commercial_complex_1794575450439.jpg';
import interiorLivingImg from '../assets/images/gallery_interior_living_1794575448415.jpg';
import structuralSiteImg from '../assets/images/gallery_structural_site_1794575448559.jpg';

export type LanguageMode = 'bilingual' | 'ta' | 'en';

export interface BilingualText {
  ta: string;
  en: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: BilingualText;
  description: BilingualText;
  highlights: BilingualText[];
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  category: 'residential' | 'commercial' | 'interiors';
  categoryLabel: BilingualText;
  title: BilingualText;
  subtitle: BilingualText;
  description: BilingualText;
  specs: BilingualText[];
  image: string;
  imageAlt: string;
  aspect: '16/9' | '4/3';
}

export interface WhyUsPillar {
  number: string;
  headline: BilingualText;
  detail: BilingualText;
}

export interface ProcessStep {
  step: string;
  title: BilingualText;
  description: BilingualText;
}

export const BRAND = {
  name: 'ELITE BUILDERS',
  phoneDisplay: '+91-9750424799',
  phoneHref: 'tel:+919750424799',
  whatsappHref:
    'https://wa.me/919750424799?text=' +
    encodeURIComponent(
      'வணக்கம் ELITE BUILDERS, எங்கள் கட்டுமானத் திட்டம் குறித்து பேச விரும்புகிறேன்.'
    ),
  logoIconPath: '/assets/aistudio/IMG_20261112_074749_5f22b356.png',
  logoPath:
    '/assets/aistudio/Elite_Builders_Logo___8_Nov_2026__2.16_pm_20261108_141645_0000_42ab23da.png',
  brandVideoPath: '/assets/aistudio/Untitled_video__1__613b40b3.mp4',
  location: {
    ta: 'உடன்குடி, தூத்துக்குடி மாவட்டம், தமிழ்நாடு',
    en: 'Udangudi, Thoothukudi District, Tamil Nadu',
  },
};

export const HERO_IMAGE = heroVillaImg;

export const NAV_LINKS: { id: string; ta: string; en: string }[] = [
  { id: 'about', ta: 'எங்களைப் பற்றி', en: 'About' },
  { id: 'services', ta: 'சேவைகள்', en: 'Services' },
  { id: 'gallery', ta: 'வடிவமைப்புகள்', en: 'Showcase' },
  { id: 'why-us', ta: 'சிறப்புகள்', en: 'Why Us' },
  { id: 'contact', ta: 'தொடர்பு', en: 'Contact' },
];

export const HERO_CONTENT = {
  kicker: {
    ta: 'உடன்குடி, தமிழ்நாடு · தென் தமிழக கட்டுமான நிறுவனம்',
    en: 'Udangudi, Tamil Nadu · Building Construction & Contracting',
  },
  headline: {
    ta: 'உங்கள் கனவு இல்லத்தை நனவாக்கும் நம்பிக்கையான நிறுவனம்!',
    en: 'A Trusted Construction Partner Turning Your Dream Home Into Reality',
  },
  tagline: {
    ta: 'தரமான கட்டுமானம்... அழகான வடிவமைப்பு... உங்கள் மனநிறைவே எங்கள் இலக்கு!',
    en: 'Quality Construction, Thoughtful Design — Your Peace of Mind Is Our Goal.',
  },
  primaryCta: {
    ta: 'இலவச ஆலோசனை பெற',
    en: 'Request Estimate',
  },
  secondaryCta: {
    ta: 'அழைக்க: +91-9750424799',
    en: 'Call +91-9750424799',
  },
  videoCta: {
    ta: 'நிறுவன அறிமுக வீடியோ',
    en: 'Watch Brand Film',
  },
  heroCaption: {
    ta: 'நவீன குடியிருப்பு வடிவமைப்பு · தென் தமிழகத்தின் காலநிலைக்கு ஏற்ற கட்டமைப்பு',
    en: 'Contemporary Villa Architecture · Engineered for South Tamil Nadu Climate',
  },
  commitments: [
    {
      label: { ta: 'சேவைப் பகுதிகள்', en: 'Service Region' },
      value: { ta: 'உடன்குடி & தென் தமிழகம்', en: 'Udangudi & South TN' },
    },
    {
      label: { ta: 'மதிப்பீடு முறை', en: 'Costing Approach' },
      value: { ta: 'தெளிவான பட்ஜெட் திட்டம்', en: 'Transparent Estimation' },
    },
    {
      label: { ta: 'கட்டுமானத் தரம்', en: 'Build Standard' },
      value: { ta: 'உறுதியான மூலப்பொருட்கள்', en: 'Certified Grade Materials' },
    },
    {
      label: { ta: 'நேரடித் தொடர்பு', en: 'Direct Consultation' },
      value: { ta: '+91-9750424799', en: '+91-9750424799' },
    },
  ],
};

export const ABOUT_CONTENT = {
  kicker: {
    ta: 'எங்களைப் பற்றி · உடன்குடி கட்டுமான நிறுவனம்',
    en: 'About Us · Udangudi Construction Company',
  },
  headline: {
    ta: 'உங்கள் கனவு இல்லத்தை உங்கள் விருப்பத்திற்கேற்ப தரமாகவும் அழகாகவும் கட்டித் தருகிறோம்.',
    en: 'We Build Your Dream Home With Lasting Quality and Beauty, Tailored to Your Vision.',
  },
  paragraphs: [
    {
      ta: 'ஒரு வீடு கட்டுவது என்பது வெறும் செங்கல்லும் சிமெண்ட்டும் மட்டுமல்ல; அது ஒரு குடும்பத்தின் பல வருட உழைப்பும், எதிர்காலக் கனவுகளும் நிறைந்த இடம். உடன்குடியில் வீடு கட்டித் தருபவர்கள் என்ற நம்பிக்கையோடு, ஒவ்வொரு வீட்டையும் எங்கள் சொந்த வீடு போல அக்கறையுடன் கட்டித் தருகிறோம்.',
      en: 'Building a home is more than bricks and concrete—it represents years of family dedication and future memories. Based in Udangudi, ELITE BUILDERS approaches every residential and commercial structure with personal responsibility, clear communication, and steady site supervision.',
    },
    {
      ta: 'உடன்குடி, திருச்செந்தூர், சாத்தான்குளம், திசையன்விளை, திருநெல்வேலி மற்றும் தூத்துக்குடி மாவட்டம் வீடு கட்டுமானம் உள்ளிட்ட தென் தமிழகப் பகுதிகளில், நிலத்தின் தன்மைக்கும் கடற்கரைக் காற்றின் தட்பவெப்பத்திற்கும் ஏற்ற உறுதியான கட்டமைப்புடன் கட்டிடங்களை அமைத்துக் கொடுக்கிறோம்.',
      en: 'Across Udangudi, Tiruchendur, Sathankulam, Thisayanvilai, Tirunelveli, and Thoothukudi district, we design and execute foundations, structural frames, and weather-resilient finishes suited to coastal and inland South Tamil Nadu conditions.',
    },
  ],
  regionalKeywordsNote: {
    ta: 'உடன்குடியில் வீடு கட்டித் தருபவர்கள் · உடன்குடி கட்டுமான நிறுவனம் · தூத்துக்குடி மாவட்டம் வீடு கட்டுமானம்',
    en: 'Udangudi Home Builders · Udangudi Construction Company · Thoothukudi District House Construction',
  },
  videoCaption: {
    ta: 'ELITE BUILDERS அறிமுகக் காணொளி — திட்டமிடல் முதல் முழுமையான ஒப்படைப்பு வரை',
    en: 'ELITE BUILDERS Brand Film — From Blueprint Precision to Finished Structure',
  },
};

export const SERVICES_CONTENT = {
  kicker: {
    ta: 'எங்கள் சேவைகள்',
    en: 'Our Construction & Contracting Services',
  },
  headline: {
    ta: 'நிலப் பரிசோதனை முதல் புதுமனை புகுவிழா வரை முழுமையான கட்டுமான சேவைகள்',
    en: 'End-to-End Building Solutions From Planning to Key Handover',
  },
  subtitle: {
    ta: 'உங்கள் தேவைக்கும் இடத்தின் அளவிற்கும் ஏற்றவாறு கீழ்க்காணும் சேவைகளைச் செய்து தருகிறோம். எந்தச் சேவையைத் தேர்ந்தெடுத்தாலும் நேரடியாக ஆலோசனை பெறலாம்.',
    en: 'Select any service below to request a custom site evaluation and budget discussion for your plot or existing property.',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential-construction',
    number: '01.',
    featured: true,
    title: {
      ta: 'வீடு கட்டுமானம்',
      en: 'Residential Home Construction',
    },
    description: {
      ta: 'தனி வீடுகள், டூப்ளக்ஸ் இல்லங்கள் மற்றும் குடும்பத்திற்கான விசாலமான வீடுகளை வாஸ்து மற்றும் நவீன வசதிகளுடன் உறுதியாகக் கட்டித் தருகிறோம்.',
      en: 'Custom single-storey, duplex, and multi-generational family homes built with natural ventilation, Vastu-aligned layouts, and durable RCC engineering.',
    },
    highlights: [
      { ta: 'உறுதியான அஸ்திவாரம் & கான்கிரீட் தரம்', en: 'Deep structural foundation & curing discipline' },
      { ta: 'காற்றோட்டமான அறை அமைப்பு', en: 'Cross-ventilated room planning' },
    ],
  },
  {
    id: 'commercial-construction',
    number: '02.',
    featured: true,
    title: {
      ta: 'வணிகக் கட்டிடங்கள் கட்டுமானம்',
      en: 'Commercial Building Construction',
    },
    description: {
      ta: 'கடைகள், ஷோரூம்கள், அலுவலகங்கள், கிளினிக்குகள் மற்றும் வாடகைக் கட்டிடங்களை வணிகப் பயன்பாட்டிற்கு ஏற்பத் திட்டமிட்டுக் கட்டித் தருகிறோம்.',
      en: 'Functional retail storefronts, showrooms, office complexes, clinics, and commercial rental spaces built for maximum visibility and structural longevity.',
    },
    highlights: [
      { ta: 'அதிகப் பயன்பாட்டு இடவசதி', en: 'Optimized floor-plate utilization' },
      { ta: 'கவர்ச்சிகரமான முகப்புத் தோற்றம்', en: 'Modern street-facing elevation' },
    ],
  },
  {
    id: 'plans-design',
    number: '03.',
    title: {
      ta: 'கட்டிட வரைபடம் மற்றும் வடிவமைப்பு',
      en: 'Building Plan & Architectural Design',
    },
    description: {
      ta: 'உங்கள் இடத்தின் அளவு, திசை மற்றும் குடும்பத் தேவைகளுக்கு ஏற்பத் தெளிவான 2D தரை வரைபடம், 3D முகப்புத் தோற்றம் மற்றும் அமைப்பு வரைபடங்கள் தயாரித்துத் தருகிறோம்.',
      en: 'Tailored 2D floor plans, 3D elevation concepts, and structural drawings crafted around your plot dimensions, sunlight, and family lifestyle.',
    },
    highlights: [
      { ta: '2D & 3D முகப்பு வடிவமைப்பு', en: '2D floor planning & 3D elevation previews' },
    ],
  },
  {
    id: 'renovation',
    number: '04.',
    title: {
      ta: 'பழைய வீடுகள் புதுப்பித்தல்',
      en: 'Old House Renovation & Remodeling',
    },
    description: {
      ta: 'பழைய வீடுகளின் உறுதியைச் சரிபார்த்து, கூரைப் பராமரிப்பு, கூடுதல் அறைகள் அமைத்தல், தரை மற்றும் சுவர்களை நவீன தோற்றத்திற்கு மாற்றித் தருகிறோம்.',
      en: 'Structural strengthening, waterproofing, additional room extensions, and complete modern makeovers that preserve your family home.',
    },
    highlights: [
      { ta: 'நீர்க்கசிவு தடுப்பு & சுவர் பராமரிப்பு', en: 'Waterproofing & structural restoration' },
    ],
  },
  {
    id: 'interiors-exteriors',
    number: '05.',
    title: {
      ta: 'உட்புற மற்றும் வெளிப்புற அலங்காரப் பணிகள்',
      en: 'Interior & Exterior Finishing Works',
    },
    description: {
      ta: 'மாடுலர் சமையலறை, மர வேலைப்பாடுகள், ஃபால்ஸ் சீலிங், டைல்ஸ் மற்றும் கிரானைட் பதித்தல், நவீன வண்ணம் பூசுதல் உள்ளிட்ட அனைத்து அலங்காரப் பணிகளும் நேர்த்தியாகச் செய்யப்படும்.',
      en: 'Modular kitchens, teak woodwork, false ceilings, granite and tile flooring, lighting layouts, and weatherproof exterior wall textures.',
    },
    highlights: [
      { ta: 'நேர்த்தியான மர மற்றும் டைல்ஸ் வேலைப்பாடு', en: 'Precision carpentry, tile & lighting finishes' },
    ],
  },
  {
    id: 'turnkey-contracting',
    number: '06.',
    title: {
      ta: 'முழுமையான கட்டுமான ஒப்பந்தப் பணிகள்',
      en: 'Complete Turnkey Construction Contracting',
    },
    description: {
      ta: 'மூலப்பொருட்கள் கொள்முதல் முதல் எலக்ட்ரிக்கல், பிளம்பிங், பெயிண்டிங் வரை அனைத்தையும் ஒரே பொறுப்பில் எடுத்துக்கொண்டு நேரத்திற்குக் கட்டி முடிக்கிறோம்.',
      en: 'Single-point contracting covering material sourcing, civil masonry, electrical, plumbing, and finishing—ideal for local and outstation owners.',
    },
    highlights: [
      { ta: 'வெளிப்படையான ஒப்பந்த முறை', en: 'Stage-wise transparent execution' },
    ],
  },
];

export const GALLERY_CONTENT = {
  kicker: {
    ta: 'வடிவமைப்பு மற்றும் கட்டுமானத் தொகுப்பு',
    en: 'Architectural Styles & Craftsmanship Showcase',
  },
  headline: {
    ta: 'நவீன கட்டிட வடிவமைப்புகள் மற்றும் எங்கள் கட்டுமானத் தரம்',
    en: 'Architectural Concepts & Execution Standards',
  },
  subtitle: {
    ta: 'உங்கள் கனவு இல்லம் அல்லது வணிகக் கட்டிடத்தை எந்தப் பாணியில் அமைக்கலாம் என்பதைப் பார்க்க எங்கள் வடிவமைப்புத் தொகுப்பைப் பார்வையிடுங்கள்.',
    en: 'Explore residential, commercial, interior, and structural design standards we deliver across South Tamil Nadu.',
  },
  filters: [
    { id: 'all' as const, ta: 'அனைத்தும்', en: 'All' },
    { id: 'residential' as const, ta: 'வீடுகள்', en: 'Residential' },
    { id: 'commercial' as const, ta: 'வணிகம்', en: 'Commercial' },
    { id: 'interiors' as const, ta: 'உட்புறம் & கட்டுமானம்', en: 'Interiors & Civil' },
  ],
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'villa-concept',
    category: 'residential',
    categoryLabel: { ta: 'குடியிருப்பு வடிவமைப்பு', en: 'Residential Architecture' },
    title: {
      ta: 'நவீன இரு மாடி டூப்ளக்ஸ் இல்ல வடிவமைப்பு',
      en: 'Contemporary Two-Storey Villa Concept',
    },
    subtitle: {
      ta: 'இயற்கை வெளிச்சம் · மர வேலைப்பாடுகள் · கற்கள் முகப்பு',
      en: 'Natural Daylight · Teak Louvers · Stone Cladding',
    },
    description: {
      ta: 'தென் தமிழகத்தின் வெப்பநிலைக்கு ஏற்ப விசாலமான பால்கனிகள், வெப்பம் தடுக்கும் கூரை அமைப்பு மற்றும் இயற்கைக் காற்றோட்டத்துடன் வடிவமைக்கப்பட்ட நவீன இல்லம்.',
      en: 'Designed for warm South Tamil Nadu afternoons with shaded balconies, heat-insulated roof slabs, stone accent walls, and airy courtyard transitions.',
    },
    specs: [
      { ta: 'இரு மாடி குடியிருப்புத் திட்டம்', en: '2-Storey Duplex Layout' },
      { ta: 'சூரிய வெப்பம் தடுக்கும் முகப்பு', en: 'Sun-Shaded Louver Facade' },
      { ta: 'நீண்ட நாள் உழைக்கும் வெளிப்புறப் பூச்சு', en: 'Coastal-Grade Exterior Finish' },
    ],
    image: heroVillaImg,
    imageAlt: 'Contemporary two-storey residential villa exterior with warm wood accents and landscaped garden',
    aspect: '16/9',
  },
  {
    id: 'family-home-concept',
    category: 'residential',
    categoryLabel: { ta: 'குடும்ப இல்லம்', en: 'Independent Family Home' },
    title: {
      ta: 'சிறந்த காற்றோட்டத்துடன் கூடிய தனி வீடு',
      en: 'South TN Independent Family Residence',
    },
    subtitle: {
      ta: 'வராண்டா அமைப்பு · வாகன நிறுத்துமிடம் · பாதுகாப்பான சுற்றுச்சுவர்',
      en: 'Shaded Sit-Out · Covered Parking · Compound Wall',
    },
    description: {
      ta: 'முன்னால் அமரும் வராண்டா, சுற்றிலும் நடைபாதை, கார் பார்க்கிங் மற்றும் உட்புற வசதிகளுடன் கூடிய நடுத்தர மற்றும் பெரிய குடும்பங்களுக்கான அழகிய இல்லம்.',
      en: 'Thoughtfully planned independent residence featuring a welcoming sit-out veranda, interlocking paver driveway, natural cross-ventilation, and privacy boundary wall.',
    },
    specs: [
      { ta: 'வாஸ்து முறைப்படியான அறைகள்', en: 'Vastu-Compliant Room Orientation' },
      { ta: 'காற்றோட்ட ஜன்னல் வடிவமைப்பு', en: 'Cross-Ventilation Window Grid' },
    ],
    image: residentialHomeImg,
    imageAlt: 'Modern South Indian independent two-storey family house with veranda and paved driveway',
    aspect: '4/3',
  },
  {
    id: 'commercial-complex-concept',
    category: 'commercial',
    categoryLabel: { ta: 'வணிகக் கட்டிடம்', en: 'Commercial Architecture' },
    title: {
      ta: 'பல மாடி வணிக மற்றும் அலுவலக வளாகம்',
      en: 'Multi-Storey Retail & Office Complex',
    },
    subtitle: {
      ta: 'கண்ணாடி முகப்பு · பார்க்கிங் வசதி · உறுதியான தூண்கள்',
      en: 'Glazed Storefronts · Forecourt Parking · Heavy-Load RCC',
    },
    description: {
      ta: 'முக்கியச் சாலைகளில் கடைகள், ஷோரூம்கள் மற்றும் அலுவலகங்கள் அமைப்பதற்கு ஏற்ற நவீன தோற்றமும் அதிக இடப் பயன்பாடும் கொண்ட வணிகக் கட்டிடம்.',
      en: 'High-visibility commercial facade featuring wide column-free retail spans, toughened glass storefronts, and recessed architectural lighting.',
    },
    specs: [
      { ta: 'கடையின் முன்பக்க விசாலமான பார்வை', en: 'Wide Street-Facing Glazing' },
      { ta: 'மின்தூக்கி & படிக்கட்டு வசதி', en: 'Dedicated Staircase & Lift Core' },
    ],
    image: commercialComplexImg,
    imageAlt: 'Modern three-storey commercial retail and office complex at dusk with glass facade',
    aspect: '4/3',
  },
  {
    id: 'interior-living-concept',
    category: 'interiors',
    categoryLabel: { ta: 'உட்புற அலங்காரம்', en: 'Interior Craftsmanship' },
    title: {
      ta: 'மர வேலைப்பாடு மற்றும் நவீன வரவேற்பறை அலங்காரம்',
      en: 'Bespoke Woodwork & Living Hall Interiors',
    },
    subtitle: {
      ta: 'கிரானைட் தரை · கோவ் லைட்டிங் · தேக்கு மர அலங்காரம்',
      en: 'Polished Stone Flooring · Cove Lighting · Teak Paneling',
    },
    description: {
      ta: 'வீட்டின் உள்ளே நுழைந்தவுடன் அமைதியும் அழகும் தரும் வகையில் வடிவமைக்கப்பட்ட வரவேற்பறை, சீலிங் விளக்குகள் மற்றும் இயற்கை வெளிச்சம்.',
      en: 'Refined living interiors combining warm timber ceiling accents, seamless stone flooring, concealed warm lighting, and natural garden views.',
    },
    specs: [
      { ta: 'மறைக்கப்பட்ட எல்.இ.டி விளக்குகள்', en: 'Recessed Warm Cove Lighting' },
      { ta: 'நீடித்து உழைக்கும் தரை மற்றும் மரப் பணிகள்', en: 'Long-Life Timber & Stone Finishes' },
    ],
    image: interiorLivingImg,
    imageAlt: 'Upscale modern Indian living room interior with wood paneling and natural light',
    aspect: '4/3',
  },
  {
    id: 'structural-civil-concept',
    category: 'interiors',
    categoryLabel: { ta: 'கட்டுமானத் தரம்', en: 'Structural Execution' },
    title: {
      ta: 'தரமான கான்கிரீட் மற்றும் கம்பி கட்டுமானப் பணி',
      en: 'Precision RCC Framing & Site Discipline',
    },
    subtitle: {
      ta: 'சரியான கலவை · நேர்த்தியான சென்ட்ரிங் · தரப் பரிசோதனை',
      en: 'Engineered Reinforcement · Clean Formwork · Stage Inspection',
    },
    description: {
      ta: 'கட்டிடத்தின் ஆயுளைத் தீர்மானிக்கும் தூண்கள், பீம்கள் மற்றும் கூரைக் கான்கிரீட் பணிகளைப் பொறியியல் விதிகளின்படி மிகக் கவனமாகச் செய்கிறோம்.',
      en: 'Strict reinforcement spacing, clean shuttering alignment, proper concrete vibration, and thorough water curing at every structural milestone.',
    },
    specs: [
      { ta: 'தரமான சிமெண்ட் & TMT கம்பிகள்', en: 'Approved Grade Cement & TMT Steel' },
      { ta: 'ஒவ்வொரு நிலையிலும் நேரடிப் பார்வை', en: 'Daily Site Engineer Supervision' },
    ],
    image: structuralSiteImg,
    imageAlt: 'Clean well-organized building construction site with concrete columns and steel reinforcement',
    aspect: '4/3',
  },
];

export const WHY_CHOOSE_US = {
  kicker: {
    ta: 'ஏன் ELITE BUILDERS?',
    en: 'Why Choose ELITE BUILDERS',
  },
  headline: {
    ta: 'நம்பிக்கையும் நேர்மையும் எங்கள் கட்டுமானத்தின் அடித்தளம்',
    en: 'Built on Integrity, Clear Pricing, and Lasting Workmanship',
  },
  pillars: [
    {
      number: '01.',
      headline: {
        ta: 'தரத்தில் சமரசம் இல்லை!',
        en: 'No Compromise on Quality!',
      },
      detail: {
        ta: 'அஸ்திவாரம் முதல் வண்ணம் பூசுதல் வரை தரமான சிமெண்ட், கம்பி, செங்கல் மற்றும் குழாய் சாதனங்களை மட்டுமே பயன்படுத்துகிறோம்.',
        en: 'From deep footing concrete to electrical conduits and final paint, we stick strictly to trusted, structural-grade materials.',
      },
    },
    {
      number: '02.',
      headline: {
        ta: 'வாடிக்கையாளர் திருப்தியே எங்கள் முன்னுரிமை.',
        en: 'Customer Satisfaction Is Our Top Priority.',
      },
      detail: {
        ta: 'கட்டுமானத்தின் ஒவ்வொரு கட்டத்திலும் புகைப்படங்கள் மற்றும் நேரடித் தகவல்கள் மூலம் உங்களுக்குத் தெளிவான விளக்கம் அளிக்கிறோம்.',
        en: 'We keep homeowners informed at every stage—from foundation marking to slab casting—especially supporting outstation families.',
      },
    },
    {
      number: '03.',
      headline: {
        ta: 'உங்கள் பட்ஜெட்டிற்கு ஏற்ற கட்டுமானத் தீர்வுகள்.',
        en: 'Construction Solutions Tailored to Your Budget.',
      },
      detail: {
        ta: 'வேலை தொடங்குவதற்கு முன்பே தெளிவான செலவு மதிப்பீடு வழங்கப்படுகிறது; தேவையற்ற செலவுகளோ மறைமுகக் கட்டணங்களோ இல்லை.',
        en: 'Clear, itemized estimates before work begins so you can plan your family finances confidently without unexpected surprises.',
      },
    },
  ] as WhyUsPillar[],
};

export const PROCESS_CONTENT = {
  kicker: {
    ta: 'எங்கள் பணி முறை',
    en: 'How We Work',
  },
  headline: {
    ta: 'நான்கு எளிய படிகளில் உங்கள் கனவுக் கட்டிடம்',
    en: 'Four Transparent Steps From Idea to Handover',
  },
  steps: [
    {
      step: '01',
      title: {
        ta: 'நேரடி இடப் பார்வை & ஆலோசனை',
        en: 'Site Visit & Discussion',
      },
      description: {
        ta: 'உங்கள் இடத்தை நேரில் பார்வையிட்டு, உங்கள் குடும்பத் தேவைகளையும் பட்ஜெட்டையும் கேட்டறிகிறோம்.',
        en: 'We inspect your plot in person and listen closely to your space requirements and budget.',
      },
    },
    {
      step: '02',
      title: {
        ta: 'வரைபடம் & தெளிவான மதிப்பீடு',
        en: 'Floor Plan & Clear Estimate',
      },
      description: {
        ta: 'வாஸ்து மற்றும் காற்றோட்டத்துடன் கூடிய வரைபடமும், கட்டுமானச் செலவுப் பட்டியலும் வழங்கப்படும்.',
        en: 'You receive a tailored floor plan, material specification list, and stage-wise cost schedule.',
      },
    },
    {
      step: '03',
      title: {
        ta: 'தரமான கட்டுமானப் பணிகள்',
        en: 'Supervised Construction',
      },
      description: {
        ta: 'அனுபவம் வாய்ந்த மேஸ்திரி மற்றும் பொறியாளர் மேற்பார்வையில் உறுதியான கட்டுமானம் நடைபெறும்.',
        en: 'Skilled masons and daily site supervision ensure structural accuracy and neat finishing.',
      },
    },
    {
      step: '04',
      title: {
        ta: 'சரியான நேரத்தில் ஒப்படைப்பு',
        en: 'On-Time Key Handover',
      },
      description: {
        ta: 'அனைத்துப் பணிகளும் முழுமையாகப் பரிசோதிக்கப்பட்டு, குறித்த நேரத்தில் வீடு ஒப்படைக்கப்படும்.',
        en: 'Final electrical, plumbing, and finishing checks are completed before handing over your keys.',
      },
    },
  ] as ProcessStep[],
};

export const SERVICE_REGIONS = [
  { ta: 'உடன்குடி', en: 'Udangudi' },
  { ta: 'திருச்செந்தூர்', en: 'Tiruchendur' },
  { ta: 'சாத்தான்குளம்', en: 'Sathankulam' },
  { ta: 'திசையன்விளை', en: 'Thisayanvilai' },
  { ta: 'திருநெல்வேலி', en: 'Tirunelveli' },
  { ta: 'தூத்துக்குடி', en: 'Thoothukudi' },
  { ta: 'குலசேகரபட்டினம்', en: 'Kulasekarapattinam' },
  { ta: 'மெஞ்ஞானபுரம்', en: 'Megnanapuram' },
];

export const CONTACT_CONTENT = {
  kicker: {
    ta: 'தொடர்பு கொள்ள',
    en: 'Start Your Project',
  },
  headlinePrimary: {
    ta: 'உங்கள் கனவு வீட்டைப் பற்றி எங்களிடம் பேசுங்கள்!',
    en: 'Talk to Us About Your Dream Home!',
  },
  headlineSecondary: {
    ta: 'இன்றே தொடர்பு கொள்ளுங்கள்!',
    en: 'Contact Us Today!',
  },
  description: {
    ta: 'புதிய வீடு கட்ட, வணிகக் கட்டிடம் அமைக்க அல்லது பழைய வீட்டைப் புதுப்பிக்க இலவச ஆலோசனை மற்றும் மதிப்பீடு பெற கீழே உள்ள படிவத்தை நிரப்பவும் அல்லது நேரடியாக அழைக்கவும்.',
    en: 'Reach out for an on-site visit, floor plan discussion, or budget estimate across Udangudi, Tiruchendur, Sathankulam, Thisayanvilai, Tirunelveli, and Thoothukudi.',
  },
};
