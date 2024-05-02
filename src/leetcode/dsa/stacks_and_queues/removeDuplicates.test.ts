import { removeDuplicates } from './removeDuplicates'

it('should work 1', () => {
  expect(removeDuplicates('abbaca')).toBe('ca')
})

it('should work 2', () => {
  expect(removeDuplicates('azxxzy')).toBe('ay')
})
