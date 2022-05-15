// 击鼓传花：一种循环队列
/**
 * @param: 参加游戏队伍
 * @param：传递次数
 */

const Queue = require('./queue')
function hotPotato(elementsList, num) {
  const queue = new Queue()
  const eliminatedList = []

  // 不修改传入参数，将传入参数赋给数组
  elementsList.forEach(element => {
      queue.enqueue(element)
  });

  // 循环队列：当人传出花后将从队列开头添加到队尾，达到传递次数时拿着花的人将被淘汰
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminatedList.push(queue.dequeue())
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names, 7)
console.log(result)
console.log(`胜利者：${result.winner}`)
