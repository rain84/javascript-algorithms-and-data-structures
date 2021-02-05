export class DoubleLinkedList {
	#first = null
	#last = null

	constructor([value, ...restValues]) {
		this.#first = DoubleLinkedList.#node({ value })
		this.#last = this.#first

		if (restValues.length) {
			this.#last = restValues.reduce(
				(prev, value) => (prev.next = DoubleLinkedList.#node({ value, prev })),
				this.#first
			)
		}
	}

	static #node = ({ value, prev = null, next = null }) => ({ value, prev, next })

	get first() {
		return this.#first.value
	}

	set first(value) {
		this.#first.value = value
	}

	get last() {
		return this.#last.value
	}

	set last(value) {
		this.#last.value = value
	}

	push(value) {
		const nextLast = DoubleLinkedList.#node({ value, prev: this.#last })
		this.#last.next = nextLast
		this.#last = nextLast
	}

	pop() {
		const last = this.#last

		this.#last = last.prev
		this.#last.next = null
		last.next = last.prev = null

		return last.value
	}

	shift() {
		const first = this.#first

		this.#first = first.next
		this.#first.prev = null
		first.next = first.prev = null

		return first.value
	}

	unshift(value) {
		const nextFirst = DoubleLinkedList.#node({ value, next: this.#first })
		this.#first.prev = nextFirst
		this.#first = nextFirst
	}

	*[Symbol.iterator]() {
		let pointer = this.#first

		do yield pointer.value
		while ((pointer = pointer.next))

		pointer = null
	}

	toString() {
		return [...this].toString()
	}
}
