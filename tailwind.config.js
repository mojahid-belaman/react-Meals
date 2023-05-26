/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8a2b06",
        secondary: "#3f3f3f",
        "secondary-dark": "#383838",
        thirdly: '#4d1601', 
        fourthly: '#2c0d00', 
      },
      spacing: {
        100: '25.6rem'
      }
    },
  },
  plugins: [],
}

