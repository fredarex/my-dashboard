/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#7F56D9',
        'kdarkpurple':'#53389E',
        'klightpurple':'#6941C6',
        'kgrayprimary':'#F4EBFF',
        'kdarkgray':'#667085',
        'kblack1':'#101828',
        'kblack2':'#344054'
        
        
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
      fontFamily: {
        Inter: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
 }