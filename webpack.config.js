const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ManifestPlugin = require('webpack-manifest-plugin');
// const WebpackChunkHash = require('webpack-chunk-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production';
const useSourcemaps = !isProduction;

const styleLoader = {
  loader: 'style-loader',
  options: {
    sourceMap: true
  }
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: true
  }
};

const sassLoader = {
  loader: 'sass-loader',
  options: {
    sourceMap: true
  }
};

const resolveUrlLoader = {
  loader: 'resolve-url-loader',
  options: {
    sourceMap: true
  }
};

const miniCssLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {}
};

const webpackConfig = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    common: './assets/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          miniCssLoader,
          cssLoader,
          resolveUrlLoader
        ],
      },
      {
        test: /\.scss$/,
        use: [
          miniCssLoader,
          cssLoader,
          resolveUrlLoader,
          sassLoader,
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:6].[ext]'
            },
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:6].[ext]'
            },
          }
        ]
      },
    ]
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   jQuery: 'jquery',
    //   $: 'jquery',
    //   'window.jQuery': 'jquery',
    // }),

    // new CopyWebpackPlugin([
    //   // copies to {output}/static
    //   { from: './assets/images', to: 'images' }
    // ]),

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: [
    //     // "layout" is an entry file
    //     // anything included in layout, is not included in other output files
    //     'layout',
    //     // dumps the manifest into a separate file
    //     'manifest'
    //   ],
    //   minChunks: Infinity
    // }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    new CleanWebpackPlugin('build/**/*.*'),

    new WebpackNotifierPlugin({
      title: 'Drupal Bootstrap Webpack',
      contentImage: path.join(__dirname, 'screenshot.png'),
      alwaysNotify: true
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({})
    ]
  }
};

if (isProduction) {
  webpackConfig.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
  );
}

module.exports = webpackConfig;
