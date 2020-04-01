module.exports = {
  entry: "./src/index.ts",
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
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
