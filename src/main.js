// const a = require('./a')
// // import './assets/css/index.css'
import './assets/less/index.less'
import './assets/scss/index.scss'
// import $ from 'jquery'
import moment from 'moment'
import  'moment/locale/zh-cn'
moment.locale('zh-CN')

console.log(moment().subtract(6, 'days').calendar())

// 动态导入
function getDivDom(){
	return import('jquery').then(({default: $}) => {
		return $('<div></div>').html('动态导入')
	})
}

window.onload = () => {
  document.getElementById('btn').addEventListener('click',() => {
    condole.log('1111', getDivDom())
    getDivDom().then(item => {
      item.appendTo('body')
    })
  })
}

// 分包导入
// $(() => {
// 	$('<div></div>').html('main').appendTo('body')
// })

// // tree shaking 分析
// // 若是此时使用 require 引入，不管 math 中的方法是否使用，都会被打包
// const math = require('./utils/math')
// // 若是使用 import 引入， 只会打包使用了 math 的方法
// import { add } from './utils/math'
// console.log('index 页面',math.add(1,2));
// console.log('index 页面',add(1,2));

// scope hositing 分析
// const a = 1
// const b = 2
// const c = 3
// console.log(a + b + c)
// console.log(a, b, c)

