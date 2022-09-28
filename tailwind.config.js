/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        main: '#3b82f6',
        default: {
          light: '#1f2937',
          dark: '#d4d4d8',
        },
        primary: {
          light: '#fff',
          dark: '#1f2937',
        },

        secondary: {
          light: '#e5e7eb',
          dark: '#0f172a',
        },
      },
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
