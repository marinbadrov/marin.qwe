/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text": "#004643",
        "background": "#ABD1C6",
        "primary": "#F9BC60",
        "secondary": "#D35400",
        "accent": "#D7FF28",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-ibm-plex-mono)"],
      },
    },
  },
  plugins: [],
};
