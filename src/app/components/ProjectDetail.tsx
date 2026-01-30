import { ArrowLeft } from 'lucide-react';
import svgPaths from "@/imports/svg-6x7i7gg00i";

interface ProjectDetailProps {
  name: string;
  description: string;
  stack: {
    name: string;
    image: string;
  }[];
  githubUrl: string;
  previewImage: string;
  onBack: () => void;
}

export function ProjectDetail({ name, description, stack, githubUrl, previewImage, onBack }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-black relative pt-[100px] px-4">
      {/* Back Arrow - Centered Vertically */}
      <div className="fixed left-[16px] top-1/2 -translate-y-1/2">
        <button
          onClick={onBack}
          className="hover:scale-110 transition-transform"
          aria-label="Back to projects"
        >
          <svg className="w-[123.495px] h-[108.729px]" fill="none" preserveAspectRatio="none" viewBox="0 0 123.495 108.729">
            <mask fill="white" id="path-back">
              <path d={svgPaths.p356c2e00} />
            </mask>
            <path d={svgPaths.p356c2e00} fill="white" />
            <path d={svgPaths.p1092a080} fill="white" mask="url(#path-back)" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto flex gap-[36px] items-start mt-[50px] ml-[150px]">
        {/* Left Side - Info */}
        <div className="flex flex-col gap-[48px] w-[700px]">
          <h1 className="font-['Orbitron',sans-serif] text-[110px] text-white leading-[1.2]">
            {name}
          </h1>
          
          <p className="font-['Exo_2',sans-serif] text-[40px] text-[#67caff] leading-[1.4]">
            {description}
          </p>

          {/* Stack */}
          <div className="flex gap-[14px] items-center">
            <p className="font-['Orbitron',sans-serif] text-[48px] text-white">
              Stack:
            </p>
            {stack.map((tech, index) => (
              <div key={index} className="w-[52px] h-[52px] relative">
                <img 
                  alt={tech.name} 
                  className="w-full h-full object-contain" 
                  src={tech.image} 
                />
              </div>
            ))}
          </div>

          {/* GitHub Link */}
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <div className="relative inline-flex items-center justify-center bg-[#67caff] h-[58px] w-[237px] rounded-[15px] transition-all duration-300 group-hover:scale-105">
              {/* White glow effect on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg bg-white/50 rounded-[15px]" />
              <p className="relative z-10 font-['Exo_2',sans-serif] text-[40px] text-white">
                Click Here
              </p>
            </div>
          </a>
        </div>

        {/* Right Side - Preview */}
        <div className="w-[378px] h-[796px] rounded-[15px] overflow-hidden flex-shrink-0 bg-black/20"> 
          {/* Added bg-black/20 so the empty space isn't just transparent/weird looking */}
          <img 
            alt={`${name} preview`} 
            className="w-full h-full object-contain"  // <--- CHANGED THIS
            src={previewImage} 
          />
        </div>
      </div>
    </div>

    
  );
}