import { useState, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { ProjectDetail } from './components/ProjectDetail';
import { PageTransition } from './components/PageTransition';
import { BinaryRain } from './components/BinaryRain';
import { BinaryExplosion } from './components/BinaryExplosion';
import { TerminalIntro } from './components/TerminalIntro';
import { PlanWise } from './components/projects/PlanWise';
import { PomoTime } from './components/projects/PomoTime';
import { BiodiversityGlobe } from './components/projects/BiodiversityGlobe';
import { Ouroboros } from './components/projects/Ouroboros';
import { VlmDrone } from './components/projects/VlmDrone';

// --- IMPORTS (All images must be imported here to work on GitHub Pages) ---

// PlanWise Assets
import planWiseSupabase from '../assets/369c157ddb323e2e2f559ba0835e672f76d84c5c.png';
import planWiseBolt from '../assets/c84148390bf52d0cfab52024ae0317ec2925bd94.png';
import pythonIcon from '../assets/d434f57587bc5db10671cc4fd5de71a9b6512455.png';
import reactIcon from '../assets/866b2bb0d815e015d62c6f372c869abe06b1b33c.png';
import planWisePreview from '../assets/planwise.png';

// PomoTime Assets
import tsIcon from '../assets/5c8cd8082fc863b5c16f485b27bafeeac681c54a.png';
import pomoPreview from '../assets/1524cd9fa5bebf0365746caced0bd3e3ee47e890.png';

// Biodiversity Globe Assets
import bioPreview from '../assets/proj_assets/Screenshot 2026-04-27 225637.png';

// Ouroboros Assets
import geminiIcon from '../assets/63ab5154e3f6ccf09ca30971d3475493d7ef4a1f.png';
import spoonosIcon from '../assets/0aa0820a07f48698d9754f42eabac3bd013844db.png';
import ouroborosPreview from '../assets/926e03d10b577d1b9ff84f9264eab8206f8f5a08.png';

// PLaMo VLM Assets
import vlmPreview from '../assets/proj_assets/Screenshot 2026-06-03 115850.png';

export type Page = 'home' | 'about' | 'projects' | 'contact';
export type ProjectPage = 'planwise' | 'pomotime' | 'biodiversityglobe' | 'ouroboros' | 'vlm';

export interface Project {
  id: number;
  name: string;
  description: string;
  gradient: string;
  icon: 'calendar' | 'timer' | 'globe' | 'ouroboros' | 'vlm';
  projectKey: ProjectPage;
}

export const projects: Project[] = [
  {
    id: 0,
    name: 'PomoTime',
    description: 'For aesthetic and efficient studying',
    gradient: 'linear-gradient(160.325deg, rgb(225, 185, 150) 5.0752%, rgb(173, 139, 121) 55.41%, rgb(167, 190, 146) 74.376%)',
    icon: 'timer',
    projectKey: 'pomotime'
  },
  {
    id: 1,
    name: 'PlanWise',
    description: 'For plans that make it out of the group chat',
    gradient: 'linear-gradient(161.169deg, rgb(84, 158, 255) 5.0752%, rgb(133, 112, 255) 55.41%, rgb(160, 110, 255) 74.376%)',
    icon: 'calendar',
    projectKey: 'planwise'
  },
  {
    id: 2,
    name: 'Biodiversity\nGlobe',
    description: 'Interactive 3D biosphere & evolutionary data',
    gradient: 'linear-gradient(160.619deg, rgb(16, 185, 129) 1.4278%, rgb(6, 182, 212) 42.812%, rgb(29, 78, 216) 74.376%)',
    icon: 'globe',
    projectKey: 'biodiversityglobe'
  },
  {
    id: 3,
    name: 'Ouro\nboros',
    description: 'Tool backed generative agent',
    gradient: 'linear-gradient(161.094deg, rgb(115, 36, 180) 5.0752%, rgb(63, 19, 97) 55.41%, rgb(49, 13, 62) 74.376%)',
    icon: 'ouroboros',
    projectKey: 'ouroboros'
  },
  {
    id: 4,
    name: 'PLaMo\nVLM',
    description: 'Edge AI visual language engine for drones',
    gradient: 'linear-gradient(161.094deg, rgb(14, 165, 233) 5.0752%, rgb(3, 105, 161) 55.41%, rgb(15, 23, 42) 74.376%)',
    icon: 'vlm',
    projectKey: 'vlm'
  }
];

// Project data
const projectData = {
  planwise: {
    name: 'PlanWise',
    description: 'A scheduling web-app for making plans with groups, integrates with Google Calendar and generates heatmaps of everyone\'s availabilities (v2)',
    stack: [
      { name: 'Supabase', image: planWiseSupabase },
      { name: 'Bolt', image: planWiseBolt },
      { name: 'Python', image: pythonIcon },
      { name: 'React', image: reactIcon }
    ],
    githubUrl: 'https://github.com/pedroM720/scheduler_app',
    previewImage: planWisePreview
  },
  pomotime: {
    name: 'PomoTime',
    description: 'For aesthetic and efficient studying. A beautiful Pomodoro timer application designed to enhance productivity and focus during study sessions.',
    stack: [
      { name: 'React', image: reactIcon },
      { name: 'TypeScript', image: tsIcon },
    ],
    githubUrl: 'https://github.com/pedroM720/PomoApp',
    previewImage: pomoPreview
  },
  biodiversityglobe: {
    name: 'Biodiversity Globe',
    description: 'An interactive 3D exploration of human evolutionary adaptation through planetary data and biological narratives.',
    stack: [
      { name: 'React', image: reactIcon },
      { name: 'TypeScript', image: tsIcon }
    ],
    githubUrl: 'https://pedro-martinez-ib35-creative.vercel.app/',
    previewImage: bioPreview
  },
  ouroboros: {
    name: 'Ouroboros',
    description: 'Self Adapting Agentic framework that generates tools to help it complete tasks and save compute while beating GPT5 on certain benchmarks',
    stack: [
      { name: 'Gemini', image: geminiIcon },
      { name: 'Spoonos', image: spoonosIcon },
      { name: 'Spoonos (React)', image: reactIcon }, 
      { name: 'Python', image: pythonIcon }
    ],
    githubUrl: 'https://github.com/pedroM720/ouroboros',
    previewImage: ouroborosPreview
  },
  vlm: {
    name: 'PLaMo VLM',
    description: 'Real-time Edge AI Visual Language Engine deployed on NVIDIA Jetson AGX Orin for drone target detection.',
    stack: [
      { name: 'React', image: reactIcon },
      { name: 'Python', image: pythonIcon },
      { name: 'TypeScript', image: tsIcon }
    ],
    previewImage: vlmPreview
  }
};

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('introSeen') !== 'true';
    }
    return true;
  });
  const [currentProject, setCurrentProject] = useState<ProjectPage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Parallax offsets for different sections
  const yHome = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const yProjects = useTransform(scrollYProgress, [0.1, 0.4], [50, -50]);
  const yAbout = useTransform(scrollYProgress, [0.3, 0.7], [50, -50]);
  const yContact = useTransform(scrollYProgress, [0.6, 1], [50, 0]);

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectClick = (project: ProjectPage) => {
    const projectIndex = projects.findIndex(p => p.projectKey === project);
    if (projectIndex !== -1) {
      setCurrentIndex(projectIndex);
    }
    setCurrentProject(project);
  };

  const handleBackToProjects = () => {
    setCurrentProject(null);
  };

  const sectionVariants: any = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <TerminalIntro 
            key="intro" 
            onComplete={() => {
              setShowIntro(false);
              localStorage.setItem('introSeen', 'true');
            }} 
          />
        ) : (
          <motion.div 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 flex flex-col"
          >
            {/* Background Binary Rain (Site-wide) */}
            <div className="fixed inset-0 z-0">
              <BinaryRain />
            </div>

            {/* Click Explosion Effect */}
            <BinaryExplosion />

            {/* Scroll Progress Bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-[60]"
              style={{ scaleX }}
            />

            <Navigation
              onScrollTo={handleScrollTo as any}
              refs={{ homeRef, projectsRef, aboutRef, contactRef } as any}
            />
            
            <main className="relative z-10 h-screen overflow-y-auto snap-y snap-mandatory hide-scrollbar">
              <motion.section 
                ref={homeRef}
                className="min-h-screen snap-start shrink-0 bg-transparent relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={sectionVariants}
              >
                <Home onNavigate={(page) => {
                  if (page === 'projects') handleScrollTo(projectsRef as any);
                  if (page === 'about') handleScrollTo(aboutRef as any);
                  if (page === 'contact') handleScrollTo(contactRef as any);
                }} />
              </motion.section>

              <motion.section 
                ref={projectsRef}
                className="min-h-screen snap-start shrink-0 bg-transparent relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={sectionVariants}
              >
                <Projects
                  onProjectClick={handleProjectClick}
                />
              </motion.section>

              <motion.section 
                ref={aboutRef}
                className="min-h-screen snap-start shrink-0 bg-transparent relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={sectionVariants}
              >
                <About />
              </motion.section>

              <motion.section 
                ref={contactRef}
                className="min-h-screen snap-start shrink-0 bg-transparent relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={sectionVariants}
              >
                <Contact />
              </motion.section>

              <AnimatePresence>
                {currentProject && (
                  <motion.div
                    className="fixed inset-0 z-[40] bg-black overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <PageTransition>
                      {currentProject === 'planwise' ? (
                        <PlanWise onBack={handleBackToProjects} />
                      ) : currentProject === 'pomotime' ? (
                        <PomoTime onBack={handleBackToProjects} />
                      ) : currentProject === 'biodiversityglobe' ? (
                        <BiodiversityGlobe onBack={handleBackToProjects} />
                      ) : currentProject === 'ouroboros' ? (
                        <Ouroboros onBack={handleBackToProjects} />
                      ) : currentProject === 'vlm' ? (
                        <VlmDrone onBack={handleBackToProjects} />
                      ) : (
                        <ProjectDetail
                          {...projectData[currentProject as keyof typeof projectData]}
                          onBack={handleBackToProjects}
                        />
                      )}
                    </PageTransition>
                  </motion.div>
                )}
              </AnimatePresence>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}