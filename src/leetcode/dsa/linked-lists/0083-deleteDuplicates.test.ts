import { createLinkedList } from '../utils'
import { deleteDuplicates } from './0083-deleteDuplicates'

it('should work 1', () => {
  const input = createLinkedList([1, 1, 2])
  const output = createLinkedList([1, 2])

  expect(deleteDuplicates(input)).toMatchObject(output)
})

it('should work 2', () => {
  const input = createLinkedList([1, 1, 2, 3, 3])
  const output = createLinkedList([1, 2, 3])

  expect(deleteDuplicates(input)).toMatchObject(output)
})
