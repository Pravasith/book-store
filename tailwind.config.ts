import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "theme-blue": "#372BD3",
        "theme-yellow": "#FAFF00",
        "theme-lime-yellow": "#E3FF3A",
        "theme-violet": "#A376FD",
        "theme-green": "#68FAAD",
        "theme-red": "#FF0202",
        "theme-gray": {
          100: "#E5E5EA",
          200: "#494949",
          300: "#343434",
        },
      },

      screens: {
        mobile: "375px",
        tablet: "744px",
        laptop: "1025px",
        desktop: "1280px",
        "full-hd": "1550px",
        "true-hd": "1920px",
        tv: "2560px",
      },
    },
  },
  plugins: [],
};

export default config;
