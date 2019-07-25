const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode:'development',
  devtool: 'cheap-module-eval-source-map', //  开启source map
  devServer:{
    hot:true,
    // open: true,
    port:9527,
    compress: true,
    host:'0.0.0.0',
    // contentBase:'./src'
    proxy:{
      '/api':{
        target:''
      }
    }
  },
  plugins:[
    new webpack.DefinePlugin({
      IS_DEV: 'true',
      number: '1 + 1',
      string: '"设置字符串的值"',
      ENV: '"dev"'
    })
  ]
})