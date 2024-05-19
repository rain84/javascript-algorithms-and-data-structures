import { seconds } from './date'

it('seconds() should work', () => {
  const time = (Date.now() / 1000) | 0
  expect(seconds()).toBe(time)
})

it('seconds.last1000() should work', () => {
  const time = ((Date.now() / 1000) | 0) % 1000
  expect(seconds.last1000()).toBe(time)
})
