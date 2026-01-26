/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4A574',
        dark: '#1A1A1A',
        cream: '#F5F5DC',
        rust: '#B7410E',
        yellowColor: '#FDB813',
        limeColor: '#D4FF00',
        mainColor: '#6B8E23',
        fourthColor: '#8B4513',
        darkColorLight: '#2C2C2C',
        paragraphColor: '#808080',
        tillColor: '#F5F5F5',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        fontSuse: ['SUSE', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}