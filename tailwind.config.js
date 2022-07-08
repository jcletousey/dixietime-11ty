/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,html,js}"],
  theme: {
    extend: {
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
