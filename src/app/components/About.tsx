import imgImg41471 from "../../assets/f81364dc4ff17c4cea2646c495ff1c25a41a4b16.png";
import imgImage20 from "../../assets/9ee74dcfcc6488fd2e2277c9819a4fb3fcd3ef23.png";
import { useRef, memo } from 'react';
import { motion } from 'framer-motion';

export const About = memo(() => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  const textVariants: any = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };


  return (
    <div className="h-full py-12 px-4 md:px-8 relative overflow-y-auto flex flex-col items-center justify-start pt-[120px]">

      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-[30px] mb-12">
          <motion.div 
            className="h-[clamp(200px,25vh,309px)] w-[clamp(160px,20vh,252px)] shrink-0 overflow-hidden rounded-lg shadow-2xl"
            variants={itemVariants}
          >
            <img 
              alt="Pedro" 
              className="h-[127.92%] w-[117.76%] object-cover -ml-[4.98%] -mt-[13.96%]" 
              src={imgImg41471} 
              loading="lazy"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-[40px] max-w-[618px]"
            variants={textVariants}
          >
            <h2 className="font-['Orbitron',sans-serif] text-[clamp(28px,4vw,48px)] text-white">
              Hi! I'm Pedro,
            </h2>
            <div className="font-['Exo_2',sans-serif] text-[clamp(18px,2.5vw,32px)] text-gray-300">
              <p className="mb-0">A second year computer science</p>
              <p>student at UC Berkeley with a passion for software engineering. I primarily develop web-apps and games</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="flex-1 flex flex-col gap-[20px]"
            variants={textVariants}
          >
            <h3 className="font-['Orbitron',sans-serif] text-[clamp(28px,4vw,48px)] text-white">
              My journey into software:
            </h3>
            <div className="font-['Exo_2',sans-serif] text-[clamp(18px,2.5vw,32px)] text-gray-300 max-w-[800px]">
              <p className="mb-0">
                From dragging blocks in Scratch to presenting game demos, my start was defined by a simple love for making things move on a screen. That drive hasn't changed, but my toolkit has expanded.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                Today, I'm focused on architecting adaptive frameworks in Python, building REST APIs with Spring Boot, and designing procedural generation algorithms. Checkout my GitHub to see what I'm working on today.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="h-[clamp(180px,22vh,270px)] w-[clamp(260px,30vh,390px)] shrink-0 overflow-hidden rounded-lg shadow-2xl"
            variants={itemVariants}
          >
            <img 
              alt="Coding" 
              className="h-[314.1%] w-[387.11%] object-cover -ml-[278.89%] -mt-[9.62%]" 
              src={imgImage20} 
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
});

About.displayName = 'About';