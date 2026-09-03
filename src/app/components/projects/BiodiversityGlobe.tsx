import { useState } from 'react';
import svgPaths from "./svg-lw7r9sbh42";
import backSvgPaths from "../../../imports/svg-6x7i7gg00i";

import bioTitleCard from "../../../assets/proj_assets/Screenshot 2026-04-27 225637.png";
import bioGlobeView1 from "../../../assets/proj_assets/Screenshot 2026-04-15 212727.png";
import bioGlobeView2 from "../../../assets/proj_assets/Screenshot 2026-04-15 212817.png";
import bioGlobeNodes from "../../../assets/proj_assets/Screenshot 2026-04-21 221209.png";

import reactIcon from "../../../assets/866b2bb0d815e015d62c6f372c869abe06b1b33c.png";
import tsIcon from "../../../assets/5c8cd8082fc863b5c16f485b27bafeeac681c54a.png";

export function BiodiversityGlobe({ onBack }: { onBack: () => void }) {
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

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
              <p className="font-['IBM_Plex_Mono',sans-serif] h-[131px] leading-[normal] not-italic relative shrink-0 text-[156px] text-white w-[225px] -mt-[10px]">03</p>
            </div>

            <div className="content-stretch flex flex-col gap-[10px] min-h-[328px] items-start overflow-visible pb-[17px] pr-[23px] relative shrink-0 w-[479px]">
              <p className="font-['JetBrains_Mono',sans-serif] font-normal h-[106px] leading-[normal] relative shrink-0 text-[40px] text-white w-[380px]">BIODIVERSITY GLOBE</p>
              <p className="font-['JetBrains_Mono',sans-serif] font-normal min-h-[137px] leading-[normal] relative shrink-0 text-[20px] text-white w-[380px]">An interactive exploration of human evolutionary adaptation through planetary data and biological narratives.</p>

              {/* Stack Icons & Live Link Button */}
              <div className="content-stretch flex items-center gap-[14px] h-[71px] relative shrink-0 w-full mt-2">
                <div className="relative shrink-0 size-[52px]" title="React">
                  <img alt="React" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={reactIcon} />
                </div>
                <div className="relative shrink-0 size-[52px]" title="TypeScript">
                  <img alt="TypeScript" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={tsIcon} />
                </div>

                <a
                  href="https://pedro-martinez-ib35-creative.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black font-['JetBrains_Mono',sans-serif] font-bold px-4 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] hover:scale-105 text-sm ml-2"
                >
                  <span>EXPLORE THE BIOSPHERE ↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative shrink-0 w-full lg:w-1/2 flex justify-end pr-[40px]">
            <img src={bioTitleCard} alt="Biodiversity Globe Landing" className="w-full max-w-[700px] h-auto object-contain rounded-[15px] shadow-[0px_0px_30px_5px_rgba(34,211,238,0.3)] border border-cyan-500/30" />
          </div>
        </div>
      </div>

      {/* --- CONTENT DETAILS --- */}
      <div className="bg-black content-stretch flex flex-col gap-[48px] items-center overflow-clip pb-[64px] pt-[64px] relative w-full">
        
        {/* OVERVIEW */}
        <div className="bg-transparent relative w-full">
          <div className="flex flex-col lg:flex-row items-center overflow-clip w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[118px] items-center lg:items-start px-[40px] py-[40px] lg:py-[10px] relative w-full">
              <div className="content-stretch flex flex-col gap-[32px] items-start leading-[normal] relative shrink-0 text-white w-full max-w-[437px]">
                <div 
                  className="relative cursor-default inline-block"
                  onMouseEnter={() => setHoveredSection('overview')}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <p className="font-['IBM_Plex_Mono',sans-serif] not-italic relative z-10 shrink-0 text-[52px] tracking-[2.08px] transition-colors duration-300">OVERVIEW</p>
                  <span className="absolute bottom-[-4px] left-0 right-0 border-b-[4px] border-dashed border-white transition-opacity duration-300 pointer-events-none z-10" style={getSectionHoverStyle('overview')} />
                </div>
                <p className="font-['JetBrains_Mono',sans-serif] font-normal relative shrink-0 text-[20px] tracking-[0.8px] text-white/90">
                  Human evolutionary adaptation occurs across global geographic clines. Flat 2D maps obscure spatial relationships and biological narratives. Biodiversity Globe renders global genetic, environmental, and phenotypic datasets on an interactive 3D Earth.
                </p>
              </div>
              <div className="relative shadow-[0px_0px_25px_5px_rgba(34,211,238,0.3)] shrink-0 w-full max-w-[570px] rounded-lg overflow-hidden border border-cyan-500/20 bg-black">
                <img alt="Biodiversity Globe Data Nodes" className="w-full h-auto max-h-[400px] object-contain rounded-lg block" src={bioGlobeNodes} />
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION & INTERACTION */}
        <div className="bg-transparent relative w-full">
          <div className="flex flex-col lg:flex-row items-center overflow-clip w-full max-w-[1200px] mx-auto">
            <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[118px] items-center lg:items-start px-[40px] py-[40px] lg:py-[10px] relative w-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 text-white w-full max-w-[437px]">
                <div 
                  className="relative cursor-default inline-block"
                  onMouseEnter={() => setHoveredSection('components')}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <p className="font-['IBM_Plex_Mono',sans-serif] not-italic relative z-10 shrink-0 text-[48px] tracking-[2.08px] transition-colors duration-300">NAVIGATION & INTERACTION</p>
                  <span className="absolute bottom-[-4px] left-0 right-0 border-b-[4px] border-dashed border-white transition-opacity duration-300 pointer-events-none z-10" style={getSectionHoverStyle('components')} />
                </div>
                
                <ul className="font-['JetBrains_Mono',sans-serif] text-[16px] tracking-[0.6px] space-y-4 text-white/90">
                  <li className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <strong className="text-cyan-300 font-bold block mb-1">Explore the Biosphere</strong>
                    Press the button on the landing page to enter the interactive 3D biosphere canvas.
                  </li>
                  <li className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <strong className="text-cyan-300 font-bold block mb-1">Fix Globe</strong>
                    Stops the globe's continuous rotation for easy inspection and precise node selection.
                  </li>
                  <li className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <strong className="text-cyan-300 font-bold block mb-1">Interactive 3D Globe</strong>
                    Built with Three.js. Supports trackpad/mouse pinch-to-zoom and interactive clickable geospatial data points.
                  </li>
                  <li className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <strong className="text-cyan-300 font-bold block mb-1">Data Layer & Migration Walkthrough</strong>
                    Press the <em className="text-cyan-400 not-italic font-semibold">Migration</em> button for an automated visual walkthrough of human migration patterns across the globe.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-6 w-full max-w-[570px]">
                <div className="relative shadow-[0px_0px_25px_5px_rgba(34,211,238,0.2)] shrink-0 w-full rounded-lg overflow-hidden border border-cyan-500/20 bg-black">
                  <img alt="Biodiversity Globe View 1" className="w-full h-auto max-h-[320px] object-contain rounded-lg block" src={bioGlobeView1} />
                </div>
                <div className="relative shadow-[0px_0px_25px_5px_rgba(34,211,238,0.2)] shrink-0 w-full rounded-lg overflow-hidden border border-cyan-500/20 bg-black">
                  <img alt="Biodiversity Globe View 2" className="w-full h-auto max-h-[320px] object-contain rounded-lg block" src={bioGlobeView2} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ANALYZED DATASETS */}
        <div className="bg-transparent relative w-full">
          <div className="flex flex-col items-center overflow-clip w-full max-w-[1200px] mx-auto px-[40px]">
            <div 
              className="relative cursor-default inline-block mb-8 text-center"
              onMouseEnter={() => setHoveredSection('datasets')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <p className="font-['IBM_Plex_Mono',sans-serif] not-italic relative z-10 shrink-0 text-[52px] text-white tracking-[2.08px]">EVOLUTIONARY TRAIT DATASETS</p>
              <span className="absolute bottom-[-4px] left-0 right-0 border-b-[4px] border-dashed border-white transition-opacity duration-300 pointer-events-none z-10" style={getSectionHoverStyle('datasets')} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="bg-gradient-to-b from-cyan-950/40 to-black p-6 rounded-xl border border-cyan-500/30">
                <h3 className="font-['IBM_Plex_Mono',sans-serif] text-cyan-300 text-xl font-bold mb-2">Skin Pigmentation</h3>
                <p className="font-['JetBrains_Mono',sans-serif] text-sm text-white/80">
                  Analyzes UV radiation intensity clines and Vitamin D3 synthesis trade-offs across latitudes.
                </p>
              </div>

              <div className="bg-gradient-to-b from-cyan-950/40 to-black p-6 rounded-xl border border-cyan-500/30">
                <h3 className="font-['IBM_Plex_Mono',sans-serif] text-cyan-300 text-xl font-bold mb-2">Lactase Persistence</h3>
                <p className="font-['JetBrains_Mono',sans-serif] text-sm text-white/80">
                  Tracks pastoralist historical origins and cultural-historical co-evolution of dairy farming.
                </p>
              </div>

              <div className="bg-gradient-to-b from-cyan-950/40 to-black p-6 rounded-xl border border-cyan-500/30">
                <h3 className="font-['IBM_Plex_Mono',sans-serif] text-cyan-300 text-xl font-bold mb-2">Altitude Adaptation</h3>
                <p className="font-['JetBrains_Mono',sans-serif] text-sm text-white/80">
                  Displays hypoxia survival mechanisms in high-altitude populations (Tibetan Plateau, Andes, Ethiopian Highlands).
                </p>
              </div>

              <div className="bg-gradient-to-b from-cyan-950/40 to-black p-6 rounded-xl border border-cyan-500/30">
                <h3 className="font-['IBM_Plex_Mono',sans-serif] text-cyan-300 text-xl font-bold mb-2">Malaria Prevalence</h3>
                <p className="font-['JetBrains_Mono',sans-serif] text-sm text-white/80">
                  Maps geographic distribution of Plasmodium falciparum malaria selective pressure.
                </p>
              </div>

              <div className="bg-gradient-to-b from-cyan-950/40 to-black p-6 rounded-xl border border-cyan-500/30 col-span-1 md:col-span-2">
                <h3 className="font-['IBM_Plex_Mono',sans-serif] text-cyan-300 text-xl font-bold mb-2">Sickle Cell (HbS)</h3>
                <p className="font-['JetBrains_Mono',sans-serif] text-sm text-white/80">
                  Illustrates balancing selection and heterozygote advantage against malaria infection.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
