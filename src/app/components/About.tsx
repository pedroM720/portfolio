import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  MapPin, 
  Terminal, 
  Cpu, 
  Layers
} from 'lucide-react';
import imgImg41471 from "../../assets/f81364dc4ff17c4cea2646c495ff1c25a41a4b16.png";

export const About = memo(() => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
    }
  };

  const getSectionHoverStyle = (section: string) => ({
    opacity: hoveredSection === section ? 1 : 0,
  });

  return (
    <div className="w-full min-h-screen bg-black text-white relative py-20 px-4 md:px-8 lg:px-12 overflow-y-auto">
      <motion.div 
        className="max-w-6xl mx-auto flex flex-col gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {/* =========================================================================
            HEADER TITLE
           ========================================================================= */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3 border-b border-zinc-800 pb-8">
          <div 
            onMouseEnter={() => setHoveredSection('about-title')}
            onMouseLeave={() => setHoveredSection(null)}
            className="relative inline-block w-fit"
          >
            <h1 className="font-['IBM_Plex_Mono',monospace] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              AB0UT ME
            </h1>
            <span 
              className="absolute bottom-[-6px] left-0 right-0 border-b-[3px] border-dashed border-white transition-opacity duration-300 pointer-events-none"
              style={getSectionHoverStyle('about-title')}
            />
          </div>
          <p className="font-mono text-zinc-400 text-sm sm:text-base max-w-2xl mt-1">
            Computer Science @ UC Berkeley • Fullstack Web & AI Engineer
          </p>
        </motion.div>

        {/* =========================================================================
            SECTION 01: BIOGRAPHY & OVERVIEW
           ========================================================================= */}
        <motion.section variants={itemVariants} className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="font-['IBM_Plex_Mono',monospace] text-xs font-bold text-zinc-500 tracking-wider">// 01. BIOGRAPHY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Profile Card (Left - 4 cols) */}
            <div className="lg:col-span-4 bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between gap-6 hover:border-zinc-700 transition-colors">
              <div className="flex flex-col gap-5">
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
                  <img 
                    alt="Pedro D. Martinez" 
                    className="w-full h-full object-cover object-top transition-all duration-500" 
                    src={imgImg41471}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <h2 className="font-['IBM_Plex_Mono',monospace] text-xl font-bold text-white">Pedro D. Martinez</h2>
                  <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs">
                    <MapPin className="size-3.5 text-white shrink-0" />
                    <span>SF Bay Area</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-zinc-800/80 font-mono text-xs text-zinc-300">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Degree</span>
                  <span className="font-semibold text-white">B.A. Computer Science</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Institution</span>
                  <span className="font-semibold text-white">UC Berkeley ('28)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Focus</span>
                  <span className="text-white font-medium">Fullstack Web & AI</span>
                </div>
              </div>
            </div>

            {/* Narrative Bio Card (Right - 8 cols) */}
            <div className="lg:col-span-8 bg-zinc-950 border border-zinc-800 rounded-xl p-6 md:p-8 flex flex-col justify-between gap-6 hover:border-zinc-700 transition-colors">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4">
                  <Terminal className="size-5 text-white" />
                  <h3 className="font-['IBM_Plex_Mono',monospace] text-xl font-bold text-white">
                    What I do
                  </h3>
                </div>

                <div className="font-['JetBrains_Mono',monospace] text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
                  <p>
                    My journey into software started with dragging logic blocks in Scratch and presenting early game demos. That fundamental drive—a simple love for making complex systems move and respond on screen—has defined every stage of my work as an engineer.
                  </p>
                  <p>
                    Today, as a Computer Science student at <span className="text-white font-semibold">UC Berkeley</span>, my focus is centered on fullstack web development and AI. Beyond building robust backends and machine learning systems, I have a deep passion for designing interactive web experiences that tell stories and engage users.
                  </p>
                  <p>
                    Whether architecting adaptive agent frameworks (<span className="text-white font-semibold">Ouroboros</span>), optimizing VLM inference latency at Advantech Japan in Tokyo, or crafting campus event engines (<span className="text-white font-semibold">FreeFood.ai</span>), I build software that is both technically performant and visually compelling.
                  </p>
                </div>
              </div>

              {/* Core Focus Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-zinc-800 font-mono text-xs">
                <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg flex flex-col gap-1">
                  <span className="text-zinc-500 uppercase tracking-widest text-[10px]">01 // FULLSTACK WEB</span>
                  <span className="text-white font-medium">Interactive Web Apps</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg flex flex-col gap-1">
                  <span className="text-zinc-500 uppercase tracking-widest text-[10px]">02 // AI AGENTS & ML</span>
                  <span className="text-white font-medium">Adaptive Frameworks</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg flex flex-col gap-1">
                  <span className="text-zinc-500 uppercase tracking-widest text-[10px]">03 // UX & STORYTELLING</span>
                  <span className="text-white font-medium">Engaging Experiences</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* =========================================================================
            SECTION 02: TECHNICAL CAPABILITIES
           ========================================================================= */}
        <motion.section variants={itemVariants} className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="font-['IBM_Plex_Mono',monospace] text-xs font-bold text-zinc-500 tracking-wider">// 02. TECHNICAL CAPABILITIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category 1: Languages */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex flex-col gap-4 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-3 text-white font-['IBM_Plex_Mono',monospace]">
                <Code2 className="size-4 text-white" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'SQL', 'C++', 'JavaScript', 'CSS', 'HTML', 'C'].map((lang, idx) => (
                  <span key={idx} className="bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs px-3 py-1.5 rounded font-mono">
                    {lang}
                  </span>
                ))}
              </div>
              <div className="mt-2 pt-3 border-t border-zinc-800/60 font-mono text-xs text-zinc-400 flex items-center justify-between">
                <span>Spoken Languages:</span>
                <span className="text-white">Spanish (Native), English (Fluent)</span>
              </div>
            </div>

            {/* Category 2: Frameworks & AI/ML */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex flex-col gap-4 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-3 text-white font-['IBM_Plex_Mono',monospace]">
                <Cpu className="size-4 text-white" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Frameworks & ML</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['FastAPI', 'React / Vite', 'Django', 'vLLM', 'GPTQ 4-bit', 'WebGL', 'Spring Boot', 'ROS2', 'SQLite Graph'].map((fw, idx) => (
                  <span key={idx} className="bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs px-3 py-1.5 rounded font-mono">
                    {fw}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3: Developer Tools */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex flex-col gap-4 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-3 text-white font-['IBM_Plex_Mono',monospace]">
                <Layers className="size-4 text-white" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Tools & Software</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['IntelliJ', 'Unity', 'Git', 'VS Code', 'Postman', 'NVIDIA Jetson', 'Linux', 'Antigravity', 'APScheduler'].map((tool, idx) => (
                  <span key={idx} className="bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs px-3 py-1.5 rounded font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
});

About.displayName = 'About';