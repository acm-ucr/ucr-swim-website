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
          "blue-100": "#A3E4F2",
          "blue-200": "#42A8C7",
          "blue-300": "#098C9E",
          "blue-400": "#09679E",
          yellow: "#FEC93C",
        },
      },
      fontFamily: {
        urbanist: "var(--urbanist-font)",
      },
    },
  },
  plugins: [],
};
