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
      primary: "#0F4C5C",
      secondary: "#1F6F78",
      accent: "#7D8F69", 
      cream: "#E8D8C3", 
    },
  },
  },
  plugins: [],
};
