/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "menu-b": "#0000001a",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      flex: {
        0: "0 0 100%",
        2: "2 2 0%",
        3: "3 3 0%",
      },
      screens: {
        "2xl": { max: "1045px" },
        xl: { max: "1020px" },
        lg: { max: "925px" },
        md: { max: "750px" },
        sm: { max: "500px" },
      },
      transitionDuration: {
        0.5: "0.5s",
        0.2: "0.2s",
      },
      width: {
        0.2: "0.2rem",
      },
      boxShadow: {
        submenu: "-2px 2px 70px -25px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        "slide-left": {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0%)" },
        },
        "slide-right": {
          "0%": { opacity: 1, transform: "translateX(0%)" },
          "100%": { opacity: 0, transform: "translateX(100%)" },
        },
      },
      animation: {
        "slide-left": "slide-left 0.5s ease forwards",
        "slide-right": "slide-right 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
