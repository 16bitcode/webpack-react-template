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
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          filename: "js/[name][contenthash:8].bundle.js",
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          filename: "js/[name][contenthash:8].bundle.js",
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [],
});

if (IS_ANA) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
