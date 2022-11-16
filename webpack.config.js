const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",

  module: {
    rules: [
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },

      {
        test: /.(js|jsx)$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        exclude: /(node_modules)/,
      },
    ],
  },

  output: {
    clean: true,
    filename: "bundle.js",
    path: __dirname + "/build",
  },

  plugins: [
    // Provides react as globally, so no need to import in each file
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],

  resolve: {
    extensions: [".jsx", ".js"],
  },
};
