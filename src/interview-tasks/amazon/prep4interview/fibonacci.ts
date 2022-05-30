export const fibonacci = (
  (cache) =>
  (n: number): number => {
    if (n <= 1) return n
    if (!cache.has(n)) {
      const res = fibonacci(n - 1) + fibonacci(n - 2)
      cache.set(n, res)
      return res
    }

    return cache.get(n)!
  }
)(new Map<number, number>())

const cache = Symbol('cache')
type Fib = ((n: number) => number) & { [cache]?: Map<number, number> }

export const fibonacci2: Fib = (n) => {
  if (n <= 1) return n
  if (!fibonacci2[cache]!.has(n)) {
    const res = fibonacci2(n - 1) + fibonacci2(n - 2)
    fibonacci2[cache]!.set(n, res)
    return res
  }

  return fibonacci2[cache]!.get(n)!
}
fibonacci2[cache] = new Map()
