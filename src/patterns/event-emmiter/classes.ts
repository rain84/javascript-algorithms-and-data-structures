import { EventEmitter } from './event-emmiter'

export enum EVENT_TYPES {
	'INCREMENT' = 'INCREMENT',
	'A:INCREMENT' = 'A:INCREMENT',
	'DECREMENT' = 'DECREMENT',
	'SET' = 'SET'
}

export class A extends EventEmitter {
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

export class B extends EventEmitter {
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
