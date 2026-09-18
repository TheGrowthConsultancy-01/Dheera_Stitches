import React from 'react';
import type { NavItemType } from '../../types/navigation';

interface NavItemProps {
  item: NavItemType;
  className?: string;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ item, className = '', onClick }) => {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className={`group relative text-xs md:text-sm uppercase tracking-[0.18em] font-medium text-earth-dark/80 hover:text-terracotta transition-colors duration-200 py-1.5 ${className}`}
    >
      <span>{item.label}</span>
      {item.badge && (
        <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-semibold bg-terracotta/15 text-terracotta rounded-full">
          {item.badge}
        </span>
      )}
      {/* Delicate animated underline accent */}
      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 ease-out group-hover:w-full" />
    </a>
  );
};
