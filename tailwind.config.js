
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        js: "300px", 
        lgg: "980px",
      },
    },
  },
  plugins: [],
}
