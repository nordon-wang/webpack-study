const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = merge(baseConfig, {
  mode:'production',
  plugins:[
    new webpack.DefinePlugin({
      IS_DEV: 'false',
      number: '1 + 2',
      string: '"生产环境设置字符串的值"',
      ENV: '"pro"'
    })
  ],
  optimization:{
    minimizer: [
      new TerserPlugin({}),
      new OptimizeCssAssetsPlugin({})
    ],
    // splitChunks:{
    //   chunks: "all"
    // }
    splitChunks: {
      chunks: 'all', // 只对异步加载的模块进行拆分，import('jquery').then()就是典型的异步加载，可选项还有 all | initial
      minSize: 30000, // 模块最少大于 30kb 才会拆分
      maxSize: 0, // 为0时模块大小无上限，只要大于 30kb 都会拆分。若是非0，超过了maxSize的值，会进一步拆分
      minChunks: 1, // 模块最少引用一次才会拆分
      maxAsyncRequests: 5, // 异步加载时同时发送的请求数量最大不能超过5，超过5的部分不拆分
      maxInitialRequests: 3, // 页面初始化时，同时发送的请求数量最大不能超过3，超过3的不跟不拆分
      automaticNameDelimiter: '~', // 默认的连接符
      name: true, // 拆分的chunk名，设置为true表示根据模块名和CacheGroup的key来自动生成，使用上面的连接符连接
      cacheGroups: { // 缓存组配置，上面配置读取完成后进行拆分，如果需要把多个模块拆分到一个文件，就需要缓存，所以命名为缓存组
        vendors: { // 自定义缓存组名
          test: /[\\/]node_modules[\\/]/, // 检查 node_modules 目录，只要模块在该目录下就使用上面配置拆分到这个组
          priority: -10, // 权重为-10，决定了那个组优先匹配，假如node_modules下面有个模块要拆分，同时满足vendors和default组，此时就会分到 priority 值比较大的组，因为 -10 > -20 所以分到 vendors 组
          filename:'vendors.js'
        },
        default: { // 默认缓存组名
          minChunks: 2, // 最少引用两次才会被拆分
          priority: -20, // 权重 -20
          reuseExistingChunk: true // 如果主入口中引入了两个模块，其中一个正好也引用了后一个，就会直接复用，无需引用两次
        }
      }
    }
  }
})