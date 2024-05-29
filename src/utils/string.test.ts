import { toAlphabetKey } from './string'

it('toAlphabetKey() should work 1', () => {
  expect(toAlphabetKey(0)).toBe('a')
  expect(toAlphabetKey(25)).toBe('z')
  expect(toAlphabetKey(26)).toBe('ba')
  expect(toAlphabetKey(675)).toBe('zz')
  expect(toAlphabetKey(676)).toBe('baa')
})
