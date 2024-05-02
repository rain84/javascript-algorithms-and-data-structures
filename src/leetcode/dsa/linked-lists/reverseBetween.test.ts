import { reverseBetween } from './reverseBetween.WIP'
import { createLinkedList, toArray } from './utils'

it('should work 1', () => {
  const input = [1, 2, 3, 4, 5]
  const output = [1, 4, 3, 2, 5]

  expect(toArray(reverseBetween(createLinkedList(input), 2, 4))).toMatchObject(output)
})

it('should work 2', () => {
  const input = [5, 1]
  const output = [1, 5]

  expect(toArray(reverseBetween(createLinkedList(input), 1, 2))).toMatchObject(output)
})

it('should work 3', () => {
  const input: number[] = []
  const output: number[] = []

  expect(toArray(reverseBetween(createLinkedList(input), 1, 2))).toMatchObject(output)
})
