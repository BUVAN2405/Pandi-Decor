export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#7317cf",
        "background-light": "#f7f6f8",
        "background-dark": "#191121",
        "surface-dark": "#261e2e"
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
        full: "9999px"
      }
    }
  },
  plugins: [],
}

