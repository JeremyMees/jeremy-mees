const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./pages/*.{vue,js}', './layouts/*.{vue,js}', './components/**/*.{vue,js}', './plugins/*.{js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Abril Fatface', 'sans-serif'],
        text: ['Lato', 'sans-serif'],
        'retro-title': ['ChicagoFLF', 'sans-serif'],
        'retro-text': ['FindersKeepers', 'sans-serif'],
        'blobs-title': ['Playfair Display', 'serif'],
      },
      colors: {
        blobs: '#ED1250',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('def', '.theme-default &')
      addVariant('retro', '.theme-retro &')
      addVariant('blob', '.theme-blobs &')
    }),
  ],
}
