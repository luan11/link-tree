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
        highlight: {
          from: {
            boxShadow: `0 0 5px -3px rgba(255,255,255,0.25)`,
          },
          to: {
            boxShadow: `0 0 20px -3px rgba(255,255,255,0.55)`,
          },
        },
      },
      animation: {
        highlight: `highlight 500ms linear alternate infinite`,
      },
    },
  },
  plugins: [],
};
