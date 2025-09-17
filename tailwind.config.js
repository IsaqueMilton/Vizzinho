module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffdf6',
          100: '#fff7e6',
          200: '#ffe9b8',
          300: '#ffd98a',
          400: '#ffca4d',
          500: '#ffc107', // yellow main
          600: '#e6ac00',
          700: '#b88500',
          800: '#7a5a00',
          900: '#4c3600'
        }
      }
    },
  },
  plugins: [],
}
