import { random } from '../utils/array'
import { PriorityQueue } from './priority_queue'

describe('DS: Priority Queue', () => {
  let queue: PriorityQueue<string>
  const data = [...'hello world!']
  let randomPriority: number[]

  beforeEach(() => {
    randomPriority = random(data.length, 1000)
    queue = new PriorityQueue<string>()
    data.forEach((char, i) => queue.enqueue(char, randomPriority[i]))
  })

  test('should have "queue()" and "dequeue()"', () => {
    const values = []
    let val: string

    while ((val = queue.dequeue()) !== undefined) values.push(val)

    const sortedValues = randomPriority
      .map((val, i) => ({ val, i }))
      .sort((a, b) => a.val - b.val)
      .map(({ i }) => data[i])

    expect(values).toMatchObject(sortedValues)
  })
})
