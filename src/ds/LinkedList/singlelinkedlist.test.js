import { SingleLinkedList } from './singlelinkedlist.js'

describe('SingleLinkedList', () => {
	let list

	beforeEach(() => {
		const values = [1, 2, 3]
		list = new SingleLinkedList(...values)
	})

	afterEach(() => (list = null))

	test('should create empty SLT', () => {
		list = new SingleLinkedList()

		expect(list.head).toBeNull()
		expect(list.tail).toBeNull()
		expect(list.length).toBe(0)
	})

	test('should push 1 value to the empty SLT', () => {
		list = new SingleLinkedList()
		list.push(42)

		expect([...list]).toMatchObject([42])
		expect(list.head.val).toBe(42)
		expect(list.head.next).toBe(null)
		expect(list.head === list.tail).toBeTruthy()
		expect(list.length).toBe(1)
	})

	test('should create SLT from array of values', () => {
		const expexted = {
			val: 1,
			next: {
				val: 2,
				next: {
					val: 3,
					next: null
				}
			}
		}

		expect(list.head).toMatchObject(expexted)
		expect(list.head.val).toBe(1)
		expect(list.tail.val).toBe(3)
	})

	test('should have length', () => {
		expect(list.length).toBe(3)
	})

	test('should push', () => {
		list.push(4)
		expect(list.length).toBe(4)
		expect(list.tail.val).toBe(4)

		list.push(5, 6)
		expect(list.length).toBe(6)
		expect(list.tail.val).toBe(6)
	})

	test('should pop', () => {
		expect([...list]).toMatchObject([1, 2, 3])
		expect(list.pop()).toBe(3)
		expect(list.length).toBe(2)
		expect(list.pop()).toBe(2)
		expect(list.length).toBe(1)
		expect(list.pop()).toBe(1)
		expect(list.length).toBe(0)
		expect(list.pop()).toBeUndefined()
		expect(list.pop()).toBeUndefined()
		expect(list.length).toBe(0)
		expect(list.head === list.tail).toBeTruthy()
	})

	test('should shift', () => {
		expect(list.shift()).toBe(1)
		expect(list.length).toBe(2)

		list.shift()
		list.shift()
		expect(list.length).toBe(0)
		expect(list.shift()).toBeUndefined()
		expect(list.length).toBe(0)
		expect(list.head === list.tail).toBeTruthy()
	})

	// test('should unshift', () => {
	// 	list.unshift(6)
	// 	expect(list.length).toBe(4)
	// 	expect(list.head.val).toBe(6)

	// 	list.unshift(5, 4)
	// 	expect(list.length).toBe(6)
	// 	expect(list.head.val).toBe(4)
	// 	expect([...list]).toMatchObject([4, 5, 6, 1, 2, 3])
	// })

	test('should spread values', () => {
		expect([...list]).toMatchObject([1, 2, 3])
	})

	test('should append to empty SLL', () => {
		const list = new SingleLinkedList()
		const anotherList = new SingleLinkedList(4, 5, 6)
		list.append(anotherList)

		expect([...list]).toMatchObject([4, 5, 6])
		expect(list.tail.val).toBe(anotherList.tail.val)
		expect(list.tail).not.toBe(anotherList.tail)
		expect(list.length).toBe(3)
	})

	test('should append to not empty SLL', () => {
		const anotherList = new SingleLinkedList(4, 5, 6)
		list.append(anotherList)

		expect(list.length).toBe(6)
		expect([...list]).toMatchObject([1, 2, 3, 4, 5, 6])
		expect(list.tail.val).toBe(anotherList.tail.val)
		expect(list.tail).not.toBe(anotherList.tail)
	})
})
