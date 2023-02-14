/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      bebas: ["Bebas Neue", "cursive"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#EB2F06",
        "primary-dark": "#9F0A0A",
        black: "#000",
        dark: "#222222",
        gray: "#0007",
        "gray-light": "#f5f5f5",
      },
      keyframes: {
        flash: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        flash: "flash 1s linear infinite ",
      },
    },
  },
  plugins: [],
};
