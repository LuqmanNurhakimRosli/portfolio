/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all your files
  ],
  theme: {
    extend: {
      colors: {
        grayCustom: "rgb(109, 104, 104)", // Define your custom color
      },
    },
  },
  plugins: [],
};
