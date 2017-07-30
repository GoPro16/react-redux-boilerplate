/* Web pack */
var ComponentDirectoryPlugin = require("component-directory-webpack-plugin");
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/admin',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new ComponentDirectoryPlugin(true)],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader'
      },{
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },{
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },{
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },{ test: /\.css$/, loader: ['style-loader', 'css-loader'] }
    ]
  },
  performance: { hints: false },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};//Webpack


