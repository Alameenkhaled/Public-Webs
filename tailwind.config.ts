import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1152d4",
        "background-light": "#F5F5F3",
        "background-dark": "#1C1C1C",
        accent: {
          DEFAULT: "#A38A6C",
          hover: "#8F765B",
        },
        "text-light": "#2D2D2D",
        "text-dark": "#E5E5E5",
        "text-subtle-light": "#718096",
        "text-subtle-dark": "#a0aec0",
        "surface-light": "#ffffff",
        "surface-dark": "#2d3748",
        "border-light": "#EAEAEA",
        "border-dark": "#2D2D2D",
      },
      fontFamily: {
        display: ["var(--font-playfair-display)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-cormorant-garamond)", "serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeInScaleUp: {
          "0%": { opacity: "0", transform: "scale(1)" },
          "100%": { opacity: "1", transform: "scale(1.03)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "scale-in": "scaleIn 0.8s ease-out forwards",
        "fade-in-scale-up": "fadeInScaleUp 1.5s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
export default config;
