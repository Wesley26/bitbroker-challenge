module.exports = {
  purge: {
    enabled: true,
      content: [ './src/**/*.js' ],
  },
  theme: {
    extend: {
      backgroundColor: theme => ({
        'header-color': '#74787a',
        'body-color': '#f5f6f9',
        'option-select': '#0059bf',
        'get-inspect-btn': '#017afe',
        'bottom-header-box': '#0059bf',
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
        'space6': '20.8rem',
        'space7': '46%',
      },
      fontSize: {
        'header1': '2rem',
        'header2': '1.3rem',
        'header3': '3.25rem',
      },
    },
  },
  variants: {},
  plugins: [],
}