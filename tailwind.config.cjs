/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Poppins: 'Poppins',
    },
    extend: {
      colors: {
        transparentBlack: 'rgba(0,0,0,0.85)',
        sunsetOrange: '#FF4F5A',
        Tangaroa: '#1A2E35',
        Gainsboro: '#E1E1E1',
        greenTeal: '#22C55E',
        Gray: '#6B7498',
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
}
