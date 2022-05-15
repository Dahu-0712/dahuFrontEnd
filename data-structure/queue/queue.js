// 队列：先进先出，在尾部添加新元素，在顶部移除元素
module.exports =  class Queue {
  constructor() {
    this.count = 0 // 队列长度
    this.lowestCount = 0 // 队列前端第一个元素
    this.items = {}
  }
  // 添加一个元素
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  // 移除队列中最前端元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  // 查看队列头部元素
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  // 检查队列是否为空并获取长度
  isEmpty() {
    return this.count === this.lowestCount
  }
  // 队列长度
  size() {
    return this.count - this.lowestCount
  }
  toString() {
    if (this.isEmpty) {
      return undefined
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount; i < this.count; i++) {
      objString += `${objString}, ${this.items[i]}`
    }
  }
}

// const queue = new Queue()
// queue.enqueue('tom')
// queue.enqueue('jack')
// queue.enqueue('dahu')

// console.log(queue)

// queue.dequeue()
// console.log(queue);