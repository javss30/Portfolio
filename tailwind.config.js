module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        gold: {
          300: "#f6d977",
          400: "#eec756",
          500: "#d4af37",
          600: "#b89428",
          glow: "rgba(212, 175, 55, 0.35)",
        },
        dark: {
          950: "#0a0a0c",
          900: "#111216",
          850: "#16181f",
          800: "#1d2029",
          700: "#282c39",
          600: "#3c4153",
        },
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(212, 175, 55, 0.25)",
        "gold-glow-lg": "0 0 45px rgba(212, 175, 55, 0.4)",
        "card-3d": "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};