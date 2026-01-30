import { useEffect, useRef } from 'react';

/**
 * Sharp Lines Animation Component
 * Creates an animated geometric pattern with sharp lines moving across the screen
 * Colors: White lines with occasional light blue accent (#67caff)
 * 
 * To use: Replace <BinaryRain /> with <SharpLinesAnimation /> in Home.tsx
 */
export function SharpLinesAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Line configuration
    interface Line {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      speed: number;
      angle: number;
      length: number;
      color: string;
    }

    const lines: Line[] = [];
    const numLines = 15;

    // Initialize lines
    for (let i = 0; i < numLines; i++) {
      const angle = Math.random() * Math.PI * 2;
      const length = 100 + Math.random() * 200;
      const isBlue = Math.random() > 0.8;
      
      lines.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: 0,
        y2: 0,
        speed: 1 + Math.random() * 2,
        angle: angle,
        length: length,
        color: isBlue ? '#67caff' : '#ffffff'
      });
    }

    // Animation function
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update lines
      lines.forEach(line => {
        // Calculate end point based on angle and length
        line.x2 = line.x1 + Math.cos(line.angle) * line.length;
        line.y2 = line.y1 + Math.sin(line.angle) * line.length;

        // Draw line
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();

        // Update position - move in direction of angle
        line.x1 += Math.cos(line.angle) * line.speed;
        line.y1 += Math.sin(line.angle) * line.speed;

        // Wrap around screen
        if (line.x1 < -line.length) line.x1 = canvas.width + line.length;
        if (line.x1 > canvas.width + line.length) line.x1 = -line.length;
        if (line.y1 < -line.length) line.y1 = canvas.height + line.length;
        if (line.y1 > canvas.height + line.length) line.y1 = -line.length;
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.25 }}
    />
  );
}
