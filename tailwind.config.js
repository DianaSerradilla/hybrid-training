/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        workout: {
          push: '#6366f1', // Indigo
          pull: '#d946ef', // Fuchsia
          legs: '#10b981', // Emerald
          recovery: '#6b7280' // Gray
        }
      }
    },
  },
  plugins: [],
}
