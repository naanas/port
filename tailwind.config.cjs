// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cyberBlack: '#0A0A0B',    // Pure dark background
        cyberGray: '#16181D',     // Elevated card background
        neonCyan: '#00F0FF',      // Primary striking accent
        neonPurple: '#8A2BE2',    // Secondary accent
        textMain: '#F3F4F6',      // Primary crisp white text
        textMuted: '#9CA3AF',     // Subtitle gray text
      },
      fontFamily: {
        heading: ['"Inter"', 'sans-serif'], // Swapped to a sharply modern sans-serif
        body: ['"Space Grotesk"', 'sans-serif'], // Kept for tech feel
        mono: ['"JetBrains Mono"', 'monospace'], // For tech accents
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(22, 24, 29, 0.8) 0%, rgba(10, 10, 11, 0.9) 100%)',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(0, 240, 255, 0.3)',
        'neon-hover': '0 0 25px rgba(0, 240, 255, 0.6)',
      }
    },
  },
  plugins: [],
}