import { delay } from 'utils/promise'
import { TimeLimitedCache, compose, once, timeLimit, type F } from './30-Days-of-JavaScript'

it('compose() should work', () => {
  const fx: F[] = [(x) => x + 1, (x) => x * x, (x) => 2 * x]
  expect(compose(fx)(4)).toBe(65)
})

it('once should work', () => {
  const fn = (a: number, b: number, c: number) => a + b + c
  const onceFn = once(fn)
  expect(onceFn(1, 2, 3)).toBe(6)
  expect(onceFn(1, 2, 3)).toBeUndefined()
})

it('timeLimit should work 1', async () => {
  const fn = async (n: number) => {
    await new Promise((res) => setTimeout(res, 100))
    return n * n
  }
  await expect(timeLimit(fn, 50)([5])).rejects.toBe('Time Limit Exceeded')
})

it('timeLimit should work 2', async () => {
  const fn = async (n: number) => {
    await new Promise((res) => setTimeout(res, 100))
    return n * n
  }
  await expect(timeLimit(fn, 150)(5)).resolves.toBe(25)
})

it('timeLimit should work 3', async () => {
  const fn = async (a: number, b: number) => {
    await new Promise((res) => setTimeout(res, 120))
    return a + b
  }
  await expect(timeLimit(fn, 150)(5, 10)).resolves.toBe(15)
})

it('timeLimit should work 4', async () => {
  const fn = async () => {
    throw 'Error'
  }
  await expect(timeLimit(fn, 1000)([])).rejects.toBe('Error')
})

it('TimeLimitedCache should work', async () => {
  const cache = new TimeLimitedCache()
  expect(cache.set(1, 42, 100)).toBe(false)

  await delay(50)
  expect(cache.get(1)).toBe(42)

  await delay(25)
  expect(cache.count()).toBe(1)

  await delay(25)
  expect(cache.count()).toBe(0)

  await delay(150)
  expect(cache.get(1)).toBe(-1)
})
