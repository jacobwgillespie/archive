import nodeExternals from 'webpack-node-externals';
import path from 'path';
import webpack from 'webpack';

export default {
  entry: {
    cli: ['./src/lib/cli.js'],
  },

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },

  resolve: {
    root: path.resolve(__dirname, './src'),
  },

  target: 'node',
  devtool: 'source-map',

  externals: [
    nodeExternals(),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        ignore: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();', { raw: true }),
  ],
};
