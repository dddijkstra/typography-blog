import React from 'react';
import { VerticalBrand } from './VerticalBrand';
import { SocialLinks } from './SocialLinks';

interface SidebarProps {
  onHomeClick: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onHomeClick }) => {
  return (
    <aside className="flex flex-col items-start gap-8 lg:sticky lg:top-12">
      {/* Branding - Visible mainly on desktop or top of mobile */}
      <div className="hidden lg:block">
         <VerticalBrand />
      </div>

      {/* Mobile Branding (Horizontal) - Only shows on small screens */}
      <div className="lg:hidden w-full bg-theme-dark text-white p-4 shadow-md mb-6">
          <h1 className="text-2xl font-serif font-bold">Typography</h1>
          <p className="text-sm opacity-80 font-serif">活版印字</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 font-serif text-lg font-bold text-theme-dark w-full lg:w-auto border-t lg:border-t-0 border-gray-300 pt-6 lg:pt-0">
        <button 
          onClick={onHomeClick}
          className="text-left hover:underline underline-offset-8 decoration-2 decoration-gray-400"
        >
          重新發現
        </button>
        <button className="text-left hover:underline underline-offset-8 decoration-2 decoration-gray-400">
          文字之美
        </button>
        
        {/* Social Icons */}
        <SocialLinks />
      </nav>

      {/* Footer / Copyright */}
      <div className="text-xs text-gray-500 font-serif space-y-2 mt-4 lg:mt-12 w-full border-t border-gray-200 pt-4">
        <p>© 2017 <span className="underline decoration-gray-400">Makito</span></p>
        <p>Theme <span className="underline decoration-gray-400 font-bold">Typography</span> by <span className="underline decoration-gray-400 font-bold">Makito</span></p>
        <p>Proudly published with <span className="underline decoration-gray-400 font-bold">Hexo</span></p>
      </div>
    </aside>
  );
};