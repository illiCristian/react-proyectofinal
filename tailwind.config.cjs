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
      md: "780px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [require("./node_modules/flowbite/plugin")],
  darkMode: "class",
};
/* /node_modules/flowbite/plugin.js */
