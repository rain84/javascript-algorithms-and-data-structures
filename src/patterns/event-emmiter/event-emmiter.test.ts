import { EventEmitter } from './event-emmiter'
import { ClassA, ClassB, EVENT_TYPES } from './aux-classes'

describe('Patterns: EventEmitter', () => {
  let instanceA: ClassA, instanceB: ClassB

  beforeEach(() => {
    instanceA = new ClassA()
    instanceB = new ClassB()
  })

  afterEach(() => {
    instanceA.off()
    instanceB.off()
  })

  test('should initialize', () => {
    expect(instanceA.counter).toBe(0)
    expect(instanceB.counter).toBe(0)
  })

  xtest('should successfully remove callbacks after each test', () => {})

  test('should not trigger on unknown event', () => {
    instanceB.trigger('unknown event')
    expect(instanceA.counter).toBe(0)
  })

  test('should have .on() with one cb', () => {
    instanceB.trigger(EVENT_TYPES.INCREMENT)
    expect(instanceA.counter).toBe(1)
    expect(instanceB.counter).toBe(2)

    instanceB.trigger(EVENT_TYPES.INCREMENT)
    instanceB.trigger(EVENT_TYPES.INCREMENT)
    expect(instanceA.counter).toBe(3)
    expect(instanceB.counter).toBe(6)

    instanceB.trigger(EVENT_TYPES.DECREMENT)
    expect(instanceA.counter).toBe(2)
    expect(instanceB.counter).toBe(4)

    instanceB.trigger(EVENT_TYPES['A:INCREMENT'])
    expect(instanceA.counter).toBe(3)
    expect(instanceB.counter).toBe(5)
  })

  test("should have .on() with multiple cb's and return unsubscribe function", () => {
    instanceA.off()
    instanceA.trigger(EVENT_TYPES.INCREMENT)
    expect(instanceA.counter).toBe(0)

    const unsubscribe = instanceA.on(
      EVENT_TYPES.INCREMENT,
      () => instanceA.counter++,
      () => (instanceA.counter += 2),
      () => (instanceA.counter += 4)
    )

    instanceA.trigger(EVENT_TYPES.INCREMENT)
    expect(instanceA.counter).toBe(7)
    instanceA.trigger(EVENT_TYPES.INCREMENT)
    expect(instanceA.counter).toBe(14)

    unsubscribe()
    instanceA.trigger(EVENT_TYPES.INCREMENT)
    expect(instanceA.counter).toBe(14)
  })

  test("should have .off() method, which will remove all cb's", () => {
    instanceB.trigger(EVENT_TYPES.INCREMENT)
    expect(instanceA.counter).toBe(1)
    expect(instanceB.counter).toBe(2)

    instanceA.off()
    instanceB.off()
    instanceB.trigger(EVENT_TYPES.INCREMENT)
    instanceB.trigger(EVENT_TYPES.INCREMENT)

    expect(instanceA.counter).toBe(1)
    expect(instanceB.counter).toBe(2)
  })

  test("should have .off() with multiple cb's", () => {
    instanceA.off()
    instanceB.off()
    instanceA.trigger(EVENT_TYPES.INCREMENT)
    expect(instanceA.counter).toBe(0)

    const inc = {
      first: () => instanceA.counter++,
      second: () => (instanceA.counter += 2),
      third: () => (instanceA.counter += 4),
    }
    const unsubscribe = instanceA.on(
      EVENT_TYPES.INCREMENT,
      inc.first,
      inc.second,
      inc.third
    )

    instanceA.trigger(EVENT_TYPES.INCREMENT)
    expect(instanceA.counter).toBe(7)
    instanceA.off(EVENT_TYPES.INCREMENT, inc.second, inc.third)
    instanceA.trigger(EVENT_TYPES.INCREMENT)
    expect(instanceA.counter).toBe(8)

    unsubscribe()
    instanceA.trigger(EVENT_TYPES.INCREMENT)
    expect(instanceA.counter).toBe(8)
  })

  test('should have .once() method', () => {
    instanceB.trigger(EVENT_TYPES.ONLY_ONCE)
    expect(instanceA.counter).toBe(100)
    expect(instanceB.counter).toBe(200)

    instanceB.trigger(EVENT_TYPES.ONLY_ONCE)
    expect(instanceA.counter).toBe(100)
    expect(instanceB.counter).toBe(200)
  })
})
