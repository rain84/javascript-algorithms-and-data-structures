type TCallback = (...payload: unknown[]) => void
type TCallbacksMap = Map<EventEmitter, TCallback>
type TEventsMap = Map<string, TCallbacksMap>

// TODO:    1) add support of the multiple callback
//          2) try to find solution to play well with WeakMap and GC
export abstract class EventEmitter {
	//  events design:
	//  Map({
	//      'eventName': Map({
	//          [instanceof EventEmitter]: TCallback
	//      })
	//  })
	private static events: TEventsMap = new Map()

	static getEventCbs(event: string) {
		return EventEmitter.events.get(event)
	}

	trigger(event: string, ...payload: unknown[]) {
		const callbacks = EventEmitter.events.get(event)

		if (!callbacks) return

		for (const [self, cb] of callbacks) cb.apply(self, payload)
	}

	on(event: string, cb: TCallback) {
		const callbacks = EventEmitter.events.get(event) ?? new Map()

		callbacks.set(this, cb)
		EventEmitter.events.set(event, callbacks)

		return () => this.off(event)
	}

	off(event?: string) {
		if (event) {
			EventEmitter.deleteCallback(event, this)
		} else {
			for (const [event] of EventEmitter.events) {
				EventEmitter.deleteCallback(event, this)
			}
		}
	}

	once(event: string, cb: TCallback) {
		const wrapper: TCallback = (...args) => {
			cb(...args)
			this.off(event)
		}

		this.on(event, wrapper)
	}

	private static deleteCallback(event: string, self: EventEmitter) {
		const callbacks = EventEmitter.events.get(event)

		if (!callbacks) return

		callbacks.delete(self)

		if (callbacks.size === 0) EventEmitter.events.delete(event)
		else EventEmitter.events.set(event, callbacks)
	}
}
