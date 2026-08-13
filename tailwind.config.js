/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#11212D',
          900: '#11212D',
          850: '#253745',
          800: '#253745',
          700: '#4A5C6A',
          600: '#4A5C6A',
          500: '#9BA8AB',
          400: '#9BA8AB',
          300: '#CCD0CF',
          200: '#CCD0CF',
          100: '#FFFFFF',
        },
        indigo: {
          950: '#06141B',
          900: '#11212D',
          800: '#253745',
          700: '#253745',
          600: '#253745',
          500: '#4A5C6A',
          400: '#9BA8AB',
          300: '#CCD0CF',
          200: '#CCD0CF',
          100: '#FFFFFF',
        },
        steel: {
          darkest: '#06141B',   // Dark mode background (#06141B)
          dark: '#11212D',      // Dark panel / surface (#11212D)
          medium: '#253745',    // Dark card / border (#253745)
          muted: '#4A5C6A',     // Secondary text / borders (#4A5C6A)
          light: '#9BA8AB',     // Light steel text / accent (#9BA8AB)
          lightest: '#CCD0CF',  // Light mode background (#CCD0CF)
        }
      },
      borderColor: {
        DEFAULT: '#253745',
      }
    },
  },
  plugins: [],
}
