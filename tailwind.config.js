/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        brown: {
          50: '#f8f5f1',
          100: '#e8dfd4',
          200: '#d7c4b0',
          300: '#c1a68b',
          400: '#a68766',
          500: '#8d6e63',
          600: '#735747',
          700: '#5c4438',
          800: '#46332c',
          900: '#2f211d',
        },
      }
    },
  },
  plugins: [],
};