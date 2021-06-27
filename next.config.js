const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withFonts()], {
  async redirects() {
    const redirects = require('./redirects.json');

    return redirects.map(([source, destination]) => {
      if (!source || source.length === 0 || !destination || destination.length === 0) {
        return null;
      }

      console.log(`Redirect: ${source} > ${destination}`);

      return {
        source,
        destination,
        permanent: true
      }
    }).filter(Boolean);
  },

  webpack5: true
});
