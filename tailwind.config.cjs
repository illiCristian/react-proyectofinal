/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      sm: "700px",
      // => @media (min-width: 640px) { ... }
    },
    extend: {},
  },
  plugins: [require("./node_modules/flowbite/plugin")],
  darkMode: "class",
};
/* /node_modules/flowbite/plugin.js */
