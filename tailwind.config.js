/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'bebas': ['Bebas'],
        'gobold': ['Gobold']
      },
      colors: {
        'primary': '#18A36E',
        'accent': '#FEFFFA'
      }
    },
  },
  plugins: [],
}
