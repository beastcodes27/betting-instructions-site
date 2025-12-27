/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0a0e27',
          blue: '#1a1f3a',
          green: '#10b981',
          'green-dark': '#059669',
        }
      }
    },
  },
  plugins: [],
}


