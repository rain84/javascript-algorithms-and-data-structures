import { getType, toAlphabetKey } from './string'

it.each(
  //  prettier-ignore
  [
    [0, 'a'], [25, 'z'], [26, 'ba'], [675, 'zz'], [676, 'baa'],
  ]
)('should work %#', (input, output) => {
  expect(toAlphabetKey(input)).toBe(output)
})

it.each(
  //  prettier-ignore
  [
    ['1234', 'digit'],
    ['UPPERCASE', 'upperCase'],
    ['lowercase',  'lowerCase'],
    ['mIxEd', ''],
    ['1234mixed', ''],
    ['@#$', ''],
  ]
)('should work %#', (input, output) => {
  expect(getType(input)).toBe(output)
})
