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
        primary : "#f0a900",
      },

      fontFamily: {
        main: ["Creepster", "system-ui"],
        second: ["Londrina Solid", "sans-serif"],   
        third:["Chakra Petch", 'sans-serif']
      },

    },
  },
  plugins: [],
};
export default config;
