import ArtisanStories from './components/ArtisanStories'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF4EA] flex flex-col font-sans">
      {/* Header & Hero Banner Slot (Being developed by teammate) */}
      <header className="border-b border-[#E6DBCE] bg-[#F5ECDD]/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-serif font-bold tracking-wider text-[#2A231C]">
              DHEERA STITCHES
            </span>
          </div>
          <span className="text-xs bg-[#EAE0CD] text-[#7A4B22] font-semibold px-3 py-1 rounded-full border border-[#D5C296]">
            Header & Hero Slot (Teammate)
          </span>
        </div>
      </header>

      {/* Hero Banner Placeholder Preview */}
      <section className="bg-gradient-to-b from-[#F5ECDD] to-[#FAF4EA] py-12 px-4 text-center border-b border-[#EFE5D5]">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#9E4336] font-semibold mb-2 block">
            Authentic Indian Heritage
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2A231C] mb-3">
            Handcrafted With Soul
          </h1>
          <p className="text-xs sm:text-sm text-[#7A6B5D] max-w-lg mx-auto italic">
            [Hero banner will connect here from teammate. Your Artisan Story section is below.]
          </p>
        </div>
      </section>

      {/* Main Artisan Story Section */}
      <main className="flex-grow">
        <ArtisanStories />
      </main>

      {/* Footer */}
      <footer className="bg-[#2A231C] text-[#FAF4EA]/80 py-8 text-center text-xs border-t border-[#3D3329]">
        <p>© 2026 Dheera Stitches. Honoring India's Master Artisans.</p>
      </footer>
    </div>
  )
}
