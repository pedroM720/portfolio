import { Page } from "@/app/App";
import { BinaryRain } from "@/app/components/BinaryRain";
import svgPaths from "@/imports/svg-5wecq5nikp";
import img202404271846131 from "figma:asset/355a6925229e8c0b6167abeb4b35d89025781742.png";
import img202404271846132 from "figma:asset/574d32a12be27c6535c564f21be6917b23254a02.png";

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden pt-[69px] bg-black">
      {/* Binary Rain Background Animation */}
      <BinaryRain />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-[50px] px-4">
        <h1
          className="font-['Orbitron',sans-serif] text-[clamp(80px,15vw,200px)] tracking-[10px]"
          style={{
            textShadow: "2px 3px 4px rgba(255,255,255,0.5)",
          }}
        >
          Pedro M
        </h1>
        <p
          className="font-['Exo_2',sans-serif] text-[clamp(24px,4vw,36px)]"
          style={{
            textShadow: "0px 1px 3px rgba(104,104,104,0.5)",
          }}
        >
          Software Engineering
        </p>

        {/* Buttons */}
        <div className="flex gap-[40px] mt-[44px] flex-wrap justify-center">
          <button
            className="relative border-2 border-white flex gap-[14px] items-center justify-center px-[20px] py-[8px] h-[60px] w-[185px] group transition-all duration-300"
            onClick={() => onNavigate("projects")}
          >
            {/* White glow effect on hover */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg bg-white/40" />
            <div className="relative z-10 rotate-180">
              <svg
                className="w-[26px] h-[26px]"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 22.5167 19.5"
              >
                <path
                  d={svgPaths.p198870}
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="relative z-10 font-['Exo_2',sans-serif] text-[30px] text-white">
              Projects
            </span>
          </button>

          <button
            className="relative border-2 border-white flex gap-[11px] items-center justify-center px-[12px] py-[10px] h-[60px] w-[185px] group transition-all duration-300"
            onClick={() => onNavigate("about")}
          >
            {/* White glow effect on hover */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg bg-white/40" />
            <svg
              className="relative z-10 w-[17.161px] h-[23px]"
              fill="none"
              viewBox="0 0 19.1618 23.0281"
            >
              <g>
                <path
                  d={svgPaths.p2f3afc80}
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.p28b7c470}
                  stroke="white"
                  strokeWidth="2"
                />
              </g>
            </svg>
            <span className="relative z-10 font-['Exo_2',sans-serif] text-[29px] text-white">
              About Me
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}