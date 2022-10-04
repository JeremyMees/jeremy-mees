const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./pages/*.{vue,js}', './layouts/*.{vue,js}', './components/**/*.{vue,js}', './plugins/*.{js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Abril Fatface', 'sans-serif'],
        text: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('def', '.theme-default &')
    }),
  ],
}
