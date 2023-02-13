/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/App.tsx"

  ],
  theme: {
    extend: {
      colors: {
        'pure-red': '#ee3600',
        'bright-blue': '#257cde',
        'vivid-orange': '#da771e',
        'dark-moderate-cyan': '#358887',
        'lime-green': '#00b480',
        'mod-lime-green': '#65d15d',
        'mid-gray': "rgb(244,244,244)"
      },
      scale: {
        '85': '0.85',
        '80': '0.80'
      },
      backgroundImage: {
        'event-back': "url('./images/nghnh.png')",
      },
    },
  },
  plugins: [],
}
