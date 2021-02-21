import { EventEmitter } from './event-emmiter'

enum EVENT_TYPES {
	'INCREMENT' = 'INCREMENT',
	'A:INCREMENT' = 'A:INCREMENT',
	'DECREMENT' = 'DECREMENT',
	'SET' = 'SET'
}

class A extends EventEmitter {
	private _counter = 0

	get counter() {
		return this._counter
	}

	constructor() {
		super()

		this.on(EVENT_TYPES.INCREMENT, () => this._counter++)
		this.on(EVENT_TYPES['A:INCREMENT'], () => this._counter++)
		this.on(EVENT_TYPES.DECREMENT, () => this._counter--)
		this.once(EVENT_TYPES.SET, () => (this._counter = 100))
	}
}

class B extends EventEmitter {
	private _counter = 0

	get counter() {
		return this._counter
	}
	constructor() {
		super()

		this.on(EVENT_TYPES.INCREMENT, () => this._counter++)
		this.on(EVENT_TYPES['A:INCREMENT'], () => this._counter++)
		this.on(EVENT_TYPES.DECREMENT, () => this._counter--)
		this.once(EVENT_TYPES.SET, () => (this._counter = 100))
	}
}

describe('EventEmitter', () => {
	let instanceA: A, instanceB: B

	beforeEach(() => {
		instanceA = new A()
		instanceB = new B()
	})

	test('should initialize', () => {
		expect(instanceA.counter).toBe(0)
	})

	test('should not change on unknown event', () => {
		instanceB.trigger('unknown event')
		expect(instanceA.counter).toBe(0)
	})

	test('should work on-event', () => {
		instanceB.trigger('')
		expect(instanceA.counter).toBe(0)
	})
	test('should work off-event', () => {
		instanceB.trigger('unknown event')
		expect(instanceA.counter).toBe(0)
	})
	test('should work once-event', () => {
		instanceB.trigger('unknown event')
		expect(instanceA.counter).toBe(0)
	})
})
