/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif',
      },
      colors: {
        yellow: {
          500: '#FFE457',
          800: '#FFB715',
        },
        blue: {
          50: '#F5F5F7',
          100:'#D3E2E5',
          200: '#F5F8FA',
          500: '#8FA7B2',
          700: '#5C8599',
          800: '#4D6F80'
        },
        orange: {
          500: '#EA592A',
        },
        red: {
          400: '#FF669D',
          500: '#FF6678',
        },
        green: {
          700: '#3BD689'
        },
      }
    },
  },
  plugins: [
  ],
}
