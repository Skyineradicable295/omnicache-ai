/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: { preflight: false },
  content: ['./src/**/*.{js,jsx,ts,tsx}', './docs/**/*.{md,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: '#06d6f0',
        'primary-dark': '#04a8be',
        'primary-light': '#33e0f5',
        gold: '#f59e0b',
        'gold-dark': '#d97706',
        'gold-light': '#fbbf24',
        'oc-bg': '#0a0f1e',
        'oc-surface': '#111827',
        'oc-surface2': '#1a2234',
        'oc-border': '#1e3a5f',
        'oc-border2': '#2d4a70',
        'oc-text': '#e2e8f0',
        'oc-muted': '#94a3b8',
        'oc-code': '#060d1a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #06d6f0, #f59e0b)',
        'brand-gradient-hover': 'linear-gradient(135deg, #04a8be, #d97706)',
        'hero-glow': 'radial-gradient(circle at 30% 50%, rgba(6,214,240,0.12) 0%, transparent 55%), radial-gradient(circle at 70% 50%, rgba(245,158,11,0.08) 0%, transparent 55%)',
        'card-shine': 'linear-gradient(135deg, rgba(6,214,240,0.05), rgba(245,158,11,0.03))',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(6,214,240,0.2)',
        'glow-gold': '0 0 30px rgba(245,158,11,0.15)',
        'card': '0 4px 20px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 32px rgba(6,214,240,0.2)',
      },
      borderRadius: {
        pill: '100px',
      },
    },
  },
  plugins: [],
};
