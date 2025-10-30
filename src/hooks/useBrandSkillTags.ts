// src/hooks/useBrandSkillTags.ts
import { useEffect } from 'react';

const BRAND: Record<string, string> = {
  PHP: '#777BB4',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  React: '#61DAFB',
  'Next.js': '#000000',
  Vite: '#646CFF',
  Tailwind: '#38BDF8',
  TailwindCSS: '#38BDF8',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Redux: '#764ABC',
  'React Query': '#FF4154',
  'TanStack Query': '#FF4154',
  'Node.js': '#339933',
  Express: '#000000',
  Laravel: '#FF2D20',
  Python: '#3776AB',
  Go: '#00ADD8',
  'C++': '#00599C',
  MySQL: '#4479A1',
  PostgreSQL: '#336791',
  SQLite: '#003B57',
  MongoDB: '#47A248',
  Redis: '#DC382D',
  Docker: '#2496ED',
  Nginx: '#009639',
  Git: '#F05032',
  GitHub: '#000000',
  Linux: '#FCC624',
  WordPress: '#21759B',
  WooCommerce: '#96588A',
  Shopify: '#7AB55C',
  Stripe: '#635BFF',
  PayPal: '#00457C',
  'Amazon Pay': '#FF9900',
  Paymob: '#00A3E0',
  Fawry: '#F7931E',
  'Tap Payment': '#4A90E2',
  'REST API': '#10B981',
  'RESTful API': '#10B981',
  GraphQL: '#E10098',
  'Clean Architecture': '#4F46E5',
};

function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  const n = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const int = parseInt(n, 16);
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}

function rgba(hex: string, alpha: number) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r},${g},${b},${alpha})`;
}

function getReadableTextColor(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 180 ? '#0f172a' /* slate-900 */ : '#ffffff';
}

/**
 * يلوّن أي عناصر .skill-tag (النص داخل العنصر هو اسم التقنية)
 * @param root اختيارى: عنصر جذر نلوّن تحته فقط
 */
export function useBrandSkillTags(root?: HTMLElement | null) {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const html = document.documentElement;
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = html.classList.contains('dark') || prefersDark;

    const getCssVar = (name: string, fallback: number) => {
      const v = getComputedStyle(html).getPropertyValue(name).trim();
      const parsed = parseFloat(v);
      return Number.isFinite(parsed) ? parsed : fallback;
    };

    const bgAlpha = isDark
      ? getCssVar('--skill-bg-alpha-dark', 0.24)
      : getCssVar('--skill-bg-alpha-light', 0.16);
    const borderAlpha = getCssVar('--skill-border-alpha', 0.42);

    const scope: ParentNode = root ?? document;

    const nodes = scope.querySelectorAll<HTMLElement>('.skill-tag');
    nodes.forEach(el => {
      const name = (el.textContent || '').trim();
      const hex = BRAND[name] ?? '#334155'; // fallback slate-700
      el.style.backgroundColor = rgba(hex, bgAlpha);
      el.style.borderColor = rgba(hex, borderAlpha);
      el.style.borderWidth = '1px';
      el.style.borderStyle = 'solid';
      el.style.color = getReadableTextColor(hex);
    });
  }, [root]);
}
