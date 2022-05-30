import { hasTarget } from './sum_sub_array'

xdescribe('Has target', () => {
  test('should return true', () => {
    expect(hasTarget([1, 1, 3, 1, 4, 23], 8)).toBeTruthy()
    expect(hasTarget([1, 1, 3, 1, 4, 23], 23)).toBeTruthy()
    expect(hasTarget([1, 1, 3, 1, 4, 23], 3)).toBeTruthy()
    expect(hasTarget([1, 1, 3, 1, 4, 23], 5)).toBeTruthy()
  })

  test('should return false', () => {
    expect(hasTarget([1, 1, 3, 1, 4, 23], 7)).toBeFalsy()
    expect(hasTarget([1, 1, 3, 1, 4, 23], 12)).toBeFalsy()
    expect(hasTarget([1, 1, 3, 1, 4, 23], 15)).toBeFalsy()
    expect(hasTarget([1, 1, 3, 1, 4, 23], 30)).toBeFalsy()
  })
})
