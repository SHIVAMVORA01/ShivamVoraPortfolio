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
      animation: {
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
      keyframes: {
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        }
      },
      backgroundColor: {
        'dark-primary': '#1a1a1a',
        'dark-secondary': '#2d2d2d',
      },
      textColor: {
        'dark-primary': '#ffffff',
        'dark-secondary': '#a3a3a3',
      }
    }
  },
  plugins: []
}
