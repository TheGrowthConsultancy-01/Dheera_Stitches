import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/hero/HeroSection';
import ArtisanStories from '../components/ArtisanStories';

export const HomePage: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(2);

  const handleCtaClick = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleWishlistClick = () => {
    setWishlistCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-warm-cream selection:bg-terracotta/20 selection:text-terracotta-dark">
      {/* Header with Navigation and Center Logo */}
      <Header
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onCartClick={() => alert(`Shopping bag: ${cartCount} items`)}
        onAccountClick={() => alert('Account login / profile modal')}
        onWishlistClick={handleWishlistClick}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section Banner with Paper Craft Edge */}
        <HeroSection
          tagline="ROOTED IN TRADITION"
          headlineFirst="Made by Hands."
          headlineAccent="Chosen by Heart."
          subtitle="Thoughtful pieces for a home that tells your story."
          ctaText="SHOP THE COLLECTION"
          onCtaClick={handleCtaClick}
        />

        {/* Artisan Stories Section */}
        <ArtisanStories />
      </main>

      {/* Artisan Footer
      <footer className="bg-warm-sand/80 border-t border-warm-border/60 py-12 px-4 sm:px-6 lg:px-10 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <img
            src="/logo.png"
            alt="Dheera Stitches"
            className="h-14 w-auto object-contain opacity-90 mb-3"
          />
          <p className="font-serif italic text-earth-dark/70 text-base mb-6">
            Where Every Stitch Tells A Story.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-[0.18em] text-earth-dark/70 mb-8 font-medium">
            <a href="#shop" className="hover:text-terracotta transition-colors">Shop</a>
            <a href="#collections" className="hover:text-terracotta transition-colors">Collections</a>
            <a href="#artisans" className="hover:text-terracotta transition-colors">Our Artisans</a>
            <a href="#about" className="hover:text-terracotta transition-colors">Story</a>
            <a href="#contact" className="hover:text-terracotta transition-colors">Contact</a>
          </div>
          <p className="text-xs text-earth-dark/50 font-sans">
            © {new Date().getFullYear()} Dheera Stitches. All rights reserved. Handcrafted with reverence.
          </p>
        </div>
      </footer> */}
    </div>
  );
};
