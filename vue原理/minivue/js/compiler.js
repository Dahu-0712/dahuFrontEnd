// 负责解析指令和插值表达式
class Compiler {
  constructor(vm) {
    this.vm = vm
    this.el = vm.$el
  }

  // 编译模板，处理文本节点和元素节点
  compile(el) {}

  // 编译元素节点，处理指令
  compileElement(node) {}

  // 编译文本节点，处理插值表达式
  compileText(node) {}

  // 判断元素属性是否是指令
  isDirective(attrName) {
    return attrName.startsWidth('v-')
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
