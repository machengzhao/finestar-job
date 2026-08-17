/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonCyan: '#22d3ee',
        darkBg: '#0b1120',
        cardBg: '#141e33',
      },
    },
  },
  plugins: [],
}