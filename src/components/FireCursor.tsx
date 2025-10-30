import { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * FireCursor component - displays a warm fire-colored cursor trail effect
 * Only active in light theme and respects prefers-reduced-motion
 */
export const FireCursor = () => {
  const { theme } = useTheme();
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Only activate in light theme
    if (theme !== 'light') return;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const animate = () => {
      // Smooth following with easing
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      cursorX += dx * 0.15;
      cursorY += dy * 0.15;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(animate);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    animate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);
  
  // Don't render in dark theme
  if (theme !== 'light') return null;
  
  return (
    <div
      ref={cursorRef}
      className="fire-cursor pointer-events-none fixed w-96 h-96 rounded-full z-[9999] -translate-x-1/2 -translate-y-1/2 opacity-40 blur-3xl transition-opacity duration-300"
      style={{
        background: 'radial-gradient(circle, rgba(255,200,50,0.6) 0%, rgba(255,120,30,0.4) 30%, rgba(255,70,20,0.2) 60%, transparent 80%)'
      }}
      aria-hidden="true"
    />
  );
};
