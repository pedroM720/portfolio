import { useState } from 'react';
import svgPaths from "@/imports/svg-6x7i7gg00i";

interface ProjectDetailProps {
  name: string;
  description: string;
  stack: {
    name:string;
    image: string;
  }[];
  githubUrl: string;
  previewImage: string;
  onBack: () => void;
}

export function ProjectDetail({ name, description, stack, githubUrl, previewImage, onBack }: ProjectDetailProps) {
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  return (
    <div className="min-h-screen bg-black relative flex items-center px-4">
      
      {/* --- BACK ARROW --- */}
      <div className="fixed left-[16px] top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={onBack}
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
          className="transition-transform duration-300"
          style={{ transform: isBackHovered ? 'scale(1.1)' : 'scale(1)' }}
          aria-label="Back to projects"
        >
          <svg className="w-[62px] h-[54px]" fill="none" preserveAspectRatio="none" viewBox="0 0 123.495 108.729">
            <mask fill="white" id="path-back">
              <path d={svgPaths.p356c2e00} />
            </mask>
            <path d={svgPaths.p356c2e00} fill="white" />
            <path d={svgPaths.p1092a080} fill="white" mask="url(#path-back)" />
          </svg>
        </button>
      </div>

      {/* --- CONTENT --- */}
      <div className="w-full max-w-[1600px] mx-auto flex items-center gap-8 pl-[150px]">
        
        {/* Left Side - Info (40%) */}
        <div className="w-2/5 flex flex-col gap-8">
          <h1 className="font-['Orbitron',sans-serif] text-7xl text-white leading-tight">
            {name}
          </h1>
          
          <p className="font-['Exo_2',sans-serif] text-2xl text-[#67caff] leading-normal">
            {description}
          </p>

          {/* Stack Icons */}
          <div className="flex gap-4 items-center">
            <p className="font-['Orbitron',sans-serif] text-3xl text-white">
              Stack:
            </p>
            {stack.map((tech, index) => (
              <div key={index} className="w-12 h-12 relative">
                <img 
                  alt={tech.name} 
                  className="w-full h-full object-contain" 
                  src={tech.image} 
                />
              </div>
            ))}
          </div>

          {/* GitHub Link Button */}
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4"
            onMouseEnter={() => setIsLinkHovered(true)}
            onMouseLeave={() => setIsLinkHovered(false)}
          >
            <div 
              className="relative inline-flex items-center justify-center bg-[#67caff] h-14 w-56 rounded-lg transition-all duration-300"
              style={{ transform: isLinkHovered ? 'scale(1.05)' : 'scale(1)' }}
            >
              <span 
                className="absolute inset-0 rounded-lg pointer-events-none" 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  filter: 'blur(12px)',
                  opacity: isLinkHovered ? 1 : 0,
                  transition: 'opacity 300ms ease-in-out'
                }}
              />
              <p className="relative z-10 font-['Exo_2',sans-serif] text-3xl text-white">
                GitHub
              </p>
            </div>
          </a>
        </div>

        {/* Right Side - Preview Image (60%) */}
        <div className="w-3/5 h-[80vh] flex items-center justify-center"> 
          <img 
            alt={`${name} preview`} 
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
            src={previewImage} 
          />
        </div>
      </div>
    </div>
  );
}
