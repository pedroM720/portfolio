import { useState, memo } from "react";
import { Page } from "../App";
import { motion } from "framer-motion";
import svgPaths from "../../imports/svg-5wecq5nikp";

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home = memo(({ onNavigate }: HomeProps) => {
  // We track hover state with React so we don't rely on CSS/Tailwind
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // Common glow style
  const getGlowStyle = (buttonName: string) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    filter: 'blur(20px)',
    zIndex: 0,
    borderRadius: 'inherit',
    // Pure JS Opacity Control:
    opacity: hoveredButton === buttonName ? 1 : 0, 
    transition: 'opacity 300ms ease-in-out'
  });

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center pt-[69px]">

      <motion.div 
        className="relative z-10 flex flex-col items-center gap-[50px] px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="font-['Orbitron',sans-serif] text-[clamp(80px,15vw,200px)] tracking-[10px]"
          style={{ textShadow: "2px 3px 4px rgba(255,255,255,0.5)" }}
        >
          Pedro M
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="font-['Exo_2',sans-serif] text-[clamp(24px,4vw,36px)]"
          style={{ textShadow: "0px 1px 3px rgba(104,104,104,0.5)" }}
        >
          Software Engineering
        </motion.p>

        <motion.div 
          className="flex gap-[40px] mt-[44px] flex-wrap justify-center"
          variants={itemVariants}
        >
          
          {/* PROJECTS BUTTON */}
          <button
            className="relative border-2 border-white flex gap-[24px] items-center justify-center px-[20px] py-[8px] h-[60px] w-[220px] group transition-all duration-300 hover:bg-white/5"
            onClick={() => onNavigate("projects")}
            onMouseEnter={() => setHoveredButton('projects')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {/* GLOW - Controlled by JS */}
            <span 
              className="absolute inset-0 pointer-events-none"
              style={getGlowStyle('projects')}
            />

            <div className="relative z-10 rotate-180 transition-transform duration-300 group-hover:scale-110">
              <svg className="w-[26px] h-[26px]" fill="none" viewBox="0 0 22.5167 19.5">
                <path d={svgPaths.p198870} stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <span className="relative z-10 font-['Exo_2',sans-serif] text-[30px] text-white">
              Projects
            </span>
          </button>

          {/* ABOUT ME BUTTON */}
          <button
            className="relative border-2 border-white flex gap-[21px] items-center justify-center px-[12px] py-[10px] h-[60px] w-[220px] group transition-all duration-300 hover:bg-white/5"
            onClick={() => onNavigate("about")}
            onMouseEnter={() => setHoveredButton('about')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {/* GLOW - Controlled by JS */}
            <span 
              className="absolute inset-0 pointer-events-none"
              style={getGlowStyle('about')}
            />

            <svg className="relative z-10 w-[17.161px] h-[23px] transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 19.1618 23.0281">
              <g>
                <path d={svgPaths.p2f3afc80} stroke="white" strokeWidth="2" />
                <path d={svgPaths.p28b7c470} stroke="white" strokeWidth="2" />
              </g>
            </svg>
            <span className="relative z-10 font-['Exo_2',sans-serif] text-[29px] text-white">
              About Me
            </span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
});

Home.displayName = 'Home';