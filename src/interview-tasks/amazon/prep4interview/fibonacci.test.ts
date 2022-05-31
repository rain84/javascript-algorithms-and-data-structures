import { fibonacci, fibonacci2 } from './fibonacci'

describe('Interview: Amazon. Fibonacci', () => {
  const IO = new Map([
    [3, 2],
    [10, 55],
    [7, 13],
  ])

  test('fibonacci should work', () => {
    IO.forEach((output, input) => expect(fibonacci(input)).toBe(output))
  })

  test('fibonacci2 should work', () => {
    IO.forEach((output, input) => expect(fibonacci2(input)).toBe(output))
  })
})
