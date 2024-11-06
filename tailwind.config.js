/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'orange': '#f79824',
        'lighorange' : '#fdca40',
        'lightblue' : '#33a1fd',
        'blue' : '#2176ff',
        'footer' : '#31393c',
        'orange2' : '#fbb247'
      }
    },
  },
  plugins: [],
}

