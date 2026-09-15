import { useState, useEffect } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { Home, Menu, X } from 'lucide-react';

interface NavigationProps {
  onScrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    homeRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}

export function Navigation({ onScrollTo, refs }: NavigationProps) {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomeInView = useInView(refs.homeRef, { margin: "-50% 0px -50% 0px" });
  const isProjectsInView = useInView(refs.projectsRef, { margin: "-50% 0px -50% 0px" });
  const isAboutInView = useInView(refs.aboutRef, { margin: "-50% 0px -50% 0px" });
  const isContactInView = useInView(refs.contactRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isHomeInView) setActiveNav('home');
    else if (isProjectsInView) setActiveNav('projects');
    else if (isAboutInView) setActiveNav('about');
    else if (isContactInView) setActiveNav('contact');
  }, [isHomeInView, isProjectsInView, isAboutInView, isContactInView]);

  const getGlowStyle = (navId: string) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    filter: 'blur(12px)',
    transform: 'scale(1.4)',
    zIndex: 0,
    borderRadius: 'inherit',
    opacity: hoveredNav === navId ? 1 : 0,
    transition: 'opacity 300ms ease-in-out'
  });

  const navItems = [
    { id: 'home', ref: refs.homeRef, label: 'Home', icon: Home },
    { id: 'about', ref: refs.aboutRef, label: 'About Me' },
    { id: 'projects', ref: refs.projectsRef, label: 'Projects' },
    { id: 'contact', ref: refs.contactRef, label: 'Contact' },
  ];

  const handleMobileNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    setMobileMenuOpen(false);
    onScrollTo(ref);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
      isScrolled
        ? 'bg-black/80 backdrop-blur-xl py-2 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-black/40 backdrop-blur-md py-3 border-transparent'
    }`}>
      <div className="flex items-center justify-between px-3 sm:px-6 md:px-8 py-1.5 md:py-4 max-w-7xl mx-auto">
        
        {/* Home button (Logo) */}
        <button
          className={`relative group transition-all duration-300 ${
            activeNav === 'home' ? 'text-white' : 'text-gray-400'
          }`}
          onClick={() => onScrollTo(refs.homeRef)}
          onMouseEnter={() => setHoveredNav('home')}
          onMouseLeave={() => setHoveredNav(null)}
          aria-label="Home"
        >
          <div className="relative z-10 flex items-center gap-1.5 sm:gap-2">
            <Home 
              className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] md:w-[32px] md:h-[32px] transition-colors"
              style={{ color: hoveredNav === 'home' ? 'white' : 'inherit' }}
              strokeWidth={2} 
            />
            <span className="font-['Orbitron',sans-serif] text-[12px] sm:text-[14px] md:text-[18px] text-white font-bold tracking-wider whitespace-nowrap">
              PEDRO M
            </span>
          </div>
          <span 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={getGlowStyle('home')}
          />
        </button>
        
        {/* HORIZONTAL NAVIGATION (MOBILE & DESKTOP) */}
        <div className="flex items-center gap-3 sm:gap-6 md:gap-12">
          {navItems.filter(item => item.id !== 'home').map((item) => (
            <button
              key={item.id}
              className={`font-['Exo_2',sans-serif] text-[13px] sm:text-[16px] md:text-[20px] relative transition-all duration-300 ${
                activeNav === item.id ? 'text-white font-medium' : 'text-gray-400'
              }`}
              onClick={() => onScrollTo(item.ref)}
              onMouseEnter={() => setHoveredNav(item.id)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <span 
                className="relative z-10 transition-colors capitalize whitespace-nowrap"
                style={{ color: hoveredNav === item.id ? 'white' : 'inherit' }}
              >
                {item.label}
              </span>
              <span 
                className="absolute inset-0 pointer-events-none"
                style={{
                  ...getGlowStyle(item.id),
                  margin: '-4px -8px',
                  borderRadius: '6px'
                }}
              />
              <span 
                className="absolute bottom-[-3px] sm:bottom-[-4px] left-0 right-0 h-[2px] bg-white transition-opacity duration-300"
                style={{
                  opacity: (activeNav === item.id || hoveredNav === item.id) ? 1 : 0
                }} 
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}