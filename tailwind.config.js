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

    fontFamily: {
        poppins : ["Merriweather", "serif"],
    },

    keyframes: {
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'fade-up': {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'fade-down': {
        '0%': { opacity: '0', transform: 'translateY(-20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'fade-left': {
        '0%': { opacity: '0', transform: 'translateX(-20px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      'fade-right': {
        '0%': { opacity: '0', transform: 'translateX(20px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.8s ease-out',
      'fade-up': 'fade-up 0.8s ease-in-out',
      'fade-down': 'fade-down 0.8s ease-out',
      'fade-left': 'fade-left 0.8s ease-out',
      'fade-right': 'fade-right 0.8s ease-out',
    },
  },
  plugins: [],
}
}