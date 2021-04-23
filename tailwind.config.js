module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        Iceland: 'Iceland',
        Viga: 'Viga',
        Bruno: 'Bruno Ace SC',
        Righteous: 'Righteous',
        Lobster: 'Lobster'
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}

