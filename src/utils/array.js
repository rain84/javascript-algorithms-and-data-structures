export const random = (length, max = length) =>
  new Array(length).fill(0).map(() => ~~(Math.random() * (max + 1)))
export const random2 = (length) =>
  Array.apply(null, { length }).map(Function.call, Math.random)
export const format = (arr) => `[${arr.join(', ')}]`
