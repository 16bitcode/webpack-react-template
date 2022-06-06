const { getPath } = require('./utils');

module.exports = {
  mode: 'production',
  entry: getPath('src/index.ts'),
  output: {
    filename: 'main.js',
    path: getPath('dist'),
  },
};
