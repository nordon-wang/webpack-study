const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode:'production',
  plugins:[
    new webpack.DefinePlugin({
      IS_DEV: 'false',
      number: '1 + 2',
      string: '"生产环境设置字符串的值"',
      ENV: '"pro"'
    })
  ]
})