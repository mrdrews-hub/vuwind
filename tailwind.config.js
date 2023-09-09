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
      backgroundImage: {
        'gradient-primary': 'linear-gradient(0deg, #FF6969 12%, rgba(252, 104, 91, 1) 84%)',
      },
      colors: {
        'primary': '#E25E3E',
        'secondary': '#FF9B50',
      },
    },
  },
  plugins: [],
}