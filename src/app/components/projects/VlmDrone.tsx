import { useState } from 'react';
import svgPaths from "./svg-lw7r9sbh42";
import backSvgPaths from "../../../imports/svg-6x7i7gg00i";

import reactIcon from "../../../assets/866b2bb0d815e015d62c6f372c869abe06b1b33c.png";
import pythonIcon from "../../../assets/d434f57587bc5db10671cc4fd5de71a9b6512455.png";
import tsIcon from "../../../assets/5c8cd8082fc863b5c16f485b27bafeeac681c54a.png";

import vlmHeroAdvantech from "../../../assets/proj_assets/vlm_hero_advantech.png";
import vlmProblemScreenshot from "../../../assets/proj_assets/Screenshot 2026-06-11 152405.png";
import vlmSolutionDog from "../../../assets/proj_assets/vlm_solution_dog.png";

export function VlmDrone({ onBack }: { onBack: () => void }) {
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const isRevealed = (_index: number) => true;
  const handleReveal = (_index: number) => {};

  const isDevRevealed = (_index: number) => true;
  const handleDevReveal = (_index: number) => {};

  const getSectionHoverStyle = (section: string) => ({
    opacity: hoveredSection === section ? 1 : 0,
  });

  return (
    <div className="bg-black w-full min-h-screen relative overflow-y-auto">
      {/* --- BACK ARROW --- */}
      <div className="fixed left-[16px] top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={onBack}
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
          className="transition-transform duration-300 bg-transparent border-none cursor-pointer p-0"
          style={{ transform: isBackHovered ? 'scale(1.1)' : 'scale(1)' }}
          aria-label="Back to projects"
        >
          <svg className="w-[62px] h-[54px]" fill="none" preserveAspectRatio="none" viewBox="0 0 123.495 108.729">
            <mask fill="white" id="path-back">
              <path d={backSvgPaths.p356c2e00} />
            </mask>
            <path d={backSvgPaths.p356c2e00} fill="white" />
            <path d={backSvgPaths.p1092a080} fill="white" mask="url(#path-back)" />
          </svg>
        </button>
      </div>

      {/* --- HERO SECTION --- */}
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative w-full max-w-[1200px] mx-auto min-h-[752px]">

        {/* SVG Lines */}
        <div className="absolute left-[30px] top-[249px] h-[272px] w-[415px] pointer-events-none z-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416 273.028">
            <g id="Group 1">
              <g id="Union">
                <path d={svgPaths.pc941a00} fill="white" />
                <path d={svgPaths.pe92bc00} fill="white" />
              </g>
            </g>
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-10">
          <div className="content-stretch flex flex-col gap-[16px] h-[752px] items-start pt-[139px] ml-0 mt-0 relative shrink-0 w-[479px] pl-[40px]">
            <div className="content-stretch flex h-[110px] items-start overflow-clip pr-[23px] relative shrink-0 w-[418px]">
              <p className="font-['IBM_Plex_Mono',sans-serif] h-[131px] leading-[normal] not-italic relative shrink-0 text-[156px] text-white w-[225px] -mt-[10px]">05</p>
            </div>

            <div className="content-stretch flex flex-col gap-[10px] min-h-[328px] items-start overflow-visible pb-[17px] pr-[23px] relative shrink-0 w-[479px]">
              <p className="font-['JetBrains_Mono',sans-serif] font-normal h-[76px] leading-[normal] relative shrink-0 text-[40px] text-white w-[380px]">PLAMO VLM</p>
              <p className="font-['JetBrains_Mono',sans-serif] font-normal min-h-[140px] leading-[normal] relative shrink-0 text-[18px] text-white/90 w-[380px]">Edge AI visual language model for drones. Configured open-weight PLaMo-2.1-2B-VL, built a decoupled web interface, and optimized inference on NVIDIA Jetson AGX Orin for live demo real-time target detection.</p>

              {/* Key Stack Tech Pills */}
              <div className="flex flex-wrap gap-2 max-w-[420px] mt-1">
                {['PyTorch', 'Transformers', 'Mamba-SSM', 'Causal Conv1D', 'Nvidia JetPack', 'FastAPI'].map((tech) => (
                  <span key={tech} className="bg-sky-950/80 border border-sky-500/40 text-sky-300 font-['JetBrains_Mono',sans-serif] text-xs font-semibold px-2.5 py-1 rounded-md shadow-[0_0_10px_rgba(14,165,233,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stack Icons */}
              <div className="content-stretch flex items-center gap-[14px] h-[60px] relative shrink-0 w-full mt-2">
                <div className="relative shrink-0 size-[48px]" title="React">
                  <img alt="React" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={reactIcon} />
                </div>
                <div className="relative shrink-0 size-[48px]" title="Python">
                  <img alt="Python" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={pythonIcon} />
                </div>
                <div className="relative shrink-0 size-[48px]" title="TypeScript">
                  <img alt="TypeScript" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={tsIcon} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative shrink-0 w-full lg:w-1/2 flex justify-end pr-[40px]">
            <img src={vlmHeroAdvantech} alt="Advantech PLaMo VLM Hero" className="w-full max-w-[700px] h-auto object-contain rounded-[15px] shadow-[0px_0px_30px_5px_rgba(14,165,233,0.3)] border border-sky-500/30" />
          </div>
        </div>
      </div>

      {/* --- CONTENT DETAILS --- */}
      <div className="bg-black content-stretch flex flex-col gap-[48px] items-center overflow-clip pb-[32px] pt-[64px] relative w-full">
        
        {/* PROBLEM STATEMENT */}
        <div className="bg-transparent relative w-full">
          <div className="flex flex-col lg:flex-row items-center overflow-clip w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[118px] items-center lg:items-start px-[40px] py-[40px] lg:py-[10px] relative w-full">
              <div className="content-stretch flex flex-col gap-[32px] items-start leading-[normal] relative shrink-0 text-white w-full max-w-[437px]">
                <div 
                  className="relative cursor-default inline-block"
                  onMouseEnter={() => setHoveredSection('problem')}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <p className="font-['IBM_Plex_Mono',sans-serif] not-italic relative z-10 shrink-0 text-[52px] tracking-[2.08px] transition-colors duration-300">PR0BLEM STATEMENT</p>
                  <span className="absolute bottom-[-4px] left-0 right-0 border-b-[4px] border-dashed border-white transition-opacity duration-300 pointer-events-none z-10" style={getSectionHoverStyle('problem')} />
                </div>
                <p className="font-['JetBrains_Mono',sans-serif] font-normal relative shrink-0 text-[18px] tracking-[0.8px] text-white/90">
                  Deploying a 2-Billion parameter Visual Language Model (PLaMo-2.1-2B-VL) directly onto resource-constrained drone edge hardware (NVIDIA Jetson AGX Orin) presents severe ARM C++ dependency incompatibilities, high VRAM memory limits, and unacceptably high latency for live flight operations.
                </p>
              </div>
              <div className="relative shadow-[0px_0px_25px_5px_rgba(14,165,233,0.3)] shrink-0 w-full max-w-[570px] rounded-lg overflow-hidden border border-sky-500/20 bg-black">
                <img alt="PLaMo VLM Standby Interface" className="w-full h-auto max-h-[400px] object-contain rounded-lg block" src={vlmProblemScreenshot} />
              </div>
            </div>
          </div>
        </div>

        {/* SOLUTION */}
        <div className="bg-transparent relative w-full">
          <div className="flex flex-col lg:flex-row items-center overflow-clip w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[118px] items-center lg:items-start px-[40px] py-[40px] lg:py-[10px] relative w-full">
              <div className="content-stretch flex flex-col gap-[32px] items-start leading-[normal] relative shrink-0 text-white w-full max-w-[437px]">
                <div 
                  className="relative cursor-default inline-block"
                  onMouseEnter={() => setHoveredSection('solution')}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <p className="font-['IBM_Plex_Mono',sans-serif] not-italic relative z-10 shrink-0 text-[52px] tracking-[2.08px] transition-colors duration-300">S0LUTI0N</p>
                  <span className="absolute bottom-[-4px] left-0 right-0 border-b-[4px] border-dashed border-white transition-opacity duration-300 pointer-events-none z-10" style={getSectionHoverStyle('solution')} />
                </div>
                <p className="font-['JetBrains_Mono',sans-serif] font-normal relative shrink-0 text-[18px] tracking-[0.8px] text-white/90">
                  We engineered a decoupled three-tier architecture (React, Django, FastAPI) and applied forced KV-caching, dynamic image downscaling, and Ampere GPU flags—slashing inference latency by 88%. Custom prompt engineering and Regex coordinate parsing render dynamic bounding boxes directly onto the live operator UI.
                </p>
              </div>
              <div className="relative shadow-[0px_0px_25px_5px_rgba(14,165,233,0.3)] shrink-0 w-full max-w-[570px] rounded-lg overflow-hidden border border-sky-500/20 bg-black">
                <img alt="PLaMo VLM Active Target Reasoning" className="w-full h-auto max-h-[420px] object-contain rounded-lg block" src={vlmSolutionDog} />
              </div>
            </div>
          </div>
        </div>

        {/* DESIGN PROCESS */}
        <div className="bg-transparent relative w-full">
          <div className="flex flex-row items-center overflow-clip w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex items-start px-[40px] py-[10px] relative w-full">
              <div 
                className="relative cursor-default inline-block"
                onMouseEnter={() => setHoveredSection('design')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <p className="font-['IBM_Plex_Mono',sans-serif] leading-[normal] not-italic relative z-10 shrink-0 text-[52px] text-white tracking-[2.08px] transition-colors duration-300">DESIGN PR0CESS</p>
                <span className="absolute bottom-[-4px] left-0 right-0 border-b-[4px] border-dashed border-white transition-opacity duration-300 pointer-events-none z-10" style={getSectionHoverStyle('design')} />
              </div>
            </div>
          </div>
        </div>

        {/* PROCESS CARDS */}
        <div className="bg-transparent content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[70px] items-center justify-center overflow-clip py-[10px] relative w-full px-4 max-w-[1200px] mx-auto">
          {/* DEFINE */}
          <div 
            className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white shadow-[0px_0px_30px_2px_rgba(14,165,233,0.4)] h-[320px] w-full max-w-[280px] transition-all duration-500 cursor-pointer ${isRevealed(0) ? 'scale-105 opacity-100 z-30' : 'scale-95 opacity-50 z-10 blur-[1px]'}`}
            onClick={() => handleReveal(0)}
          >
            <div className="bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] content-stretch flex flex-col items-start overflow-clip rounded-[15px] size-full">
              <div className="content-stretch flex flex-col gap-[16px] h-[280px] items-center relative w-full pt-4">
                <div className="relative w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-[10px] relative size-full gap-2">
                      <p className="font-['JetBrains_Mono',sans-serif] font-normal h-[40px] leading-[normal] relative text-[36px] text-center text-white tracking-[1.44px]">DEFINE</p>
                      <div className="h-[45px] relative w-[50px]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 59">
                          <path d={svgPaths.p296d9880} fill="white" id="search_icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['JetBrains_Mono',sans-serif] font-normal h-auto leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">Identify Jetson AGX Orin edge hardware limits and define real-time latency target for drone flight operators</p>
              </div>
            </div>
          </div>

          {/* IDEATE */}
          <div 
            className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white shadow-[0px_0px_30px_2px_rgba(14,165,233,0.4)] h-[320px] w-full max-w-[280px] transition-all duration-500 cursor-pointer ${isRevealed(1) ? 'scale-105 opacity-100 z-30' : 'scale-95 opacity-50 z-10 blur-[1px]'}`}
            onClick={() => handleReveal(1)}
          >
            <div className="bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] content-stretch flex flex-col items-start overflow-clip rounded-[15px] size-full">
              <div className="content-stretch flex flex-col gap-[16px] h-[280px] items-center relative w-full pt-4">
                <div className="relative w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-[10px] relative size-full gap-2">
                      <p className="font-['JetBrains_Mono',sans-serif] font-normal h-[40px] leading-[normal] relative text-[36px] text-center text-white tracking-[1.44px]">IDEATE</p>
                      <div className="content-stretch flex items-end justify-center relative size-[36px]">
                        <div className="h-[30px] relative w-[20px]">
                          <div className="absolute inset-[-5.13%_-7.69%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 43">
                              <path d={svgPaths.p19e7dac0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['JetBrains_Mono',sans-serif] font-normal h-auto leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">Architect 3-tier decoupled pipeline (React, Django, FastAPI) and GPU acceleration strategy</p>
              </div>
            </div>
          </div>

          {/* DESIGN */}
          <div 
            className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white shadow-[0px_0px_30px_2px_rgba(14,165,233,0.4)] h-[320px] w-full max-w-[280px] transition-all duration-500 cursor-pointer ${isRevealed(2) ? 'scale-105 opacity-100 z-30' : 'scale-95 opacity-50 z-10 blur-[1px]'}`}
            onClick={() => handleReveal(2)}
          >
            <div className="bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] content-stretch flex flex-col items-start overflow-clip rounded-[15px] size-full">
              <div className="content-stretch flex flex-col gap-[16px] h-[280px] items-center relative w-full pt-4">
                <div className="relative w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-[10px] relative size-full gap-2">
                      <p className="font-['JetBrains_Mono',sans-serif] font-normal h-[40px] leading-[normal] relative text-[36px] text-center text-white tracking-[1.44px]">DESIGN</p>
                      <div className="h-[40px] relative w-[38px] mb-2">
                        <div className="absolute inset-[18.39%_16.67%_16.67%_16.67%]">
                          <div className="absolute inset-[-5.92%_-6%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.3333 37.7698">
                              <path d={svgPaths.p742ac00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['JetBrains_Mono',sans-serif] font-normal h-auto leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">Design operator interface for live video feed, VLM text prompts, spatial bounding boxes, and sensor data</p>
              </div>
            </div>
          </div>
        </div>

        {/* SUMMARY QUOTE */}
        <div className="bg-transparent relative w-full">
          <div className="flex flex-row items-center overflow-clip w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex items-center justify-center px-[40px] py-[10px] relative w-full">
              <p className="font-['IBM_Plex_Mono',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-white tracking-[0.96px] max-w-[850px] text-center">
                Over the course of this project, we successfully transformed a raw, incompatible AI model into a fully integrated, high-performance visual processing engine for the drone platform—laying the technical foundation for real-time autonomous task execution.
              </p>
            </div>
          </div>
        </div>

        {/* DEVELOPMENT PROCESS */}
        <div className="bg-transparent relative w-full mt-12">
          <div className="flex flex-row items-center overflow-clip w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex items-start px-[40px] py-[10px] relative w-full">
              <div className="content-stretch flex items-start relative w-full">
                <div 
                  className="relative cursor-default inline-block font-['IBM_Plex_Mono',sans-serif] leading-[1.2] not-italic text-[52px] text-white tracking-[2.08px]"
                  onMouseEnter={() => setHoveredSection('development')}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className="relative z-10 transition-colors duration-300">
                    <p className="m-0">DEVELOPMENT</p>
                    <p className="m-0">PR0CESS</p>
                  </div>
                  <span className="absolute bottom-[-4px] left-0 right-0 border-b-[4px] border-dashed border-white transition-opacity duration-300 pointer-events-none z-10" style={getSectionHoverStyle('development')} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-transparent content-stretch flex flex-col gap-[70px] items-center justify-center overflow-clip p-[10px] relative w-full max-w-[1207px] mx-auto mb-[64px]">
          {/* Top Row: CONVERT -> BACKEND */}
          <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[20px] items-center justify-center relative w-full px-4">
            {/* CONVERT / ARM COMPILATION */}
            <div 
              className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white h-[320px] w-full max-w-[280px] cursor-pointer transition-all duration-500 ease-in-out ${isDevRevealed(0) ? 'scale-105 shadow-[0px_0px_30px_2px_rgba(14,165,233,0.4)] z-10' : 'scale-95 shadow-none z-0'}`}
              onClick={() => handleDevReveal(0)}
            >
              <div className="content-stretch flex flex-col items-start overflow-clip rounded-[15px] size-full transition-all duration-500 bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)]">
                <div className="content-stretch flex flex-col gap-[20px] items-center relative w-full pt-6">
                  <div className="relative w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[5px] relative size-full gap-2">
                        <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[24px] text-center text-white tracking-[1.12px]">ARM C++</p>
                        <div className="relative size-[30px]">
                          <div className="absolute inset-[16.67%]">
                            <div className="absolute inset-[-6.12%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.6667 36.6667">
                                <path d={svgPaths.p33cd1000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">Custom compiled ARM-specific C++ dependencies and configured JetPack for Jetson edge hardware</p>
                </div>
              </div>
            </div>

            <div className="h-0 relative w-[28px] hidden lg:block">
              <div className="absolute inset-[-11.05px_-5.36%_-11.05px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 22.0919">
                  <path d={svgPaths.p268faca0} fill="white" />
                </svg>
              </div>
            </div>

            {/* 3-TIER ARCHITECTURE */}
            <div 
              className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white h-[320px] w-full max-w-[280px] cursor-pointer transition-all duration-500 ease-in-out ${isDevRevealed(1) ? 'scale-105 shadow-[0px_0px_30px_2px_rgba(14,165,233,0.4)] z-10' : 'scale-95 shadow-none z-0'}`}
              onClick={() => handleDevReveal(1)}
            >
              <div className="content-stretch flex flex-col items-start overflow-clip rounded-[15px] size-full transition-all duration-500 bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)]">
                <div className="content-stretch flex flex-col gap-[20px] items-center relative w-full pt-6">
                  <div className="relative w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[5px] relative size-full gap-2">
                        <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[24px] text-center text-white tracking-[1.12px]">3-TIER ARCH</p>
                        <div className="relative size-[30px]">
                          <div className="absolute inset-[16.67%_12.5%]">
                            <div className="absolute inset-[-6.12%_-5.44%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.75 36.6667">
                                <path d={svgPaths.pff73c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">Architected decoupled web pipeline using React, Django, and FastAPI to isolate heavy AI workloads</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: LATENCY OPT -> SPATIAL REGEX */}
          <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[20px] items-center justify-center relative w-full px-4">
            {/* LATENCY OPTIMIZATION */}
            <div 
              className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white h-[320px] w-full max-w-[280px] cursor-pointer transition-all duration-500 ease-in-out ${isDevRevealed(2) ? 'scale-105 shadow-[0px_0px_30px_2px_rgba(14,165,233,0.4)] z-10' : 'scale-95 shadow-none z-0'}`}
              onClick={() => handleDevReveal(2)}
            >
              <div className="content-stretch flex flex-col items-start overflow-clip rounded-[15px] size-full transition-all duration-500 bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)]">
                <div className="content-stretch flex flex-col gap-[20px] items-center relative w-full pt-6">
                  <div className="relative w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[5px] relative size-full gap-2">
                        <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[24px] text-center text-white tracking-[1.12px]">LATENCY 88%</p>
                        <div className="relative size-[30px]">
                          <div className="absolute inset-[9.62%_13.92%]">
                            <div className="absolute inset-[-4.95%_-5.54%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.0847 44.3762">
                                <g>
                                  <path d={svgPaths.p30b3d480} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                                  <path d={svgPaths.p2f015180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">Engineered forced KV-caching, dynamic downscaling, and Ampere GPU flags for 88% latency drop</p>
                </div>
              </div>
            </div>

            <div className="h-0 relative w-[28px] hidden lg:block">
              <div className="absolute inset-[-11.05px_-5.36%_-11.05px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 22.0919">
                  <path d={svgPaths.p268faca0} fill="white" />
                </svg>
              </div>
            </div>

            {/* SPATIAL REGEX */}
            <div 
              className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white h-[320px] w-full max-w-[280px] cursor-pointer transition-all duration-500 ease-in-out ${isDevRevealed(3) ? 'scale-105 shadow-[0px_0px_30px_2px_rgba(14,165,233,0.4)] z-10' : 'scale-95 shadow-none z-0'}`}
              onClick={() => handleDevReveal(3)}
            >
              <div className="content-stretch flex flex-col items-start overflow-clip rounded-[15px] size-full transition-all duration-500 bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)]">
                <div className="content-stretch flex flex-col gap-[20px] items-center relative w-full pt-6">
                  <div className="relative w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[5px] relative size-full gap-2">
                        <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[24px] text-center text-white tracking-[1.12px]">BOUNDING BOX</p>
                        <div className="relative size-[30px]">
                          <div className="absolute inset-[11.22%_9.05%_10.69%_9.06%]">
                            <div className="absolute inset-[-5.12%_-4.89%_-5.14%_-4.89%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.9489 43.05">
                                <path d={svgPaths.p35084900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">Designed prompt engineering and backend Regex parsing to render spatial bounding boxes on UI feeds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
