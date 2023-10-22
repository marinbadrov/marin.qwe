/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent": "#004643",
        "background": "#FFFFFF",
        "primary": "#F9BC60",
        "secondary": "#ABD1C6",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-ibm-plex-mono)"],
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "2px 3px var(--tw-shadow-color)",
      },
      boxShadow: {
        DEFAULT: "4px 4px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};

