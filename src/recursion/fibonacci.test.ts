import { fib1, fib2, fib3 } from './fibonacci'

const getFibs = (fib: typeof fib1, n: number) => {
  const res: number[] = []

  while (n--) res.push(fib(n))
  res.reverse()

  return res
}

const sample = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946,
  17711,
]

it('fib1 should work', () => {
  expect(fib1(0)).toBe(0)
  expect(fib1(1)).toBe(1)
  expect(fib1(2)).toBe(1)

  expect(getFibs(fib1, sample.length)).toMatchObject(sample)
})

it('fib2 should work', () => {
  expect(fib2(0)).toBe(0)
  expect(fib2(1)).toBe(1)
  expect(fib2(2)).toBe(1)

  expect(getFibs(fib2, sample.length)).toMatchObject(sample)
})

it('fib3 should work', () => {
  expect(fib3(0)).toBe(0)
  expect(fib3(1)).toBe(1)
  expect(fib3(2)).toBe(1)

  expect(getFibs(fib3, sample.length)).toMatchObject(sample)
})
