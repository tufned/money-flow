/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#D0C6B5',
        secondaryLight: '#F3F1EB',
        dark: '#23262C',
        primaryVivid: '#FDC82F',
        secondaryVivid: '#DB624E',
      }
    },
  },
  plugins: [],
}

