const { nextui } = require('@nextui-org/react')
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', 'node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soso-primary': '#f4995e',
        'soso-primary-light': '#f49a5e97',
        'soso-secondary': '#515050',
        'soso-dark': '#18181b',
        'soso-black': '#000000',
        'soso-gray': '#1f2936',
        'soso-transparent': '#f49a5e36',
      },
      backgroundImage: {
        'grad-soso-primary': 'linear-gradient(90deg, #f4995e 0%, #f49a5e97 100%)',
        'grad-soso-secondary': 'linear-gradient(to bottom, #1f293790, #1f1f2a90, #1b161d90, #120d1090, #1f293790)',
        'grad-soso-secondary-dark': 'linear-gradient(to bottom, #1f293795,  #1b161d95, #1f293795)',
      },
      borderRadius: {
        'soso-radius': '0 0 50% 50% / 0 0 100% 100%',
      },
      borderWidth: {
        'soso-1': '1px',
      },
    },
  },
  plugins: [require('flowbite/plugin'), nextui()],
}
