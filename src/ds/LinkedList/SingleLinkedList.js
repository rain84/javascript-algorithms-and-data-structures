const makeNode = ({ val, next = null }) => ({ val, next })

export class SingleLinkedList {
	head = null
	tail = null
	length = 0

	constructor(...values) {
		if (!values.length) return this
		this.push.apply(this, values)
	}

	get(index) {
		let node = this.#getNodeNth(index)
		if (!node) return

		return node.val
	}

	set(index, val) {
		let node = this.#getNodeNth(index)
		if (!node) return false
		node.val = val

		return true
	}

	push(...values) {
		this.insert(this.length, values)
	}

	pop() {
		if (!this.length) return

		const { val } = this.tail

		if (this.length === 1) {
			this.head = this.tail = null
		} else {
			const node = this.#getNodeBefore(this.tail)
			this.tail = node
			this.tail.next = null
		}

		this.length--
		return val
	}

	shift() {
		if (!this.length) return

		const { val } = this.head

		if (this.length === 1) {
			this.head = this.tail = null
		} else {
			this.head = this.head.next
		}

		this.length--

		return val
	}

	unshift(...values) {
		this.insert(0, values)
	}

	insert(index, values) {
		if (values instanceof SingleLinkedList) {
			return this.insert(index, [...values])
		}

		const isOutOfRange = index < 0 || this.length < index
		const isEmptyValues = !values?.length
		const { length } = values
		let head, tail

		if (isOutOfRange || isEmptyValues) return

		head = tail = makeNode({ val: values.shift() })
		for (const val of values) {
			const node = makeNode({ val })
			tail = tail.next = node
		}

		if (this.length === 0) {
			Object.assign(this, { head, tail, length })
		} else {
			const prevNode = this.#getNodeNth(index - 1)

			// is not starting node
			if (prevNode) {
				tail.next = prevNode.next
				prevNode.next = head
			} else {
				tail.next = this.head
				this.head = head
			}

			if (this.length === index) this.tail = tail
			this.length += length
		}
	}

	append(list) {
		this.push(...list)
	}

	prepend(list) {
		this.unshift(...list)
	}

	#getNodeNth(index) {
		if (index < 0 || this.length < index) return null

		let node = this.head
		while (index--) node = node.next

		return node
	}

	#getNodeBefore(nodeNext) {
		if (!nodeNext) return null

		let node = this.head
		while (node.next !== nodeNext) node = node.next

		return node
	}

	*[Symbol.iterator]() {
		let node = this.head
		while (node !== null) {
			yield node.val
			node = node.next
		}
	}
}
