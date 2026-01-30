import { useEffect, useRef } from 'react';

/**
 * Network Node Animation Component
 * Creates an animated network of interconnected nodes with pulsing connections
 * Perfect for keeping user attention on content-heavy pages
 * Colors: White nodes with light blue (#67caff) connections
 */
export function NetworkNodeAnimation() {
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

    // Node configuration
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulsePhase: number;
    }

    const nodes: Node[] = [];
    const numNodes = 8;
    const connectionDistance = 200;
    const nodeSpeed = 0.3;

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * nodeSpeed,
        vy: (Math.random() - 0.5) * nodeSpeed,
        radius: 4 + Math.random() * 4,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    // Animation loop
    let animationFrame = 0;
    const animate = () => {
      animationFrame++;
      
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Update pulse phase
        node.pulsePhase += 0.02;

        // Draw connections to nearby nodes
        nodes.forEach((otherNode, j) => {
          if (i >= j) return; // Avoid drawing same connection twice

          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Calculate opacity based on distance (closer = more opaque)
            const opacity = 1 - (distance / connectionDistance);
            
            // Pulsing effect using sine wave
            const pulse = (Math.sin(node.pulsePhase) + 1) / 2; // 0 to 1
            const finalOpacity = opacity * 0.3 * (0.5 + pulse * 0.5);

            // Draw connection line
            ctx.strokeStyle = `rgba(103, 202, 255, ${finalOpacity})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });

        // Draw node with glow effect
        const pulse = (Math.sin(node.pulsePhase) + 1) / 2;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * (2 + pulse)
        );
        gradient.addColorStop(0, `rgba(103, 202, 255, ${0.5 + pulse * 0.3})`);
        gradient.addColorStop(0.5, `rgba(103, 202, 255, ${0.2 + pulse * 0.2})`);
        gradient.addColorStop(1, 'rgba(103, 202, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (2 + pulse), 0, Math.PI * 2);
        ctx.fill();

        // Inner node (white core)
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + pulse * 0.2})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Inner glow
        ctx.fillStyle = `rgba(103, 202, 255, ${0.4 + pulse * 0.3})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.6, 0, Math.PI * 2);
        ctx.fill();
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
