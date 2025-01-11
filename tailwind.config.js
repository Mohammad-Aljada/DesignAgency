/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        "primary":"#20B15A",
        "secondary":"#D7F5DC",
      },
      screens: {
        "2md":"960px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },


    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui')
  ],
}
