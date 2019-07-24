// 将React项目中的库抽取成DLL

import React from 'react'
import ReactDOM from 'react-dom'

let reactDom = React.createElement('h1', null, '我的react')

ReactDOM.render(
  reactDom,
  document.getElementById('app')
);