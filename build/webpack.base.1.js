const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')


module.exports = {
  // mode: 'development',
  // entry: './src/main.js',
  entry:{
    index: './src/index.js',
    other: './src/other.js'
  },
  output: {
    // path: path.resolve('./dist/')
    // path: path.resolve(__dirname, './dist/')
    path: path.join(__dirname, '..','./dist'),
    // filename:'bundle.js',
    filename:'[name].js',
    publicPath: '/'
  },
  // devtool: 'cheap-module-eval-source-map', //  开启source map
  // devServer:{
  //   hot:true,
  //   open: true,
  //   port:9527,
  //   compress: true,
  //   // contentBase:'./src'
  // },
  plugins:[
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: './src/index.html'
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks:['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'other.html',
      template: './src/other.html',
      chunks:['other']
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { 
        from: path.join(__dirname, '..', 'static'),
        to: 'static'
      }
    ]),
    new webpack.BannerPlugin('王耀的版权信息'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
        test:/\.less$/,
        use:['style-loader', 'css-loader', 'less-loader']
      },
      {
        test:/\.scss$/,
        use:['style-loader', 'css-loader', 'sass-loader']
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: 'file-loader'
      // },
      // {
      //   test: /\.(woff|woff2|eot|svg|ttf)$/,
      //   use: 'file-loader'
      // },
      {
        test: /\.(png|jpg|gif)$/,
        use:[{
          loader:'url-loader',
          options:{
            limit: 5 * 1024,
            outputPath:'images', // 图片生成的文件夹名称
            name:'[name]-[hash:6].[ext]' // 生成的图片名称
          }
        }]
      },
      {
        test: /\.js$/,
        use:{
          loader: 'babel-loader',
          // options:{
          //   presets: ['@babel/env'],
          //   plugins: ['@babel/plugin-proposal-class-properties']
          // }
        }
      },
      {
        test:/\.(htm|html)$/i,
        loader: 'html-withimg-loader'
      },
      {
        test: require.resolve('jquery'),
        use:{
          loader: 'expose-loader',
          options: '$'
        }
      }
    ]
  }
}