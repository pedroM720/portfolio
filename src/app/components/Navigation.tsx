import { Page } from '@/app/App';
import { Home } from 'lucide-react';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left side - Home Icon Button */}
        <button
          className={`relative group transition-all duration-300 ${
            currentPage === 'home' ? 'text-white' : 'text-gray-400'
          }`}
          onClick={() => onNavigate('home')}
          aria-label="Home"
        >
          <Home 
            className="w-[32px] h-[32px] hover:text-white transition-colors" 
            strokeWidth={2} 
          />
          {/* White glow effect on hover */}
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-white/30" />
        </button>
        
        {/* Right side - Navigation links */}
        <div className="flex items-center gap-12">
          <button
            className={`font-['Exo_2',sans-serif] text-[20px] relative group transition-all duration-300 ${
              currentPage === 'about' ? 'text-white' : 'text-gray-400'
            }`}
            onClick={() => onNavigate('about')}
          >
            <span className="relative z-10 hover:text-white transition-colors">About Me</span>
            {/* White glow effect on hover */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-white/40 -mx-2 -my-1" />
            {/* Underline */}
            <span className={`absolute bottom-[-4px] left-0 right-0 h-[2px] bg-white transition-opacity ${
              currentPage === 'about' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`} />
          </button>
          
          <button
            className={`font-['Exo_2',sans-serif] text-[20px] relative group transition-all duration-300 ${
              currentPage === 'projects' ? 'text-white' : 'text-gray-400'
            }`}
            onClick={() => onNavigate('projects')}
          >
            <span className="relative z-10 hover:text-white transition-colors">Projects</span>
            {/* White glow effect on hover */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-white/40 -mx-2 -my-1" />
            {/* Underline */}
            <span className={`absolute bottom-[-4px] left-0 right-0 h-[2px] bg-white transition-opacity ${
              currentPage === 'projects' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`} />
          </button>
          
          <button
            className={`font-['Exo_2',sans-serif] text-[20px] relative group transition-all duration-300 ${
              currentPage === 'contact' ? 'text-white' : 'text-gray-400'
            }`}
            onClick={() => onNavigate('contact')}
          >
            <span className="relative z-10 hover:text-white transition-colors">Contact</span>
            {/* White glow effect on hover */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-white/40 -mx-2 -my-1" />
            {/* Underline */}
            <span className={`absolute bottom-[-4px] left-0 right-0 h-[2px] bg-white transition-opacity ${
              currentPage === 'contact' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`} />
          </button>
        </div>
      </div>
    </nav>
  );
}