import { radixSort } from './radixSort'

describe('Sorting: Radix sort', () => {
  test('positive inputs', () => {
    const array = [72, 99, 84, 95, 22, 54, 66, 80, 21, 5]
    expect(radixSort(array)).toEqual([5, 21, 22, 54, 66, 72, 80, 84, 95, 99])
  })

  // TODO: to fix behaviour of the radix sort
  xtest('positive and negative inputs', () => {
    const array = [72, 99, 84, -100, 95, 22, 54, -42, 66, 80, 21, 5]
    expect(radixSort(array)).toEqual([
      -100, -42, 5, 21, 22, 54, 66, 72, 80, 84, 95, 99,
    ])
  })
})
