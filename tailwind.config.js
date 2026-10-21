/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#04121d',
          secondary: '#071b29',
        },
        surface: {
          DEFAULT: '#0a2232',
          light: '#102b3c',
        },
        line: '#17394b',
        text: '#f0f7ff',
        muted: '#a3b7c7',
        sky: '#38d9f5',
        blue: '#2589ff',
        green: '#39f0bd',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        heading: ['"Manrope"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.065em',
        tight: '-0.04em',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(120deg, #39f0bd, #38d9f5)',
      },
    },
  },
  plugins: [],
}
