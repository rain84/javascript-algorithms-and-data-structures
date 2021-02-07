const node = ({ val, next = null }) => ({ val, next })

export class SingleLinkedList {
	#head = null
	#tail = null
	#length = 0

	constructor(...values) {
		if (values[0] === undefined) return this

		this.push.apply(this, values)
	}

	get length() {
		return this.#length
	}

	get head() {
		return this.#head
	}

	get tail() {
		return this.#tail
	}

	// push(val, ...values) {
	// 	if (!val) return

	// 	this.#tail = node({ val })
	// 	this.#length++

	// 	if (!this.#head) this.#head = this.#tail
	// 	if (values.length) this.push(values)
	// }

	push(...values) {
		if (!values.length) return

		if (this.#head === null) {
			const val = values.shift()
			this.#head = this.#tail = node({ val })
			this.#length++

			if (!values.length) return
		}

		values.reduce((prev, val) => {
			this.#length++
			this.#tail = node({ val })
			prev.next = this.#tail
			return this.#tail
		}, this.#tail)
	}

	pop() {
		if (!this.#length) return

		const { val } = this.#tail

		if (this.#length === 1) {
			this.#head = this.#tail = null
		} else {
			let node = this.#head
			while (node?.next !== this.#tail) {
				node = node.next
			}
			this.#tail = node
			this.#tail.next = null
		}

		this.#length--
		return val
	}

	shift() {
		if (!this.#length) return

		const { val } = this.#head

		if (this.#length === 1) {
			this.#head = this.#tail = null
		} else {
			this.#head = this.#head.next
		}

		this.#length--

		return val
	}

	unshift(...values) {
		if (this.#head === null) {
			const val = values.shift()
			this.#head = this.#tail = node({ val })
			this.#length++

			if (!values.length) return
		}

		values.reduce((prev, val) => {
			this.#length++
			this.#tail = node({ val })
			prev.next = this.#tail
			return this.#tail
		}, this.#tail)
	}

	append(list) {
		this.push(...list)
	}

	*[Symbol.iterator]() {
		let node = this.#head
		while (node !== null) {
			yield node.val
			node = node.next
		}
	}
}
