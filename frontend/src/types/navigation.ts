export interface NavItemType {
  label: string;
  href: string;
  badge?: string;
  subItems?: { label: string; href: string }[];
}

export interface HeaderProps {
  cartCount?: number;
  wishlistCount?: number;
  onSearchClick?: () => void;
  onAccountClick?: () => void;
  onWishlistClick?: () => void;
  onCartClick?: () => void;
}

export interface HeroProps {
  tagline?: string;
  headlineFirst?: string;
  headlineAccent?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

