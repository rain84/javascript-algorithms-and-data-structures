import { perf } from '../utils/perf'

const for_loop = (arr: number[]) => {
  let [res, n] = [1, arr.length]

  for (let i = 0; i < n; i++) {
    res *= arr[i]
  }

  return res
}

const for_while = (arr: number[]) => {
  let [res, n] = [1, arr.length]

  while (n--) {
    res *= arr[n]
  }

  return res
}

const for_of_loop = (arr: number[]) => {
  let res = 1
  for (const val of arr) {
    res *= val
  }
  return res
}

const reduce_loop = (arr: number[]) => arr.reduce((a, b) => a * b)

const arr = [11, 86, 32, 65, 15, 19, 68, 28, 85, 31, 42]
perf([for_loop, for_while, reduce_loop, for_of_loop], arr)
