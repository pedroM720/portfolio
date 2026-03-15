# Portfolio Animation Guide

This portfolio website includes several animation options that fit the tech minimal black and white theme with light blue accents.

## 🎬 Landing Page Animations

### 1. **Binary Rain Animation** (Currently Active)
**Location:** `/src/app/components/BinaryRain.tsx`

A Matrix-style digital rain effect with falling binary digits (0s and 1s).
- Colors: White text with occasional light blue (#67caff) accents
- Opacity: 30% for subtle background effect
- Frame rate: ~30 FPS for smooth performance
- Canvas-based for optimal performance

**Currently used on:** Landing page (Home.tsx)

---

### 2. **Sharp Lines Animation** (Alternative)
**Location:** `/src/app/components/SharpLinesAnimation.tsx`

Geometric lines moving across the screen in various directions.
- Features 15 animated lines with random angles
- Colors: White lines with occasional light blue (#67caff) accents
- Trail effect creates motion blur
- Opacity: 25% for subtle effect

**To activate:** In `/src/app/components/Home.tsx`, replace:
```tsx
import { BinaryRain } from '@/app/components/BinaryRain';
// ... in render:
<BinaryRain />
```

**With:**
```tsx
import { SharpLinesAnimation } from '@/app/components/SharpLinesAnimation';
// ... in render:
<SharpLinesAnimation />
```

---

### 3. **Black Hole Animation** (Alternative)
**Location:** `/src/app/components/BlackHoleAnimation.tsx`

A spiral vortex effect with particles being pulled toward the center.
- 100 particles spiraling inward
- Central light blue glow (#67caff)
- Particle trails create spiral effect
- Opacity: 40% for medium visibility

**To activate:** In `/src/app/components/Home.tsx`, replace:
```tsx
import { BinaryRain } from '@/app/components/BinaryRain';
// ... in render:
<BinaryRain />
```

**With:**
```tsx
import { BlackHoleAnimation } from '@/app/components/BlackHoleAnimation';
// ... in render:
<BlackHoleAnimation />
```

---

## 📖 About Page Animations

### 1. **Network Node Animation** (Currently Active)
**Location:** `/src/app/components/NetworkNodeAnimation.tsx`

Interconnected nodes with pulsing connections, perfect for keeping attention on text-heavy pages.
- 8 floating nodes with smooth movement
- Dynamic connections between nearby nodes
- Pulsing glow effects on nodes
- Colors: White nodes with light blue connections
- Positioned on the right side of the page

**Currently used on:** About page (About.tsx)

---

### 2. **Floating Code Animation** (Alternative)
**Location:** `/src/app/components/FloatingCodeAnimation.tsx`

Code snippets floating upward like bubbles.
- 12 code lines drifting up
- Realistic code syntax (React/TypeScript)
- Fade in at bottom, fade out at top
- Colors: White and light blue code text

**To activate:** In `/src/app/components/About.tsx`, replace:
```tsx
import { NetworkNodeAnimation } from '@/app/components/NetworkNodeAnimation';
// ... in render:
<NetworkNodeAnimation />
```

**With:**
```tsx
import { FloatingCodeAnimation } from '@/app/components/FloatingCodeAnimation';
// ... in render:
<FloatingCodeAnimation />
```

---

### 3. **Waveform Animation** (Alternative)
**Location:** `/src/app/components/WaveformAnimation.tsx`

Smooth flowing sine waves that pulse and shift.
- 4 layered waves with different frequencies
- Minimal and calming aesthetic
- Continuous smooth motion
- Colors: Light blue and white semi-transparent waves

**To activate:** In `/src/app/components/About.tsx`, replace:
```tsx
import { NetworkNodeAnimation } from '@/app/components/NetworkNodeAnimation';
// ... in render:
<NetworkNodeAnimation />
```

**With:**
```tsx
import { WaveformAnimation } from '@/app/components/WaveformAnimation';
// ... in render:
<WaveformAnimation />
```

---

## 🔄 Page Transition Animations

### **Current: Fade & Slide Transition**
**Location:** `/src/app/components/PageTransition.tsx`

Smooth fade in/out with subtle vertical slide motion.
- Duration: 0.5 seconds
- Easing: Custom cubic bezier for smooth feel
- Direction: Slides up on enter, down on exit

**Currently active in:** App.tsx (all page transitions)

---

### **Alternative 1: Sharp Wipe Transition**
**Location:** `/src/app/components/PageTransition.tsx` (SharpWipeTransition component)

Geometric wipe effect from left to right using clip-path.
- Duration: 0.6 seconds
- Creates a "curtain" reveal effect
- Fits the sharp lines theme

**To activate:** In `/src/app/App.tsx`, replace all instances of:
```tsx
import { PageTransition } from '@/app/components/PageTransition';
// ... in render:
<PageTransition key="home">
```

**With:**
```tsx
import { SharpWipeTransition } from '@/app/components/PageTransition';
// ... in render:
<SharpWipeTransition key="home">
```

---

### **Alternative 2: Scale Fade Transition**
**Location:** `/src/app/components/PageTransition.tsx` (ScaleFadeTransition component)

Zoom effect combined with fade.
- Duration: 0.4 seconds (faster)
- Scales from 95% to 100% on enter
- Scales to 105% on exit

**To activate:** In `/src/app/App.tsx`, replace all instances of:
```tsx
import { PageTransition } from '@/app/components/PageTransition';
// ... in render:
<PageTransition key="home">
```

**With:**
```tsx
import { ScaleFadeTransition } from '@/app/components/PageTransition';
// ... in render:
<ScaleFadeTransition key="home">
```

---

## 🎨 Customization Guide

### Adjusting Animation Opacity
Each animation component has an inline style with opacity. To adjust:

```tsx
<canvas
  ref={canvasRef}
  className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
  style={{ opacity: 0.3 }} // Change this value (0.0 to 1.0)
/>
```

### Changing Animation Speed

**Binary Rain:**
```tsx
const intervalId = setInterval(draw, 33); // Change 33 to higher number for slower
```

**Sharp Lines:**
```tsx
speed: 1 + Math.random() * 2, // Change multiplier for faster/slower
```

**Black Hole:**
```tsx
speed: 0.5 + Math.random() * 1.5, // Adjust for particle speed
particle.angle += 0.02; // Adjust for rotation speed
```

### Changing Colors

All animations use these color values:
- Primary: `'#ffffff'` (white)
- Accent: `'#67caff'` (light blue)

Search and replace these hex values in the animation files to change colors.

### Adding More Particles/Elements

**Binary Rain:**
```tsx
const columns = Math.floor(canvas.width / fontSize); // Increase fontSize to reduce columns
```

**Sharp Lines:**
```tsx
const numLines = 15; // Increase for more lines
```

**Black Hole:**
```tsx
const numParticles = 100; // Increase for denser effect
```

---

## 🛠 Creating Custom Animations

To create your own animation:

1. Create a new file in `/src/app/components/YourAnimation.tsx`
2. Use this template:

```tsx
import { useEffect, useRef } from 'react';

export function YourAnimation() {
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

    // Your animation logic here
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw your animation frame here
      
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
      style={{ opacity: 0.3 }}
    />
  );
}
```

3. Import and use in Home.tsx or any other page component

---

## 📝 Performance Tips

- Canvas animations are more performant than DOM-based animations for complex effects
- Keep particle counts reasonable (100-200 max for smooth 60fps)
- Use `requestAnimationFrame` for DOM animations, `setInterval` is fine for simpler effects
- Adjust opacity to reduce visual complexity without sacrificing performance
- Test on lower-end devices if performance is a concern

---

## 🎯 Current Active Animations

✅ **Landing Page (Home):** Binary Rain Animation  
✅ **About Page:** Network Node Animation (right side)  
✅ **Page Transitions:** Fade & Slide Transition (all pages)  
✅ **Hover Effects:** White glow on buttons and navigation (via Tailwind transitions)  

---

**Need help?** All animation files are heavily commented to explain how they work!