# Portfolio Design Overhaul & Replication Guide

This document serves as a reference for creating and maintaining the high-fidelity, "cyber-minimalist" aesthetic used in the project pages (like PlanWise, PomoTime, etc.).

## 1. Core Principles

- **Cyber-Minimalism**: High contrast, stark typography, and subtle futuristic accents (like dashed underlines and progressive card reveals). Avoid overusing neon glows.
- **Typography**: 
  - **Headers**: `IBM Plex Mono` (using the dotted `0` character for visual flair, e.g., `PR0BLEM STATEMENT`).
  - **Subheaders**: `Orbitron` or `JetBrains Mono`.
  - **Body text**: `JetBrains Mono`.
- **Layout**: Keep containers aligned to 90-degree geometry. Avoid slanted or randomly rotated containers to preserve a structured, engineered look.

## 2. Interactive Elements

### Hover Effects (Headers)
Instead of relying on Tailwind's `group-hover` (which can face generation issues based on build configurations), use explicit React state:

```tsx
const [hoveredSection, setHoveredSection] = useState<string | null>(null);

const getSectionHoverStyle = (section: string) => ({
  opacity: hoveredSection === section ? 1 : 0,
});

// Usage
<div 
  onMouseEnter={() => setHoveredSection('problem')}
  onMouseLeave={() => setHoveredSection(null)}
  className="relative cursor-default inline-block"
>
  <p className="font-['IBM_Plex_Mono'] text-[52px]">PR0BLEM STATEMENT</p>
  <span 
    className="absolute bottom-[-4px] left-0 right-0 border-b-[4px] border-dashed border-white transition-opacity duration-300 pointer-events-none z-10" 
    style={getSectionHoverStyle('problem')} 
  />
</div>
```

### Progressive Card Reveals
Cards in the "Process" sections use a permanent, progressive reveal mechanic. They start obscured (blurred/darkened) and are permanently revealed upon clicking.

```tsx
const [revealedCards, setRevealedCards] = useState<number[]>([0]); // 0 is revealed by default

const isRevealed = (index: number) => revealedCards.includes(index);
const handleReveal = (index: number) => {
  if (!revealedCards.includes(index)) {
    setRevealedCards([...revealedCards, index]);
  }
};

// Usage
<div 
  className={`h-[320px] max-w-[280px] transition-all duration-500 ease-in-out cursor-pointer ${isRevealed(index) ? 'scale-105 shadow-[0px_0px_30px_2px_rgba(255,255,255,0.4)] z-10' : 'scale-95 shadow-none z-0'}`}
  onClick={() => handleReveal(index)}
>
  <div className={`transition-all duration-500 ${isRevealed(index) ? 'blur-none brightness-100' : 'blur-[2px] brightness-50'}`}>
    {/* Card Content */}
  </div>
</div>
```

## 3. Creating a New Project Page

To add a new project, follow these steps:
1. **Duplicate** an existing project file (e.g., `src/app/components/projects/PlanWise.tsx`).
2. **Rename** the exported component.
3. **Update the sequence label** (the massive number text, e.g., `01`, `02`).
4. **Update the Hero Image**: Import the specific hero image from `src/assets/` and replace the primary `img src`.
5. **Update textual content**: Replace the placeholder text for the Design and Development process cards.
6. **Register the Route**: In `src/app/App.tsx`, import your new component and add a conditional rendering block in the `PageTransition` based on the `currentProject` state.
