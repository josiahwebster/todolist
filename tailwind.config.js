/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,jsx}',
    './index.html'
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      }
    },
    gridTemplateColumns: {
      '70/30': '70% 30%',
    },
  },
  plugins: [],
};
