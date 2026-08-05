import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepgreen: {
          50: "#eef4f1",
          100: "#d6e5dd",
          200: "#adcabb",
          300: "#84af99",
          400: "#5b9477",
          500: "#3d7a5c",
          600: "#2e6249",
          700: "#25503c",
          800: "#1b3d2d",
          900: "#122a1f",
          950: "#0a1a13",
        },
        gold: {
          50: "#fbf6e9",
          100: "#f4e6bf",
          200: "#ecd696",
          300: "#e4c56d",
          400: "#dab44a",
          500: "#cda349",
          600: "#b89137",
          700: "#8f702b",
          800: "#664f1f",
          900: "#3d2f13",
        },
        charcoal: {
          50: "#f4f4f4",
          100: "#e2e2e2",
          200: "#c6c6c6",
          300: "#a3a3a3",
          400: "#7a7a7a",
          500: "#5c5c5c",
          600: "#454545",
          700: "#333333",
          800: "#242424",
          900: "#181818",
          950: "#0d0d0d",
        },
        offwhite: "#faf7f1",
        beige: "#f2ece1",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        architect: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

export default config;
