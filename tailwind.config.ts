import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sage-deep": "#5d6e48",
        "sage-mid": "#687951",
        sage: "#99a479",
        gold: "#f2d785",
        "gold-deep": "#e6c25a",
        sand: "#d6cdb0",
        cream: "#fbf8f0",
        "cream-2": "#f3eede",
        ink: "#2c331f",
        "ink-soft": "#5a614c",
        line: "#e4ddc9",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        script: ["var(--font-pinyon)", "cursive"],
      },
      maxWidth: {
        site: "1240px",
        narrow: "880px",
      },
      boxShadow: {
        sm: "0 2px 14px rgba(70, 80, 50, 0.07)",
        DEFAULT: "0 18px 50px -22px rgba(60, 70, 40, 0.32)",
      },
    },
  },
  plugins: [],
};
export default config;
