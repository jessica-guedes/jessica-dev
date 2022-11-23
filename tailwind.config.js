/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Poppins, sans-serif'
      },

      colors:{
        gray: {
          900: '#121214'
        }
      },
    },

    screens:{
      'sm': '375px',
      'md': '600px',
      'lg': '1024px',
    },
  },
  plugins: [],
}
