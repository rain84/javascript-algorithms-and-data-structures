import { LRUCache } from './LRUCache'

it('should work 1', () => {
  const lru = new LRUCache(2)

  lru.put(1, 1)
  lru.put(2, 2)
  expect(lru.get(1)).toBe(1)

  lru.put(3, 3)
  expect(lru.get(2)).toBe(-1)
  lru.put(4, 4)
  expect(lru.get(1)).toBe(-1)
  expect(lru.get(3)).toBe(3)
  expect(lru.get(4)).toBe(4)
})

it('should work 2', () => {
  const lru = new LRUCache(2)

  lru.put(2, 1)
  lru.put(1, 1)
  lru.put(2, 3)
  lru.put(4, 1)

  expect(lru.get(1)).toBe(-1)
  expect(lru.get(2)).toBe(3)
})
