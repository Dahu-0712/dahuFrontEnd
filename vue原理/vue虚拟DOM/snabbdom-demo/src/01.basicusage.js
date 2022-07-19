import { init } from 'snabbdom/build/package/init.js'
import { h } from 'snabbdom/build/package/h.js'

const patch = init([])

let vnode = h('div#container.cls', 'hello world')
let app = document.querySelector('#app')
let oldVnode = patch(app, vnode)