/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aqua: {
          light: '#7CD5F5', // Celeste
          DEFAULT: '#40C9E7', // Turquesa
          dark: '#2B95B3',
        },
        pink: {
          light: '#FFD4E5',
          DEFAULT: '#FF9EC3', // Rosado
          dark: '#FF6BA3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};