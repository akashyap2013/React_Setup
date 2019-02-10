const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = () => {
  return {
    output: {
      // options related to how webpack emits results
      path: path.resolve(__dirname, "dist"), // string
      // the target directory for all output files
      // must be an absolute path (use the Node.js path module)
      filename: "babel.bundle.js" // string    // the filename template for entry chunks
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      })
    ]
  };
};
