import { isPangram } from './isPangram'

it('is pangram', function () {
  expect(isPangram('The quick brown fox jumps over the lazy dog.')).toBeTruthy()
})

it('is not pangram', function () {
  expect(isPangram('This is not a pangram.')).toBeFalsy()
})
