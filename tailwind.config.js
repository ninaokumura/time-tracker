module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: 'hsl(246, 80%, 60%)',
        'light-red': 'hsl(15, 100%, 70%)', //work
        'soft-blue': 'hsl(195, 74%, 62%)', //play
        'pink-red': 'hsl(348, 100%, 68%)', //study
        'lime-green': 'hsl(145, 58%, 55%)', //exercise
        violet: 'hsl(264, 64%, 52%)', //social
        'soft-orange': 'hsl(43, 84%, 65%)', //self-care
        'very-dark-blue': 'hsl(226, 43%, 10%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'desaturated-blue': 'hsl(235, 45%, 61%)',
        'pale-blue': 'hsl(236, 100%, 87%)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
