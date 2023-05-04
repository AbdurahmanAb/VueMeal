/* tailwind.config.js */

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        card: "38rem",
      },
      width: {
        card: "25rem",
      },
      backgroundColor: {
        card: "white",
      },

      borderRaduis: {
        card: "55px",
      },
      margin: {
        card: "2rem",
      },
    },
    container: {
      padding: "2rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
