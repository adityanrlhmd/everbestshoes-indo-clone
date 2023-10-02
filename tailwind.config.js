/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#638043',
        secondary: '#FAECE0',
        tertiary: '#F8DD37',
        quaternary: '#E64B38'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light']
  }
}
