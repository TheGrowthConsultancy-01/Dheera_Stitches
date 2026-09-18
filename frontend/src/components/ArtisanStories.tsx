import { useState } from 'react'
import type { Artisan } from '../types/artisan'
import { X, ArrowRight, BookOpen, Quote, MapPin, Sparkles, Play, Pause, Heart, Clock, Award } from 'lucide-react'

const ARTISANS_DATA: Artisan[] = [
  {
    id: 'shanti-devi',
    name: 'Shanti Devi',
    craft: 'Lucknowi Chikankari',
    craftCategory: 'Embroidery',
    location: 'Kakori, Lucknow',
    experienceYears: 35,
    craftMetric: '42,000+ Stitches',
    fabricType: 'Pure Mulmul Muslin',
    signatureTechnique: 'Shadow & Bakhiya Work',
    hoursPerPiece: '48 Hours',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop',
    quote: 'Every delicate shadow-stitch carries the quiet patience of generations, turning sheer muslin into heirloom poetry.',
    fullStory:
      'Shanti Devi has practiced the heirloom art of Chikankari embroidery since she was twelve, mastering 32 distinct needle techniques including Bakhiya, Phanda, and Tepchi. Over 35 years, she has mentored more than 200 rural women across Kakori, enabling financial independence while preserving an art form that once graced the royal courts of Awadh. Each Dheera creation she touches carries over 45 hours of meditative, unhurried needlework.',
    themeColor: {
      bg: '#FAF7F2',
      accent: '#A35339',
      lightBg: '#F4EFE6',
      border: '#D8CBBF',
      badgeBg: 'rgba(163, 83, 57, 0.9)',
    },
  },
  {
    id: 'mohammad-rafiq',
    name: 'Mohammad Rafiq',
    craft: 'Chanderi Zari Handloom',
    craftCategory: 'Handloom',
    location: 'Pranpur, Chanderi',
    experienceYears: 28,
    craftMetric: '16 Days on Loom',
    fabricType: 'Silk & Silver Zari',
    signatureTechnique: 'Traditional Pit Loom',
    hoursPerPiece: '65 Hours',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop',
    quote: 'The rhythmic clack of our wooden pit-loom is our village heartbeat, marrying raw silk with silver threads into gossamer drape.',
    fullStory:
      'A 3rd-generation weaver from the historic lanes of Pranpur near Chanderi, Mohammad Rafiq synchronizes foot treadles and flying shuttles on heritage pit looms. His craft yields the world-renowned feather-light translucency of Chanderi, with intricate motifs woven in pure silver-gilt zari that will endure across family heirlooms for decades.',
    themeColor: {
      bg: '#FAF7F2',
      accent: '#A35339',
      lightBg: '#F4EFE6',
      border: '#D8CBBF',
      badgeBg: 'rgba(163, 83, 57, 0.9)',
    },
  },
  {
    id: 'ananya-vankar',
    name: 'Ananya & Devji Vankar',
    craft: 'Kutch Ajrakh Block Print',
    craftCategory: 'Block Print',
    location: 'Ajrakhpur, Kutch',
    experienceYears: 24,
    craftMetric: '16-Stage Dyeing',
    fabricType: 'Handspun Desert Cotton',
    signatureTechnique: 'Teak Block & Mineral Resist',
    hoursPerPiece: '38 Hours',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop',
    quote: 'Hand-carved teakwood blocks and natural indigo—every cosmic geometric motif is printed in rhythm with the sun and river.',
    fullStory:
      'Rooted in the arid sands of Kutch, Ananya and Devji carry forward the sacred 16-stage resist-dyeing process known as Ajrakh. Using hand-carved teakwood blocks, madder root, indigo, pomegranate rind, and river mud, their work is completely free of synthetic chemicals, creating fabrics that breathe with the earth.',
    themeColor: {
      bg: '#FAF7F2',
      accent: '#A35339',
      lightBg: '#F4EFE6',
      border: '#D8CBBF',
      badgeBg: 'rgba(163, 83, 57, 0.9)',
    },
  },
]

export default function ArtisanStories() {
  const [selectedArtisan, setSelectedArtisan] = useState<Artisan | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-10 bg-warm-cream relative overflow-hidden font-sans select-none border-t border-warm-parchment/60">
      {/* Background Radial Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-terracotta/[0.04] rounded-full blur-3xl pointer-events-none"></div>

      {/* 1. EDITORIAL INTRO HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-warm-parchment bg-warm-sand/80 backdrop-blur-md text-terracotta text-[11px] uppercase tracking-[0.25em] font-semibold mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-terracotta" />
          The Atelier & Makers
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-earth-dark tracking-tight mb-3">
          Stories Woven By Hand
        </h2>

        <p className="font-script text-2xl sm:text-3xl text-terracotta mb-3">
          Behind every thread lies a human soul
        </p>

        <p className="text-earth-muted text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed">
          At Dheera Stitches, every collection is a tribute to generational artisans across India. Hover over an artisan to explore their craft, patience, and ancestral journey.
        </p>
      </div>

      {/* 2. CINEMATIC EDITORIAL CARDS (STRICTLY 3-IN-A-ROW ON DESKTOP) */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8 items-stretch relative z-10">
        {ARTISANS_DATA.map((artisan) => {
          const isHovered = hoveredId === artisan.id

          return (
            <div
              key={artisan.id}
              className={`group relative h-[520px] sm:h-[550px] rounded-[32px] overflow-hidden cursor-pointer transition-all duration-700 ease-out flex flex-col justify-between p-6 sm:p-7 border ${
                isHovered
                  ? '-translate-y-3.5 shadow-2xl shadow-terracotta/25 border-terracotta'
                  : hoveredId
                  ? 'opacity-80 scale-[0.98] shadow-sm border-warm-parchment'
                  : 'shadow-lg shadow-stone-300/40 border-warm-parchment hover:-translate-y-1.5'
              }`}
              onMouseEnter={() => setHoveredId(artisan.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedArtisan(artisan)}
            >
              {/* Full-Bleed Background Photography */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-earth-dark">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className={`w-full h-full object-cover transition-transform duration-1000 ease-out origin-center ${
                    isHovered ? 'scale-110' : 'scale-100'
                  }`}
                />

                {/* Cinematic Gradient Overlays (Deep dark base for crisp typography) */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-dark via-earth-dark/40 to-black/30" />

                {/* Warm Terracotta Ambient Glow on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-terracotta-dark/60 via-transparent to-transparent transition-opacity duration-700 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              {/* TOP ROW: Micro Badges & Craft Seal */}
              <div className="relative z-10 flex items-start justify-between w-full">
                {/* Craft Category Glass Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold uppercase tracking-[0.2em] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300"></span>
                  {artisan.craftCategory}
                </span>

                {/* Circular Experience Seal */}
                <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex flex-col items-center justify-center text-white shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:bg-terracotta/90 group-hover:border-terracotta">
                  <span className="text-[11px] font-bold leading-none">{artisan.experienceYears}</span>
                  <span className="text-[8px] uppercase tracking-tighter opacity-80 leading-none mt-0.5">YRS</span>
                </div>
              </div>

              {/* BOTTOM ROW: The Dynamic Story Card / Editorial Drawer */}
              <div className="relative z-10 w-full flex flex-col items-start text-left">
                {/* Location with Pin */}
                <div className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-200/90 tracking-wide mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  <span>{artisan.location}</span>
                </div>

                {/* Artisan Name in Large Editorial Serif */}
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight mb-1.5 leading-none transition-transform duration-500 group-hover:translate-x-1">
                  {artisan.name}
                </h3>

                {/* Technique & Fabric Pill */}
                <p className="text-xs text-white/75 font-light mb-3">
                  {artisan.craft} • <span className="text-amber-200/80 italic">{artisan.fabricType}</span>
                </p>

                {/* Golden Stitch Accent Line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-amber-300/80 via-white/40 to-transparent mb-3.5"></div>

                {/* HOVER-ONLY STORY EXPANSION (Smoothly slides up only on hover) */}
                <div
                  className={`w-full transition-all duration-500 ease-out overflow-hidden ${
                    isHovered
                      ? 'opacity-100 max-h-48 translate-y-0'
                      : 'opacity-0 max-h-0 translate-y-3 pointer-events-none'
                  }`}
                >
                  {/* Heartfelt Quote */}
                  <div className="p-3.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 shadow-sm mb-4">
                    <Quote className="w-3.5 h-3.5 text-amber-300/70 mb-1" />
                    <p className="font-serif italic text-xs sm:text-[13px] text-white/95 leading-relaxed line-clamp-3">
                      "{artisan.quote}"
                    </p>
                  </div>

                  {/* Read Story Action Trigger */}
                  <div className="w-full flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedArtisan(artisan)
                      }}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:text-amber-300 transition-colors group/btn"
                    >
                      <span className="border-b border-white/50 hover:border-amber-300 pb-0.5">Explore Legacy</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5 text-amber-300" />
                    </button>

                    <span className="text-[10px] uppercase tracking-wider text-white/60 font-light flex items-center gap-1">
                      <Clock className="w-3 h-3 text-white/60" />
                      {artisan.hoursPerPiece}
                    </span>
                  </div>
                </div>

                {/* Subtle Prompt when NOT hovered */}
                <div
                  className={`w-full flex items-center justify-between text-[10.5px] uppercase tracking-[0.22em] text-white/60 font-medium transition-all duration-300 ${
                    isHovered ? 'opacity-0 h-0 overflow-hidden' : 'opacity-85'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                    <span>Tap to view story</span>
                  </span>
                  <span>{artisan.craftMetric}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* 3. CRAFT REVERENCE ACCENT STRIP */}
      <div className="mt-20 max-w-4xl mx-auto text-center border-t border-warm-parchment/80 pt-8 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs font-medium text-earth-muted">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-terracotta" />
            <span>100% Direct Fair-Trade Living Wages</span>
          </div>
          <span className="hidden sm:inline text-warm-parchment">•</span>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-terracotta" />
            <span>Natural Mineral & Organic River Dyes</span>
          </div>
          <span className="hidden sm:inline text-warm-parchment">•</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-terracotta" />
            <span>Revitalizing 500-Year-Old Handloom Clusters</span>
          </div>
        </div>
      </div>

      {/* 4. IMMERSIVE STORY MODAL */}
      {selectedArtisan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-earth-dark/75 backdrop-blur-md animate-fade-in"
          onClick={() => {
            setSelectedArtisan(null)
            setIsPlayingAudio(false)
          }}
        >
          <div
            className="relative w-full max-w-2xl bg-warm-cream rounded-3xl overflow-hidden shadow-2xl border border-warm-parchment animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Hero Banner */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-earth-dark flex items-end p-6 sm:p-8">
              <img
                src={selectedArtisan.image}
                alt={selectedArtisan.name}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-dark via-earth-dark/50 to-black/30" />

              <button
                type="button"
                onClick={() => {
                  setSelectedArtisan(null)
                  setIsPlayingAudio(false)
                }}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta text-white text-[10px] font-semibold uppercase tracking-[0.2em] mb-2">
                  <Sparkles className="w-3 h-3" />
                  {selectedArtisan.craft}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-normal text-white">
                  {selectedArtisan.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 flex items-center gap-1.5 mt-1 font-light">
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  <span>{selectedArtisan.location}</span>
                  <span>•</span>
                  <span>{selectedArtisan.experienceYears}+ Years Craft Mastery</span>
                </p>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[55vh] overflow-y-auto">
              {/* Audio Loom Rhythm & Voice Player Simulation */}
              <div className="p-4 rounded-2xl bg-warm-sand border border-warm-parchment flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-10 h-10 rounded-full bg-terracotta text-white flex items-center justify-center shadow-md hover:bg-terracotta-dark transition-colors shrink-0"
                  >
                    {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                  <div>
                    <span className="text-xs font-semibold text-earth-dark block">
                      {isPlayingAudio ? 'Listening to Loom Clack & Story...' : 'Listen to Loom Sounds & Artisan Voice'}
                    </span>
                    <span className="text-[10.5px] text-earth-muted">
                      Recorded in {selectedArtisan.location} • 1:24 min
                    </span>
                  </div>
                </div>

                {/* Animated Equalizer Soundwave */}
                <div className="flex items-center gap-1 h-5">
                  {[10, 18, 14, 22, 12, 16, 8].map((h, i) => (
                    <span
                      key={i}
                      className={`w-1 rounded-full bg-terracotta transition-all duration-300 ${
                        isPlayingAudio ? 'animate-pulse' : 'opacity-35'
                      }`}
                      style={{ height: isPlayingAudio ? `${h}px` : '6px' }}
                    ></span>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="p-5 rounded-2xl bg-white border border-warm-parchment shadow-xs relative">
                <Quote className="w-6 h-6 text-warm-parchment absolute top-3.5 left-3.5" />
                <p className="text-earth-dark font-serif italic text-base sm:text-lg pl-7 leading-relaxed">
                  "{selectedArtisan.quote}"
                </p>
              </div>

              {/* Full Narrative */}
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta mb-2 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  The Generational Legacy
                </h4>
                <p className="text-earth-muted text-xs sm:text-sm leading-relaxed font-light">
                  {selectedArtisan.fullStory}
                </p>
              </div>

              {/* Craft Metrics Table */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-warm-sand p-3.5 rounded-xl text-center border border-warm-parchment">
                  <span className="text-[9.5px] uppercase tracking-wider text-earth-muted block">Artisan Metric</span>
                  <span className="font-semibold text-xs text-earth-dark">{selectedArtisan.craftMetric}</span>
                </div>
                <div className="bg-warm-sand p-3.5 rounded-xl text-center border border-warm-parchment">
                  <span className="text-[9.5px] uppercase tracking-wider text-earth-muted block">Time Invested</span>
                  <span className="font-semibold text-xs text-earth-dark">{selectedArtisan.hoursPerPiece}</span>
                </div>
                <div className="bg-warm-sand p-3.5 rounded-xl text-center border border-warm-parchment">
                  <span className="text-[9.5px] uppercase tracking-wider text-earth-muted block">Impact</span>
                  <span className="font-semibold text-xs text-terracotta flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Direct Fair Trade
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 sm:px-8 py-4 bg-warm-sand border-t border-warm-parchment flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setSelectedArtisan(null)
                  setIsPlayingAudio(false)
                }}
                className="px-6 py-2 bg-earth-dark hover:bg-black text-warm-cream text-[11px] uppercase tracking-[0.22em] font-medium rounded-full shadow-sm transition-colors"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
