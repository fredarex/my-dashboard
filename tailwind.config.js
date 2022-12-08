/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#2D2D2D',
        'kdark1':'#27272E',
        'kdark2':'#292A2E',
        'kdark3':'#121212',
        'kdark4':'#212121',
        'kgray1':'#F9FAFB',
        'kgray2':'#425466'
      },
      fontSize:{
        'kbodymain':'63px',
        'kbody1':'56px',
        'kbody2':'48px',
        'kbody3':'30px',
        'kbody4':'24px',
        'kbody5':'16px',
        'kbody6':'14px',
        'kbody7':'12px'

      },
      // fontFamily: {
      //   Eina01: ['Eina01-Regular', ...defaultTheme.fontFamily.sans]
      // }
    }
  },
  plugins: [],
 }