/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        Primary : {
          500: "#3563E9",
        },
        text_gray: "rgba(19, 19, 19, 0.60",
        color_ads1: "#54A6FF",
        gray: "#90A3BF",
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'ellipse': "url('/background-ellipse.svg')",
        'rectangle': "url('/background-rectangle.svg')",
      }
    },
  },
  plugins: [],
}