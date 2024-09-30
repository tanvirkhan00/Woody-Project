/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
    },
    extend: {
      colors: {
        tillColor:'#008080',
        primaryColorLight:'#010d78',
        yellowColor:'#DFFF00',
        paragraphColor:'#c0c0c0',
        whiteColor:'#fff',
        blackColor:'#000',
        greenColor:'#007936',
        redColor:'#cc3433',
        darkColor:'#000',
        darkColorLight:'#171717',
        limeColor:'#00FF00',
        mainColor:'#222831',
        secondColor:'#393E46',
        thirdColor:'#00ADB5',
        fourthColor:'#EEEEEE',
      },
    },
    container:{
      center:true,
      padding: {
        DEFAULT:'1rem',
        sm: '1.5rem',
      }
    },
    fontFamily:{
      fontSuse: ["SUSE", 'sans-serif'],
      fontProtest: ["Protest Guerrilla", 'sans-serif'],
      fontLobster: ["Lobster", 'sans-serif'],
      fontBebas: ["Bebas Neue", 'sans-serif']
    }
  },
  plugins: [],
}