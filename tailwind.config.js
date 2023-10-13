/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5D5FEF",
        secondary: "#FFFEFF",
      },
      screens: {
        xxs: "260px",
        xs: "350px",
      },
      animation: {
        popIn: "popIn 200ms ease-in",
        popOut: "popOut 200ms ease-out",
      },
      keyframes: {
        popIn: {
          "0%": {
            transform: "scale(.9)",
          },
          "70%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        popOut: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
