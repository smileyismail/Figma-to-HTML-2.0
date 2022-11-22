/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#4ba87d",
      },
      backgroundImage: {
        "video-image": "url('/src/assets/VIDEOBG.png')",
        "slanted-green": "url('/src/assets/SlantedGreenBG.png')",
      },
      fontFamily: {
        heading: ["Playfair"],
        text: ["Raleway"],
      },
    },
  },
  plugins: [],
};
