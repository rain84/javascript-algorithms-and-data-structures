//  fibonacci via recursion
export const fib1 = (() => {
  const cache = new Map()

  const memoized = (n: number) => {
    if (!cache.has(n)) {
      const val = n <= 1 ? n : fib1(n - 1) + fib1(n - 2)
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

    while (cache[n] === undefined) cache.push(cache[cache.length - 1] + cache[cache.length - 2])

    return cache[n]
  }

  return memoized
})()

export const fib3 = (n: number) => {
  let prev1 = 0
  let prev2 = 1
  let res = 0
  if (n === 0) return prev1
  if (n === 1) return prev2

  while (--n) {
    res = prev1 + prev2
    prev1 = prev2
    prev2 = res
  }

  return res
}
