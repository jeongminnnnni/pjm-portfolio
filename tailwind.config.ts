import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ['"Pretendard"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
