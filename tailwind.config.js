/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#FF9B50',
        'secondary': '#E25E3E',
      },
      colors: {
        'primary': '#E25E3E',
        'secondary': '#FF9B50',
      },
    },
  },
  plugins: [],
}