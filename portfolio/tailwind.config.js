/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}", // changed src to app so configures all paths necessary
    "./public/index.html",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
