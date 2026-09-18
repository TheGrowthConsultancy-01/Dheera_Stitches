import { useState, useEffect, useCallback } from 'react'
import {
  MapPin,
  Quote,
  BookOpen,
  Clock,
  Play,
  Pause,
} from 'lucide-react'

interface SlideData {
  id: string
  title: string
  artisanName: string
  craftName: string
  location: string
  experienceYears: number
  points: string[]
  buttonText: string
  image: string
  quote: string
  fullStory: string
  craftMetric: string
  hoursPerPiece: string
}

const SLIDES: SlideData[] = [
  {
    id: 'shanti-devi',
    title: 'HERITAGE OF OUR ARTISANS:',
    artisanName: 'Shanti Devi',
    craftName: 'Lucknowi Chikankari',
    location: 'Kakori, Lucknow',
    experienceYears: 35,
    craftMetric: '42,000+ Hand Stitches',
    hoursPerPiece: '48 Hours',
    points: [
      'master of 32 ancestral needle techniques including bakhiya and phanda',
      'over 42,000 delicate shadow stitches hand-sewn into sheer muslin',
      'woven on pure organic mulmul cotton for feather-light drapes',
      'directly empowering 200+ rural women artisans with ethical living wages',
      '48+ hours of meditative, slow handcrafting per individual creation',
      'zero chemical treatments, certified authentic hand embroidery',
    ],
    buttonText: 'Explore Story',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop',
    quote: 'Every delicate shadow-stitch carries the quiet patience of generations, turning sheer muslin into heirloom poetry.',
    fullStory:
      'Shanti Devi has practiced the heirloom art of Chikankari embroidery since she was twelve, mastering 32 distinct needle techniques including Bakhiya, Phanda, and Tepchi. Over 35 years, she has mentored more than 200 rural women across Kakori, enabling financial independence while preserving an art form that once graced the royal courts of Awadh. Each Dheera creation she touches carries over 48 hours of meditative, unhurried needlework.',
  },
  {
    id: 'mohammad-rafiq',
    title: 'HERITAGE WEAVES OF CHANDERI:',
    artisanName: 'Mohammad Rafiq',
    craftName: 'Chanderi Zari Handloom',
    location: 'Pranpur, Chanderi',
    experienceYears: 28,
    craftMetric: '16 Days on Loom',
    hoursPerPiece: '65 Hours',
    points: [
      '3rd-generation pit loom weaver preserving historic awadhi techniques',
      'synchronized wooden foot treadles interlacing pure silver and gold zari',
      'world-renowned gossamer drape woven from ethically sourced mulberry silk',
      '16 continuous days on heritage wooden pit looms per bridal piece',
      'revitalizing traditional handloom weaver clusters across madhya pradesh',
      '100% hand-interlaced warp and weft with zero mechanized automation',
    ],
    buttonText: 'Explore Story',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop',
    quote: 'The rhythmic clack of our wooden pit-loom is our village heartbeat, marrying raw silk with silver threads into gossamer drape.',
    fullStory:
      'A 3rd-generation weaver from the historic lanes of Pranpur near Chanderi, Mohammad Rafiq synchronizes foot treadles and flying shuttles on heritage pit looms. His craft yields the world-renowned feather-light translucency of Chanderi, with intricate motifs woven in pure silver-gilt zari that will endure across family heirlooms for decades.',
  },
  {
    id: 'ananya-vankar',
    title: 'SACRED EARTH PRINTS OF KUTCH:',
    artisanName: 'Ananya & Devji Vankar',
    craftName: 'Kutch Ajrakh Block Print',
    location: 'Ajrakhpur, Kutch',
    experienceYears: 24,
    craftMetric: '16-Stage Dyeing',
    hoursPerPiece: '38 Hours',
    points: [
      'sacred 16-stage natural resist-dyeing process honoring cosmic geometry',
      'hand-carved teakwood printing blocks dipped in wild river mud and madder',
      '100% organic indigo, pomegranate rind, and desert mineral dyes',
      'sustainable desert artisan guild honoring centuries of kutchi folk art',
      '38+ hours of synchronized rhythmic hand block placement per piece',
      'completely free of synthetic chemicals, breathing with the earth',
    ],
    buttonText: 'Explore Story',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop',
    quote: 'Hand-carved teakwood blocks and natural indigo—every cosmic geometric motif is printed in rhythm with the sun and river.',
    fullStory:
      'Rooted in the arid sands of Kutch, Ananya and Devji carry forward the sacred 16-stage resist-dyeing process known as Ajrakh. Using hand-carved teakwood blocks, madder root, indigo, pomegranate rind, and river mud, their work is completely free of synthetic chemicals, creating fabrics that breathe with the earth.',
  },
]

export default function ArtisanStories() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedArtisan, setSelectedArtisan] = useState<SlideData | null>(null)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const activeSlide = SLIDES[currentSlide]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  // Continuous auto-play slider every 3.5 seconds (only stops when modal is open)
  useEffect(() => {
    if (selectedArtisan) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [selectedArtisan])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedArtisan) return
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, selectedArtisan])

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX
    if (diff > 50) nextSlide()
    if (diff < -50) prevSlide()
    setTouchStartX(null)
  }

  return (
    <section
      className="w-full bg-[#FCFAF7] py-14 sm:py-20 lg:py-24 relative overflow-hidden font-sans select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* SLIDE CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* LEFT SIDE: CLEAN TITLE + BULLET POINTS + RECTANGULAR BUTTON (NO SVGS) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6">
            {/* Clean Heading in Playfair Display Serif */}
            <div>
              <h2
                className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-normal text-earth-dark uppercase tracking-[0.06em] sm:tracking-[0.1em] leading-[1.2]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {activeSlide.title}
              </h2>
            </div>

            {/* Bullet Points list (Compact line spacing like normal paragraph) */}
            <div className="space-y-1 sm:space-y-1.5 max-w-xl">
              {activeSlide.points.map((point, index) => (
                <p
                  key={index}
                  className="text-xs sm:text-[13px] text-earth-dark/85 leading-snug font-light"
                >
                  {point}
                </p>
              ))}
            </div>

            {/* Rectangular Terracotta Button */}
            <div className="pt-2 sm:pt-3">
              <button
                type="button"
                onClick={() => setSelectedArtisan(activeSlide)}
                className="bg-terracotta hover:bg-terracotta-dark text-white px-7 sm:px-9 py-3 sm:py-3.5 rounded font-medium text-xs sm:text-[13px] uppercase tracking-[0.2em] transition-colors shadow-sm cursor-pointer"
              >
                {activeSlide.buttonText}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: ENLARGED RECTANGLE IMAGE WITH PURE CSS CURVES (TOP-LEFT & BOTTOM-RIGHT) */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div
              className="relative w-full max-w-[620px] h-[340px] sm:h-[420px] lg:h-[460px] xl:h-[490px] overflow-hidden shadow-xl shadow-black/10 cursor-pointer group"
              style={{
                borderRadius: '100px 24px 100px 24px',
              }}
              onClick={() => setSelectedArtisan(activeSlide)}
            >
              <img
                key={activeSlide.id}
                src={activeSlide.image}
                alt={activeSlide.artisanName}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 animate-fade-in"
              />
            </div>
          </div>
        </div>

        {/* CENTERED SLIDER DOTS (NO DIVIDER, NO ARROWS) */}
        <div className="flex items-center justify-center gap-2.5 mt-10 sm:mt-12">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 bg-earth-dark'
                  : 'w-2 bg-earth-dark/25 hover:bg-earth-dark/50'
              }`}
            />
          ))}
        </div>
      </div>


      {/* FULL STORY & LOOM AUDIO MODAL */}
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
                alt={selectedArtisan.artisanName}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-dark via-earth-dark/50 to-black/30" />

              <button
                type="button"
                onClick={() => {
                  setSelectedArtisan(null)
                  setIsPlayingAudio(false)
                }}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer text-lg font-light"
                aria-label="Close modal"
              >
                &times;
              </button>

              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta text-white text-[10px] font-semibold uppercase tracking-[0.2em] mb-2">
                  {selectedArtisan.craftName}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-normal text-white">
                  {selectedArtisan.artisanName}
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
                    className="w-10 h-10 rounded-full bg-terracotta text-white flex items-center justify-center shadow-md hover:bg-terracotta-dark transition-colors shrink-0 cursor-pointer"
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

              {/* Craft Metrics */}
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
                    <Clock className="w-3 h-3" />
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
                className="px-6 py-2 bg-earth-dark hover:bg-black text-warm-cream text-[11px] uppercase tracking-[0.22em] font-medium rounded-full shadow-sm transition-colors cursor-pointer"
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
