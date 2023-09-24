import { ref, compute } from './compute'

it('should work', () => {
  const a = ref(1)
  const b = ref(2)
  const c = compute(() => a.value + b.value)

  expect(c.value).toBe(3) // a = 1, b = 2, c = 3

  a.value *= 2
  b.value *= 3

  expect(c.value).toBe(8) // a = 2, b = 6, c = 8
})
