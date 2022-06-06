const { getPath, IS_DEV } = require('./utils');

module.exports = {
  mode: IS_DEV ? 'development' : 'production',
  entry: getPath('src/index.ts'),
  output: {
    path: getPath('dist'),
    filename: IS_DEV
      ? 'js/[name].bundle.js'
      : 'js/[name].[contenthash:8].bundle.js',
    chunkFilename: IS_DEV
      ? 'js/[name].bundle.js'
      : 'js/[name].[contenthash:8].bundle.js',
    clean: true,
  },
};
