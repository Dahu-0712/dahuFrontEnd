import { init } from 'snabbdom/build/package/init.js'
import { h } from 'snabbdom/build/package/h.js'

// 1.导入模块
import { styleModule } from 'snabbdom/build/package/modules/style'
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'

// 2.注册模块
const patch = init([styleModule, eventListenersModule])

const vnode = h('div#container.cls', [
  h('h1', { style: { background: 'red' } }, 'Hello world'),
  h('p', { on: { click: eventHandler } }, 'Hello snabbdom'),
])

function eventHandler() {
  console.log('点击事件')
}

let app = document.querySelector('#app')
patch(app, vnode)
