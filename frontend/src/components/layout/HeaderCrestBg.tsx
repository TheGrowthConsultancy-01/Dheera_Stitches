import React from 'react';

interface HeaderCrestBgProps {
  className?: string;
  color?: string;
}

export const HeaderCrestBg: React.FC<HeaderCrestBgProps> = ({
  className = '',
  color = '#FCFAF7',
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none z-0 overflow-visible ${className}`}>
      {/* Container with multi-layered drop shadow on the outer alpha silhouette */}
      <div className="relative w-full h-full flex items-start filter drop-shadow-[0_6px_16px_rgba(42,37,34,0.11)] drop-shadow-[0_2px_4px_rgba(42,37,34,0.06)]">
        
        {/* Left straight paper bar */}
        <div
          className="flex-1 h-[68px] sm:h-[72px]"
          style={{ backgroundColor: color }}
        />

        {/* Center dipping TORN PAPER CREST */}
        <div className="w-[330px] sm:w-[390px] md:w-[460px] shrink-0 h-[116px] sm:h-[128px] md:h-[136px]">
          <svg
            viewBox="0 0 460 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full block"
            preserveAspectRatio="none"
          >
            {/* Layer 1: Fiber Undertone Shadow Layer (Simulating authentic torn paper thickness) */}
            <path
              d="M 0,0 L 460,0 L 460.0,72.0 L 452.3,72.0 L 444.7,72.0 L 437.0,72.0 L 429.3,74.2 L 421.7,74.2 L 414.0,74.72 L 406.3,75.6 L 398.7,77.91 L 391.0,80.68 L 383.3,83.0 L 375.7,87.41 L 368.0,91.78 L 360.3,95.75 L 352.7,101.33 L 345.0,103.43 L 337.3,106.19 L 329.7,107.66 L 322.0,111.28 L 314.3,113.92 L 306.7,116.5 L 299.0,120.25 L 291.3,119.73 L 283.7,120.59 L 276.0,121.5 L 268.3,122.39 L 260.7,125.65 L 253.0,125.68 L 245.3,126.72 L 237.7,127.24 L 230.0,128.34 L 222.3,125.45 L 214.7,126.1 L 207.0,127.37 L 199.3,127.15 L 191.7,123.19 L 184.0,123.55 L 176.3,120.58 L 168.7,117.69 L 161.0,117.59 L 153.3,116.95 L 145.7,113.88 L 138.0,110.39 L 130.3,107.93 L 122.7,103.12 L 115.0,99.33 L 107.3,98.13 L 99.7,94.93 L 92.0,94.5 L 84.3,89.98 L 76.7,85.68 L 69.0,79.94 L 61.3,76.87 L 53.7,73.81 L 46.0,75.33 L 38.3,74.2 L 30.7,74.2 L 23.0,72.0 L 15.3,72.0 L 7.7,72.0 L 0.0,72.0 Z"
              fill="#EAE2D4"
              opacity="0.9"
            />

            {/* Layer 2: Primary Torn Cotton Rag Paper Sheet (Seamless with warm-cream surface) */}
            <path
              d="M 0,0 L 460,0 L 460.0,72.0 L 452.3,72.0 L 444.7,72.0 L 437.0,72.0 L 429.3,72.0 L 421.7,72.0 L 414.0,72.52 L 406.3,73.4 L 398.7,75.71 L 391.0,78.48 L 383.3,80.8 L 375.7,85.21 L 368.0,89.58 L 360.3,93.55 L 352.7,99.13 L 345.0,101.23 L 337.3,103.99 L 329.7,105.46 L 322.0,109.08 L 314.3,111.72 L 306.7,114.3 L 299.0,118.05 L 291.3,117.53 L 283.7,118.39 L 276.0,119.3 L 268.3,120.19 L 260.7,123.45 L 253.0,123.48 L 245.3,124.52 L 237.7,125.04 L 230.0,126.14 L 222.3,123.25 L 214.7,123.9 L 207.0,125.17 L 199.3,124.95 L 191.7,120.99 L 184.0,121.35 L 176.3,118.38 L 168.7,115.49 L 161.0,115.39 L 153.3,114.75 L 145.7,111.68 L 138.0,108.19 L 130.3,105.73 L 122.7,100.92 L 115.0,97.13 L 107.3,95.93 L 99.7,92.73 L 92.0,92.3 L 84.3,87.78 L 76.7,83.48 L 69.0,77.74 L 61.3,74.67 L 53.7,71.61 L 46.0,73.13 L 38.3,72.0 L 30.7,72.0 L 23.0,72.0 L 15.3,72.0 L 7.7,72.0 L 0.0,72.0 Z"
              fill={color}
            />
          </svg>
        </div>

        {/* Right straight paper bar */}
        <div
          className="flex-1 h-[68px] sm:h-[72px]"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
};
