/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        livewire: {
          red: '#d9232d',
          darkRed: '#b01821',
          lightRed: '#ffebee',
          accent: '#ff4d4f',
          dark: '#1e293b',
          navy: '#0f172a',
          slate: '#334155',
          gold: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
