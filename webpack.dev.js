const Path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: Path.resolve(__dirname, "build"),
    filename: "./js/[name].bundle.js",
    assetModuleFilename: "./assets/images/[name].[hash].[ext]",
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: Path.join(__dirname, "build"),
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
