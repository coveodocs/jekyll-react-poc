const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    entry: "./src/index.tsx",
    output: {
      filename: "./js/bundle.js",
      path: path.resolve(__dirname, "./src/gen/assets"),
    },
    resolve: {
      extensions: [".scss", ".css", ".ts", ".tsx", ".js"]
    },
    optimization: (() => {
      if (isProduction) return { minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})] }
      else return {}
    })(),
    plugins: [
      new MiniCssExtractPlugin({ filename: "./css/main.css" })
    ],
    devtool: (() => {
      if (isProduction) return ""
      else return "source-map"
    })(),
    module: {
      rules: [
        { test: /\.scss$/,
          use: [
            { loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: true,
                publicPath: path.resolve(__dirname, "./src/gen/assets/css")
              }
            },
            { loader: "css-loader",
              options: {
                importLoaders: 2,
                modules: true
              }
            },
            { loader: "sass-loader",
              options: (() => {
                if (isProduction) return {}
                else return { sourceMap: true }
              })()
            }
          ]
        },
        { test: /\.tsx?$/,
          use: [
            { loader: "babel-loader" },
            { loader: "ts-loader" },
          ]
        },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    }
  };
}
