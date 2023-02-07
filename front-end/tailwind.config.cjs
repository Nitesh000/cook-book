/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        one: "#86A3B8",
        two: "#E8D2A6",
        three: "#F48484",
        four: "#F55050",
      },
    },
  },
  plugins: [],
};
