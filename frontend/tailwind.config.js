/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {

      colors: {
        'custom-green': '#B1CFB1',
        'custom-gray': '#3E3E3E',
      }

    },
  },
  plugins: [],
}

