/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#030303",
        lightGray: "#e0e0e0",
        partyPink: "#ff2a70",
        snowWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};
