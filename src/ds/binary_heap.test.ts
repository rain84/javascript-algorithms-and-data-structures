import { random } from '../utils/array'
import { textToWords } from '../utils/string'
import { BinaryHeap } from './binary_heap'

type minmax = 'min' | 'max'
type TValues = {
  max: number[]
  min: number[]
}

interface IRandomData {
  key: number
  val: string
}

let heap: Record<minmax, MaybeNull<BinaryHeap>> = {
  max: null,
  min: null,
}
let sorted: Record<minmax, MaybeNull<number[]>> = {
  max: null,
  min: null,
}
let input = [...new Set(random(10, 100))]

beforeEach(() => {
  heap.max = BinaryHeap.createMax().fill(input)
  heap.min = BinaryHeap.createMin().fill(input)
  sorted.min = [...input]
  sorted.max = [...input]
  sorted.min.sort((a, b) => a - b)
  sorted.max.sort((a, b) => b - a)
})

it('Binary heaps should have "insert()" and "remove()"', () => {
  const values: TValues = {
    max: [],
    min: [],
  }

  while (heap.max?.size) values.max.push(heap.max?.remove()!)
  while (heap.min?.size) values.min.push(heap.min?.remove()!)

  expect(values.max).toMatchObject(sorted.max!)
  expect(values.min).toMatchObject(sorted.min!)
})

it('should have "size"-getter', () => {
  expect(heap.max?.size).toBe(input.length)
  expect(heap.min?.size).toBe(input.length)
})

it('should implement [Symbol.iterator]', () => {
  expect([...heap.max!]).toMatchObject(sorted.max!)
  expect([...heap.max!]).toMatchObject(sorted.max!)
  expect([...heap.min!]).toMatchObject(sorted.min!)
  expect([...heap.min!]).toMatchObject(sorted.min!)
})

it('should work with a complex data structure', () => {
  const words = textToWords(
    'Проверяющая  сторона (WebAuthn Relying Party) — web-сервер — хранит открытый ключ, связанный с аккаунтом пользователя, проверяет корректность подписи своих запросов закрытым ключом, хранящимся в аутентификаторе.'
  )
  words.length = 10
  const randomData: IRandomData[] = getRandomComplexData(words)

  const heap = {
    min: BinaryHeap.createMin<IRandomData>(({ key }) => key),
    max: BinaryHeap.createMax<IRandomData>(({ key }) => key),
  }
  heap.min.fill(randomData)
  heap.max.fill(randomData)

  expect([...heap.min].map(({ val }) => val)).toMatchObject(words)

  words.reverse()
  expect([...heap.max].map(({ val }) => val)).toMatchObject(words)
})

function getRandomComplexData(words: string[]): IRandomData[] {
  const randomArr = random(10, 10000)
  const sortedMap = [...randomArr]
    .sort((a, b) => a - b)
    .reduce<Record<string, number>>((acc, val, key) => ((acc[val] = key), acc), {})

  const randomData = randomArr.map((key) => ({
    key,
    val: words[sortedMap[key]],
  }))

  return randomData
}
