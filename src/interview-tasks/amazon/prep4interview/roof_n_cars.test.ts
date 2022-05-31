import { getMinRoof } from './roof_n_cars'

describe('Interview: Amazon. Roof_n_Cars', () => {
  const IO = new Map<[number[], number], number>([
    [[[2, 5, 6, 12], 3], 5],
    [[[12, 5, 6, 2], 3], 5],
    [[[2, 5, 6, 9, 12], 4], 8],
  ])

  test('getMinRoof shoul work', () => {
    IO.forEach((output, input) => expect(getMinRoof(...input)).toBe(output))
  })
})
