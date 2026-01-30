import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Timer, School } from 'lucide-react';
import { ProjectPage } from '@/app/App';
import svgPaths from "@/imports/svg-vh8gv959zq";
import img85088621 from "../../assets/574d32a12be27c6535c564f21be6917b23254a02.png";
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
    // ouroboros
  }
];

interface ProjectCardProps {
  project: Project;
  position: 'left' | 'center' | 'right' | 'hidden';
  onProjectClick: (projectKey: ProjectPage) => void;
}

function ProjectCard({ project, position, onProjectClick }: ProjectCardProps) {
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
    const iconProps = { className: "w-[89px] h-[89px] text-white", strokeWidth: 1.5 };
    
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
      onClick={() => position === 'center' && onProjectClick(project.projectKey)}
      className="absolute top-[50px] transition-all duration-700 ease-out cursor-pointer"
      style={getTransformStyle()}
      disabled={position !== 'center'}
    >
      <div
        className={`w-[393px] h-[575px] rounded-[15px] p-6 flex flex-col items-center gap-6 shadow-[inset_0px_4px_4px_0px_rgba(103,202,255,0.5)] ${
          position === 'center' ? 'hover:scale-105' : ''
        } transition-transform`}
        style={{ backgroundImage: project.gradient }}
      >
        {/* Icon and Title Row */}
        <div className="flex items-center gap-4 mt-2">
          {renderIcon()}
          <h2 className="font-['Orbitron',sans-serif] text-[36px] text-white leading-[1.2] whitespace-pre-line">
            {project.name}
          </h2>
        </div>
        
        {/* Centered Description */}
        <p className="font-['Exo_2',sans-serif] text-[40px] text-white leading-[1.2] text-center max-w-[340px]">
          {project.description}
        </p>
      </div>
    </button>
  );
}

function WIPCard({ position, index }: { position: 'far-left' | 'far-right'; index: number }) {
  const getTransformStyle = () => {
    if (position === 'far-left') {
      return {
        transform: `perspective(1200px) rotateY(${30 + index * 7}deg) scaleY(0.87) skewX(30deg)`,
        left: `${-10 + index * 20}px`,
        zIndex: 0,
        opacity: 0.6
      };
    } else {
      return {
        transform: `perspective(1200px) rotateY(${-30 - index * 7}deg) scaleY(0.87) skewX(-30deg)`,
        right: `${-10 + index * 20}px`,
        zIndex: 0,
        opacity: 0.6
      };
    }
  };

  return (
    <div
      className="absolute top-[200px] transition-all duration-700 ease-out"
      style={getTransformStyle()}
    >
      <div
        className="w-[147px] h-[216px] rounded-[15px] flex items-center justify-center shadow-[inset_0px_4px_4px_0px_rgba(103,202,255,0.5)]"
        style={{ backgroundImage: 'linear-gradient(161.094deg, rgb(243, 162, 47) 5.0752%, rgb(226, 87, 87) 55.41%, rgb(254, 251, 159) 74.376%)' }}
      >
        <p className="font-['Orbitron',sans-serif] text-[32px] text-white">WIP</p>
      </div>
    </div>
  );
}

export function Projects({ onProjectClick }: { onProjectClick: (projectKey: ProjectPage) => void }) {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with PlanWise

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
    <div className="min-h-screen relative overflow-hidden pt-[100px] bg-black" style={{
      backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1024\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-1.9805e-14 48.5 -68.203 2.9698e-15 720 539)\\'><stop stop-color=\\'rgba(61,97,139,0.8)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(46,73,104,0.85)\\' offset=\\'0.19591\\'/><stop stop-color=\\'rgba(30,49,70,0.9)\\' offset=\\'0.39183\\'/><stop stop-color=\\'rgba(15,24,35,0.95)\\' offset=\\'0.58774\\'/><stop stop-color=\\'rgba(8,12,17,0.975)\\' offset=\\'0.6857\\'/><stop stop-color=\\'rgba(4,6,9,0.9875)\\' offset=\\'0.73468\\'/><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0.78365\\'/></radialGradient></defs></svg>')"
    }}>
      {/* Carousel Container */}
      <div className="relative h-[800px] w-full">
        {/* WIP Cards - Background */}
        <WIPCard position="far-left" index={0} />
        <WIPCard position="far-left" index={1} />
        <WIPCard position="far-right" index={0} />

        {/* Project Cards */}
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            position={getPosition(project.id)}
            onProjectClick={onProjectClick}
          />
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 flex items-center gap-[400px]">
        <button
          onClick={handlePrevious}
          className="hover:scale-110 transition-transform"
          aria-label="Previous project"
        >
          <svg className="w-[123.495px] h-[108.729px]" fill="none" preserveAspectRatio="none" viewBox="0 0 123.495 108.729">
            <mask fill="white" id="path-left">
              <path d={svgPaths.p356c2e00} />
            </mask>
            <path d={svgPaths.p356c2e00} fill="white" />
            <path d={svgPaths.p1092a080} fill="white" mask="url(#path-left)" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="hover:scale-110 transition-transform"
          aria-label="Next project"
        >
          <svg className="w-[123.495px] h-[108.729px]" fill="none" preserveAspectRatio="none" viewBox="0 0 123.495 108.729">
            <mask fill="white" id="path-right">
              <path d={svgPaths.p11f3b500} />
            </mask>
            <path d={svgPaths.p11f3b500} fill="white" />
            <path d={svgPaths.pa9c4900} fill="white" mask="url(#path-right)" />
          </svg>
        </button>
      </div>
    </div>
  );
}