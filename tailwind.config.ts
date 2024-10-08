import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      listStyleType: {
          checkmark: 'url("/tick.png")',
        
      },fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        Epilogue: ['Epilogue', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
