import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        card: "#111111",
        accent: "#d4af37",
        accentMuted: "#8b6f47",
        border: "#222222"
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", ...fontFamily.serif],
        inter: ["var(--font-inter)", ...fontFamily.sans]
      },
      boxShadow: {
        gold: "0 20px 60px rgba(212, 175, 55, 0.12)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
