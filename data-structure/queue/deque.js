// 双端队列：可以从前端和后端添加或者移除元素
class Deque {
  constructor() {
    this.count = 0 // 队列大小
    this.lowestCount = 0 // 对头元素值
    this.items = {}
  }
  // 在双端队列的对头添加元素
  addFront(element) {
    // 队列中没有元素的情况
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      // 队列中第一个元素不是0的情况
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      // 队列中第一个元素为0
      for(let i = this.count; i > 0; i --) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[this.lowestCount] = element
      
    }
  }
  // 在双端队列后端添加新的元素
  addBack(element) {
    this.item[this.count] = element
    this.count++
  }
  // 移除双端队列前端的元素
  removeFront() {
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  // 移除双端队列队尾元素
  removeBack() {
    const result = this.items[this.count]
    delete this.items[this.count]
    this.count--
    return result
  }
  // 查看双端队列前端元素
  peekFront() {
    return this.items[this.lowestCount]
  }
  // 查看双端队列末尾元素
  peekBack() {
    return this.items[this.count]
  }
}

const deque = new Deque()
