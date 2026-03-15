import { useEffect, useRef } from 'react';

/**
 * Waveform Animation Component
 * Creates smooth, flowing sine waves that pulse and shift
 * Minimal and mesmerizing - perfect for maintaining attention on text-heavy pages
 * Colors: Light blue (#67caff) waves with varying opacity
 */
export function WaveformAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Wave configuration
    interface Wave {
      amplitude: number;
      frequency: number;
      phase: number;
      speed: number;
      yOffset: number;
      color: string;
      lineWidth: number;
    }

    const waves: Wave[] = [
      {
        amplitude: 30,
        frequency: 0.015,
        phase: 0,
        speed: 0.02,
        yOffset: 0.3,
        color: 'rgba(103, 202, 255, 0.3)',
        lineWidth: 2
      },
      {
        amplitude: 40,
        frequency: 0.012,
        phase: Math.PI / 3,
        speed: 0.015,
        yOffset: 0.5,
        color: 'rgba(103, 202, 255, 0.2)',
        lineWidth: 2.5
      },
      {
        amplitude: 25,
        frequency: 0.018,
        phase: Math.PI / 2,
        speed: 0.025,
        yOffset: 0.7,
        color: 'rgba(103, 202, 255, 0.25)',
        lineWidth: 1.5
      },
      {
        amplitude: 35,
        frequency: 0.01,
        phase: Math.PI,
        speed: 0.018,
        yOffset: 0.4,
        color: 'rgba(255, 255, 255, 0.15)',
        lineWidth: 1.8
      }
    ];

    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each wave
      waves.forEach(wave => {
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.lineWidth;
        ctx.beginPath();

        // Draw smooth sine wave
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = 
            canvas.height * wave.yOffset + 
            Math.sin(x * wave.frequency + wave.phase) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + wave.phase * 1.5) * (wave.amplitude * 0.5);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();

        // Update phase for animation
        wave.phase += wave.speed;
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
      className="w-full h-full"
    />
  );
}
