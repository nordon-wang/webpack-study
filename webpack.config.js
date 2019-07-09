const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename:'bundle.js'
  },
  devServer:{
    hot:true,
    open: true,
    port:9527,
    compress: true,
    // contentBase:'./src'
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
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
          options:{
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  }
}