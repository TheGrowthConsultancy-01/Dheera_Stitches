import { useState } from 'react'
import type { Artisan } from '../types/artisan'
import { X, ArrowRight, BookOpen, Quote, MapPin, Sparkles, Play, Pause, Heart, Clock } from 'lucide-react'

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
    signatureTechnique: 'Bakhiya & Shadow Work',
    hoursPerPiece: '48 Hours',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop',
    quote: 'Every delicate shadow-stitch carries the quiet patience of generations, turning sheer muslin into heirloom poetry.',
    fullStory:
      'Shanti Devi has practiced the heirloom art of Chikankari embroidery since she was twelve, mastering 32 distinct stitch techniques including Bakhiya, Phanda, and Tepchi. Over 35 years, she has mentored more than 200 rural women across Kakori, enabling financial independence while preserving an art form that once graced the royal courts of Awadh. Each Dheera creation she touches carries over 45 hours of meditative, unhurried needlework.',
    themeColor: {
      bg: '#F5EFE6', // Warm Sand from site theme
      accent: '#A35339', // Terracotta from site theme
      lightBg: '#EDE4D4',
      border: '#D8CBBF',
      badgeBg: '#E8DC CE',
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
    quote: 'The rhythmic clack of the pit-loom is our village heartbeat, marrying raw silk with silver threads into gossamer drape.',
    fullStory:
      'A 3rd-generation weaver from the historic lanes of Pranpur near Chanderi, Mohammad Rafiq synchronizes foot treadles and flying shuttles on heritage pit looms. His craft yields the world-renowned feather-light translucency of Chanderi, with intricate motifs woven in pure silver-gilt zari that will endure across family heirlooms for decades.',
    themeColor: {
      bg: '#F2ECE2',
      accent: '#A35339',
      lightBg: '#EAE1D2',
      border: '#D6C8B9',
      badgeBg: '#E5D8C8',
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
      bg: '#F4EEE5',
      accent: '#A35339',
      lightBg: '#EBE2D4',
      border: '#D7CABE',
      badgeBg: '#E6D9CA',
    },
  },
]

export default function ArtisanStories() {
  const [selectedArtisan, setSelectedArtisan] = useState<Artisan | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-10 bg-warm-cream relative overflow-hidden font-sans select-none border-t border-warm-parchment/60">
      {/* Background Subtle Textile Weave Grid Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#2B2522_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* 1. EDITORIAL SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-warm-parchment bg-warm-sand/80 backdrop-blur-sm text-terracotta text-xs font-semibold tracking-[0.2em] uppercase mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-terracotta" />
          The Living Hands of Dheera
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif font-normal text-earth-dark tracking-tight mb-3">
          Behind Every Stitch, A Human Soul
        </h2>

        <p className="font-script text-xl sm:text-2xl text-terracotta mb-2">
          Where ancient patience meets contemporary grace
        </p>

        <p className="text-earth-muted text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed">
          Before each garment graces your wardrobe, it spends weeks in the devoted hands of master weavers, embroiderers, and printers across India.
        </p>
      </div>

      {/* 2. THREE ARTISAN PORTALS (STRICTLY 3-IN-A-ROW ON DESKTOP) */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9 items-stretch relative z-10">
        {ARTISANS_DATA.map((artisan) => {
          const isHovered = hoveredId === artisan.id

          return (
            <div
              key={artisan.id}
              className={`group relative flex flex-col rounded-t-[160px] cursor-pointer transition-all duration-700 ease-out ${
                isHovered
                  ? '-translate-y-3 shadow-2xl shadow-terracotta/20'
                  : hoveredId
                  ? 'opacity-85 scale-[0.985] shadow-xs'
                  : 'shadow-md shadow-stone-300/40 hover:-translate-y-1'
              }`}
              onMouseEnter={() => setHoveredId(artisan.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedArtisan(artisan)}
            >
              {/* Outer Architectural Portal Frame */}
              <div
                className={`w-full flex-1 flex flex-col rounded-t-[160px] overflow-hidden border transition-all duration-500 ${
                  isHovered ? 'border-terracotta ring-1 ring-terracotta/30 bg-warm-sand' : 'border-warm-parchment bg-warm-sand/80'
                }`}
              >
                {/* A. TOP: Roman Arch Portrait with Inner Framing Matting */}
                <div className="relative w-full h-[320px] sm:h-[350px] rounded-t-[158px] overflow-hidden bg-warm-parchment/60">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                      isHovered ? 'scale-106' : 'scale-100'
                    }`}
                  />

                  {/* Inner Arch Hairline Framing Stroke */}
                  <div
                    className={`absolute inset-2.5 rounded-t-[148px] border transition-all duration-700 pointer-events-none ${
                      isHovered ? 'border-white/85' : 'border-white/45'
                    }`}
                  ></div>

                  {/* Top Location & Experience Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-earth-dark text-[10px] font-semibold tracking-wider uppercase border border-white/50 shadow-xs">
                      <MapPin className="w-3 h-3 text-terracotta" />
                      {artisan.location}
                    </span>
                  </div>

                  {/* Top-Right Craft Metric Pill */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-earth-dark/85 backdrop-blur-md text-white text-[9.5px] font-medium tracking-wider uppercase shadow-xs">
                      <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                      {artisan.craftMetric}
                    </span>
                  </div>

                  {/* Lower Photo Fabric & Hours Pill */}
                  <div className="absolute bottom-3 inset-x-4 flex justify-between items-center z-20">
                    <span className="text-[10px] uppercase tracking-wider font-medium text-white/95 drop-shadow-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                      {artisan.fabricType}
                    </span>
                    <span className="text-[9.5px] uppercase tracking-wider text-white/80 font-light flex items-center gap-1">
                      <Clock className="w-3 h-3 text-white/80" />
                      {artisan.hoursPerPiece}
                    </span>
                  </div>

                  {/* Warm Sunset Scrim on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-earth-dark/50 via-transparent to-transparent transition-opacity duration-500 pointer-events-none ${
                      isHovered ? 'opacity-100' : 'opacity-20'
                    }`}
                  />
                </div>

                {/* B. BOTTOM: Warm Sand Card Body with Smooth Story Drawer */}
                <div
                  className="flex-1 p-6 sm:p-7 flex flex-col justify-between items-center text-center relative border-t border-warm-parchment transition-all duration-500 overflow-hidden"
                  style={{ backgroundColor: artisan.themeColor.bg }}
                >
                  {/* The Golden Thread Animation across top edge on hover */}
                  <div
                    className={`absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-terracotta to-transparent transition-transform duration-700 ease-out origin-left ${
                      isHovered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    }`}
                  />

                  {/* Content Container */}
                  <div className="w-full flex flex-col items-center">
                    {/* Craft Category & Technique Badge */}
                    <div className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.24em] text-terracotta font-semibold mb-1.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-terracotta transition-transform duration-500 ${
                          isHovered ? 'scale-125' : 'scale-100'
                        }`}
                      ></span>
                      <span>{artisan.craft}</span>
                    </div>

                    {/* Artisan Name in Editorial Serif */}
                    <h3 className="font-serif text-2xl sm:text-[29px] font-medium text-earth-dark tracking-tight mb-1.5 leading-none transition-transform duration-500 group-hover:scale-[1.02]">
                      {artisan.name}
                    </h3>

                    {/* Technique Subtitle */}
                    <p className="text-xs text-earth-muted font-light mb-3 italic">
                      Specialist in {artisan.signatureTechnique}
                    </p>

                    {/* HOVER-ONLY STORY DRAWER (Expands smoothly on hover only) */}
                    <div
                      className={`w-full flex flex-col items-center transition-all duration-500 ease-out overflow-hidden ${
                        isHovered
                          ? 'opacity-100 max-h-56 translate-y-0 pointer-events-auto'
                          : 'opacity-0 max-h-0 -translate-y-3 pointer-events-none'
                      }`}
                    >
                      {/* Quote Box with Stylized Quotes */}
                      <div className="relative py-2 px-3 mb-4 bg-white/50 backdrop-blur-xs rounded-xl border border-white/60 shadow-xs">
                        <Quote className="w-3.5 h-3.5 text-terracotta/40 mb-1 mx-auto" />
                        <p className="font-serif italic text-xs sm:text-[13px] text-earth-dark leading-relaxed line-clamp-3">
                          "{artisan.quote}"
                        </p>
                      </div>

                      {/* Explore Full Story Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedArtisan(artisan)
                        }}
                        className="group/btn inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-earth-dark hover:text-terracotta border-b border-earth-dark/40 hover:border-terracotta pb-1 transition-all"
                      >
                        <span>Read Full Story</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1 text-terracotta" />
                      </button>
                    </div>

                    {/* When NOT hovered: Minimal poetic cue */}
                    <div
                      className={`transition-all duration-300 flex flex-col items-center gap-1 mt-1 text-terracotta text-[10px] tracking-[0.22em] uppercase font-medium ${
                        isHovered ? 'opacity-0 h-0 overflow-hidden' : 'opacity-80'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-terracotta"></span>
                        <span>Hover to read story</span>
                        <span className="w-1 h-1 rounded-full bg-terracotta"></span>
                      </div>
                      <span className="text-[9px] animate-bounce">↓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* 3. CRAFT REVERENCE FOOTNOTE STRIP */}
      <div className="mt-16 max-w-4xl mx-auto text-center border-t border-warm-parchment/80 pt-8 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs font-medium text-earth-muted">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-terracotta" />
            <span>100% Direct Fair Trade Wages</span>
          </div>
          <span className="hidden sm:inline text-warm-parchment">•</span>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-terracotta" />
            <span>Zero Synthetic Chemicals & AZO-Free Dyes</span>
          </div>
          <span className="hidden sm:inline text-warm-parchment">•</span>
          <div className="flex items-center gap-2">
            <span className="text-base">🧵</span>
            <span>Revitalizing 500-Year-Old Handloom Villages</span>
          </div>
        </div>
      </div>

      {/* 4. FULL STORY MODAL (Opened upon clicking card or "Read Full Story") */}
      {selectedArtisan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-earth-dark/70 backdrop-blur-md animate-fade-in"
          onClick={() => {
            setSelectedArtisan(null)
            setIsPlayingAudio(false)
          }}
        >
          <div
            className="relative w-full max-w-xl bg-warm-cream rounded-3xl overflow-hidden shadow-2xl border border-warm-parchment animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-7 sm:p-8 bg-warm-sand border-b border-warm-parchment relative flex items-center gap-5">
              <button
                type="button"
                onClick={() => {
                  setSelectedArtisan(null)
                  setIsPlayingAudio(false)
                }}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-earth-dark/10 hover:bg-earth-dark/20 text-earth-dark flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-20 h-24 rounded-t-[40px] overflow-hidden border-2 border-white shadow-md shrink-0 bg-warm-parchment">
                <img
                  src={selectedArtisan.image}
                  alt={selectedArtisan.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-terracotta font-semibold block mb-1">
                  {selectedArtisan.craft}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-earth-dark leading-tight">
                  {selectedArtisan.name}
                </h3>
                <p className="text-xs text-earth-muted flex items-center gap-1.5 mt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-terracotta" />
                  <span>{selectedArtisan.location}</span>
                  <span>•</span>
                  <span>{selectedArtisan.experienceYears}+ Years Craft Mastery</span>
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-7 sm:p-8 space-y-5 max-h-[60vh] overflow-y-auto">
              {/* Audio Story & Loom Rhythm Simulation */}
              <div className="p-4 rounded-2xl bg-warm-parchment/60 border border-warm-parchment flex items-center justify-between gap-4">
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
                      {isPlayingAudio ? 'Playing Loom Rhythm & Voice...' : 'Listen to Artisan Voice & Loom'}
                    </span>
                    <span className="text-[10.5px] text-earth-muted">
                      Recorded in {selectedArtisan.location} • 1:20 min
                    </span>
                  </div>
                </div>

                {/* Animated Soundwave Equalizer */}
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
                  The Artisan Journey
                </h4>
                <p className="text-earth-muted text-xs sm:text-sm leading-relaxed font-light">
                  {selectedArtisan.fullStory}
                </p>
              </div>

              {/* Craft Metrics Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-warm-sand p-3.5 rounded-xl text-center border border-warm-parchment">
                  <span className="text-[9.5px] uppercase tracking-wider text-earth-muted block">Metric</span>
                  <span className="font-semibold text-xs text-earth-dark">{selectedArtisan.craftMetric}</span>
                </div>
                <div className="bg-warm-sand p-3.5 rounded-xl text-center border border-warm-parchment">
                  <span className="text-[9.5px] uppercase tracking-wider text-earth-muted block">Technique</span>
                  <span className="font-semibold text-xs text-earth-dark">{selectedArtisan.signatureTechnique.split(' ')[0]}</span>
                </div>
                <div className="bg-warm-sand p-3.5 rounded-xl text-center border border-warm-parchment">
                  <span className="text-[9.5px] uppercase tracking-wider text-earth-muted block">Direct Impact</span>
                  <span className="font-semibold text-xs text-terracotta flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Fair Trade
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-7 py-4 bg-warm-sand border-t border-warm-parchment flex justify-end">
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
