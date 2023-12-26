/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#4523C2',
        purple: '#6664F3',
        'light-purple': '#EEF2FE',
      },
      spacing: {
        100: '400px',
        120: '500px',
      },
    },
  },
  plugins: [],
};
