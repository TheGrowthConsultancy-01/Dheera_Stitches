import React from 'react';
import { HeroContent } from './HeroContent';
import { TornPaperEdge } from '../common/TornPaperEdge';
import type { HeroProps } from '../../types/navigation';

export const HeroSection: React.FC<HeroProps> = (props) => {
  return (
    <section className="relative w-full overflow-hidden bg-warm-sand/30 pt-32 sm:pt-36 md:pt-40 lg:pt-44">
      {/* Background Hero Banner Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/artisan-hero.jpg"
          alt="Artisan handcrafted pottery and rustic home decor"
          className="w-full h-full object-cover object-[70%_bottom] md:object-bottom"
          fetchPriority="high"
        />
        {/* Soft atmospheric gradient wash ensuring high legibility for text on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-warm-cream/95 via-warm-cream/70 to-transparent sm:w-3/4 md:w-3/5 lg:w-1/2" />
        <div className="absolute inset-0 bg-warm-cream/15" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-28 sm:pb-32 md:pb-40 lg:pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <HeroContent {...props} />
          </div>
        </div>
      </div>

      {/* Dramatic Handcrafted Torn Paper Edge overlapping the bottom of the banner */}
      <div className="relative z-20 w-full -mt-20 sm:-mt-24 md:-mt-32 lg:-mt-36">
        <TornPaperEdge position="bottom" color="#FCFAF7" showEmblem={true} />
      </div>
    </section>
  );
};
