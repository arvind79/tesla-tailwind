/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        singleDay: ["Single Day", "sans-serif"],
        gotham: ["Gotham Book", "sans-serif"],
      },
    },
  },

  plugins: [],
};
