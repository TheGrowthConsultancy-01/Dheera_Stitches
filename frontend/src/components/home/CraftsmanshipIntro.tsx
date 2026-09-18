import React from 'react';
import { Sparkles, Feather, Scissors, ShieldCheck } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Scissors,
    title: 'Hand-Stitched Precision',
    description: 'Every hem, embroidery knot, and motif is lovingly crafted by master artisans.',
  },
  {
    icon: Feather,
    title: 'Pure Natural Fibers',
    description: 'Sustainably sourced organic cotton, wild silk, and naturally dyed flax linens.',
  },
  {
    icon: Sparkles,
    title: 'Heirloom Quality',
    description: 'Timeless aesthetic designed to age gracefully and become cherished for generations.',
  },
  {
    icon: ShieldCheck,
    title: 'Ethical Artisan Guild',
    description: 'Direct partnerships ensuring fair wages and preserving age-old needlecraft traditions.',
  },
];

export const CraftsmanshipIntro: React.FC = () => {
  return (
    <section className="bg-warm-cream py-16 md:py-24 px-4 sm:px-6 lg:px-10 border-b border-warm-border/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
            The Dheera Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-earth-dark font-normal mt-3 mb-4">
            Where Craft Meets Devotion
          </h2>
          <div className="w-16 h-[1.5px] bg-terracotta/40 mx-auto mb-5" />
          <p className="text-earth-dark/70 text-base sm:text-lg leading-relaxed font-sans">
            We bring thoughtful warmth into modern living spaces through authentic needlecraft,
            earth-born textures, and soul-stirring craftsmanship.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-6 rounded-xs bg-white/60 hover:bg-white border border-warm-border/60 hover:border-terracotta/30 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-warm-sand flex items-center justify-center text-terracotta mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl text-earth-dark font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-earth-dark/70 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

