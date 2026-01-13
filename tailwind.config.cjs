// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx}"], //
  theme: {
    extend: {
      colors: {
        darkDesert: '#764b36',
        lightDesert:'#efe7dd',
        goldDesert: '#C88A36',
        tealDesert: '#0D9B8C',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'], // Font elegan
        body: ['"Space Grotesk"', 'sans-serif'], // Font modern/tech
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')", // Tekstur noise
      }
    },
  },
  plugins: [],
}