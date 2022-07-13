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
  defineReactive(data, key, val) {
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        return val
      },
      set(newValue) {
        if (newValue === value) {
          return
        }
        val = newValue
        // TODO:发生变化发送通知
      },
    })
  }
}
