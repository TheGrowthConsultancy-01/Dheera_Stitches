import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { NavItem } from './NavItem';
import { HeaderCrestBg } from './HeaderCrestBg';
import type { NavItemType, HeaderProps } from '../../types/navigation';

const DEFAULT_NAV_ITEMS: NavItemType[] = [
  { label: 'Shop', href: '#shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'Artisans', href: '#artisans' },
  { label: 'About', href: '#about' },
];

export const Header: React.FC<HeaderProps> = ({
  cartCount = 0,
  wishlistCount = 0,
  onSearchClick,
  onAccountClick,
  onWishlistClick,
  onCartClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
    if (onSearchClick) onSearchClick();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Handcrafted Torn Paper Edge Background Dipping in Center */}
      <HeaderCrestBg color="#FCFAF7" />

      {/* Foreground Header Bar Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-3 items-start h-[72px]">
          
          {/* LEFT: Navigation Links (Desktop) / Hamburger (Mobile) */}
          <div className="flex items-center h-[68px] sm:h-[72px] justify-start">
            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-earth-dark/80 hover:text-terracotta focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {DEFAULT_NAV_ITEMS.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </nav>
          </div>

          {/* CENTER: Real Dheera Logo Nestled in Torn Paper Tab */}
          <div className="flex flex-col items-center justify-start pt-1.5 sm:pt-2 text-center select-none">
            <a
              href="/"
              className="group flex flex-col items-center transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Dheera Stitches Home"
            >
              {/* Real Dheera Logo (Artistic 'd' with Yarn Ball, Dheera Stitches & Tagline) */}
              <img
                src="/logo.png"
                alt="Dheera Stitches — Where Every Stitch Tells A Story"
                className="h-[78px] sm:h-[92px] md:h-[105px] w-auto max-w-[210px] sm:max-w-[240px] md:max-w-[260px] object-contain drop-shadow-xs"
              />
            </a>
          </div>

          {/* RIGHT: Action Icons (Search, User, Heart, Cart 0) */}
          <div className="flex items-center justify-end h-[68px] sm:h-[72px] gap-3.5 sm:gap-5 md:gap-6 text-earth-dark/80">
            {/* Search Icon */}
            <button
              type="button"
              onClick={handleSearchToggle}
              className="p-1 hover:text-terracotta transition-colors duration-200 focus:outline-hidden"
              aria-label="Search Collection"
            >
              <Search size={19} strokeWidth={1.6} />
            </button>

            {/* User Profile Icon */}
            <button
              type="button"
              onClick={onAccountClick}
              className="p-1 hover:text-terracotta transition-colors duration-200 focus:outline-hidden"
              aria-label="User Account"
            >
              <User size={19} strokeWidth={1.6} />
            </button>

            {/* Wishlist Icon */}
            <button
              type="button"
              onClick={onWishlistClick}
              className="p-1 hover:text-terracotta transition-colors duration-200 relative focus:outline-hidden"
              aria-label="Wishlist"
            >
              <Heart size={19} strokeWidth={1.6} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-terracotta text-white rounded-full text-[9px] font-semibold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Icon with item count */}
            <button
              type="button"
              onClick={onCartClick}
              className="p-1 hover:text-terracotta transition-colors duration-200 flex items-center gap-1.5 group focus:outline-hidden"
              aria-label={`Shopping Bag (${cartCount} items)`}
            >
              <ShoppingBag size={19} strokeWidth={1.6} />
              {/* <span className="text-xs font-semibold text-earth-dark/80 group-hover:text-terracotta transition-colors">
                {cartCount}
              </span> */}
            </button>
          </div>
        </div>

        {/* Expandable Search Input Bar */}
        {isSearchOpen && (
          <div className="pt-2 pb-3 mt-4 border-t border-warm-border/50 animate-fadeIn">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Searching for: ${searchQuery}`);
              }}
              className="relative max-w-xl mx-auto flex items-center"
            >
              <Search size={18} className="absolute left-3.5 text-earth-dark/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search handmade stitches, collection, fabrics..."
                className="w-full pl-10 pr-12 py-2 bg-white/90 border border-warm-border rounded-full text-sm placeholder:text-earth-dark/40 focus:outline-hidden focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all shadow-xs"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 text-earth-dark/40 hover:text-earth-dark p-1"
                aria-label="Close search"
              >
                <X size={16} />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-warm-cream/98 border-t border-warm-border/60 px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-4 text-center">
            {DEFAULT_NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.22em] font-medium text-earth-dark/80 hover:text-terracotta py-2 border-b border-warm-border/30"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-center gap-6 text-earth-dark/70">
              <button
                type="button"
                onClick={onAccountClick}
                className="flex items-center gap-2 text-xs uppercase tracking-wider hover:text-terracotta"
              >
                <User size={16} /> Account
              </button>
              <button
                type="button"
                onClick={onWishlistClick}
                className="flex items-center gap-2 text-xs uppercase tracking-wider hover:text-terracotta"
              >
                <Heart size={16} /> Wishlist ({wishlistCount})
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
