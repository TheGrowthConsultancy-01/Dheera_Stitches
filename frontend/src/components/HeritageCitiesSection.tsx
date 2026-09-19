import React, { useState } from 'react'
import { ArrowRight, Sparkles, MapPin, X } from 'lucide-react'

interface CityCraft {
  id: string
  name: string
  state: string
  craftName: string
  craftDescription: string
  image: string
  iconSvg: React.ReactNode
  productsCount: string
}

const CITIES_DATA: CityCraft[] = [
  {
    id: 'lucknow',
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    craftName: 'Chikankari Embroidery',
    craftDescription:
      'Awadhi shadow-work and delicate 32-needle hand embroidery practiced for over four centuries on sheer Mulmul muslin.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop',
    productsCount: '24 Creations',
    iconSvg: (
      <svg className="w-6 h-6 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" />
      </svg>
    ),
  },
  {
    id: 'chanderi',
    name: 'Chanderi',
    state: 'Madhya Pradesh',
    craftName: 'Zari Pit-Loom Weaves',
    craftDescription:
      'Feather-light gossamer drapes interlaced with pure silver-gilt zari and ethically sourced mulberry silk on ancestral wooden pit-looms.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b5ab8?q=80&w=900&auto=format&fit=crop',
    productsCount: '18 Creations',
    iconSvg: (
      <svg className="w-6 h-6 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
  },
  {
    id: 'kutch',
    name: 'Kutch',
    state: 'Gujarat',
    craftName: 'Ajrakh Block Print',
    craftDescription:
      'Sacred 16-stage natural resist-dyeing utilizing river mud, wild madder root, pomegranate rind, and desert mineral pigments.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop',
    productsCount: '32 Creations',
    iconSvg: (
      <svg className="w-6 h-6 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
      </svg>
    ),
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    craftName: 'Banarasi Silk Brocade',
    craftDescription:
      'Heirloom bridal brocades woven with metallic gold zari motifs across traditional drawlooms along the sacred Ghats of Kashi.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop',
    productsCount: '15 Creations',
    iconSvg: (
      <svg className="w-6 h-6 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    craftName: 'Sanganeri Hand Block',
    craftDescription:
      'Delicate floral calico prints and mud-resist Dabu techniques stamped rhythmically on desert cotton using hand-carved teakwood blocks.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop',
    productsCount: '28 Creations',
    iconSvg: (
      <svg className="w-6 h-6 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
      </svg>
    ),
  },
]

export const HeritageCitiesSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityCraft | null>(null)

  return (
    <section className="w-full bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden font-sans border-b border-warm-parchment/60 select-none">
      <div className="max-w-6xl mx-auto">
        {/* HEADER: Title in Center + View All on Right */}
        <div className="relative flex items-center justify-between mb-8 sm:mb-10">
          <div className="w-20 hidden sm:block" /> {/* Spacer to balance View All */}

          {/* Center Heading */}
          <div className="text-center mx-auto">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-earth-dark tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Shop by Heritage City
            </h2>
            <p className="text-xs sm:text-[13px] text-earth-muted font-light mt-1">
              Handcrafted specialties woven in their cities of origin
            </p>
          </div>

          {/* Right Action: View All */}
          <button
            type="button"
            onClick={() => alert('Viewing all craft clusters across India')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] uppercase tracking-[0.16em] font-semibold text-earth-dark hover:text-terracotta transition-colors cursor-pointer shrink-0"
          >
            <span>View all</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 5 CITY CARDS ROW (Exact layout from reference image) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5 lg:gap-6">
          {CITIES_DATA.map((city) => (
            <div
              key={city.id}
              onClick={() => setSelectedCity(city)}
              className="relative aspect-[3/4.2] rounded-[22px] overflow-hidden shadow-md shadow-stone-300/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer group bg-earth-dark"
            >
              {/* City Photo */}
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Bottom Dark Gradient Wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

              {/* Bottom Content: Line-Art Icon + City Name + Craft Specialty */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-center flex flex-col items-center justify-end z-10">
                {/* Line Icon Emblem (from reference image) */}
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center mb-2 shadow-xs group-hover:scale-110 group-hover:bg-terracotta/80 transition-all duration-300">
                  {city.iconSvg}
                </div>

                {/* City Name */}
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide leading-tight">
                  {city.name}
                </h3>

                {/* Craft Specialty */}
                <p className="text-[10.5px] sm:text-[11.5px] text-amber-200/90 font-light italic mt-0.5 line-clamp-1">
                  {city.craftName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CITY HERITAGE PREVIEW MODAL */}
      {selectedCity && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-earth-dark/75 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCity(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 text-center animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Hero Image */}
            <div className="relative h-56 sm:h-64 overflow-hidden bg-earth-dark flex items-end p-6">
              <img
                src={selectedCity.image}
                alt={selectedCity.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              <button
                type="button"
                onClick={() => setSelectedCity(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative z-10 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta text-white text-[10px] font-semibold uppercase tracking-[0.2em] mb-2">
                  <Sparkles className="w-3 h-3" />
                  {selectedCity.state}
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-normal text-white"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {selectedCity.name}
                </h3>
                <p className="text-xs text-amber-200/90 font-light italic mt-0.5">
                  {selectedCity.craftName} • {selectedCity.productsCount}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 text-left space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-terracotta">
                <MapPin className="w-4 h-4" />
                <span>Geographical Craft Heritage</span>
              </div>
              <p className="text-xs sm:text-sm text-earth-muted leading-relaxed font-light">
                {selectedCity.craftDescription}
              </p>

              <div className="p-3.5 rounded-xl bg-warm-sand/60 border border-warm-parchment text-xs text-earth-dark flex items-center justify-between">
                <span>Handcrafted by Dheera Artisans</span>
                <span className="font-semibold text-terracotta">{selectedCity.productsCount}</span>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCity(null)}
                  className="px-5 py-2.5 rounded-full border border-stone-300 text-earth-dark text-xs uppercase tracking-wider hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    alert(`Opening ${selectedCity.name} collection`)
                    setSelectedCity(null)
                  }}
                  className="px-6 py-2.5 rounded-full bg-earth-dark hover:bg-black text-white text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default HeritageCitiesSection
