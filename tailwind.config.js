/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          850: '#131c31',
        },
        workout: {
          push: '#6366f1', // Indigo
          pull: '#d946ef', // Fuchsia
          legs: '#10b981', // Emerald
          recovery: '#6b7280' // Gray
        }
      },
      borderColor: {
        DEFAULT: '#1e293b',
      }
    },
  },
  plugins: [],
}
