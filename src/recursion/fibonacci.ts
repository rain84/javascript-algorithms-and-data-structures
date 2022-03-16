export const fib = (() => {
  const cache = new Map()

  const memoized = (n: number) => {
    if (!cache.has(n)) {
      const val = n <= 1 ? n : fib(n - 1) + fib(n - 2)
      cache.set(n, val)
    }

    return cache.get(n)
  }

  return memoized
})()

const test = (length: number, fn: (n: number) => number) =>
  new Array(length)
    .fill(0)
    .map((_, val) => fn(val))
    .join(', ')

console.log(`test(20, fib)`, test(20, fib))
