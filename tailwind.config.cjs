/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'myprimary': '#47D7AC',
        'myblack': '#11111F',
        'mygray': '#818190',
        'mygraylight': '#B4B4B4',
        'mywhite': '#FFFFFF'
      },
      fontFamily: {
        'sen': ['Sen', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },

  },
  plugins: [],
}
