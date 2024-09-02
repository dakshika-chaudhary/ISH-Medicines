/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors:{
        "blue":"#0000FF",
        "red" : "#FF0000",
      }
    },
  },
  plugins: [],
}