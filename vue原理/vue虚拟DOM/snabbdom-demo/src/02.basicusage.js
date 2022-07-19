import { init } from 'snabbdom/build/package/init.js'
import { h } from 'snabbdom/build/package/h.js'

let patch = init([])
let vnode = h('div#container.cls', [
  h('h1', 'headline'),
  h('p', 'A paragraph')
])
let app = document.querySelector('#app')
let oldVnode = patch(app, vnode)