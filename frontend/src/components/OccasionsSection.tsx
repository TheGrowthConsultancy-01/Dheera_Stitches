import React, { useState } from 'react'

interface OccasionCard {
  id: string
  title: string
  occasionCategory: string
  image: string
  rotationClass: string
}

const OCCASIONS_DATA: OccasionCard[] = [
  {
    id: 'wedding-festivities',
    title: 'Wedding & festivities',
    occasionCategory: 'Popular Pick',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop',
    rotationClass: '-rotate-1 hover:rotate-0',
  },
  {
    id: 'bestseller-month',
    title: 'Bestseller of the month',
    occasionCategory: 'Best Selling',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop',
    rotationClass: 'rotate-1 hover:rotate-0',
  },
  {
    id: 'popular-gift-picks',
    title: 'Popular gift picks',
    occasionCategory: 'Curated Gifts',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b5ab8?q=80&w=900&auto=format&fit=crop',
    rotationClass: '-rotate-0.5 hover:rotate-0',
  },
  {
    id: 'studio-handcrafted',
    title: 'Studio handcrafted',
    occasionCategory: 'Everyday Luxury',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=900&auto=format&fit=crop',
    rotationClass: 'rotate-1.5 hover:rotate-0',
  },
]

export const OccasionsSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<OccasionCard | null>(null)

  return (
    <section className="w-full bg-[#FAF7F2] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 relative overflow-hidden font-sans border-b border-warm-parchment/60 select-none">
      <div className="max-w-6xl mx-auto">
        {/* EDITORIAL HEADER BLOCK (Exact style from reference image) */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Main Title: Serif line + Calligraphy script line */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-earth-dark mb-1">
            <span
              className="font-serif block text-earth-dark tracking-normal"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Artful heirlooms —
            </span>
            <span
              className="block text-[#4A5D43] italic text-3xl sm:text-4xl lg:text-5xl mt-1 sm:mt-2 font-normal"
              style={{ fontFamily: "'Caveat', 'Alex Brush', cursive" }}
            >
              with taste and character
            </span>
          </h2>

          {/* Two-Column Editorial Narrative (Split side-by-side as in reference) */}
          <div className="mt-6 sm:mt-8 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 text-left text-xs sm:text-[13px] text-earth-muted leading-relaxed font-light">
            <p>
              Branches of tradition, subtle textures, vibrant accents — our heirloom collections are always unique, breaking the rules and charming with their distinctive style.
            </p>
            <p>
              We curate festive compositions, bestselling monthly edits, and minimalist bridal arrangements, carefully considering your wishes and thoughtfully crafting unexpected combinations.
            </p>
          </div>
        </div>

        {/* 4 POLAROID PHOTO CARDS GRID (Vintage white frame with cursive caption) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 items-stretch pt-2">
          {OCCASIONS_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`bg-white p-3.5 pb-7 sm:pb-8 shadow-md shadow-stone-300/35 rounded-[2px] border border-stone-200/60 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2.5 cursor-pointer group flex flex-col justify-between ${item.rotationClass}`}
            >
              {/* Photo Area */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-warm-sand/30">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Bottom White Margin: Handwritten Cursive Script Caption */}
              <div className="pt-3.5 text-center">
                <span
                  className="block text-xl sm:text-2xl text-earth-dark/85 italic leading-snug group-hover:text-terracotta transition-colors"
                  style={{ fontFamily: "'Caveat', 'Alex Brush', cursive" }}
                >
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK VIEW POPUP MODAL (Optional preview on card click) */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-earth-dark/75 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-stone-200 text-center animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-2xl text-earth-muted hover:text-earth-dark transition-colors cursor-pointer leading-none"
            >
              &times;
            </button>

            <div className="w-full aspect-[4/5] max-h-[380px] overflow-hidden rounded-lg mb-4 bg-warm-sand/30">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta block mb-1">
              {selectedItem.occasionCategory}
            </span>
            <h3
              className="text-2xl sm:text-3xl text-earth-dark italic mb-3"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              {selectedItem.title}
            </h3>
            <p className="text-xs text-earth-muted leading-relaxed font-light mb-6">
              Handcrafted with generational reverence. Explore our limited curated edition for this occasion.
            </p>

            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="bg-earth-dark hover:bg-black text-white px-8 py-3 rounded text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
            >
              Explore Collection
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default OccasionsSection
