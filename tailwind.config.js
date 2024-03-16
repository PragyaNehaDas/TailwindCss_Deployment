/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./builds/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Roboto', sans-serif",
        lato: "'Lato', sans-serif"
      }
    },
  },
  plugins: [],
}

