/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas:    '#030711',
        'canvas-2': '#0c1124',
        'canvas-3': '#111930',
        border:    '#1d2744',
        'border-2': '#2a3558',
        muted:     '#94a3b8',
        body:      '#cbd5e1',
        heading:   '#f1f5f9',
        cyan: {
          DEFAULT: '#8b5cf6',
          dim:     '#7c3aed',
          glow:    'rgba(139,92,246,0.22)',
        },
        amber: {
          DEFAULT: '#06b6d4',
          dim:     '#0891b2',
          glow:    'rgba(6,182,212,0.15)',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans:    ['"Plus Jakarta Sans"', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        card:        '0 4px 24px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3)',
        glow:        '0 0 40px rgba(139,92,246,0.18), 0 0 80px rgba(139,92,246,0.08)',
        'glow-teal': '0 0 40px rgba(6,182,212,0.12)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.07)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)',
        'hero-gradient':
          'radial-gradient(ellipse at 60% 0%, rgba(139,92,246,0.2) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(6,182,212,0.1) 0%, transparent 45%), linear-gradient(180deg, #030711 0%, #060d1f 100%)',
        'violet-gradient':
          'linear-gradient(-90deg, #8b5cf6 0%, rgba(60,51,80,0) 100%)',
        'green-pink-gradient':
          'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(139,92,246,0.6) 0%, rgba(6,182,212,0.4) 100%)',
      },
      backgroundSize: {
        'grid-sm': '24px 24px',
        'grid-md': '40px 40px',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        twinkle:      'twinkle 3s ease-in-out infinite',
        float:        'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite reverse',
        shimmer:      'shimmer 2s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        twinkle:   { '0%,100%': { opacity: '0.15' }, '50%': { opacity: '0.9' } },
        float:     { '0%,100%': { transform: 'translateY(0px) scale(1)' }, '50%': { transform: 'translateY(-20px) scale(1.02)' } },
        shimmer:   { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        glowPulse: { '0%,100%': { opacity: '0.5' }, '50%': { opacity: '1' } },
      },
    },
  },
  plugins: [],
}
