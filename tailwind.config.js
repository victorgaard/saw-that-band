/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')]
};
