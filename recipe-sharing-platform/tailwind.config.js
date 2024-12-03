/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Look for class names in all JS/JSX/TS/TSX files in the src folder
    './public/index.html', // Also look in the index.html file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
