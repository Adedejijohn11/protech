/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #080808",
        secondary: "#18181c",
        text: "#ffffff",
        hightlight: "#dfe31d",
      },
      screens: {
        xs: "320px", // extra small
        sm: "375px", // small
        smd: "425px", // small-medium
        // md: "768px", // medium
        // lg: "1024px", // large
        // xl: "1440px", // extra large
      },
    },
  },
  plugins: [],
};
