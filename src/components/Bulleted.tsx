import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const toBullets = (raw: string): string[] => {
  if (!raw) return [];
  const asText = raw.replace(/<br\s*\/?>/gi, '\n');
  return asText
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s.replace(/^-+\s*/, ''));
};

type BulletedProps = {
  text: string;
  dense?: boolean;
  hoverExpand?: boolean;
  previewCount?: number;
  className?: string;
  transitionMs?: number;
  contrast?: 'muted' | 'normal' | 'strong';
  weight?: 'normal' | 'medium' | 'semibold';
  animateRead?: boolean;
  readSpeedMs?: number;
};

export const Bulleted: React.FC<BulletedProps> = ({
  text,
  dense = false,
  hoverExpand = true,
  previewCount = 3,
  className = '',
  transitionMs = 320,
  contrast = 'strong',     
  weight = 'semibold',    
  animateRead = true,      
  readSpeedMs = 2000,      
}) => {
  const { isArabic } = useLanguage();

  const bullets = useMemo(() => toBullets(text), [text]);
  const showFold = bullets.length > previewCount;

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  const [expanded, setExpanded] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState<number | null>(null);
  const [fullHeight, setFullHeight] = useState<number | null>(null);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const measure = () => {
      if (!listRef.current) return;

      const full = listRef.current.scrollHeight;

      const items = Array.from(listRef.current.children) as HTMLElement[];
      const slice = items.slice(0, previewCount);
      let collapsed = 0;
      slice.forEach((el, i) => {
        const styles = getComputedStyle(el);
        const mb = parseFloat(styles.marginBottom || '0');
        const mt = parseFloat(styles.marginTop || '0');
        collapsed += el.offsetHeight + (i === 0 ? mt : 0) + mb;
      });

      setFullHeight(full);
      setCollapsedHeight(Math.ceil(collapsed));
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (listRef.current) ro.observe(listRef.current);
    return () => ro.disconnect();
  }, [bullets, previewCount]);

  // hover (ديسكتوب) + click لقفل/فتح
  const canHover = hoverExpand && showFold;
  const onEnter = () => canHover && setExpanded(true);
  const onLeave = () => canHover && setExpanded(false);
  const onToggle = () => setExpanded((e) => !e);

  const maxH =
    showFold && collapsedHeight != null && fullHeight != null
      ? expanded
        ? fullHeight
        : collapsedHeight
      : undefined;

  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    if (!animateRead || prefersReducedMotion || bullets.length === 0) return;
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % bullets.length);
    }, Math.max(500, readSpeedMs));
    return () => clearInterval(id);
  }, [animateRead, prefersReducedMotion, bullets.length, readSpeedMs]);

  const contrastClass =
    contrast === 'muted'
      ? 'text-muted-foreground'
      : contrast === 'normal'
      ? 'text-foreground/90'
      : 'text-foreground';

  const weightClass =
    weight === 'normal' ? 'font-normal' : weight === 'medium' ? 'font-medium' : 'font-semibold';

  return (
    <div
      ref={wrapperRef}
      className={`group relative ${className}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        style={{
          maxHeight: maxH,
          transition: `max-height ${transitionMs}ms cubic-bezier(.4,0,.2,1)`,
          overflow: 'hidden',
        }}
        className={
          showFold && !expanded
            ? 'relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-10 after:bg-gradient-to-t after:from-background after:to-transparent'
            : ''
        }
      >
        <ul
          ref={listRef}
          className={[
            contrastClass,
            weightClass,
            'text-start',
            dense ? 'space-y-1 leading-[1.45]' : 'space-y-1.5 leading-[1.55]',
            isArabic ? 'rtl' : 'ltr',
          ].join(' ')}
        >
          {bullets.map((item, i) => {
            const isActive = animateRead && !prefersReducedMotion && i === activeIdx;
            return (
              <li
                key={i}
                className={[
                  'relative ps-5 transition-colors duration-300',
                  "before:content-['-'] before:absolute ltr:before:left-0 rtl:before:right-0 before:top-[.1rem]",
                  'hover:text-foreground dark:hover:text-white',
                  isActive
                    ? 'text-primary font-semibold before:text-primary dark:hover:text-white'
                    : 'before:text-muted-foreground',
                ].join(' ')}
                style={{ transitionProperty: 'color, background, transform' }}
              >
                <span
                  className={[
                    'inline-block rounded px-1',
                    isActive ? 'bg-primary/8 dark:bg-primary/10' : '',
                    'transition-colors duration-300',
                  ].join(' ')}
                >
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {showFold && (
        <div className="mt-3">
          <button
            type="button"
            onClick={onToggle}
            className="
              inline-flex items-center gap-1 text-sm font-medium
              text-primary hover:underline focus:outline-none
              focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md px-1
              select-none
            "
            aria-expanded={expanded}
          >
            <span className="sm:hidden">{expanded ? 'Show less' : 'Show more'}</span>
            <span className="hidden sm:inline">
              {expanded ? 'Hover to collapse • Click to lock' : 'Hover to expand • Click to lock'}
            </span>
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${
                expanded ? 'rotate-180' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
