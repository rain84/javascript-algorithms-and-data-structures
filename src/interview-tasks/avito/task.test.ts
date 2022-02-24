import { findPair3, findPair4, findPair5 } from './task'

describe('Interview tasks: Avito', () => {
  test('findPair3', () => {
    const data = [-1, 0, 1, 3, 4]
    let target = 5
    let result = findPair3(data, target)
    ;(result as [number, number]).sort()
    expect(result).toMatchObject([1, 4])

    target = 9
    result = findPair3(data, target)
    expect(result).toBeFalsy()
  })

  test('findPair4', () => {
    const data = [-1, 0, 1, 3, 4]
    let target = 5
    let result = findPair4(data, target)
    ;(result as [number, number]).sort()
    expect(result).toMatchObject([1, 4])

    target = 9
    result = findPair4(data, target)
    expect(result).toBeFalsy()
  })

  test('findPair5', () => {
    const data = [-1, 0, 1, 3, 4]
    let target = 5
    let result = findPair5(data, target)
    ;(result as [number, number]).sort()
    expect(result).toMatchObject([1, 4])

    target = 9
    result = findPair5(data, target)
    expect(result).toBeFalsy()
  })
})
