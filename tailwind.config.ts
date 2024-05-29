import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Judson: ["Judson", "serif"],
        Jacques_Francois: ["Jacques Francois", "serif"],
        Karla: ["Karla", "sans-serif"],
        "Kaushan-Script": ["Kaushan Script", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
