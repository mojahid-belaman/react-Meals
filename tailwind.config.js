/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8a2b06",
        secondary: "#3f3f3f",
        "secondary-dark": "#383838",
        thirdly: "#4d1601",
        fourthly: "#2c0d00",
      },
      spacing: {
        100: "25.6rem",
      },
      keyframes: {
        meal: {
          from: {
            transform: "translateY(3rem)",
          },
          to: {
            transform: "translateY(0rem)",
          },
        },
        bump: {
          '0%': {
            transform: "scale(1)"
          },
          '10%': {
            transform: "scale(0.9)"
          },
          '30%': {
            transform: 'scale(1.1)'
          },
          '50%': {
            transform: 'scale(1.15)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        meal: "meal 1s ease-out forwards",
        bump: "bump 300ms ease-out"
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
