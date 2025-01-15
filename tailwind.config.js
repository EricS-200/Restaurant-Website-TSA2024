/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["open-sans", "sans-serif"],
        mistrully: ["mistrully", "sans-serif"],
        dmSerif: ["dm-serif-display", "serif"],
        kenao: ["kenao", "sans-serif"],
        fspDemo: ["fsp-demo", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "spin-scale": {
          "0%": { transform: "rotate(0deg) scale(1.25)" },
          "100%": { transform: "rotate(360deg) scale(1.25)" },
        },
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "spin-scale": "spin-scale 5s linear infinite",
      },
    },
  },
  plugins: [],
};
