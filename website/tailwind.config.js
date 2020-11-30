module.exports = {
  purge: ['./pages/*.js', './components/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'mdsm': { 'min': '300px', 'max': '800px' },
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
