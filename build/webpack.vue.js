const path = require('path')
const webpack = require('webpack')

module.expotrs = {
  mode: 'development',
  entry:{
    vue: [
      'vue/dist/vue',
      'vue-router'
    ]
  },
  output:{
    path: path.join(__dirname, '..','./dist'),
    filename: '[name].js',
    // publicPath: '/',
    library: '[name]_dll'
  },
  plugins:[
    new webpack.DLLPlugin({
      name: '[name]_dll',
      path: path.join(__dirname, '..','./dist/manifest.json')
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '..','./dist'),
      manifest:{

      }
    })
  ]
}