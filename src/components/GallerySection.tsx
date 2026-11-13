import { useState } from 'react';
import { Building2, Maximize2, X, ArrowRight } from 'lucide-react';
import {
  GALLERY_CONTENT,
  GALLERY_ITEMS,
  type GalleryItem,
  type LanguageMode,
} from '../data/content';

interface GallerySectionProps {
  langMode: LanguageMode;
}

type FilterId = 'all' | 'residential' | 'commercial' | 'interiors';

export function GallerySection({ langMode }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const showTa = langMode === 'bilingual' || langMode === 'ta';
  const showEn = langMode === 'bilingual' || langMode === 'en';

  const visibleItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleInquireDesign = () => {
    setSelectedItem(null);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="bg-[#FAFBFD] py-16 sm:py-24 border-b border-[#E2E7EF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header + Interactive Category Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-[13px] font-semibold tracking-wide text-[#8A611B]">
              {langMode === 'ta'
                ? GALLERY_CONTENT.kicker.ta
                : langMode === 'en'
                  ? GALLERY_CONTENT.kicker.en
                  : `${GALLERY_CONTENT.kicker.ta} · ${GALLERY_CONTENT.kicker.en}`}
            </p>
            {showTa && (
              <h2 className="tamil-copy mt-3 text-2xl sm:text-[2.1rem] font-bold text-[#0B1D3A] leading-[1.35]">
                {GALLERY_CONTENT.headline.ta}
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
                {GALLERY_CONTENT.headline.en}
              </p>
            )}
            <div className="mt-3 space-y-1 text-sm sm:text-[15px] text-[#5A6472]">
              {showTa && <p className="tamil-copy">{GALLERY_CONTENT.subtitle.ta}</p>}
              {showEn && <p>{GALLERY_CONTENT.subtitle.en}</p>}
            </div>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter architectural showcase"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-white border border-[#E2E7EF] self-start"
          >
            {GALLERY_CONTENT.filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[38px] focus-visible:outline-2 focus-visible:outline-[#0B1D3A] ${
                    isActive
                      ? 'bg-[#0B1D3A] text-white'
                      : 'text-[#333C48] hover:text-[#0B1D3A] hover:bg-[#FAFBFD]'
                  }`}
                >
                  {langMode === 'ta'
                    ? filter.ta
                    : langMode === 'en'
                      ? filter.en
                      : `${filter.ta} · ${filter.en}`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Architectural Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-10">
          {visibleItems.map((item, idx) => {
            const isHeroSpan =
              activeFilter === 'all' && idx === 0
                ? 'md:col-span-2 lg:col-span-8'
                : activeFilter === 'all' && idx === 1
                  ? 'lg:col-span-4'
                  : 'lg:col-span-4';

            const imgFailed = failedImages[item.id];

            return (
              <article
                key={item.id}
                className={`${isHeroSpan} group bg-white rounded-lg border border-[#E2E7EF] overflow-hidden flex flex-col justify-between`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="text-left w-full flex-1 flex flex-col focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0B1D3A]"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0B1D3A]">
                    {!imgFailed ? (
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [item.id]: true }))
                        }
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br from-[#0B1D3A] to-[#132C54] text-center">
                        <Building2 className="w-8 h-8 text-[#DFB664]" />
                        <p className="text-xs font-medium text-slate-200">{item.title.en}</p>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-md bg-[#0B1D3A]/80 text-white flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-[#8A611B]">
                        {langMode === 'ta'
                          ? item.categoryLabel.ta
                          : langMode === 'en'
                            ? item.categoryLabel.en
                            : `${item.categoryLabel.ta} · ${item.categoryLabel.en}`}
                      </p>

                      {showTa && (
                        <h3 className="tamil-copy mt-1.5 text-lg font-bold text-[#0B1D3A] leading-snug">
                          {item.title.ta}
                        </h3>
                      )}
                      {showEn && (
                        <p
                          className={
                            langMode === 'en'
                              ? 'mt-1.5 text-lg font-bold text-[#0B1D3A]'
                              : 'mt-0.5 text-sm font-medium text-[#333C48]'
                          }
                        >
                          {item.title.en}
                        </p>
                      )}
                    </div>

                    <div className="pt-3 border-t border-[#E2E7EF] text-xs text-[#5A6472]">
                      {langMode === 'en' ? item.subtitle.en : item.subtitle.ta}
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {/* Architectural Detail Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071429]/80 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-lg border border-[#E2E7EF] max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-[#0B1D3A]">
              <img
                src={selectedItem.image}
                alt={selectedItem.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close detail view"
                className="absolute top-3 right-3 w-11 h-11 rounded-md bg-[#0B1D3A]/90 text-white hover:bg-[#0B1D3A] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <p className="text-xs font-semibold text-[#8A611B]">
                  {langMode === 'en'
                    ? selectedItem.categoryLabel.en
                    : `${selectedItem.categoryLabel.ta} · ${selectedItem.categoryLabel.en}`}
                </p>
                <h3
                  id="gallery-modal-title"
                  className="tamil-copy mt-1.5 text-xl sm:text-2xl font-bold text-[#0B1D3A]"
                >
                  {langMode === 'en' ? selectedItem.title.en : selectedItem.title.ta}
                </h3>
                {langMode === 'bilingual' && (
                  <p className="text-sm font-semibold text-[#333C48] mt-1">
                    {selectedItem.title.en}
                  </p>
                )}
              </div>

              <div className="space-y-2 text-sm sm:text-[15px] text-[#333C48]">
                {showTa && <p className="tamil-copy">{selectedItem.description.ta}</p>}
                {showEn && <p className="text-[#5A6472]">{selectedItem.description.en}</p>}
              </div>

              <div className="pt-4 border-t border-[#E2E7EF]">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-[13px] text-[#1E242B]">
                  {selectedItem.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#8A611B] font-bold">·</span>
                      <span>
                        {langMode === 'en'
                          ? spec.en
                          : langMode === 'ta'
                            ? spec.ta
                            : `${spec.ta} (${spec.en})`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2.5 text-sm font-medium text-[#333C48] hover:text-[#0B1D3A] min-h-[44px]"
                >
                  {langMode === 'ta' ? 'மூடு' : 'Close'}
                </button>
                <button
                  type="button"
                  onClick={handleInquireDesign}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0B1D3A] hover:bg-[#132C54] rounded-md min-h-[44px]"
                >
                  <span>
                    {langMode === 'ta'
                      ? 'இதுபோல் கட்ட ஆலோசிக்க'
                      : langMode === 'en'
                        ? 'Discuss Similar Build'
                        : 'இதுபோல் கட்ட ஆலோசிக்க · Enquire'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
