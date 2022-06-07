const { getPath, IS_DEV } = require("./utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WindicssWebpackPlugin = require("windicss-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: IS_DEV ? "development" : "production",
  entry: getPath("src/index.tsx"),
  output: {
    path: getPath("dist"),
    filename: IS_DEV
      ? "js/[name].bundle.js"
      : "js/[name].[contenthash:8].bundle.js",
    chunkFilename: IS_DEV
      ? "js/[name].bundle.js"
      : "js/[name].[contenthash:8].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?(t|j)sx?$/,
        exclude: /node_modules/,
        include: getPath("src"),
        use: [
          // {
          //   loader: "thread-loader",
          //   options: {
          //     workers: require("os").cpus(),
          //   },
          // },
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "jira-pro2",
      template: getPath("public/index.html"),
      favicon: getPath("public/github.svg"),
    }),
    new WindicssWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": getPath("src"),
    },
  },
  stats: IS_DEV ? "errors-warnings" : "normal",
};
