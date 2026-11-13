import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import type { LanguageMode } from './data/content';

export default function App() {
  const [langMode, setLangMode] = useState<LanguageMode>('ta');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    'residential-construction'
  );

  useEffect(() => {
    document.documentElement.lang = langMode;
  }, [langMode]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-[#1E242B]">
      <Navbar langMode={langMode} />

      <main className="flex-1">
        <HeroSection langMode={langMode} onChangeLangMode={setLangMode} />
        <AboutSection langMode={langMode} />
        <ServicesSection
          langMode={langMode}
          onSelectService={setSelectedServiceId}
        />
        <GallerySection langMode={langMode} />
        <WhyChooseUsSection langMode={langMode} />
        <ContactSection
          langMode={langMode}
          preselectedServiceId={selectedServiceId}
        />
      </main>

      <Footer langMode={langMode} />
      <FloatingActions langMode={langMode} />
    </div>
  );
}
