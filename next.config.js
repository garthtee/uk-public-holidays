
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: prod ? '/uk-public-holidays' : '',
  basePath: prod ? '/uk-public-holidays' : '',
  future: {
    webpack5: true,
  },
};
