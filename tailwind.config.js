/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        "headingColor": "#eee",
        "paragraphColor": "#b4b4b4",
        "hoverparagraph": "#BDBDBD"
      },
      backgroundColor: {
        "btnColor": "#212121",
        "btnHover": "#757575"
      }
    },
  },
  plugins: [],
};
