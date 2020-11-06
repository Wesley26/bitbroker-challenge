module.exports = {
  purge: {
    enabled: false,
      content: [ './src/**/*.js' ],
  },
  theme: {
    extend: {
      backgroundColor: theme => ({
        'header-color': '#74787a',
        'body-color': '#f5f6f9',
        'option-select': '#0059bf',
        'get-inspect-btn': '#017afe',
      }),
      fontFamily: {
        'body': ['AirbnbCerealBold', 'sans-serif'],
      },
      spacing: {
        'space1': '20rem',
        'space2': '34rem',
        'space3': '32rem',
        'space4': '4rem',
        'space5': '39%',
      },
      fontSize: {
        'header1': '2.3rem',
        'header2': '1.3rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
