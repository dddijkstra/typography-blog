import React from 'react';

export const VerticalBrand: React.FC = () => {
  return (
    <div className="bg-theme-dark text-white p-6 shadow-lg inline-block select-none">
      <div className="flex gap-4 h-64">
        {/* Right column (Title) */}
        <h1 className="vertical-rl font-serif text-4xl font-bold tracking-widest leading-none border-l-2 border-white/20 pl-2">
          Typography
        </h1>
        
        {/* Left column (Subtitle) */}
        <div className="vertical-rl font-serif text-3xl font-bold tracking-widest flex items-end">
          <span>活版印字</span>
        </div>
      </div>
    </div>
  );
};