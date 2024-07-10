/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        fontFamily: {
          playful: ["Irish Grover", "sans-serif"],
          rest: ["Marmelad","sans-serif"],
        },
        textShadow: {
          sm: '0 1px 2px var(#F1AA39)',
          DEFAULT: '0 2px 4px var(#F1AA39)',
          lg: '0 8px 16px var(#F1AA39)',
        },
    },
  },
  plugins: [],
}

