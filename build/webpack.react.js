// 此配置文件 是打包React全家桶的
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry:{
    react: [ 
      'react',
      'react-dom'
    ]
  },
  output:{
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_dll.js',
    library: '[name]_dll' // 最终会在全局暴露出一个[name]_dll的对象
  },
  plugins:[
    new webpack.DllPlugin({
      name: '[name]_dll',
      path: path.resolve(__dirname, '../dist/manifest.json'),
    })
  ]
}