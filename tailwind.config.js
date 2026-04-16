/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6db44c',
          dark: '#5a9a3f',
          light: '#7bc462',
        },
        dark: {
          DEFAULT: '#212326',
          lighter: '#2a2d30',
          card: '#2d3034',
        },
        darker: '#212529',
        grey: {
          DEFAULT: '#434549',
          light: '#c3c3c3',
          text: '#a0a0a0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
