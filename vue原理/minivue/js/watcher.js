class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm
    // data中的属性名称
    this.key = key
    // 当数据发生变化时，调用cb更新试图
    this.cb = cb
    // 在Dep的静态属性上记录当前watcher对象，当访问数据时把watcher添加到dep的subs中
    Dep.target = this
    // 触发一次getter，让dep为当前key记录watcher
    this.oldValue = vm[key]
    // 清空target
    Dep.target = null
  }

  update() {
    const newValue = this.vm[this.key]
    if ((newValue === this.oldValue)) {
      return
    }
    this.cb(newValue)
  }
}
