import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectPage } from '../App';
import svgPaths from "../../imports/svg-vh8gv959zq";
// Change this to your new image path
import ouroborosIcon from "../../assets/b81b4a2f1d6dd33617eaa8d69e28710e079f0b7b.png";

interface Project {
  id: number;
  name: string;
  description: string;
  gradient: string;
  icon: 'calendar' | 'timer' | 'school' | 'ouroboros';
  projectKey: ProjectPage;
}

const projects: Project[] = [
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
    name: 'Student\nManager',
    description: 'Classroom tool for educators',
    gradient: 'linear-gradient(160.619deg, rgb(25, 118, 210) 1.4278%, rgb(128, 49, 184) 42.812%, rgb(29, 83, 219) 74.376%)',
    icon: 'school',
    projectKey: 'studentmanager'
  },
  {
    id: 3,
    name: 'Ouro\nboros',
    description: 'Tool backed generative agent',
    gradient: 'linear-gradient(161.094deg, rgb(115, 36, 180) 5.0752%, rgb(63, 19, 97) 55.41%, rgb(49, 13, 62) 74.376%)',
    icon: 'ouroboros', 
    projectKey: 'ouroboros'
  }
];

interface ProjectCardProps {
  project: Project;
  position: 'left' | 'center' | 'right' | 'hidden';
  onProjectClick: (projectKey: ProjectPage) => void;
  onPrev: () => void;
  onNext: () => void;
}

function ProjectCard({ project, position, onProjectClick, onPrev, onNext }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getTransformStyle = () => {
    switch (position) {
      case 'left':
        return {
          transform: 'perspective(1200px) rotateY(15deg) scale(0.97)',
          left: '36px',
          zIndex: 1,
          opacity: 1
        };
      case 'center':
        return {
          transform: 'perspective(1200px) rotateY(0deg) scale(1)',
          left: '50%',
          marginLeft: '-196.5px',
          zIndex: 10,
          opacity: 1
        };
      case 'right':
        return {
          transform: 'perspective(1200px) rotateY(-15deg) scale(0.97)',
          right: '36px',
          zIndex: 1,
          opacity: 1
        };
      default:
        return {
          opacity: 0,
          pointerEvents: 'none' as const,
          zIndex: 0
        };
    }
  };

  const renderIcon = () => {
    if (project.icon === 'calendar') {
      return (
        <svg className="w-[89px] h-[89px]" fill="none" preserveAspectRatio="none" viewBox="0 0 89 89">
          <path d={svgPaths.p2d62e000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </svg>
      );
    } else if (project.icon === 'timer') {
      return (
        <svg className="w-[91.104px] h-[91.104px]" fill="none" preserveAspectRatio="none" viewBox="0 0 91.104 91.104">
          <g transform="translate(15.184, 12.638)">
            <path d={svgPaths.pe990a00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      );
    } else if (project.icon === 'school') {
      return (
        <svg className="w-[89px] h-[89px]" fill="none" preserveAspectRatio="none" viewBox="0 0 89 89">
          <g transform="translate(7.417, 13.833)">
            <path d={svgPaths.p20d3ca00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      );
    } else if (project.icon === 'ouroboros') {
      return (
        <div className="w-[98.351px] h-[94.839px] relative rounded-[20px] overflow-hidden">
          <img alt="" className="absolute h-[283.95%] left-[-19.37%] max-w-none top-[-36.85%] w-[356.78%]" src={ouroborosIcon} />
        </div>
      );
    }
  };

  return (
    <button
      onClick={() => {
        if (position === 'center') onProjectClick(project.projectKey);
        if (position === 'left') onPrev();
        if (position === 'right') onNext();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute top-[50px] transition-all duration-700 ease-out cursor-pointer outline-none border-none bg-transparent p-0"
      style={getTransformStyle()}
    >
      {/* Luminous Glow for lateral cards */}
      {position !== 'center' && (
        <motion.div
          className="absolute inset-0 rounded-[15px] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            filter: 'blur(34px)',
            transform: 'scale(1.1)',
            zIndex: -1
          }}
        />
      )}

      <div
        className={`w-[393px] h-[575px] rounded-[15px] p-6 flex flex-col items-center gap-6 shadow-[inset_0px_4px_4px_0px_rgba(103,202,255,0.5)] transition-all ${
          position === 'center' ? 'hover:scale-105' : 'hover:scale-[0.98]'
        } ${
          isHovered && position !== 'center' ? 'border-2 border-white/50' : 'border border-transparent'
        }`}
        style={{ backgroundImage: project.gradient }}
      >
        <div className="flex items-center gap-4 mt-2">
          {renderIcon()}
          <h2 className="font-['Orbitron',sans-serif] text-[36px] text-white leading-[1.2] whitespace-pre-line text-left">
            {project.name}
          </h2>
        </div>
        
        <p className="font-['Exo_2',sans-serif] text-[40px] text-white leading-[1.2] text-center max-w-[340px]">
          {project.description}
        </p>
      </div>
    </button>
  );
}


export function Projects({ onProjectClick }: { onProjectClick: (projectKey: ProjectPage) => void }) {
  const [currentIndex, setCurrentIndex] = useState(1);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const getPosition = (projectIndex: number): 'left' | 'center' | 'right' | 'hidden' => {
    const diff = (projectIndex - currentIndex + projects.length) % projects.length;
    
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(projects.length - 1)) return 'right';
    if (diff === projects.length - 1 || diff === -1) return 'left';
    return 'hidden';
  };

  return (
    <motion.div 
      className="h-full relative overflow-hidden flex flex-col items-center justify-center px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="relative h-[min(800px,70vh)] w-full max-w-7xl mx-auto">

        {/* Project Carousel */}
        <motion.div variants={itemVariants} className="relative w-full h-full">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              position={getPosition(project.id)}
              onProjectClick={onProjectClick}
              onPrev={handlePrevious}
              onNext={handleNext}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}