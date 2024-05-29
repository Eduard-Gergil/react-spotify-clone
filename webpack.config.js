const path = require("path");
const webpack = require('webpack');
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin"); // Разрешает пути, указанные в tsconfig.json
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [new TsconfigPathsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["svg-url-loader"],
      },
    ],
  },
  // plugins: [
  //   new webpack.ProgressPlugin(), // Показывает прогресс сборки в консоли
  //   {
  //     apply: (compiler) => {
  //       compiler.hooks.done.tap('DonePlugin', (stats) => {
  //         console.log("Let's do some magic");
  //       });
  //     }
  //   },
  //   new WebpackShellPluginNext({
  //     onBuildEnd: {
  //       scripts: ['echo "Let\'s do some magic"'],
  //       blocking: true,
  //       parallel: false,
  //     },
  //   }),
  // ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};
