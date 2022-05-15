// 回文检查：正反读过来都一样的单词

const Deque = require('./deque')
function palindromeChecker(aString) {
  // 检查传入的字符串是否符合标准
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false
  }

  const dequeue = new Deque()
  const lowerString = aString.toLowerCase().split(' ').join(' ')
  let isEqual = true
  let firstChart, lastChart

  for (let i = 0; i < lowerString.length; i++) {
    dequeue.addBack(lowerString.charAt(i))
  }

  // 从字符串的前端拿出一个字符，再从后端拿出一个字符，相同，如果不同说明不是
  while (dequeue.size() > 1 && isEqual) {
    firstChart = dequeue.removeFront()
    lastChart = dequeue.removeBack()
    if (firstChart !== lastChart) {
      isEqual = false
    }
  }

  return isEqual
}

console.log(palindromeChecker('level'))
