/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        catamaran:["Catamaran", " sans-serif"],
        Krona: ["Krona One", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Lora: ["Lora", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [require("daisyui")],
}

