/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        special: ["riesling", "sans-serif"],
      },
      backgroundImage: {
        logo: "url('../images/logo.svg')",
      },
      spacing: {
        minus9999: "-9999px",
      },
    },
  },
  plugins: [],
};
