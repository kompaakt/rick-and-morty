const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  env: {
    DOMAIN: "https://rickandmortyapi.com",
  },
};

module.exports = withPlugins([[optimizedImages]], nextConfig);
