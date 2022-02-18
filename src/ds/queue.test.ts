import { Queue } from './queue'

describe('DS: Queue', () => {
  let queue: Queue<string>

  beforeEach(() => {
    queue = new Queue(...'abcde')
  })

  test('Should have ctor, "isEmpty()" & "size"', () => {
    expect(queue.size).toBe(5)
    expect(queue.isEmpty()).toBeFalsy()

    queue = new Queue()
    expect(queue.size).toBe(0)
    expect(queue.isEmpty()).toBeTruthy()
  })

  test('Should have "enqueue()" & "dequeue()"', () => {
    expect((queue.enqueue('z'), queue.size)).toBe(6)
    expect(queue.dequeue()).toBe('a')
    expect(queue.size).toBe(5)

    queue.dequeue(), queue.dequeue(), queue.dequeue(), queue.dequeue()
    expect(queue.dequeue()).toBe('z')
    expect(queue.size).toBe(0)
    expect(queue.isEmpty()).toBeTruthy()
  })
})
