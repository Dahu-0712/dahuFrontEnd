class Dep {
  constructor() {
    // 存储所有观察者
    this.subs = []
  }

  //  添加观察者
  addSub(sub) {
    if (sub && sub.update) {
      this.subs.push(sub)
    }
  }

  // 通知观察者
  notify(sub) {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}
