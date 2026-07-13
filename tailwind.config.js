/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#12141C',
        'canvas-2': '#1A1D28',
        'canvas-3': '#222536',
        border: '#2A2E3F',
        'border-2': '#353A52',
        muted: '#6B7280',
        body: '#C8CCDA',
        heading: '#E8EAF0',
        cyan: {
          DEFAULT: '#5EEAD4',
          dim: '#3DB8A0',
          glow: 'rgba(94,234,212,0.15)',
        },
        amber: {
          DEFAULT: '#F5A623',
          dim: '#C4841A',
          glow: 'rgba(245,166,35,0.15)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(94,234,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '24px 24px',
        'grid-md': '40px 40px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
