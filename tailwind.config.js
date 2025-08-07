/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       body: ['Roboto', 'sans-serif'], // For Google Font example
            custom: ['MyCustomFont', 'sans-serif'],
    },
  },
  plugins: [],
  
}
