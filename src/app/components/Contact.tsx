import { useState, memo } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";

export const Contact = memo(() => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const getGlowStyle = (btnId: string) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    filter: 'blur(16px)',
    transform: 'scale(1.2)',
    zIndex: 0,
    borderRadius: 'inherit',
    opacity: hoveredButton === btnId ? 1 : 0,
    transition: 'opacity 300ms ease-in-out'
  });

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 pt-[100px] flex items-center">
      <motion.div 
        className="max-w-6xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section - Socials */}
          <div className="flex flex-col gap-[57px] items-center">
            <motion.h2 
              className="font-['Orbitron',sans-serif] text-[64px] text-center text-white"
              variants={itemVariants}
            >
              Send a message
            </motion.h2>
            
            <motion.h3 
              className="font-['Exo_2',sans-serif] text-[40px] text-center text-gray-300"
              variants={itemVariants}
            >
              Socials
            </motion.h3>

            {/* Social Links */}
            <div className="flex gap-[67px] items-center">
              <motion.a 
                href="https://github.com/pedroM720" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block shrink-0 rounded-full p-6 border-[3px] border-white hover:bg-white/10 transition-all group"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredButton('github')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <div className="relative z-10">
                  <Github className="w-[100px] h-[100px] text-white" strokeWidth={1.5} />
                </div>
                <span 
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={getGlowStyle('github')}
                />
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/pedro7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block shrink-0 rounded-full p-6 border-[3px] border-white hover:bg-white/10 transition-all group"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredButton('linkedin')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <div className="relative z-10">
                  <Linkedin className="w-[100px] h-[100px] text-white" strokeWidth={1.5} />
                </div>
                <span 
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={getGlowStyle('linkedin')}
                />
              </motion.a>
            </div>

            {/* Divider */}
            <motion.div 
              className="w-full h-[2px] bg-white/30" 
              variants={itemVariants}
            />
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex flex-col gap-[42px]">
            <motion.div className="relative" variants={itemVariants}>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b-2 border-white/50 py-4 font-['Exo_2',sans-serif] text-[32px] text-white placeholder-[#a4a4a4] outline-none focus:border-blue-400 focus:border-white transition-all"
              />
            </motion.div>

            <motion.div className="relative" variants={itemVariants}>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-transparent border-b-2 border-white/50 py-4 font-['Exo_2',sans-serif] text-[32px] text-white placeholder-[#a4a4a4] outline-none focus:border-blue-400 focus:border-white transition-all resize-none"
              />
            </motion.div>

            <motion.button 
              className="relative self-start border border-white rounded-[15px] px-12 py-4 font-['Exo_2',sans-serif] text-[40px] text-white hover:bg-white/10 transition-colors group overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHoveredButton('send')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span className="relative z-10">Send</span>
              <span 
                className="absolute inset-0 pointer-events-none"
                style={getGlowStyle('send')}
              />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

Contact.displayName = 'Contact';