const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",

  module: {
    rules: [
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
    filename: "bundle.js",
    path: __dirname + "/build",
  },

  plugins: [
    // Provides react as globally, so no need to import in each file
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],

  resolve: {
    extensions: [".jsx", "js"],
  },
};
