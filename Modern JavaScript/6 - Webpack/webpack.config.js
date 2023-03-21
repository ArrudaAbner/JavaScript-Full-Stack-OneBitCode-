const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    hello: "./src/hello.js",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.min.js",
  },
};
