/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05080f',
          panel: '#0a1020',
          cyan: '#22d3ee',
          'cyan-soft': '#67e8f9',
          red: '#ff4d6d',
          orange: '#ff8c42',
          blue: '#38bdf8',
          purple: '#a855f7',
          green: '#34d399',
          amber: '#fbbf24',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'fade-in-up': {
          from: { opacity: 0, transform: 'translateY(12px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'score-fill': {
          from: { strokeDashoffset: 283 },
          to: { strokeDashoffset: 62 },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 18s linear infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
