/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [`Raleway`, `sans-serif`],
      },
      colors: {
        primary: [`#323740`, `#292E36`],
        secondary: `#F6FFF6`,
      },
      keyframes: {
        tada: {
          from: {
            transform: `rotate(-6deg)`,
          },
          to: {
            transform: `rotate(6deg)`,
          },
        },
      },
      animation: {
        tada: `tada 350ms ease-in-out alternate 3`,
      },
    },
  },
  plugins: [],
};
