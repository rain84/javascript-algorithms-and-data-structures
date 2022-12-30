import { random } from '../utils/array'
import { PriorityQueue } from './priority_queue'

type minmax = 'min' | 'max'

const queue: Record<minmax, MaybeNull<PriorityQueue>> = {
  min: null,
  max: null,
}
const data = [...'hello world!']
let randomPriorityData: Map<number, string>

beforeEach(() => {
  randomPriorityData = new Map(
    random(data.length, 1000).map((priority, i) => [priority, data[i]])
  )
  queue.min = PriorityQueue.createMin()
  queue.max = PriorityQueue.createMax()
  for (const [priority] of randomPriorityData) {
    queue.min.enqueue(priority)
    queue.max.enqueue(priority)
  }
})

it.each`
  type                   | values           | sortedValues
  ${'PriorityQueue.min'} | ${values('min')} | ${sortedValues('min')}
  ${'PriorityQueue.man'} | ${values('max')} | ${sortedValues('max')}
`(
  '$type should have "queue()" and "dequeue()"',
  ({ type, values, sortedValues }) => {
    expect(values).toMatchObject(sortedValues)
  }
)

it.todo('Add tests for PriorityQueue createMax() / createMin() with values')

function values(type: minmax) {
  const values: string[] = []
  let val: MaybeUndefined<number>

  while ((val = queue[type]?.dequeue()) !== undefined)
    values.push(randomPriorityData.get(val) ?? '')

  return values
}

function sortedValues(type: minmax) {
  return [...(randomPriorityData?.entries() ?? [])]
    .sort(([a], [b]) => (type === 'min' ? a - b : b - a))
    .map(([, val]) => val)
}
