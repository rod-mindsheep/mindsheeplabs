/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  safelist: [
    'glitch',
    'stars', 'stars2', 'stars3',
    'animated-border-container',
    'animated-border-card',
    'node', 'node-glow', 'node-connector', 'orbit', 'node-pulse',
  ],
  plugins: [],
};
