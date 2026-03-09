const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false } }],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/game.css' }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false, // script tags are managed manually in the template
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/js', to: 'js' },
        { from: 'src/assets', to: 'assets' },
      ],
    }),
  ],
  devServer: {
    static: [
      { directory: path.resolve(__dirname, 'dist') },
      // Serve src directly so script tags work during dev without a full build
      { directory: path.resolve(__dirname, 'src'), publicPath: '/' },
    ],
    watchFiles: ['src/**/*'],
    hot: false,
    port: 3001,
    open: true,
  },
};
