const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
  return {
    devtool: 'source-map',
    entry: ['@babel/polyfill', './frontend/src/index.js'],
    output: {
      path: path.join(__dirname, 'frontend/static/frontend'),
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/,
          exclude: /(node_modules|styles\.scss)/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: argv.mode === 'development' ? true : false,
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: argv.mode === 'development' ? true : false,
                config: {
                  path: './postcss.config.js'
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: argv.mode === 'development' ? true : false
              }
            }
          ]
        },
        {
          test: /styles\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: './postcss.config.js'
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test:/node_modules/,
            name: 'vendor',
            chunks: 'initial',
            enforce: true
          }
        }
      },
      minimizer: argv.mode === 'production'
        ? [
            new UglifyJsPlugin({
              uglifyOptions: {
                output: {
                  comments: /^\**!|@preserve|@license|@cc_on/,
                }
              }
            })
          ]
        : []
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
  }
};
