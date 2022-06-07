const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config.base");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(webpackBaseConfig, {
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
});
