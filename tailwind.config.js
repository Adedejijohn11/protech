/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:" #080808", 
        secondary: "#18181c",
        text: "#ffffff",
        hightlight: "#dfe31d",
      },
    },
  },
  plugins: [],
}

