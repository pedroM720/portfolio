import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalIntroProps {
  onComplete: () => void;
}

const PM_ASCII = String.raw`
 *              _____                            _____          
 *             /\    \                          /\    \         
 *            /::\    \                        /::\____\        
 *           /::::\    \                      /::::|   |        
 *          /::::::\    \                    /:::::|   |        
 *         /:::/\:::\    \                  /::::::|   |        
 *        /:::/__\:::\    \                /:::/|::|   |        
 *       /::::\   \:::\    \              /:::/ |::|   |        
 *      /::::::\   \:::\    \            /:::/  |::|___|______  
 *     /:::/\:::\   \:::\____\          /:::/   |::::::::\    \ 
 *    /:::/  \:::\   \:::|    |        /:::/    |:::::::::\____\
 *    \::/    \:::\  /:::|____|        \::/    / ~~~~~/:::/    /
 *     \/_____/\:::\/:::/    /          \/____/      /:::/    / 
 *              \::::::/    /                       /:::/    /  
 *               \::::/    /                       /:::/    /   
 *                \::/____/                       /:::/    /    
 *                 ~~                            /:::/    /     
 *                                              /:::/    /      
 *                                             /:::/    /       
 *                                             \::/    /        
 *                                              \/____/         
 *                                                              
`.trim();

const TARGET_TEXT = 'Hello!';
const HEX_CHARS = '0123456789ABCDEF';

type IntroStage = 'wireframe' | 'descrambling' | 'wait-enter' | 'ascii' | 'boom';

export function TerminalIntro({ onComplete }: TerminalIntroProps) {
  const [stage, setStage] = useState<IntroStage>('wireframe');
  const [displayText, setDisplayText] = useState('48656C6C6F21');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Transitions
  useEffect(() => {
    if (stage === 'ascii') {
      const timer = setTimeout(() => {
        setStage('boom');
        setTimeout(onComplete, 1600);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  // Main descrambling animation
  useEffect(() => {
    if (stage !== 'descrambling') return;

    let iterations = 0;
    const maxIterations = TARGET_TEXT.length * 2;

    const interval = setInterval(() => {
      const scrambled = TARGET_TEXT.split('').map((char, index) => {
        if (index < iterations / 2) return char;
        return HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
      }).join('');

      setDisplayText(scrambled);

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(TARGET_TEXT);
        setTimeout(() => setStage('wait-enter'), 400);
      }

      iterations += 0.5;
    }, 70);

    return () => clearInterval(interval);
  }, [stage]);

  // Handle inputs (Keyboard & Touch/Click)
  const handleProceed = useCallback(() => {
    if (stage === 'wait-enter') {
      setStage('ascii');
    }
  }, [stage]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (stage === 'wait-enter' && (e.key === 'Enter' || e.key === ' ')) {
      handleProceed();
    }
  }, [stage, handleProceed]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Ultra-Dense Dynamic Circuit Paths
  const dynamicPaths = useMemo(() => {
    if (dimensions.width === 0) return [];

    const w = dimensions.width;
    const h = dimensions.height;

    // Terminal region (centered)
    const tw = Math.min(w * 0.8, 700);
    const th = 400;
    const tx1 = (w - tw) / 2;
    const tx2 = (w + tw) / 2;
    const ty1 = (h - th) / 2;
    const ty2 = (h + th) / 2;

    const paths: string[] = [];

    const addPath = (start: { x: number, y: number }, steps: { type: 'L', x: number, y: number }[]) => {
      let d = `M ${start.x} ${start.y}`;
      steps.forEach(s => { d += ` L ${s.x} ${s.y}`; });
      paths.push(d);
    };

    // TOP LEFT CLUSTER
    addPath({ x: 0, y: 0 }, [{ type: 'L', x: w * 0.1, y: h * 0.1 }, { type: 'L', x: w * 0.1, y: ty1 - 100 }, { type: 'L', x: tx1, y: ty1 }]);
    addPath({ x: w * 0.05, y: 0 }, [{ type: 'L', x: w * 0.05, y: h * 0.12 }, { type: 'L', x: tx1 - 100, y: ty1 - 100 }, { type: 'L', x: tx1, y: ty1 }]);
    addPath({ x: 0, y: h * 0.05 }, [{ type: 'L', x: w * 0.12, y: h * 0.05 }, { type: 'L', x: tx1 - 150, y: ty1 - 50 }, { type: 'L', x: tx1, y: ty1 + 20 }]);
    addPath({ x: w * 0.15, y: 0 }, [{ type: 'L', x: w * 0.15, y: h * 0.2 }, { type: 'L', x: tx1 - 80, y: ty1 + 80 }, { type: 'L', x: tx1, y: ty1 + 80 }]);
    addPath({ x: 0, y: h * 0.2 }, [{ type: 'L', x: w * 0.1, y: h * 0.2 }, { type: 'L', x: w * 0.2, y: h * 0.3 }, { type: 'L', x: tx1, y: ty1 + 150 }]);

    // TOP RIGHT CLUSTER
    addPath({ x: w, y: 0 }, [{ type: 'L', x: w * 0.9, y: h * 0.1 }, { type: 'L', x: w * 0.9, y: ty1 - 100 }, { type: 'L', x: tx2, y: ty1 }]);
    addPath({ x: w * 0.95, y: 0 }, [{ type: 'L', x: w * 0.95, y: h * 0.12 }, { type: 'L', x: tx2 + 100, y: ty1 - 100 }, { type: 'L', x: tx2, y: ty1 }]);
    addPath({ x: w, y: h * 0.05 }, [{ type: 'L', x: w * 0.88, y: h * 0.05 }, { type: 'L', x: tx2 + 150, y: ty1 - 50 }, { type: 'L', x: tx2, y: ty1 + 20 }]);
    addPath({ x: w * 0.85, y: 0 }, [{ type: 'L', x: w * 0.85, y: h * 0.2 }, { type: 'L', x: tx2 + 80, y: ty1 + 80 }, { type: 'L', x: tx2, y: ty1 + 80 }]);

    // BOTTOM LEFT CLUSTER
    addPath({ x: 0, y: h }, [{ type: 'L', x: w * 0.1, y: h * 0.9 }, { type: 'L', x: w * 0.1, y: ty2 + 100 }, { type: 'L', x: tx1, y: ty2 }]);
    addPath({ x: w * 0.05, y: h }, [{ type: 'L', x: w * 0.05, y: h * 0.88 }, { type: 'L', x: tx1 - 100, y: ty2 + 100 }, { type: 'L', x: tx1, y: ty2 }]);
    addPath({ x: 0, y: h * 0.95 }, [{ type: 'L', x: w * 0.12, y: h * 0.95 }, { type: 'L', x: tx1 - 150, y: ty2 + 50 }, { type: 'L', x: tx1, y: ty2 - 20 }]);
    addPath({ x: w * 0.15, y: h }, [{ type: 'L', x: w * 0.15, y: h * 0.8 }, { type: 'L', x: tx1 - 80, y: ty2 - 80 }, { type: 'L', x: tx1, y: ty2 - 80 }]);

    // BOTTOM RIGHT CLUSTER
    addPath({ x: w, y: h }, [{ type: 'L', x: w * 0.9, y: h * 0.9 }, { type: 'L', x: w * 0.9, y: ty2 + 100 }, { type: 'L', x: tx2, y: ty2 }]);
    addPath({ x: w * 0.95, y: h }, [{ type: 'L', x: w * 0.95, y: h * 0.88 }, { type: 'L', x: tx2 + 100, y: ty2 + 100 }, { type: 'L', x: tx2, y: ty2 }]);
    addPath({ x: w, y: h * 0.95 }, [{ type: 'L', x: w * 0.88, y: h * 0.95 }, { type: 'L', x: tx2 + 150, y: ty2 + 50 }, { type: 'L', x: tx2, y: ty2 - 20 }]);
    addPath({ x: w * 0.85, y: h }, [{ type: 'L', x: w * 0.85, y: h * 0.8 }, { type: 'L', x: tx2 + 80, y: ty2 - 80 }, { type: 'L', x: tx2, y: ty2 - 80 }]);

    // Side/Center Injectors
    for (let i = 0; i < 4; i++) {
      const offset = (i - 1.5) * 50;
      addPath({ x: 0, y: h / 2 + offset }, [{ type: 'L', x: tx1 / 2, y: h / 2 + offset }, { type: 'L', x: tx1, y: h / 2 + offset / 2 }]);
      addPath({ x: w, y: h / 2 + offset }, [{ type: 'L', x: w - tx1 / 2, y: h / 2 + offset }, { type: 'L', x: tx2, y: h / 2 + offset / 2 }]);
    }

    // Filler/Interconnects
    addPath({ x: w / 2, y: 0 }, [{ type: 'L', x: w / 2, y: ty1 }]);
    addPath({ x: w / 2, y: h }, [{ type: 'L', x: w / 2, y: ty2 }]);
    addPath({ x: w * 0.3, y: 0 }, [{ type: 'L', x: tx1, y: ty1 - 100 }]);
    addPath({ x: w * 0.7, y: 0 }, [{ type: 'L', x: tx2, y: ty1 - 100 }]);
    addPath({ x: w * 0.3, y: h }, [{ type: 'L', x: tx1, y: ty2 + 100 }]);
    addPath({ x: w * 0.7, y: h }, [{ type: 'L', x: tx2, y: ty2 + 100 }]);

    return paths;
  }, [dimensions]);

  return (
    <div 
      onClick={handleProceed}
      onTouchStart={handleProceed}
      className={`fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden ${stage === 'wait-enter' ? 'cursor-pointer select-none' : ''}`}
    >
      {/* Dynamic Circuitry */}
      {stage === 'wireframe' && (
        <motion.svg
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          className="absolute inset-0 w-full h-full pointer-events-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <defs>
            <filter id="circuit-glow-ultra">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {dynamicPaths.map((path, i) => (
            <motion.path
              key={i}
              d={path}
              fill="none"
              stroke="white"
              strokeWidth={i % 3 === 0 ? "1.5" : "0.8"}
              filter="url(#circuit-glow-ultra)"
              className="opacity-60"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.8, 0.6] }}
              transition={{
                pathLength: { duration: 2.5, delay: i * 0.02, ease: "easeInOut" },
                opacity: { duration: 0.5, delay: i * 0.02 }
              }}
              onAnimationComplete={() => {
                if (i === dynamicPaths.length - 1) {
                  setTimeout(() => setStage('descrambling'), 300);
                }
              }}
            />
          ))}
        </motion.svg>
      )}

      {/* Terminal Container */}
      {(stage !== 'boom') && (
        <motion.div
          className="relative border border-white/20 p-10 bg-black/98 backdrop-blur-3xl min-w-[320px] sm:min-w-[700px] shadow-[0_0_120px_rgba(255,255,255,0.05)] overflow-hidden"
          animate={{
            borderColor: (stage === 'wireframe' || stage === 'descrambling') ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.2)",
            boxShadow: (stage === 'wireframe' || stage === 'descrambling') ? "0 0 100px rgba(255,255,255,0.2)" : "0 0 20px rgba(255,255,255,0)"
          }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="w-full h-[2px] bg-white/10 absolute top-0"
              animate={{ top: ["0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />
          </div>

          <div className="font-mono text-white flex flex-col gap-8 min-h-[100px] relative z-10">
            {stage === 'wireframe' ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-white/20 text-xs tracking-widest animate-pulse">SYSTEM_IDLE</div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-8"
              >
                <div className="text-[22px] sm:text-[34px] flex flex-col gap-6">
                  {/* Line 1: Welcome/Hex */}
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-500 font-bold">{">"}</span>
                    <span className="tracking-[0.2em]">{displayText}</span>
                    {(stage === 'descrambling' || (stage === 'wait-enter' && !document.hidden)) && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-4 h-12 bg-white"
                      />
                    )}
                  </div>

                  {/* Optional status line */}
                  {(stage === 'wait-enter' || stage === 'ascii') && (
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <span className="text-emerald-500 font-bold">{">"}</span>
                      <span className="text-white/40 text-sm tracking-widest uppercase italic">
                        {stage === 'wait-enter' ? '[ press enter or tap to initialize ]' : '[ initializing system... ]'}
                      </span>
                    </motion.div>
                  )}
                </div>

                {stage === 'ascii' && (
                  <motion.div
                    className="flex flex-col gap-10 mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex gap-4">
                      <span className="text-emerald-500 font-bold mt-1">{">"}</span>
                      <pre className="text-white leading-none overflow-x-auto text-[11px] sm:text-[18px] font-bold">
                        {PM_ASCII}
                      </pre>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>

          <div className="absolute top-2 right-4 text-[9px] text-white/5 font-mono tracking-[0.3em]">
            KERNEL_X64_PRIVATE
          </div>
        </motion.div>
      )}

      {/* ACCESS GRANTED Transition */}
      <AnimatePresence>
        {stage === 'boom' && (
          <motion.div
            className="fixed inset-0 z-[300] bg-black flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="text-white font-mono text-6xl font-black tracking-[0.5em] drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [0.5, 1.1, 1],
                opacity: 1
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              ACCESS_GRANTED
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
