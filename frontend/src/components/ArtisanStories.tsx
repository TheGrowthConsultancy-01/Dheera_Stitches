import { useState } from 'react'
import type { Artisan } from '../types/artisan'
import { X, ArrowRight, BookOpen, Quote, MapPin, Sparkles, Play, Pause } from 'lucide-react'

const ARTISANS_DATA: Artisan[] = [
  {
    id: 'shanti-devi',
    name: 'Shanti Devi',
    craft: 'Lucknowi Chikankari',
    location: 'Kakori, Lucknow',
    experienceYears: 35,
    craftMetric: '42,000+ Hand Stitches',
    fabricType: 'Pure Mulmul Muslin',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop',
    quote: 'Every delicate shadow-stitch carries the quiet patience of generations, turning sheer muslin into heirloom poetry.',
    fullStory:
      'Shanti Devi has practiced the heirloom art of Chikankari embroidery since childhood, mastering 32 distinct stitch techniques like Bakhiya, Phanda, and Tepchi. Over the last 35 years, she has trained more than 200 rural women, empowering them with financial independence while preserving a craft that once adorned royal Awadhi courts. Each Dheera kurti she touches carries over 40 hours of meditative needlework.',
    themeColor: {
      bg: '#EAE0D3',
      accent: '#8C5D3A',
      lightBg: '#F5EFE7',
      border: '#D0C1B0',
      foldShadow: '#8C5D3A',
    },
  },
  {
    id: 'mohammad-rafiq',
    name: 'Mohammad Rafiq',
    craft: 'Chanderi Zari Handloom',
    location: 'Pranpur, Chanderi',
    experienceYears: 28,
    craftMetric: '16 Days on Pit Loom',
    fabricType: 'Silk & Silver Zari',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop',
    quote: 'The rhythmic clack of our handloom is the village heartbeat, marrying raw silk with silver threads into timeless grace.',
    fullStory:
      'A 3rd-generation weaver from Pranpur, Mohammad Rafiq weaves fine mulmul, silk, and pure silver-gilt zari motifs on traditional pit looms. Each fabric takes up to two weeks of rhythmic foot and shuttle synchronization, creating the legendary feather-light drape of Chanderi that has dressed royalty for centuries.',
    themeColor: {
      bg: '#E6D7C7',
      accent: '#8C5D3A',
      lightBg: '#F3ECE4',
      border: '#CBBBAA',
      foldShadow: '#8C5D3A',
    },
  },
  {
    id: 'ananya-vankar',
    name: 'Ananya Vankar',
    craft: 'Kutch Ajrakh Block Print',
    location: 'Ajrakhpur, Kutch',
    experienceYears: 24,
    craftMetric: '16-Stage Mineral Dye',
    fabricType: 'Handspun Desert Cotton',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop',
    quote: 'Carved teakwood blocks and natural indigo—every cosmic geometric motif is hand-printed in sacred rhythm with the sun.',
    fullStory:
      'Carrying forward the sacred 16-stage resist-dyeing process of Ajrakh in Kutch, Ananya and her family craft breathtaking cosmic geometric patterns using carved teak blocks, indigo, madder root, and natural mineral dyes. Their craft is completely chemical-free, honoring the soil and river.',
    themeColor: {
      bg: '#E9DDD0',
      accent: '#8C5D3A',
      lightBg: '#F5EFE8',
      border: '#D2C4B4',
      foldShadow: '#8C5D3A',
    },
  },
]

export default function ArtisanStories() {
  const [selectedArtisan, setSelectedArtisan] = useState<Artisan | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F2EB] min-h-[820px] flex flex-col justify-center items-center font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden select-none">
      {/* Subtle Background Architectural Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[radial-gradient(#2B231D_1px,transparent_1px)] [background-size:28px_28px]"></div>

      {/* Editorial Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D5C6B5] bg-[#EFE5D8]/80 backdrop-blur-sm text-[#7D5333] text-[10.5px] uppercase tracking-[0.28em] font-semibold mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#A06C44]" />
          Dheera Master Artisans
        </div>
        <h2 className="text-3xl sm:text-5xl font-['Cormorant_Garamond',serif] font-normal text-[#2B231D] tracking-tight mb-3">
          The Living Hands Behind The Loom
        </h2>
        <p className="text-[#6D5E53] text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
          Every silhouette is handcrafted with patience and soul. Hover over an artisan to explore their craft and journey.
        </p>
      </div>

      {/* 3 IN A SINGLE LINE (Strictly md:grid-cols-3) */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch relative z-10">
        {ARTISANS_DATA.map((artisan) => {
          const isHovered = hoveredId === artisan.id

          return (
            <div
              key={artisan.id}
              className={`group relative flex flex-col rounded-t-[170px] cursor-pointer transition-all duration-700 ease-out ${
                isHovered
                  ? '-translate-y-3.5 shadow-2xl shadow-[#8C5D3A]/20'
                  : hoveredId
                  ? 'opacity-85 scale-[0.98] shadow-sm'
                  : 'shadow-md shadow-stone-200/60'
              }`}
              onMouseEnter={() => setHoveredId(artisan.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedArtisan(artisan)}
            >
              {/* Outer Architectural Framing Card */}
              <div
                className={`w-full flex-1 flex flex-col rounded-t-[170px] overflow-hidden border transition-all duration-500 ${
                  isHovered ? 'border-[#8C5D3A] ring-1 ring-[#8C5D3A]/40 bg-[#FAF5EE]' : 'border-[#D0C0B0] bg-[#FAF5EE]'
                }`}
              >
                {/* 1. TOP: Architectural Roman Arch Photo Frame */}
                <div className="relative w-full h-[320px] sm:h-[350px] rounded-t-[168px] overflow-hidden bg-[#E9DFC4]">
                  {/* Image with Smooth Zoom */}
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                      isHovered ? 'scale-108' : 'scale-100'
                    }`}
                  />

                  {/* Inner Arch Hairline Framing Inset */}
                  <div
                    className={`absolute inset-2.5 rounded-t-[158px] border transition-all duration-700 pointer-events-none ${
                      isHovered ? 'border-white/80' : 'border-white/40'
                    }`}
                  ></div>

                  {/* Top-Right Craft Metric Pill (Special Feature) */}
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`text-[9.5px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full shadow-sm transition-all duration-500 backdrop-blur-md flex items-center gap-1 ${
                        isHovered
                          ? 'bg-[#2B231D] text-white'
                          : 'bg-white/85 text-[#2B231D] border border-white/40'
                      }`}
                    >
                      <Sparkles className="w-2.5 h-2.5 text-[#E6C687]" />
                      {artisan.craftMetric}
                    </span>
                  </div>

                  {/* Bottom Fabric Swatch Pill on Photo */}
                  <div className="absolute bottom-3 left-4 z-20">
                    <span className="text-[10px] uppercase tracking-widest font-medium text-white/95 drop-shadow-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E6C687] animate-pulse"></span>
                      {artisan.fabricType}
                    </span>
                  </div>

                  {/* Warm Gradient Scrim on Photo */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#2B231D]/45 via-transparent to-transparent transition-opacity duration-500 pointer-events-none ${
                      isHovered ? 'opacity-100' : 'opacity-20'
                    }`}
                  />
                </div>

                {/* 2. BOTTOM CONTENT BLOCK: SPECIAL ANIMATION ON HOVER */}
                <div
                  className="flex-1 p-7 sm:p-8 flex flex-col justify-between items-center text-center relative border-t border-[#D0C0B0] transition-all duration-500 overflow-hidden"
                  style={{ backgroundColor: artisan.themeColor.bg }}
                >
                  {/* SPECIAL ANIMATION: The Golden Thread Stitch Line (Scales across top on hover) */}
                  <div
                    className={`absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#8C5D3A] to-transparent transition-transform duration-700 ease-out origin-left ${
                      isHovered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    }`}
                  />

                  {/* Header Info */}
                  <div className="w-full flex flex-col items-center">
                    {/* Craft Category with Animated Bullet */}
                    <div className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.24em] text-[#8C5D3A] font-semibold mb-1.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-[#8C5D3A] transition-transform duration-500 ${
                          isHovered ? 'scale-125' : 'scale-100'
                        }`}
                      ></span>
                      <span>{artisan.craft}</span>
                    </div>

                    {/* Artisan Name in Editorial Serif */}
                    <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-[29px] font-medium text-[#2B231D] tracking-tight mb-1.5 leading-none transition-transform duration-500 group-hover:scale-[1.02]">
                      {artisan.name}
                    </h3>

                    {/* Location Pin */}
                    <p className="text-xs text-[#6F6054] flex items-center gap-1 font-light mb-3">
                      <MapPin className="w-3 h-3 text-[#8C5D3A]" />
                      <span>{artisan.location}</span>
                    </p>

                    {/* SPECIAL DYNAMIC ANIMATION: Story slides in with staggered delay ONLY on hovered card */}
                    <div
                      className={`w-full flex flex-col items-center transition-all duration-500 ease-out overflow-hidden ${
                        isHovered
                          ? 'opacity-100 max-h-56 translate-y-0 pointer-events-auto'
                          : 'opacity-0 max-h-0 -translate-y-3 pointer-events-none'
                      }`}
                    >
                      {/* Stylized Quote */}
                      <div className="relative py-1.5 px-3 mb-4 bg-white/40 backdrop-blur-xs rounded-xl border border-white/50 shadow-xs">
                        <Quote className="w-4 h-4 text-[#8C5D3A]/40 mb-1 mx-auto" />
                        <p className="text-xs sm:text-[13px] font-light text-[#3F342B] leading-relaxed italic line-clamp-3">
                          "{artisan.quote}"
                        </p>
                      </div>

                      {/* Animated READ FULL STORY Button with Sliding Arrow */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedArtisan(artisan)
                        }}
                        className="group/btn inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#2B231D] hover:text-[#8C5D3A] border-b border-[#2B231D]/40 hover:border-[#8C5D3A] pb-1 transition-all"
                      >
                        <span>Explore Full Journey</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1 text-[#8C5D3A]" />
                      </button>
                    </div>

                    {/* When NOT hovered: Minimal Prompt Indicator */}
                    <div
                      className={`transition-all duration-300 flex flex-col items-center gap-1 mt-1 text-[#8C5D3A] text-[10px] tracking-[0.24em] uppercase font-medium ${
                        isHovered ? 'opacity-0 h-0 overflow-hidden' : 'opacity-75'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#8C5D3A]"></span>
                        <span>Hover to unveil story</span>
                        <span className="w-1 h-1 rounded-full bg-[#8C5D3A]"></span>
                      </div>
                      <span className="text-[10px] animate-bounce">↓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* FULL STORY MODAL POPUP (With Audio Voice Note Simulation & Full Narrative) */}
      {selectedArtisan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-md animate-fade-in"
          onClick={() => {
            setSelectedArtisan(null)
            setIsPlayingAudio(false)
          }}
        >
          <div
            className="relative w-full max-w-xl bg-[#FAF5EE] rounded-3xl overflow-hidden shadow-2xl border border-[#D5C6B5]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Banner */}
            <div className="p-7 sm:p-8 bg-[#E6D7C7] border-b border-[#D0C0B0] relative flex items-center gap-5">
              <button
                type="button"
                onClick={() => {
                  setSelectedArtisan(null)
                  setIsPlayingAudio(false)
                }}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 text-[#2B231D] flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-20 h-24 rounded-t-[40px] overflow-hidden border-2 border-white/70 shadow-md shrink-0 bg-[#D9C8B4]">
                <img
                  src={selectedArtisan.image}
                  alt={selectedArtisan.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#8C5D3A] font-semibold block mb-1">
                  {selectedArtisan.craft}
                </span>
                <h3 className="text-2xl sm:text-3xl font-['Cormorant_Garamond',serif] font-medium text-[#2B231D] leading-tight">
                  {selectedArtisan.name}
                </h3>
                <p className="text-xs text-[#6F6054] flex items-center gap-1.5 mt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8C5D3A]" />
                  <span>{selectedArtisan.location}</span>
                  <span>•</span>
                  <span>{selectedArtisan.experienceYears}+ Years Craft Mastery</span>
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-7 sm:p-8 space-y-5 max-h-[60vh] overflow-y-auto">
              {/* SPECIAL FEATURE: Audio Story & Loom Rhythm Simulation */}
              <div className="p-4 rounded-2xl bg-[#F0E6D8] border border-[#DDCFC0] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-10 h-10 rounded-full bg-[#8C5D3A] text-white flex items-center justify-center shadow-md hover:bg-[#72482A] transition-colors shrink-0"
                  >
                    {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                  <div>
                    <span className="text-xs font-semibold text-[#2B231D] block">
                      {isPlayingAudio ? 'Listening to Loom Sound & Voice...' : 'Listen to Artisan Voice & Loom'}
                    </span>
                    <span className="text-[10.5px] text-[#7A6B5F]">Recorded in {selectedArtisan.location} • 1:20 min</span>
                  </div>
                </div>

                {/* Animated Soundwave Bars */}
                <div className="flex items-center gap-1 h-5">
                  {[12, 20, 16, 24, 14, 18, 10].map((h, i) => (
                    <span
                      key={i}
                      className={`w-1 rounded-full bg-[#8C5D3A] transition-all duration-300 ${
                        isPlayingAudio ? 'animate-pulse' : 'opacity-40'
                      }`}
                      style={{ height: isPlayingAudio ? `${h}px` : '6px' }}
                    ></span>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8DDCE] shadow-xs relative">
                <Quote className="w-7 h-7 text-[#D0C0B0] absolute top-3.5 left-3.5" />
                <p className="text-[#3F342B] font-['Cormorant_Garamond',serif] italic text-base sm:text-lg pl-8 leading-relaxed">
                  "{selectedArtisan.quote}"
                </p>
              </div>

              {/* Full Narrative */}
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8C5D3A] mb-2 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  The Artisan Journey
                </h4>
                <p className="text-[#5B4E42] text-xs sm:text-sm leading-relaxed font-light">
                  {selectedArtisan.fullStory}
                </p>
              </div>

              {/* Craft Metrics Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#EFE5D8] p-3 rounded-xl text-center border border-[#DFCFC0]">
                  <span className="text-[9.5px] uppercase tracking-wider text-[#7D6E62] block">Metric</span>
                  <span className="font-semibold text-xs text-[#2B231D]">{selectedArtisan.craftMetric}</span>
                </div>
                <div className="bg-[#EFE5D8] p-3 rounded-xl text-center border border-[#DFCFC0]">
                  <span className="text-[9.5px] uppercase tracking-wider text-[#7D6E62] block">Fabric</span>
                  <span className="font-semibold text-xs text-[#2B231D]">{selectedArtisan.fabricType.split(' ')[0]}</span>
                </div>
                <div className="bg-[#EFE5D8] p-3 rounded-xl text-center border border-[#DFCFC0]">
                  <span className="text-[9.5px] uppercase tracking-wider text-[#7D6E62] block">Fair Trade</span>
                  <span className="font-semibold text-xs text-[#8C5D3A] flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Direct
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-7 py-4 bg-[#EDE2D5] border-t border-[#D5C6B5] flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setSelectedArtisan(null)
                  setIsPlayingAudio(false)
                }}
                className="px-6 py-2 bg-[#2B231D] hover:bg-[#3D3329] text-[#FAF5EE] text-[11px] uppercase tracking-[0.22em] font-medium rounded-full shadow-sm transition-colors"
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
