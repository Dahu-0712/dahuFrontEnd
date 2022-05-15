// 声明一个stack类，基于JavaScript对象实现Stack类
class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  // 插入元素
  push(element) {
    this.items[this.count] = element
    this.count++
  }
  // 栈是否为空
  isEmpty() {
    return this.count === 0
  }
  // 从栈顶移除一个元素
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
}

const stack = new Stack()
stack.push(1)
console.log(stack)

stack.pop()
console.log(stack);
