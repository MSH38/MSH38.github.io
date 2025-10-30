// Brand colors for technology badges with readable text colors
export const techBrandColors: Record<string, { bg: string; text: string; border?: string }> = {
  // Frontend
  'React': { bg: 'bg-[#61DAFB]', text: 'text-slate-900' },
  'TypeScript': { bg: 'bg-[#3178C6]', text: 'text-white' },
  'JavaScript': { bg: 'bg-[#F7DF1E]', text: 'text-slate-900' },
  'Vite': { bg: 'bg-[#646CFF]', text: 'text-white' },
  'Next.js': { bg: 'bg-slate-900', text: 'text-white', border: 'border border-slate-700' },
  'Tailwind': { bg: 'bg-[#38BDF8]', text: 'text-slate-900' },
  'TailwindCSS': { bg: 'bg-[#38BDF8]', text: 'text-slate-900' },
  'Alpine.js': { bg: 'bg-[#77C1D2]', text: 'text-slate-900' },
  'HTML': { bg: 'bg-[#E34F26]', text: 'text-white' },
  'CSS': { bg: 'bg-[#1572B6]', text: 'text-white' },
  'Shadcn/ui': { bg: 'bg-slate-900', text: 'text-white', border: 'border border-slate-700' },
  'Radix UI': { bg: 'bg-[#161618]', text: 'text-white', border: 'border border-slate-700' },
  'shadcn/ui': { bg: 'bg-slate-900', text: 'text-white', border: 'border border-slate-700' },
  
  // State Management & Data Fetching
  'React Query': { bg: 'bg-[#FF4154]', text: 'text-white' },
  'TanStack Query': { bg: 'bg-[#FF4154]', text: 'text-white' },
  'Redux': { bg: 'bg-[#764ABC]', text: 'text-white' },
  
  // Backend
  'Node.js': { bg: 'bg-[#339933]', text: 'text-white' },
  'Express': { bg: 'bg-slate-900', text: 'text-white', border: 'border border-slate-700' },
  'Laravel': { bg: 'bg-[#FF2D20]', text: 'text-white' },
  'PHP': { bg: 'bg-[#777BB4]', text: 'text-white' },
  'Go': { bg: 'bg-[#00ADD8]', text: 'text-white' },
  'Python': { bg: 'bg-[#3776AB]', text: 'text-white' },
  'C++': { bg: 'bg-[#00599C]', text: 'text-white' },
  
  // Databases
  'MySQL': { bg: 'bg-[#4479A1]', text: 'text-white' },
  'PostgreSQL': { bg: 'bg-[#336791]', text: 'text-white' },
  'SQLite': { bg: 'bg-[#003B57]', text: 'text-white' },
  'MongoDB': { bg: 'bg-[#47A248]', text: 'text-white' },
  'Redis': { bg: 'bg-[#DC382D]', text: 'text-white' },
  
  // DevOps & Tools
  'Docker': { bg: 'bg-[#2496ED]', text: 'text-white' },
  'Nginx': { bg: 'bg-[#009639]', text: 'text-white' },
  'Git': { bg: 'bg-[#F05032]', text: 'text-white' },
  'GitHub': { bg: 'bg-slate-900', text: 'text-white', border: 'border border-slate-700' },
  'Linux': { bg: 'bg-[#FCC624]', text: 'text-slate-900' },
  
  // Payment & Integration Services
  'Stripe': { bg: 'bg-[#635BFF]', text: 'text-white' },
  'PayPal': { bg: 'bg-[#00457C]', text: 'text-white' },
  'Amazon Pay': { bg: 'bg-[#FF9900]', text: 'text-slate-900' },
  'Paymob': { bg: 'bg-[#00A3E0]', text: 'text-white' },
  'Fawry': { bg: 'bg-[#F7931E]', text: 'text-slate-900' },
  'Tap Payment': { bg: 'bg-[#4A90E2]', text: 'text-white' },
  
  // CMS & E-commerce
  'WordPress': { bg: 'bg-[#21759B]', text: 'text-white' },
  'WooCommerce': { bg: 'bg-[#96588A]', text: 'text-white' },
  'Shopify': { bg: 'bg-[#7AB55C]', text: 'text-white' },
  
  // API & Architecture
  'REST API': { bg: 'bg-emerald-600', text: 'text-white' },
  'RESTful API': { bg: 'bg-emerald-600', text: 'text-white' },
  'GraphQL': { bg: 'bg-[#E10098]', text: 'text-white' },
  'Clean Architecture': { bg: 'bg-indigo-600', text: 'text-white' },
  
  // Default fallback
  'default': { bg: 'bg-slate-800', text: 'text-white', border: 'border border-slate-700' }
};

export const getTechColors = (tech: string): { bg: string; text: string; border?: string } => {
  return techBrandColors[tech] || techBrandColors['default'];
};
