// 此配置文件 是打包VUE全家桶的
/**
 * webpack.vue.js 只是用来打包生成 [name]_dd.js 文件和 manifest.json文件的，是不需要参与到业务代码打包的，因为只会在每一次修改了需要生成dll文件的时间才会执行一次，否则不需要参与到打包
 */
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry:{
    vue: [ 
      'vue/dist/vue',
      'vue-router'
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