import { useEffect, useRef } from 'react';

/**
 * Black Hole Animation Component
 * Creates a pulsing circular vortex effect with particle trails
 * Colors: White particles with light blue accent (#67caff)
 * 
 * To use: Replace <BinaryRain /> with <BlackHoleAnimation /> in Home.tsx
 */
export function BlackHoleAnimation() {
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

    // Black hole center
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Particle configuration
    interface Particle {
      angle: number;
      distance: number;
      speed: number;
      size: number;
      color: string;
      opacity: number;
    }

    const particles: Particle[] = [];
    const numParticles = 100;

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      const isBlue = Math.random() > 0.85;
      particles.push({
        angle: Math.random() * Math.PI * 2,
        distance: Math.random() * Math.max(canvas.width, canvas.height),
        speed: 0.5 + Math.random() * 1.5,
        size: 1 + Math.random() * 2,
        color: isBlue ? '#67caff' : '#ffffff',
        opacity: Math.random()
      });
    }

    // Spiral trail effect
    const trails: { x: number; y: number; opacity: number }[] = [];

    // Animation function
    const animate = () => {
      // Clear canvas with fade effect for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw central black hole glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 150);
      gradient.addColorStop(0, 'rgba(103, 202, 255, 0.1)');
      gradient.addColorStop(0.5, 'rgba(103, 202, 255, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        // Calculate position based on angle and distance
        const x = centerX + Math.cos(particle.angle) * particle.distance;
        const y = centerY + Math.sin(particle.angle) * particle.distance;

        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        // Add trail point
        trails.push({ x, y, opacity: 0.3 });

        // Update particle - spiral inward
        particle.angle += 0.02; // Rotation speed
        particle.distance -= particle.speed; // Move inward

        // Fade in as it gets closer
        particle.opacity = Math.min(1, (1 - particle.distance / Math.max(canvas.width, canvas.height)) * 2);

        // Reset particle when it reaches center
        if (particle.distance < 10) {
          particle.distance = Math.max(canvas.width, canvas.height);
          particle.angle = Math.random() * Math.PI * 2;
          particle.opacity = 0;
        }
      });

      // Draw and fade trails
      trails.forEach((trail, index) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${trail.opacity})`;
        ctx.fillRect(trail.x, trail.y, 1, 1);
        
        // Fade out trail
        trail.opacity -= 0.01;
        
        // Remove dead trails
        if (trail.opacity <= 0) {
          trails.splice(index, 1);
        }
      });

      // Limit trail array size for performance
      if (trails.length > 500) {
        trails.splice(0, trails.length - 500);
      }

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
      style={{ opacity: 0.4 }}
    />
  );
}
