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
        "aviable-freelancing": "/public/images/5.jpg"
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
