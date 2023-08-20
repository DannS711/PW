/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'round-md': '0px 0px 15px rgba(0, 0, 0, 0.2)',
        'round-lg': '0px 0px 25px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
