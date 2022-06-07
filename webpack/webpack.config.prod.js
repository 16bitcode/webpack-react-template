const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config.base");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(webpackBaseConfig, {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new CompressionPlugin({ exclude: /\.m?js(\?.*)?$/i }),
      new TerserPlugin({
        minify: TerserPlugin.esbuildMinify,
      }),
    ],
  },
});
