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
        'dark-red':'#980C10',
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