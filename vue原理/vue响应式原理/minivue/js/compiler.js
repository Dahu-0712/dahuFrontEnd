// 负责解析指令和插值表达式
class Compiler {
  constructor(vm) {
    this.vm = vm
    this.el = vm.$el
    this.compile(this.el)
  }

  // 编译模板，处理文本节点和元素节点
  compile(el) {
    // console.log(el)
    let childNodes = el.childNodes
    Array.from(childNodes).forEach((node) => {
      // 处理文本节点
      if (this.isTextNode(node)) {
        this.compileText(node)
      } else if (this.isElementNode(node)) {
        this.compileElement(node)
      }

      // 判断node节点，是否有子节点，如果有子节点递归调用compile方法
      if (node.childNodes && node.childNodes.length) {
        this.compile(node)
      }
    })
  }

  // 编译元素节点，处理指令
  // 遍历所有node节点，找到 v- 开头的属性，和该属性对应的内容，调用相应处理指令的方法
  compileElement(node) {
    // console.log(node.attributes);
    // console.dir(Array.from(node.attributes))
    Array.from(node.attributes).forEach((attr) => {
      // 判断是否是指令
      let attrName = attr.name
      if (this.isDirective(attrName)) {
        // v-text --> text
        attrName = attrName.substr(2)
        let key = attr.value
        this.update(node, key, attrName)
      }
    })
  }

  // 找到相应处理指令的方法
  update(node, key, attrName) {
    // node节点， key属性，attrName 指令名称
    let updaterFn = this[attrName + 'Updater']
    updaterFn && updaterFn.call(this, node, this.vm[key], key)
  }

  // 处理v-text属性
  textUpdater(node, value, key) {
    node.textContent = value

    new Watcher(this.vm, key, (newValue) => {
      node.textContent = newValue
    })
  }

  // 处理v-model属性
  modelUpdater(node, value, key) {
    node.value = value

    new Watcher(this.vm, key, (newValue) => {
      node.value = newValue
    })

    // 双向绑定
    node.addEventListener('input', () => {
      this.vm[key] = node.value
    })
  }

  // 编译文本节点，处理插值表达式
  // 找到所有是插值表达式的节点，匹配出插值表达式中变量，将其文本内容用变量值替换。
  compileText(node) {
    // console.dir(node)
    let reg = /\{\{(.+?)\}\}/
    let value = node.textContent
    if (reg.test(value)) {
      let key = RegExp.$1.trim()
      node.textContent = value.replace(reg, this.vm[key])

      // 每一个指令创建一个watcher，观察数据的变化
      new Watcher(this.vm, key, (newValue) => {
        console.log(newValue)
        node.textContent = newValue
      })
    }
  }

  // 判断元素属性是否是指令
  isDirective(attrName) {
    return attrName.startsWith('v-')
  }

  // 判断节点是否为文本节点
  isTextNode(node) {
    return node.nodeType === 3
  }

  // 判断节点是否是元素节点
  isElementNode(node) {
    return node.nodeType === 1
  }
}
