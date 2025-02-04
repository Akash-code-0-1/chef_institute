import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        cinzel: ['"Cinzel"', "serif"],
        mulish: ['"Mulish"', "sans-serif"],
      },
      colors: {
        'custom-gradient': "linear-gradient(to bottom, #993128 100%, #33100D 100%)", // Add the linear gradient
      },
    },
    boxShadow: {
      custom: '3px 3px 3px 0px rgba(120,0,20,1)',
      second_custom: '3px 3px 0px 0px rgba(170,148,82,1)',
    },
  },
  plugins: [],
} satisfies Config;
