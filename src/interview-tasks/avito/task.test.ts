import { findPairs4 } from './task'

describe('Interview tasks: Avito', () => {
  test('findPairs4', () => {
    const data = [-1, 0, 1, 3, 4]
    let target = 5
    let result = findPairs4(data, target)
    ;(result as [number, number]).sort()
    expect(result).toMatchObject([1, 4])

    target = 9
    result = findPairs4(data, target)
    expect(result).toBeFalsy()
  })
})
