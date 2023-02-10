import { Set } from './set'

let set = new Set<number>()

beforeEach(() => {
  set.clear()
})

it('Set should have [Symbol.toStringTag]', () => {
  expect(set[Symbol.toStringTag]).toBe('CustomSet')
})

it('Set should have .size', () => {
  expect(set.size).toBe(0)

  set = new Set(new Array(30).fill(0).map((_, i) => i))
  expect(set.size).toBe(30)
})

it('Set should have .has()', () => {
  expect(set.has(7)).toBeFalsy()
  expect(set.add(7).has(7)).toBeTruthy()
})

it('Set should have .clear()', () => {
  set.add(1).add(2).add(3).clear()
  expect(set.size).toBe(0)
})

it('Set should have .add()', () => {
  let i = 10
  do set.add(i).add(i).add(-i).add(-i)
  while (--i)

  expect(set.size).toBe(20)
  expect(set.has(10)).toBeTruthy()
  expect(set.has(-10)).toBeTruthy()
  expect(set.has(11)).toBeFalsy()
  expect(set.has(-11)).toBeFalsy()
})

it('Set should have .delete()', () => {
  expect(set.delete(7)).toBeFalsy()
  expect(set.delete(-9)).toBeFalsy()

  set.add(7).add(-7).add(9).add(-9)

  expect(set.delete(7)).toBeTruthy()
  expect(set.delete(7)).toBeFalsy()
  expect(set.delete(-9)).toBeTruthy()
  expect(set.delete(-9)).toBeFalsy()
})

it('Set should have .forEach()', () => {
  const res: number[] = []
  const thisArgs: Set<number>[] | {}[] = []
  const context = {}

  set = new Set([1, 2, 3])
  set.forEach((v1, v2, thisArg) => {
    res.push(v1, v2)
    thisArgs.push(thisArg)
  })

  expect(res.length).toBe(6)
  expect(res).toMatchObject([1, 1, 2, 2, 3, 3])
  expect(thisArgs.every((x) => x === set)).toBeTruthy()

  thisArgs.length = 0
  set.forEach((_, __, thisArg) => {
    thisArgs.push(thisArg)
  }, context)

  expect(thisArgs.every((x) => x === context)).toBeTruthy()
})

it('Set should have *[Symbol.iterator]()', () => {
  set = new Set([1, 1, 2, 2, 3, 3])
  expect([...set]).toMatchObject([1, 2, 3])
})

it('Set should have .entries()', () => {
  expect([...new Set([1, 2, 3]).entries()]).toMatchObject([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
})

it('Set should have .keys()', () => {
  expect([...new Set([1, 2, 3]).keys()]).toMatchObject([1, 2, 3])
})

it('Set should have .values()', () => {
  expect([...new Set([1, 2, 3]).values()]).toMatchObject([1, 2, 3])
})

it('Set should have .delete()', () => {
  expect([...new Set([1, 2, 3]).values()]).toMatchObject([1, 2, 3])
})
