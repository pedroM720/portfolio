import { useState } from 'react';
import { motion } from 'framer-motion';

import svgPaths from "./svg-lw7r9sbh42";
import backSvgPaths from "../../../imports/svg-6x7i7gg00i";

import imgFrame4 from "../../../assets/planwise/3bae832acecc27eba42a751e2323a0ec995662f9.png";
import imgImage15 from "../../../assets/planwise/866b2bb0d815e015d62c6f372c869abe06b1b33c.png";
import imgImage26 from "../../../assets/planwise/0aa0820a07f48698d9754f42eabac3bd013844db.png";
import imgImage27 from "../../../assets/planwise/63ab5154e3f6ccf09ca30971d3475493d7ef4a1f.png";
import imgImage16 from "../../../assets/planwise/d434f57587bc5db10671cc4fd5de71a9b6512455.png";
import imgUnsplashIm7LZjxeLhg from "../../../assets/planwise/a0231aae45ed31c2c5873645d3f1d6397f658bc6.png";
import imgUnsplashODkYSvidB4 from "../../../assets/planwise/87a851b3b6d17a0df7b3becd752cf7cb5ae8be73.png";
import planwiseCalendar from "../../../assets/planwise/planwise-calendar.png";
import studentHero from "../../../assets/fd5b37658e61da4a2410365058567365fa884c3f.png";

export function StudentManager({ onBack }: { onBack: () => void }) {
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [revealedCards, setRevealedCards] = useState<number[]>([0]);
  const [revealedDevCards, setRevealedDevCards] = useState<number[]>([0]);

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
              <p className="font-['IBM_Plex_Mono',sans-serif] h-[131px] leading-[normal] not-italic relative shrink-0 text-[156px] text-white w-[225px] -mt-[10px]">03</p>
            </div>

            <div className="content-stretch flex flex-col gap-[10px] h-[328px] items-start overflow-visible pb-[17px] pr-[23px] relative shrink-0 w-[479px]">
              <p className="font-['JetBrains_Mono',sans-serif] font-normal h-[106px] leading-[normal] relative shrink-0 text-[40px] text-white w-[380px]">STUDENT MANAGER</p>
              <p className="font-['JetBrains_Mono',sans-serif] font-normal h-[137px] leading-[normal] relative shrink-0 text-[20px] text-white w-[380px]">Classroom tool for educators. A comprehensive platform for managing student information, assignments, and classroom activities efficiently.</p>

              <div className="content-stretch flex gap-[14px] h-[71px] items-center overflow-clip pr-[11px] py-[19px] relative shrink-0 w-[356px]">
                <div className="relative shrink-0 size-[52px]" data-name="image 15">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[100.29%] left-[-24.56%] max-w-none top-[-0.15%] w-[152.63%]" src={imgImage15} />
                  </div>
                </div>
                <div className="relative shrink-0 size-[52px]" data-name="image 26">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage26} />
                </div>
                <div className="relative shrink-0 size-[52px]" data-name="image 27">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage27} />
                </div>
                <div className="relative shrink-0 size-[52px]" data-name="image 16">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative shrink-0 w-full lg:w-1/2 flex justify-end pr-[40px]">
            <img src={studentHero} alt="Student Manager Hero" className="w-full max-w-[700px] h-auto object-contain rounded-[15px] shadow-[0px_0px_30px_5px_rgba(225,216,216,0.3)]" />
          </div>
        </div>
      </div>

      <div className="bg-black content-stretch flex flex-col gap-[48px] items-center overflow-clip pb-[32px] pt-[64px] relative w-full">
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
                <p className="font-['JetBrains_Mono',sans-serif] font-normal relative shrink-0 text-[20px] tracking-[0.8px]">{`Apps like When2Meet work but leave a lot to be desired like g-cal integration, UI upgrades, and easier schedule planning `}</p>
              </div>
              <div className="h-[403px] relative shadow-[0px_0px_25px_5px_rgba(225,216,216,0.4)] shrink-0 w-full max-w-[570px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-lg" src={imgUnsplashODkYSvidB4} />
              </div>
            </div>
          </div>
        </div>

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
                <p className="font-['JetBrains_Mono',sans-serif] font-normal relative shrink-0 text-[20px] tracking-[0.8px]">Student Manager provides an efficient way to handle classroom activities</p>
              </div>
              <div className="h-[428px] relative shadow-[0px_0px_25px_5px_rgba(225,216,216,0.4)] shrink-0 w-full max-w-[570px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-lg" src={imgUnsplashODkYSvidB4} />
              </div>
            </div>
          </div>
        </div>

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

        <div className="bg-transparent content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[70px] items-center justify-center overflow-clip py-[10px] relative w-full px-4 max-w-[1200px] mx-auto">
          {/* DEFINE */}
          <div 
            className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] h-[320px] w-full max-w-[280px] transition-all duration-500 cursor-pointer ${isRevealed(0) ? 'scale-105 opacity-100 z-30' : 'scale-95 opacity-50 z-10 blur-[1px]'}`}
            onClick={() => handleReveal(0)}
          >
            {!isRevealed(0) && (
              <div className="absolute inset-0 bg-black/60 rounded-[15px] z-20 pointer-events-none flex items-center justify-center">
                 <div className="bg-white/10 rounded-full p-3 backdrop-blur-sm border border-white/20">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                 </div>
              </div>
            )}
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
                <p className="font-['JetBrains_Mono',sans-serif] font-normal h-auto leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">define the problem through affinity mapping, user research, user interview, and personas</p>
              </div>
            </div>
          </div>

          {/* IDEATE */}
          <div 
            className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] h-[320px] w-full max-w-[280px] transition-all duration-500 cursor-pointer ${isRevealed(1) ? 'scale-105 opacity-100 z-30' : 'scale-95 opacity-50 z-10 blur-[1px]'}`}
            onClick={() => handleReveal(1)}
          >
            {!isRevealed(1) && (
              <div className="absolute inset-0 bg-black/60 rounded-[15px] z-20 pointer-events-none flex items-center justify-center">
                 <div className="bg-white/10 rounded-full p-3 backdrop-blur-sm border border-white/20">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                 </div>
              </div>
            )}
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
                <p className="font-['JetBrains_Mono',sans-serif] font-normal h-auto leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">Mind mapping, navigation and layout, visual style, Lo-Fi’s, brainstorming</p>
              </div>
            </div>
          </div>

          {/* DESIGN */}
          <div 
            className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] h-[320px] w-full max-w-[280px] transition-all duration-500 cursor-pointer ${isRevealed(2) ? 'scale-105 opacity-100 z-30' : 'scale-95 opacity-50 z-10 blur-[1px]'}`}
            onClick={() => handleReveal(2)}
          >
            {!isRevealed(2) && (
              <div className="absolute inset-0 bg-black/60 rounded-[15px] z-20 pointer-events-none flex items-center justify-center">
                 <div className="bg-white/10 rounded-full p-3 backdrop-blur-sm border border-white/20">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                 </div>
              </div>
            )}
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
                <p className="font-['JetBrains_Mono',sans-serif] font-normal h-auto leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">Mid-Fi’s, prototypes, wireframes, mockups, user testing, user feedback, and refinement</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-transparent relative w-full">
          <div className="flex flex-row items-center overflow-clip w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex items-center justify-center px-[40px] py-[10px] relative w-full">
              <p className="font-['IBM_Plex_Mono',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white tracking-[0.96px] max-w-[708px] text-center">{`For PlanWise the most crucial step was the definition problem as the app is primarily focused on solving the shortcomings of the current webapps that exist for scheduling group events `}</p>
            </div>
          </div>
        </div>

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
            {/* CONVERT */}
            <div 
              className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white h-[320px] w-full max-w-[280px] cursor-pointer transition-all duration-500 ease-in-out ${isDevRevealed(0) ? 'scale-105 shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] z-10' : 'scale-95 shadow-none z-0'}`}
              onClick={() => handleDevReveal(0)}
            >
              <div className={`content-stretch flex flex-col items-start overflow-clip rounded-[15px] size-full transition-all duration-500 bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] ${isDevRevealed(0) ? 'blur-none brightness-100' : 'blur-[2px] brightness-50'}`}>
                <div className="content-stretch flex flex-col gap-[20px] items-center relative w-full pt-6">
                  <div className="relative w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[5px] relative size-full gap-2">
                        <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[28px] text-center text-white tracking-[1.12px]">CONVERT</p>
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
                  <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">Define the necessary framework, front-end tools, backend architecture, to realize the design</p>
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

            {/* BACKEND */}
            <div 
              className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white h-[320px] w-full max-w-[280px] cursor-pointer transition-all duration-500 ease-in-out ${isDevRevealed(1) ? 'scale-105 shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] z-10' : 'scale-95 shadow-none z-0'}`}
              onClick={() => handleDevReveal(1)}
            >
              <div className={`content-stretch flex flex-col items-start overflow-clip rounded-[15px] size-full transition-all duration-500 bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] ${isDevRevealed(1) ? 'blur-none brightness-100' : 'blur-[2px] brightness-50'}`}>
                <div className="content-stretch flex flex-col gap-[20px] items-center relative w-full pt-6">
                  <div className="relative w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[5px] relative size-full gap-2">
                        <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[28px] text-center text-white tracking-[1.12px]">BACKEND</p>
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
                  <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">Bootstrap a basic backend, setting up API endpoints, database connections, and functionality of the product</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: FRONTEND -> TEST */}
          <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[20px] items-center justify-center relative w-full px-4">
            {/* FRONTEND */}
            <div 
              className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white h-[320px] w-full max-w-[280px] cursor-pointer transition-all duration-500 ease-in-out ${isDevRevealed(2) ? 'scale-105 shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] z-10' : 'scale-95 shadow-none z-0'}`}
              onClick={() => handleDevReveal(2)}
            >
              <div className={`content-stretch flex flex-col items-start overflow-clip rounded-[15px] size-full transition-all duration-500 bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] ${isDevRevealed(2) ? 'blur-none brightness-100' : 'blur-[2px] brightness-50'}`}>
                <div className="content-stretch flex flex-col gap-[20px] items-center relative w-full pt-6">
                  <div className="relative w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[5px] relative size-full gap-2">
                        <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[28px] text-center text-white tracking-[1.12px]">FRONTEND</p>
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
                  <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">Build off backend to realize the frontend design using the right framework and tools, ideate and adapt the setup to achieve the goal</p>
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

            {/* TEST */}
            <div 
              className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white h-[320px] w-full max-w-[280px] cursor-pointer transition-all duration-500 ease-in-out ${isDevRevealed(3) ? 'scale-105 shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] z-10' : 'scale-95 shadow-none z-0'}`}
              onClick={() => handleDevReveal(3)}
            >
              <div className={`content-stretch flex flex-col items-start overflow-clip rounded-[15px] size-full transition-all duration-500 bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] ${isDevRevealed(3) ? 'blur-none brightness-100' : 'blur-[2px] brightness-50'}`}>
                <div className="content-stretch flex flex-col gap-[20px] items-center relative w-full pt-6">
                  <div className="relative w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[5px] relative size-full gap-2">
                        <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[28px] text-center text-white tracking-[1.12px]">TEST</p>
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
                  <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[16px] text-center text-white tracking-[0.64px] w-[240px]">Test the product to iron out any bug or error, refine the code, and ensure the stability of the product, then refine and improve based off feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
