module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: __dirname,
    filename: "index.js",
  },

  node: {
    fs: "empty",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
