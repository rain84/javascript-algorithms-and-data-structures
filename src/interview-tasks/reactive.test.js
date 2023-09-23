import { _ } from './reactive'

it('should work', () => {
  const a = _(1)
  const b = _(2)
  const c = _(3)

  const sum = (...args) => args.reduce((a, b) => a + b)
  let d = _(sum, a, b, c)

  expect(d.current).toBe(6)

  a.current++
  expect(d.current).toBe(7) //  a = 2, b = 2, c = 3

  b.current *= 2
  expect(d.current).toBe(9) //  a = 2, b = 4, c = 3

  a.current = null
  b.current = null
  expect(d.current).toBe(3) //  c = 3
})
