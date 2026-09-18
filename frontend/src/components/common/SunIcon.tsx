import React from 'react';

interface SunIconProps {
  className?: string;
  size?: number;
}

export const SunIcon: React.FC<SunIconProps> = ({ className = 'text-earth-dark/70', size = 28 }) => {
  return (
    <svg
      width={size}
      height={size * 0.65}
      viewBox="0 0 48 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Arch dome */}
      <path
        d="M12 26C12 18.5 17.5 12.5 24 12.5C30.5 12.5 36 18.5 36 26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Inner concentric arch */}
      <path
        d="M17 26C17 21.5 20.2 18 24 18C27.8 18 31 21.5 31 26"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Radiating sunburst rays */}
      <line x1="24" y1="2" x2="24" y2="7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17.2" y1="4.2" x2="19.5" y2="9.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="30.8" y1="4.2" x2="28.5" y2="9.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="11.2" y1="9.8" x2="15.2" y2="13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="36.8" y1="9.8" x2="32.8" y2="13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="6.8" y1="17.5" x2="12.2" y2="19.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="41.2" y1="17.5" x2="35.8" y2="19.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* Base baseline line */}
      <line x1="4" y1="27" x2="44" y2="27" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
};

