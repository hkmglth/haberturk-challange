/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-red':'#CF161C',
        'cream':'#FFFAF0',
        'dark-gray':'#333333'
      },
      fontSize:{
        '18xl': ['12.625rem', {
          lineHeight: '13rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
      }
    },

  },
  plugins: [],
}