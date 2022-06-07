const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config.base");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { IS_ANA } = require("./utils");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = merge(webpackBaseConfig, {
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
  plugins: [],
});

if (IS_ANA) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
