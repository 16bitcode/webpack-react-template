const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config.base");

module.exports = merge(webpackBaseConfig, {
  devServer: {
    compress: true,
    host: "localhost",
    port: 9000,
    open: true,
    hot: true,
    client: {
      logging: "error",
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    proxy: {},
  },
});
