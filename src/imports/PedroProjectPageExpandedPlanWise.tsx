import svgPaths from "./svg-6x7i7gg00i";
import imgUnion from "figma:asset/9ee74dcfcc6488fd2e2277c9819a4fb3fcd3ef23.png";
import imgImage12 from "figma:asset/c84148390bf52d0cfab52024ae0317ec2925bd94.png";
import imgImage13 from "figma:asset/369c157ddb323e2e2f559ba0835e672f76d84c5c.png";
import imgImage14 from "figma:asset/d434f57587bc5db10671cc4fd5de71a9b6512455.png";
import imgImage15 from "figma:asset/866b2bb0d815e015d62c6f372c869abe06b1b33c.png";
import imgImage17 from "figma:asset/2ee6aa0a8881c08b2687a6a807522af7426be3e4.png";

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-5px] p-[10px] top-[3px] w-[97px]">
      <div className="h-[40.12px] relative shrink-0 w-full" data-name="Union">
        <img alt="" className="block max-w-none size-full" height="40.12" src={imgUnion} width="77" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(11,11,11,0)] content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[46px]">
      <div className="bg-white h-[2.5px] shrink-0 w-[50px]" />
      <div className="bg-white h-[2.5px] shrink-0 w-[50px]" />
      <div className="bg-white h-[2.5px] shrink-0 w-[50px]" />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex inset-0 items-center justify-center overflow-clip pl-[1351px]" data-name="Navbar">
      <Frame />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Component 2">
      <Navbar />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-10px] p-[10px] top-[-10px] w-[1460px]">
      <Component />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[109px] left-[-10px] top-[-10px] w-[143.495px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.495 109">
        <g id="Frame 20">
          <g id="Union">
            <mask fill="white" id="path-1-inside-1_1_2540">
              <path d={svgPaths.p356c2e00} />
            </mask>
            <path d={svgPaths.p356c2e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1092a080} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_1_2540)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="h-[96px] relative shrink-0 w-[133px]" data-name="Arrow Left">
      <Frame3 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="col-1 font-['Exo_2:Light',sans-serif] font-light h-[338px] leading-[normal] ml-0 mt-0 relative row-1 text-[#67caff] text-[40px] w-[524px] whitespace-pre-wrap">A scheduling web-app for making plans with groups, integrates with Google Calendar and generates heatmaps of everyone’s availabilities</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip pr-[11px] py-[19px] relative shrink-0">
      <p className="font-['Orbitron:Regular',sans-serif] font-normal h-[62px] leading-[normal] relative shrink-0 text-[48px] text-center text-white w-[180px] whitespace-pre-wrap">Stack:</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[52px]" data-name="image 12">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[52px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
      <div className="relative shrink-0 size-[52px]" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
      <div className="relative shrink-0 size-[52px]" data-name="image 15">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.29%] left-[-24.56%] max-w-none top-[-0.15%] w-[152.63%]" src={imgImage15} />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <a className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" href="https://github.com/pedroM720/scheduler_app">
      <div className="bg-[#67caff] col-1 h-[58px] ml-0 mt-0 rounded-[15px] row-1 w-[237.441px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 col-1 flex flex-col font-['Exo_2:Light',sans-serif] font-light h-[35px] justify-center ml-[119px] mt-[28.5px] relative row-1 text-[40px] text-center text-white w-[220px]">
        <p className="leading-[normal] whitespace-pre-wrap">Click Here</p>
      </div>
    </a>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[815px] items-start overflow-clip px-[12px] py-[3px] relative shrink-0 w-[716px]">
      <p className="font-['Orbitron:Regular',sans-serif] font-normal h-[115px] leading-[normal] relative shrink-0 text-[110px] text-white w-[577px] whitespace-pre-wrap">PlanWise</p>
      <Group />
      <Frame1 />
      <Group1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[36px] items-center left-[16px] top-[89px]">
      <ArrowLeft />
      <Frame2 />
      <div className="h-[796px] relative rounded-[15px] shrink-0 w-[378px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15px] size-full" src={imgImage17} />
      </div>
    </div>
  );
}

export default function PedroProjectPageExpandedPlanWise() {
  return (
    <div className="bg-black relative size-full" data-name="Pedro - Project Page Expanded - PlanWise">
      <Frame6 />
      <Frame5 />
      <Frame4 />
    </div>
  );
}