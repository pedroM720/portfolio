import { useEffect, useRef } from 'react';

/**
 * Floating Code Animation Component
 * Displays floating lines of code snippets drifting upward
 * Perfect for tech-themed pages to maintain visual interest
 * Colors: White and light blue code syntax
 */
export function FloatingCodeAnimation() {
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

    // Code snippets to display
    const codeSnippets = [
      'const app = () => {}',
      'function render()',
      'import React',
      'export default',
      'async/await',
      'return <div>',
      '{ useState }',
      'map((item) =>',
      'onClick={handle}',
      '.then(data =>',
      'className=',
      'useEffect(() =>',
      'interface Props',
      'type Page =',
      'const [state]',
    ];

    interface CodeLine {
      text: string;
      x: number;
      y: number;
      speed: number;
      opacity: number;
      fontSize: number;
      color: string;
    }

    const codeLines: CodeLine[] = [];
    const numLines = 12;

    // Initialize code lines
    for (let i = 0; i < numLines; i++) {
      const isBlue = Math.random() > 0.6;
      codeLines.push({
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        speed: 0.2 + Math.random() * 0.4,
        opacity: 0,
        fontSize: 12 + Math.random() * 4,
        color: isBlue ? '#67caff' : '#ffffff'
      });
    }

    // Animation function
    const animate = () => {
      // Clear with fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw code lines
      codeLines.forEach(line => {
        // Move upward
        line.y -= line.speed;

        // Fade in at bottom, fade out at top
        if (line.y > canvas.height - 150) {
          line.opacity = Math.min(1, line.opacity + 0.02);
        } else if (line.y < 150) {
          line.opacity = Math.max(0, line.opacity - 0.02);
        } else {
          line.opacity = Math.min(1, line.opacity + 0.02);
        }

        // Reset when off screen
        if (line.y < -50) {
          line.y = canvas.height + 50;
          line.x = Math.random() * canvas.width;
          line.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
          line.opacity = 0;
          const isBlue = Math.random() > 0.6;
          line.color = isBlue ? '#67caff' : '#ffffff';
        }

        // Draw code line
        ctx.font = `${line.fontSize}px monospace`;
        ctx.fillStyle = line.color;
        ctx.globalAlpha = line.opacity * 0.6;
        ctx.fillText(line.text, line.x, line.y);
        ctx.globalAlpha = 1;
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
