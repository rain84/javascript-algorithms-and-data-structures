import { toAlphabetKey } from './string'

it.each(
  //  prettier-ignore
  [
    [0, 'a'], [25, 'z'], [26, 'ba'], [675, 'zz'], [676, 'baa'],
  ]
)('should work %#', (input, output) => {
  expect(toAlphabetKey(input)).toBe(output)
})
