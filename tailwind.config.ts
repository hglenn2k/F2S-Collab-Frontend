import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base system colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // Warm oranges/browns
        orange: {
          900: "#772A0C",  // Deepest brown
          700: "#CB4D14",  // Rust orange
          500: "#F6A20E",  // Golden orange
          100: "#FCF5B1",  // Pale yellow
        },
        
        // Purple spectrum
        purple: {
          950: "#6A2980", // Added darker purple for text
          900: "#8D36AA",  // Deep purple
          700: "#CD69C9",  // Medium purple
          500: "#F086CE",  // Light purple
          300: "#FCACE9",  // Pale purple
        },
        
        // Green spectrum
        green: {
          900: "#002605",  // Forest green
          700: "#034718",  // Deep green
          500: "#53A978",  // Medium green
          300: "#85C88D",  // Light green
        },

        // Cyan/slate colors
        cyan: {
          700: "#264653",  // Dark slate cyan
          300: "#93D8CC",  // Light cyan
        },

        // Light gray background
        gray: {
          50: "#F9FAFB",  // 10% gray for subtle backgrounds
        }
      }
    },
  },
  plugins: [],
} satisfies Config;