export const fib1 = (n: number): number => (n <= 1 ? n : fib1(n - 1) + fib1(n - 2))

/**  */
export const fib2 = (n: number) => {
  const arr = Array(n + 1)
  ;[arr[0], arr[1]] = [0, 1]

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr[n]
}
