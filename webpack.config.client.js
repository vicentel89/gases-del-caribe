const path = require("path");
const webpack = require("webpack");
// //var SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
// const WorkboxPlugin = require("workbox-webpack-plugin");
const CURRENT_WORKING_DIR = process.cwd();

const config = {
  name: "browser",
  mode: "development",
  devtool: "eval-source-map",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.join(CURRENT_WORKING_DIR, "client/main.js"),
  ],
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    // new WorkboxPlugin.GenerateSW({
    //   // these options encourage the ServiceWorkers to get in there fast
    //   // and not allow any straggling "old" SWs to hang around
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
    // new SWPrecacheWebpackPlugin({
    //   cacheId: "gases-caribe",
    //   dontCacheBustUrlsMatching: /\.\w{8}\./,
    //   filename: "service-worker.js",
    //   minify: true,
    //   navigateFallback: CURRENT_WORKING_DIR + "client/main.js",
    //   staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    // }),
  ],
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
};

module.exports = config;
