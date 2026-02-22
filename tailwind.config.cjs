// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkDesert: '#1C1C1C', // Darkened for better contrast in modern UI
        lightDesert: '#F9F7F3', // Lightened for cleaner look
        goldDesert: '#C88A36',
        tealDesert: '#0D9B8C',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      }
    },
  },
  plugins: [],
}