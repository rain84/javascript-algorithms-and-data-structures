const makeNode = ({ val, next = null }) => ({ val, next })

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

	push(val, ...values) {
		if (!val) return

		// TODO:  maybe there is a more elegant solution
		const node = makeNode({ val })
		if (this.#tail) {
			this.#tail.next = node
			this.#tail = this.#tail.next
		} else this.#tail = node

		this.#length++

		if (!this.#head) this.#head = this.#tail
		if (values.length) this.push.apply(this, values)
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

	unshift(val, ...values) {
		if (!val) return

		const node = makeNode({ val, next: this.#head })
		this.#head = node
		if (!this.#tail) this.#tail = this.#head
		this.#length++

		if (values.length) this.unshift.apply(this, values)
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
