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
        "background": "#FFFFFF",
        "primary": "#F9BC60",
        "secondary": "#D35400",
        "accent": "#D7FF28",
        "nav-bg": "#ABD1C6",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-ibm-plex-mono)"],
      },
    },
  },
  plugins: [],
};

/*
#FAEEE7
#FFC6C7
#FF8BA7

#D7FF28 | #FFC0AD | #E78FB3

#FFFFFF | #67568C | #FF6E6C

*/
