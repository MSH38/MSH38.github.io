import { useEffect } from 'react';

export const useCursorGlow = () => {
  useEffect(() => {
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;

      cursorX += dx * 0.1;
      cursorY += dy * 0.1;

      cursorGlow.style.left = cursorX + 'px';
      cursorGlow.style.top = cursorY + 'px';

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursorGlow);
    };
  }, []);
};
