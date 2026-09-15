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
import planwiseHero from "../../../assets/planwise/planwise-hero-2.png";
import planwiseCalendar from "../../../assets/planwise/planwise-calendar.png";

export function PlanWise({ onBack }: { onBack: () => void }) {
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
      <div className="fixed left-4 top-[65px] lg:top-1/2 lg:-translate-y-1/2 z-50">
        <button
          onClick={onBack}
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
          className="transition-transform duration-300 bg-transparent border-none cursor-pointer p-0"
          style={{ transform: isBackHovered ? 'scale(1.1)' : 'scale(1)' }}
          aria-label="Back to projects"
        >
          <svg className="w-[42px] h-[36px] sm:w-[50px] sm:h-[44px] lg:w-[62px] lg:h-[54px]" fill="none" preserveAspectRatio="none" viewBox="0 0 123.495 108.729">
            <mask fill="white" id="path-back">
              <path d={backSvgPaths.p356c2e00} />
            </mask>
            <path d={backSvgPaths.p356c2e00} fill="white" />
            <path d={backSvgPaths.p1092a080} fill="white" mask="url(#path-back)" />
          </svg>
        </button>
      </div>

      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative w-full max-w-[1200px] mx-auto min-h-0 lg:min-h-[752px] pt-16 lg:pt-0">

        <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-10">
          <div className="content-stretch flex flex-col gap-[16px] h-auto lg:min-h-[752px] items-start pt-4 lg:pt-[139px] ml-0 mt-0 relative shrink-0 w-full lg:w-[479px] px-6 lg:pl-[40px] lg:pr-0">
            <div className="content-stretch flex h-auto lg:h-[110px] items-start overflow-clip pr-0 lg:pr-[23px] relative shrink-0 w-auto">
              <p className="font-['IBM_Plex_Mono',sans-serif] leading-[normal] not-italic relative shrink-0 text-[72px] sm:text-[100px] lg:text-[156px] text-white -mt-[10px]">01</p>
            </div>

            {/* Top Divider Line (Desktop) */}
            <div className="hidden lg:block w-[378px] h-[1px] bg-white my-1" />

            <div className="content-stretch flex flex-col gap-[10px] min-h-0 lg:min-h-[328px] items-start overflow-visible pb-[17px] pr-0 lg:pr-[23px] relative shrink-0 w-full lg:w-[479px]">
              <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative shrink-0 text-[28px] sm:text-[40px] text-white w-full lg:w-[380px]">PLANWISE</p>
              <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] sm:text-[20px] text-white/90 w-full lg:w-[380px]">A scheduling web-app for making plans with groups. Comes with native G-Cal integration and generates heatmaps of availabilities</p>

              <div className="content-stretch flex gap-[14px] h-[71px] items-center overflow-clip pr-[11px] py-[19px] relative shrink-0 w-full max-w-[356px] flex-wrap">
                <div className="relative shrink-0 size-[42px] sm:size-[52px]" data-name="image 15">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[100.29%] left-[-24.56%] max-w-none top-[-0.15%] w-[152.63%]" src={imgImage15} />
                  </div>
                </div>
                <div className="relative shrink-0 size-[42px] sm:size-[52px]" data-name="image 26">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage26} />
                </div>
                <div className="relative shrink-0 size-[42px] sm:size-[52px]" data-name="image 27">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage27} />
                </div>
                <div className="relative shrink-0 size-[42px] sm:size-[52px]" data-name="image 16">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
                </div>
              </div>

              {/* Bottom Divider Line (Desktop) - containing title, description, and icons between top and bottom white bars */}
              <div className="hidden lg:block w-[415px] h-[1px] bg-white mt-3 mb-1" />
            </div>
          </div>

          <div className="relative shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-end px-4 lg:pr-[40px] mt-6 lg:mt-0">
            <img src={planwiseHero} alt="PlanWise Hero" className="w-full max-w-[700px] h-auto object-contain rounded-[15px] shadow-[0px_0px_30px_5px_rgba(225,216,216,0.3)]" />
          </div>
        </div>
      </div>

      <div className="bg-black content-stretch flex flex-col gap-[36px] lg:gap-[48px] items-center overflow-clip pb-[32px] pt-[36px] lg:pt-[64px] relative w-full">
        {/* PROBLEM STATEMENT */}
        <div className="bg-transparent relative w-full">
          <div className="flex flex-col lg:flex-row items-center overflow-clip w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[118px] items-center lg:items-start px-6 lg:px-[40px] py-4 lg:py-[10px] relative w-full">
              <div className="content-stretch flex flex-col gap-[20px] lg:gap-[32px] items-start leading-[normal] relative shrink-0 text-white w-full lg:max-w-[437px]">
                <div
                  className="relative cursor-default inline-block"
                  onMouseEnter={() => setHoveredSection('problem')}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <p className="font-['IBM_Plex_Mono',sans-serif] not-italic relative z-10 shrink-0 text-[28px] sm:text-[38px] lg:text-[52px] tracking-[1px] lg:tracking-[2.08px] transition-colors duration-300">PR0BLEM STATEMENT</p>
                  <span className="absolute bottom-[-4px] left-0 right-0 border-b-[4px] border-dashed border-white transition-opacity duration-300 pointer-events-none z-10" style={getSectionHoverStyle('problem')} />
                </div>
                <p className="font-['JetBrains_Mono',sans-serif] font-normal relative shrink-0 text-[16px] sm:text-[20px] tracking-[0.8px] text-white/90">{`Apps like When2Meet work but leave a lot to be desired like g-cal integration, UI upgrades, and easier schedule planning `}</p>
              </div>
              <div className="h-auto max-h-[403px] relative shadow-[0px_0px_25px_5px_rgba(225,216,216,0.4)] shrink-0 w-full max-w-[570px]">
                <img alt="" className="w-full h-auto max-h-[380px] object-cover pointer-events-none size-full rounded-lg block" src={imgUnsplashIm7LZjxeLhg} />
              </div>
            </div>
          </div>
        </div>

        {/* SOLUTION */}
        <div className="bg-transparent relative w-full">
          <div className="flex flex-col lg:flex-row items-center overflow-clip w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[118px] items-center lg:items-start px-6 lg:px-[40px] py-4 lg:py-[10px] relative w-full">
              <div className="content-stretch flex flex-col gap-[20px] lg:gap-[32px] items-start leading-[normal] relative shrink-0 text-white w-full lg:max-w-[437px]">
                <div
                  className="relative cursor-default inline-block"
                  onMouseEnter={() => setHoveredSection('solution')}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <p className="font-['IBM_Plex_Mono',sans-serif] not-italic relative z-10 shrink-0 text-[28px] sm:text-[38px] lg:text-[52px] tracking-[1px] lg:tracking-[2.08px] transition-colors duration-300">S0LUTI0N</p>
                  <span className="absolute bottom-[-4px] left-0 right-0 border-b-[4px] border-dashed border-white transition-opacity duration-300 pointer-events-none z-10" style={getSectionHoverStyle('solution')} />
                </div>
                <p className="font-['JetBrains_Mono',sans-serif] font-normal relative shrink-0 text-[16px] sm:text-[20px] tracking-[0.8px] text-white/90">PlanWise is an app that makes planning group events easier by adding an automatic best time to meet for you, upgraded UI view, and g-cal integration</p>
              </div>
              <div className="h-auto max-h-[428px] relative shadow-[0px_0px_25px_5px_rgba(225,216,216,0.4)] shrink-0 w-full max-w-[570px]">
                <img alt="" className="w-full h-auto max-h-[380px] object-cover pointer-events-none size-full rounded-lg block" src={planwiseCalendar} />
              </div>
            </div>
          </div>
        </div>

        {/* DESIGN PROCESS */}
        <div className="bg-transparent relative w-full">
          <div className="flex flex-row items-center overflow-clip w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex items-start px-6 lg:px-[40px] py-[10px] relative w-full">
              <div
                className="relative cursor-default inline-block"
                onMouseEnter={() => setHoveredSection('design')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <p className="font-['IBM_Plex_Mono',sans-serif] leading-[normal] not-italic relative z-10 shrink-0 text-[28px] sm:text-[38px] lg:text-[52px] text-white tracking-[1px] lg:tracking-[2.08px] transition-colors duration-300">DESIGN PR0CESS</p>
                <span className="absolute bottom-[-4px] left-0 right-0 border-b-[4px] border-dashed border-white transition-opacity duration-300 pointer-events-none z-10" style={getSectionHoverStyle('design')} />
              </div>
            </div>
          </div>
        </div>

        {/* PROCESS CARDS */}
        <div className="bg-transparent content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[70px] items-center justify-center overflow-clip py-[10px] relative w-full px-4 max-w-[1200px] mx-auto">
          {/* DEFINE */}
          <div
            className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] h-full min-h-[300px] lg:h-[320px] w-full max-w-[320px] lg:max-w-[280px] flex flex-col overflow-hidden transition-all duration-500 cursor-pointer ${isRevealed(0) ? 'scale-105 opacity-100 z-30' : 'scale-95 opacity-50 z-10 blur-[1px]'}`}
            onClick={() => handleReveal(0)}
          >
            <div className="bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] flex flex-col flex-1 items-center justify-between overflow-hidden rounded-[14px] w-full h-full p-4 sm:p-5">
              <div className="flex flex-col gap-4 items-center justify-between relative w-full h-full my-auto">
                <div className="relative w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-[10px] relative size-full gap-2">
                      <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[28px] sm:text-[36px] text-center text-white tracking-[1.44px]">DEFINE</p>
                      <div className="h-[35px] sm:h-[45px] relative w-[40px] sm:w-[50px]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 59">
                          <path d={svgPaths.p296d9880} fill="white" id="search_icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[1.4] text-[14px] sm:text-[15px] lg:text-[16px] text-center text-white tracking-[0.64px] w-full px-2">define the problem through affinity mapping, user research, user interview, and personas</p>
              </div>
            </div>
          </div>

          {/* IDEATE */}
          <div
            className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] h-full min-h-[300px] lg:h-[320px] w-full max-w-[320px] lg:max-w-[280px] flex flex-col overflow-hidden transition-all duration-500 cursor-pointer ${isRevealed(1) ? 'scale-105 opacity-100 z-30' : 'scale-95 opacity-50 z-10 blur-[1px]'}`}
            onClick={() => handleReveal(1)}
          >
            <div className="bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] flex flex-col flex-1 items-center justify-between overflow-hidden rounded-[14px] w-full h-full p-4 sm:p-5">
              <div className="flex flex-col gap-4 items-center justify-between relative w-full h-full my-auto">
                <div className="relative w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-[10px] relative size-full gap-2">
                      <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[28px] sm:text-[36px] text-center text-white tracking-[1.44px]">IDEATE</p>
                      <div className="content-stretch flex items-end justify-center relative size-[30px] sm:size-[36px]">
                        <div className="h-[25px] sm:h-[30px] relative w-[18px] sm:w-[20px]">
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
                <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[1.4] text-[14px] sm:text-[15px] lg:text-[16px] text-center text-white tracking-[0.64px] w-full px-2">Mind mapping, navigation and layout, visual style, Lo-Fi’s, brainstorming</p>
              </div>
            </div>
          </div>

          {/* DESIGN */}
          <div
            className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] h-full min-h-[300px] lg:h-[320px] w-full max-w-[320px] lg:max-w-[280px] flex flex-col overflow-hidden transition-all duration-500 cursor-pointer ${isRevealed(2) ? 'scale-105 opacity-100 z-30' : 'scale-95 opacity-50 z-10 blur-[1px]'}`}
            onClick={() => handleReveal(2)}
          >
            <div className="bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] flex flex-col flex-1 items-center justify-between overflow-hidden rounded-[14px] w-full h-full p-4 sm:p-5">
              <div className="flex flex-col gap-4 items-center justify-between relative w-full h-full my-auto">
                <div className="relative w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-[10px] relative size-full gap-2">
                      <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[28px] sm:text-[36px] text-center text-white tracking-[1.44px]">DESIGN</p>
                      <div className="h-[32px] sm:h-[40px] relative w-[30px] sm:w-[38px] mb-2">
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
                <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[1.4] text-[14px] sm:text-[15px] lg:text-[16px] text-center text-white tracking-[0.64px] w-full px-2">Mid-Fi’s, prototypes, wireframes, mockups, user testing, user feedback, and refinement</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-transparent relative w-full">
          <div className="flex flex-row items-center overflow-clip w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex items-center justify-center px-4 sm:px-8 py-[10px] relative w-full">
              <p className="font-['IBM_Plex_Mono',sans-serif] leading-[normal] not-italic relative text-[14px] sm:text-[18px] lg:text-[22px] text-white tracking-[0.96px] w-full max-w-[708px] text-center">{`For PlanWise the most crucial step was the definition problem as the app is primarily focused on solving the shortcomings of the current webapps that exist for scheduling group events `}</p>
            </div>
          </div>
        </div>

        <div className="bg-transparent relative w-full mt-6 lg:mt-12">
          <div className="flex flex-row items-center overflow-clip w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex items-start px-6 lg:px-[40px] py-[10px] relative w-full">
              <div className="content-stretch flex items-start relative w-full">
                <div
                  className="relative cursor-default inline-block font-['IBM_Plex_Mono',sans-serif] leading-[1.2] not-italic text-[28px] sm:text-[38px] lg:text-[52px] text-white tracking-[1px] lg:tracking-[2.08px]"
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

        <div className="bg-transparent content-stretch flex flex-col gap-6 lg:gap-[70px] items-center justify-center overflow-clip p-[10px] relative w-full max-w-[1207px] mx-auto mb-[64px]">
          {/* Top Row: CONVERT -> BACKEND */}
          <div className="content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[20px] items-center justify-center relative w-full px-4">
            {/* CONVERT */}
            <div
              className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white h-full min-h-[300px] lg:h-[320px] w-full max-w-[320px] lg:max-w-[280px] flex flex-col overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${isDevRevealed(0) ? 'scale-105 shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] z-10' : 'scale-95 shadow-none z-0'}`}
              onClick={() => handleDevReveal(0)}
            >
              <div className={`flex flex-col flex-1 items-center justify-between overflow-hidden rounded-[14px] w-full h-full p-4 sm:p-5 transition-all duration-500 bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] ${isDevRevealed(0) ? 'blur-none brightness-100' : 'blur-[2px] brightness-50'}`}>
                <div className="flex flex-col gap-4 items-center justify-between relative w-full h-full my-auto">
                  <div className="relative w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[5px] relative size-full gap-2">
                        <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[24px] sm:text-[28px] text-center text-white tracking-[1.12px]">CONVERT</p>
                        <div className="relative size-[26px] sm:size-[30px]">
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
                  <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[1.4] text-[14px] sm:text-[15px] lg:text-[16px] text-center text-white tracking-[0.64px] w-full px-2">Define the necessary framework, front-end tools, backend architecture, to realize the design</p>
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
              className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white h-full min-h-[300px] lg:h-[320px] w-full max-w-[320px] lg:max-w-[280px] flex flex-col overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${isDevRevealed(1) ? 'scale-105 shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] z-10' : 'scale-95 shadow-none z-0'}`}
              onClick={() => handleDevReveal(1)}
            >
              <div className={`flex flex-col flex-1 items-center justify-between overflow-hidden rounded-[14px] w-full h-full p-4 sm:p-5 transition-all duration-500 bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] ${isDevRevealed(1) ? 'blur-none brightness-100' : 'blur-[2px] brightness-50'}`}>
                <div className="flex flex-col gap-4 items-center justify-between relative w-full h-full my-auto">
                  <div className="relative w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[5px] relative size-full gap-2">
                        <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[24px] sm:text-[28px] text-center text-white tracking-[1.12px]">BACKEND</p>
                        <div className="relative size-[26px] sm:size-[30px]">
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
                  <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[1.4] text-[14px] sm:text-[15px] lg:text-[16px] text-center text-white tracking-[0.64px] w-full px-2">Bootstrap a basic backend, setting up API endpoints, database connections, and functionality of the product</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: FRONTEND -> TEST */}
          <div className="content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[20px] items-center justify-center relative w-full px-4">
            {/* FRONTEND */}
            <div
              className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white h-full min-h-[300px] lg:h-[320px] w-full max-w-[320px] lg:max-w-[280px] flex flex-col overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${isDevRevealed(2) ? 'scale-105 shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] z-10' : 'scale-95 shadow-none z-0'}`}
              onClick={() => handleDevReveal(2)}
            >
              <div className={`flex flex-col flex-1 items-center justify-between overflow-hidden rounded-[14px] w-full h-full p-4 sm:p-5 transition-all duration-500 bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] ${isDevRevealed(2) ? 'blur-none brightness-100' : 'blur-[2px] brightness-50'}`}>
                <div className="flex flex-col gap-4 items-center justify-between relative w-full h-full my-auto">
                  <div className="relative w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[5px] relative size-full gap-2">
                        <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[24px] sm:text-[28px] text-center text-white tracking-[1.12px]">FRONTEND</p>
                        <div className="relative size-[26px] sm:size-[30px]">
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
                  <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[1.4] text-[14px] sm:text-[15px] lg:text-[16px] text-center text-white tracking-[0.64px] w-full px-2">Build off backend to realize the frontend design using the right framework and tools, ideate and adapt the setup to achieve the goal</p>
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
              className={`relative p-[1px] rounded-[15px] bg-gradient-to-b from-[#534e4e] to-white h-full min-h-[300px] lg:h-[320px] w-full max-w-[320px] lg:max-w-[280px] flex flex-col overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${isDevRevealed(3) ? 'scale-105 shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] z-10' : 'scale-95 shadow-none z-0'}`}
              onClick={() => handleDevReveal(3)}
            >
              <div className={`flex flex-col flex-1 items-center justify-between overflow-hidden rounded-[14px] w-full h-full p-4 sm:p-5 transition-all duration-500 bg-gradient-to-b from-[#161616] via-[63%] via-[#4c4848] to-[rgba(152,150,150,0.8)] ${isDevRevealed(3) ? 'blur-none brightness-100' : 'blur-[2px] brightness-50'}`}>
                <div className="flex flex-col gap-4 items-center justify-between relative w-full h-full my-auto">
                  <div className="relative w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[5px] relative size-full gap-2">
                        <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative text-[24px] sm:text-[28px] text-center text-white tracking-[1.12px]">TEST</p>
                        <div className="relative size-[26px] sm:size-[30px]">
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
                  <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[1.4] text-[14px] sm:text-[15px] lg:text-[16px] text-center text-white tracking-[0.64px] w-full px-2">Test the product to iron out any bug or error, refine the code, and ensure the stability of the product, then refine and improve based off feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
