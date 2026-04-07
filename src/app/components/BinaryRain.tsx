import { useEffect, useRef, memo } from 'react';

// Memoized to prevent unnecessary re-renders when parent state changes
export const BinaryRain = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const scrollPosRef = useRef(0);
  const scrollVelocityRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // Optimization: no alpha channel needed if filling whole background
    if (!ctx) return;

    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
      }
    };

    setup();
    
    // Efficient resize handler
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(setup, 200);
    };
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const velocity = Math.abs(currentScroll - scrollPosRef.current);
      scrollVelocityRef.current = Math.min(velocity, 50); // Cap velocity
      scrollPosRef.current = currentScroll;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const chars = '01';
    let lastTime = 0;
    const fps = 30; // Throttling to 30fps for a "cinematic" look and lower CPU usage
    const interval = 1000 / fps;

    const draw = (timestamp: number) => {
      // Throttle to target FPS
      if (timestamp - lastTime < interval) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastTime = timestamp;

      // Optimization: Using fillRect with low opacity for the trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Determinate color
        const isBlue = Math.random() > 0.98; // Slightly fewer blue ones for better contrast
        ctx.fillStyle = isBlue ? '#67caff' : '#ffffff';

        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Apply scroll-based boost
        const velocityBoost = scrollVelocityRef.current * 0.2;
        drops[i] += 1 + velocityBoost;
        
        // Decay velocity
        scrollVelocityRef.current *= 0.95;
      }
      animationRef.current = requestAnimationFrame(draw);
    };

    // Only animate if the tab is visible to save resources
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationRef.current);
      } else {
        animationRef.current = requestAnimationFrame(draw);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.25 }} // Slightly lower opacity for better content readability
    />
  );
});

BinaryRain.displayName = 'BinaryRain';
