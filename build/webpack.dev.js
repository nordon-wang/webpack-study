const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode:'development',
  devtool: 'cheap-module-eval-source-map', //  开启source map
  devServer:{
    hot:true,
    open: true,
    port:9527,
    compress: true,
    // contentBase:'./src'
  },
})