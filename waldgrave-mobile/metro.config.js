const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Ensure that assetExts includes 'png'
  config.resolver.assetExts.push('png');

  return config;
})();
