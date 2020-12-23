const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CURRENT_WORKING_DIR = process.cwd();

const config = {
  mode: "production",
  entry: [path.join(CURRENT_WORKING_DIR, "client/main.js")],
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
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
    // new SWPrecacheWebpackPlugin({
    //   cacheId: "gases-caribe",
    //   dontCacheBustUrlsMatching: /\.\w{8}\./,
    //   filename: "service-worker.js",
    //   minify: true,
    //   navigateFallback: CURRENT_WORKING_DIR + "client/main.js",
    //   staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    // }),
  ],
};

module.exports = config;
