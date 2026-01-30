import imgImg41471 from "../../assets/f81364dc4ff17c4cea2646c495ff1c25a41a4b16.png";
import imgImage20 from "../../assets/9ee74dcfcc6488fd2e2277c9819a4fb3fcd3ef23.png";
import { NetworkNodeAnimation } from '@/app/components/NetworkNodeAnimation';

export function About() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8 pt-[100px] relative">
      {/* Network Animation on Right Side */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 w-[400px] h-[500px] pointer-events-none opacity-40">
        <NetworkNodeAnimation />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-[45px] mb-16">
          <div className="h-[309px] w-[252px] shrink-0 overflow-hidden">
            <img 
              alt="Pedro" 
              className="h-[127.92%] w-[117.76%] object-cover -ml-[4.98%] -mt-[13.96%]" 
              src={imgImg41471} 
            />
          </div>
          
          <div className="flex flex-col gap-[40px] max-w-[618px]">
            <h2 className="font-['Orbitron',sans-serif] text-[48px]">
              Hi! I'm Pedro,
            </h2>
            <div className="font-['Exo_2',sans-serif] text-[32px]">
              <p className="mb-0">A second year computer science</p>
              <p>student at UC Berkeley with a passion for software engineering. I primarily develop web-apps and games</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1 flex flex-col gap-[40px]">
            <h3 className="font-['Orbitron',sans-serif] text-[48px]">
              My journey into software:
            </h3>
            <div className="font-['Exo_2',sans-serif] text-[32px] max-w-[800px]">
              <p className="mb-0">
                From dragging blocks in Scratch to presenting game demos, my start was defined by a simple love for making things move on a screen. That drive hasn't changed, but my toolkit has expanded.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                Today, I'm focused on architecting adaptive frameworks in Python, building REST APIs with Spring Boot, and designing procedural generation algorithms. Checkout my GitHub to see what I'm working on today.
              </p>
            </div>
          </div>
          
          <div className="h-[270px] w-[390px] shrink-0 overflow-hidden">
            <img 
              alt="Coding" 
              className="h-[314.1%] w-[387.11%] object-cover -ml-[278.89%] -mt-[9.62%]" 
              src={imgImage20} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}