// const fibonacci = (
//   (cache) =>
//   (n: number): number => {
//     if (n <= 1) return n
//     if (!cache.has(n)) {
//       const res = fibonacci(n - 1) + fibonacci(n - 2)
//       cache.set(n, res)
//       return res
//     }

//     return cache.get(n)!
//   }
// )(new Map<number, number>())

const cache = Symbol('cache')
type Fib = ((n: number) => number) & { [cache]?: Map<number, number> }
const fibonacci: Fib = (n) => {
  if (n <= 1) return n
  if (!fibonacci[cache]!.has(n)) {
    const res = fibonacci(n - 1) + fibonacci(n - 2)
    fibonacci[cache]!.set(n, res)
    return res
  }

  return fibonacci[cache]!.get(n)!
}
fibonacci[cache] = new Map()

console.log(`fibonacci(3)`, fibonacci(3))
console.log(`fibonacci(10)`, fibonacci(10))
console.log(`fibonacci(7)`, fibonacci(7))

export {}
