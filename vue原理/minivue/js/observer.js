// 数据劫持
// 把$data中的成员转换成getter和setter
class Observer {
  constructor(data) {
    this.walk(data)
  }

  // 1. 判断数据是否是对象，如果不是对象返回
  // 2. 如果是对象，遍历对象的所有属性，设置为 getter/setter
  walk(data) {
    if (!data || typeof data !== 'object') {
      return
    }
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key])
    })
  }
  // 当访问data属性时做一些干预
  defineReactive(data, key, val) {
    let that = this // set内部this指向问题
    // 如果val是一个对象，需要将val内部的属性也转换成响应式的对象
    // 需要再次调用this.walk
    this.walk(val)
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        return val
      },
      set(newValue) {
        if (newValue === val) {
          return
        }
        val = newValue
        // 如果重新复制时是一个对象时，也需要转换成响应式
        that.walk(newValue)
        // TODO:发生变化发送通知
      },
    })
  }
}
