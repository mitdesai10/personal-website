/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas:    '#050816',
        'canvas-2': '#151030',
        'canvas-3': '#100d25',
        border:    '#1a1745',
        'border-2': '#2d2b55',
        muted:     '#b8b6d0',
        body:      '#e0ddf0',
        heading:   '#ffffff',
        cyan: {
          DEFAULT: '#804dee',
          dim:     '#6930c3',
          glow:    'rgba(128,77,238,0.2)',
        },
        amber: {
          DEFAULT: '#00cea8',
          dim:     '#009e82',
          glow:    'rgba(0,206,168,0.15)',
        },
      },
      fontFamily: {
        display: ['"Google Sans"', 'sans-serif'],
        sans:    ['"IBM Plex Sans"', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        card:   '0px 35px 120px -15px #211e35',
        glow:   '0 0 30px rgba(128,77,238,0.15)',
        'glow-teal': '0 0 30px rgba(0,206,168,0.1)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(128,77,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(128,77,238,0.06) 1px, transparent 1px)',
        'hero-gradient':
          'radial-gradient(ellipse at 50% 0%, rgba(128,77,238,0.25) 0%, transparent 65%), linear-gradient(180deg, #050816 0%, #080c1f 100%)',
        'violet-gradient':
          'linear-gradient(-90deg, #804dee 0%, rgba(60,51,80,0) 100%)',
        'green-pink-gradient':
          'linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)',
      },
      backgroundSize: {
        'grid-sm': '24px 24px',
        'grid-md': '40px 40px',
      },
      animation: {
        'fade-up':   'fadeUp 0.5s ease forwards',
        'fade-in':   'fadeIn 0.4s ease forwards',
        twinkle:     'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:   { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:   { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        twinkle:  { '0%,100%': { opacity: '0.2' }, '50%': { opacity: '1' } },
      },
    },
  },
  plugins: [],
}
