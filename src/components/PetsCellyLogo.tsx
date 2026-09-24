import React from 'react';
import logoImg from '../assets/images/petscelly_logo_clean_1790255885993.jpg';

interface PetsCellyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const PetsCellyLogo: React.FC<PetsCellyLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const imageSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Circular Emblem with glowing rim */}
      <div className="relative shrink-0">
        <div className="absolute -inset-1 rounded-full bg-red-600/20 blur-sm pointer-events-none" />
        <div
          className={`${imageSizes[size]} rounded-full overflow-hidden border-2 border-red-500 shadow-md bg-white flex items-center justify-center`}
        >
          <img
            src={logoImg}
            alt="PetsCelly Banho e Tosa"
            className="w-full h-full object-cover scale-105"
          />
        </div>
      </div>

      {/* Typography Brand Name */}
      <div className="flex flex-col">
        <div className={`font-display font-extrabold tracking-tight leading-none ${textSizes[size]}`}>
          <span className="text-[#FF2D40] drop-shadow-[0_0_12px_rgba(255,45,64,0.35)]">Pets</span>
          <span className="text-white">Celly</span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-2 bg-red-500/80" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 font-sans">
              BANHO E TOSA
            </span>
            <span className="h-[1px] w-2 bg-red-500/80" />
          </div>
        )}
      </div>
    </div>
  );
};
