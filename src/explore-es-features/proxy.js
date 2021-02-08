export class ProxySuccessor {
	name = 'ProxySuccessor'
	#instance = {}

	constructor() {
		this.#instance = new Proxy(this.#instance, {
			get(target, key, receiver) {
				if (key === Symbol.iterator) return target[Symbol.iterator].bind(target)
				// else if (!Number.isNaN(+key))
				//     return target.get

				return Reflect.get(target, key, receiver)
			}
		})
		return this.#instance
	}

	getName() {
		return this.name
	}

	get(index) {
		return `Number ${index}`
	}
}
