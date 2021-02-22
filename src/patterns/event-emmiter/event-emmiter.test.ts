import { EventEmitter } from './event-emmiter'
import { ClassA, ClassB, EVENT_TYPES } from './aux-classes'

describe('EventEmitter', () => {
	let instanceA: ClassA, instanceB: ClassB
	let incCbs: ReturnType<typeof EventEmitter.getEventCbs>

	beforeEach(() => {
		instanceA = new ClassA()
		instanceB = new ClassB()
		incCbs = EventEmitter.getEventCbs(EVENT_TYPES.INCREMENT)
	})

	afterEach(() => {
		instanceA.off()
		instanceB.off()
		incCbs = undefined
	})

	test('should initialize', () => {
		expect(instanceA.counter).toBe(0)
		expect(instanceB.counter).toBe(0)
		expect(incCbs?.size).toBe(2)
	})

	test('should successfully remove callbacks after each test', () => {
		expect(incCbs?.size).toBe(2)
	})

	test('should not change on unknown event', () => {
		instanceB.trigger('unknown event')
		expect(instanceA.counter).toBe(0)
		expect(incCbs?.size).toBe(2)
	})

	xtest('should adjust callbacks on removing their hosts by GC', () => {
		expect(incCbs?.size).toBe(2)
	})

	test('should work on-event', () => {
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

	test('should work off-event', () => {
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

	test('should work once-event', () => {
		instanceB.trigger(EVENT_TYPES.ONLY_ONCE)
		expect(instanceA.counter).toBe(100)
		expect(instanceB.counter).toBe(200)

		instanceB.trigger(EVENT_TYPES.ONLY_ONCE)
		expect(instanceA.counter).toBe(100)
		expect(instanceB.counter).toBe(200)
	})
})
