/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue : '#4fa1ad',
        dakBlue : '#142e42',
        inputBoxColor : '#00212C',
        textColor : '#303030',
        grayColor : '#e6e6e6',
    },
  },
  plugins: [],
}
}