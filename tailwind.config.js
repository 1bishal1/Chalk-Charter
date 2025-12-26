/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Brush Script MT', 'Lucida Handwriting', 'Dancing Script', 'cursive'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-50%) rotate(-5deg)' },
          '50%': { transform: 'translateY(-52%) rotate(-3deg)' },
        },
      },
    },
  },
  plugins: [],
}

