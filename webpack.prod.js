const Path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: Path.resolve(__dirname, "build"),
    filename: "./js/[name].[contenthash].bundle.js",
    assetModuleFilename: "./assets/images/[name].[hash].[ext]",
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsWebpackPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
});
