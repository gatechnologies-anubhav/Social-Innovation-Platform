// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#3B82F6",
          green: "#10B981",
          yellow: "#F59E0B",
        },
        accent: {
          purple: "#8B5CF6",
        },
        warm: {
          white: "#FEFEFE",
        },
      },
      fontFamily: {
        fun: ["Nunito", "Comic Neue", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        bubble: "0 8px 25px -5px rgba(59, 130, 246, 0.3), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
      },
      backgroundImage: {
        "fun-gradient":
          "linear-gradient(135deg, var(--tw-color-primary-blue) 0%, var(--tw-color-primary-green) 50%, var(--tw-color-primary-yellow) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bounce: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "75%": { transform: "rotate(3deg)" },
        },
        rainbow: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        bounceHover: "bounce 0.5s ease-in-out",
        wiggleHover: "wiggle 0.5s ease-in-out",
        rainbow: "rainbow 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
