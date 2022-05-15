// 栈：先进后出，在尾部添加元素，在尾部删除元素

// 声明一个strack，基于JavaScript数组实现
class Stack {
  constructor() {
    this.items = []
  }
  // 添加一个元素
  push(element) {
    this.items.push(element)
  }
  // 从栈顶移除一个元素
  pop() {
    return this.items.pop()
  }
  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1]
  }
  // 检查栈是否为空
  isEmpty() {
    return this.items.length === 0
  }
  // 清空栈
  clear() {
    this.items = []
  }
}

const stack = new Stack()
stack.push(1)
console.log(stack)
