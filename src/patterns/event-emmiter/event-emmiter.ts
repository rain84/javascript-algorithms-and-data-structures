type TCallback = (data?: unknown) => void

export abstract class EventEmitter {
	private static events = new Map<string, TCallback[]>()

	trigger(event: string, data?: unknown) {
		if (!EventEmitter.events.has(event)) return

		EventEmitter.events.get(event)?.forEach((cb) => cb(data))
	}

	on(event: string, cb: TCallback) {
		const callbacks = EventEmitter.events.get(event) ?? []
		callbacks.push(cb)

		EventEmitter.events.set(event, callbacks)

		return () => this.off(event, cb)
	}

	off(event: string, cb: TCallback) {
		const callbacks = EventEmitter.events.get(event) ?? []
		const index = callbacks.indexOf(cb)

		if (index === -1) return

		callbacks.splice(index, 1)
		EventEmitter.events.set(event, callbacks)
	}

	once(event: string, cb: TCallback) {
		const wrapper = (...args: unknown[]) => {
			cb(...args)
			this.off(event, wrapper)
		}

		this.on(event, wrapper)
	}
}
