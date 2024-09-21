/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        softBeige: '#F5F5DC', // Soft beige for dark mode
        richCream: '#F6F5F0', // Rich cream for accents
        mutedGreen: '#A4C8A1', // Muted green for buttons
      },
      textDecoration: ['hover', 'focus'], // Ensure underline works on hover and focus
    },
  },
  plugins: [],
};

