const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/ts/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              outputPath: "./webfonts",
              publicPath: "./webfonts",
              name: "./[name].[ext]",
              limit: 8192,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images" },
        { from: "src/audio", to: "audio" },
      ],
    }),
  ],
};
