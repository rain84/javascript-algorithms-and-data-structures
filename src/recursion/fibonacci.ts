//  fibonacci via recursion
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

//  fibonacci via while-iteration
export const fib2 = (() => {
  const cache = [0, 1]

  const memoized = (n: number) => {
    if (n < 0) return

    while (cache[n] === undefined)
      cache.push(cache[cache.length - 1] + cache[cache.length - 2])

    return cache[n]
  }

  return memoized
})()
