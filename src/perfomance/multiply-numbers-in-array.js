import { testPerfomance } from '../utils/index.js'

const mult_with_for = (arr) => {
  let mult = 1
  let i = 0
  let l = arr.length

  for (; i < l; i++) mult *= arr[i]

  return mult
}

const mult_with_for_of = (arr) => {
  let mult = 1

  for (const val of arr) mult *= val

  return mult
}

const mult_with_reduce = (arr) => arr.reduce((a, b) => a * b)

// prettier-ignore
const arr = [
    11, 86, 32, 65, 15, 19, 68, 28, 85, 31, 42,
  ]
testPerfomance(mult_with_for, [arr])
testPerfomance(mult_with_reduce, [arr])
testPerfomance(mult_with_for_of, [arr])
