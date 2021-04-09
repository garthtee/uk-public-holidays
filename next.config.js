
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: prod ? '/uk-public-holidays' : '',
  future: {
    webpack5: true,
  },
};
