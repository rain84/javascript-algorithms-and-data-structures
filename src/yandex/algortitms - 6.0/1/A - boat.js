/**
 * {@link https://contest.yandex.ru/contest/66792/problems/A/ | Тренировки по алгоритмам 6.0 от Яндекса — Занятие 1 A. Плот}
 */
const solution = (args) => {
  const [x1, y1, x2, y2, x, y] = args.map(Number)
  let res = ''

  if (y > y2) res = 'N'
  else if (y < y1) res = 'S'

  if (x > x2) res += 'E'
  else if (x < x1) res += 'W'

  console.log(res)
  return res
}

const { createInterface } = require('node:readline')
const args = []
exports.solution = solution

createInterface({
  input: process.stdin,
  output: process.stdout,
})
  .on('line', (line) => args.push(line.trim()))
  .on('close', () => solution(args))
