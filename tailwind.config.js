/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        swim: {
          navy: "#334A7E",
          blue: "#B2C1E6",
        },
      },
      fontFamily: {
        urbanist: "var(--urbanist-font)",
      },
    },
  },
  plugins: [],
};
