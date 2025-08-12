/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0029a4',      // Professional education blue (inspired by Jaro)
        'primary-hover': '#001f7a',
        'accent': '#fecf23',       // Warm yellow accent (inspired by Jaro)
        'accent-hover': '#e6b800',
        'secondary': '#1e40af',    // Secondary blue
        'neutral': '#f8fafc',      // Clean light background
        'text-primary': '#1e293b', // Professional dark text
        'text-secondary': '#64748b', // Softer secondary text
        'success': '#059669',      // Success green
        'warning': '#d97706',      // Warning orange
      },
      fontFamily: {
        'primary': ['Inter', 'system-ui', 'sans-serif'], // Professional font stack
        'heading': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}