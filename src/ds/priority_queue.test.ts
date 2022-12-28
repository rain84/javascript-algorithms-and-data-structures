import { random } from '../utils/array'
import { PriorityQueue } from './priority_queue'

let queue: PriorityQueue
const data = [...'hello world!']
let randomPriorityData: Map<number, string>

beforeEach(() => {
  randomPriorityData = new Map(
    random(data.length, 1000).map((priority, i) => [priority, data[i]])
  )
  queue = new PriorityQueue()
  for (const [priority] of randomPriorityData) {
    queue.enqueue(priority)
  }
})

it('should have "queue()" and "dequeue()"', () => {
  const values: string[] = []
  let val: MaybeUndefined<number>

  while ((val = queue.dequeue()) !== undefined)
    values.push(randomPriorityData.get(val) ?? '')

  const sortedValues = [...randomPriorityData.entries()]
    .sort(([a], [b]) => a - b)
    .map(([, val]) => val)

  expect(values).toMatchObject(sortedValues)
})
