import { random } from '../utils/array'
import { PriorityQueue } from './priority_queue'

let queue: PriorityQueue<string>
const data = [...'hello world!']
let randomPriority: number[]

beforeEach(() => {
  randomPriority = random(data.length, 1000)
  queue = new PriorityQueue<string>()
  data.forEach((char, i) => queue.enqueue(char, randomPriority[i]))
})

it('should have "queue()" and "dequeue()"', () => {
  const values: string[] = []
  let val: string | undefined

  while ((val = queue.dequeue()) !== undefined) values.push(val)

  const sortedValues = randomPriority
    .map((val, i) => ({ val, i }))
    .sort((a, b) => a.val - b.val)
    .map(({ i }) => data[i])

  expect(values).toMatchObject(sortedValues)
})
