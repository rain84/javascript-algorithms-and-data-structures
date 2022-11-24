import { getItems } from './findKItemsInArray'

// Find K items in array
const IO = new Map<[number[], number], number[]>([
  [
    [[1, 23, 12, 9, 30, 2, 50], 3],
    [23, 30, 50],
  ],
])

const comparator = (a: number, b: number) => (a < b ? -1 : 1)

it('should work', () => {
  IO.forEach((output, input) =>
    expect(getItems(...input)!.sort(comparator)).toMatchObject(output)
  )
})
