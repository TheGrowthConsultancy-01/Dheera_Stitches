import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { HeroProps } from '../../types/navigation';

export const HeroContent: React.FC<HeroProps> = ({
  tagline = 'ROOTED IN TRADITION',
  headlineFirst = 'Made by Hands.',
  headlineAccent = 'Chosen by Heart.',
  subtitle = 'Thoughtful pieces for a home that tells your story.',
  ctaText = 'SHOP THE COLLECTION',
  ctaHref = '#collection',
  onCtaClick,
}) => {
  return (
    <div className="max-w-xl text-left z-10">
      {/* Overline Badge */}
      <div className="inline-flex items-center gap-2 mb-4 md:mb-5">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-earth-dark/75 bg-warm-sand/80 px-3 py-1 rounded-sm border border-warm-border/60">
          {tagline}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-earth-dark font-medium leading-[1.08] tracking-tight mb-5 md:mb-6">
        <span className="block">{headlineFirst}</span>
        <span className="block mt-1">
          {headlineAccent.replace('Heart.', '')}
          <span className="font-script text-terracotta italic text-[1.25em] font-normal inline-block ml-1">
            Heart.
          </span>
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-base sm:text-lg md:text-xl text-earth-dark/80 font-normal leading-relaxed mb-8 md:mb-10 max-w-md font-sans">
        {subtitle}
      </p>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        <a
          href={ctaHref}
          onClick={onCtaClick}
          className="group inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 bg-terracotta hover:bg-terracotta-dark text-white text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] rounded-xs shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>{ctaText}</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
};
