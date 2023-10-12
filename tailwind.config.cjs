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
        'mysilver': '#f3f4f6',
        'mywhite': '#FFFFFF',
        'mywhatsappcolor': '#25D366'
      },
      fontFamily: {
        'sen': ['Sen', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      }
    },

  },
  plugins: [],
}
