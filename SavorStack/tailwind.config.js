/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
  extend: {
    colors: {
      primary: "#5C3A21",     // dark espresso brown
      secondary: "#D12424",   // saddle tan
      accent: "#98673A",      // rustic red
      cream: "#F5E6D3",       // parchment
    },
  },
},
  plugins: [],
};
