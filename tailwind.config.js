/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Add custom styles for the timeline
      colors: {
        'timeline-bg': '#f0f4f8',
        'timeline-dark-bg': '#1f2937',
      },
    },
  },
  plugins: [],
};
