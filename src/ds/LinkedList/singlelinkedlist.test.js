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

	test('should create SLT with values', () => {
		expect([...list]).toMatchObject([1, 2, 3])
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

	test('should unshift', () => {
		list.unshift(6)
		expect(list.length).toBe(4)
		expect(list.head.val).toBe(6)

		list.unshift(4, 5)
		expect(list.length).toBe(6)
		expect(list.head.val).toBe(4)
		expect([...list]).toMatchObject([4, 5, 6, 1, 2, 3])
		list.shift()
		list.shift()
		list.shift()
		expect([...list]).toMatchObject([1, 2, 3])
	})

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

	test('should get', () => {
		expect(list.get(-1)).toBeUndefined()
		expect(list.get(0)).toBe(1)
		expect(list.get(2)).toBe(3)
		expect(list.get(list.length)).toBeUndefined()

		list.push(4, 5, 6)
		expect(list.get(5)).toBe(6)

		list.unshift(-3, -2, -1)
		expect(list.get(0)).toBe(-3)
		expect(list.get(3)).toBe(1)
	})

	test('should set', () => {
		expect(list.set(-1, 42)).toBeFalsy()
		expect(list.set(0, 42)).toBeTruthy()
		expect(list.set(2, 43)).toBeTruthy()
		expect(list.set(3, 27)).toBeFalsy()
		expect(list.get(0)).toBe(42)
		expect(list.get(2)).toBe(43)
		expect(list.get(3)).toBeUndefined()
	})

	test('should insert values', () => {
		list.insert(-1, [])
		list.insert(0, [])
		list.insert(list.length, [])
		list.insert(list.length + 1, [])
		expect([...list]).toMatchObject([1, 2, 3])

		list.insert(list.length, [7, 8, 9])
		expect([...list]).toMatchObject([1, 2, 3, 7, 8, 9])

		list.insert(3, [4, 5, 6])
		expect([...list]).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9])

		list.insert(0, [-2, -1, 0])
		expect([...list]).toMatchObject([-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

		list.insert(3, [0.5])
		expect([...list]).toMatchObject([-2, -1, 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9])

		expect(list.length).toBe(13)
		list.insert(list.length, [10])
		expect([...list]).toMatchObject([-2, -1, 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	})

	test('should insert another SLL', () => {
		list.insert(-1, new SingleLinkedList())
		list.insert(0, new SingleLinkedList())
		list.insert(list.length, new SingleLinkedList())
		list.insert(list.length + 1, new SingleLinkedList())
		expect([...list]).toMatchObject([1, 2, 3])

		list.insert(list.length, new SingleLinkedList(...[7, 8, 9]))
		expect([...list]).toMatchObject([1, 2, 3, 7, 8, 9])

		list.insert(3, new SingleLinkedList(...[4, 5, 6]))
		expect([...list]).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9])

		list.insert(0, new SingleLinkedList(...[-2, -1, 0]))
		expect([...list]).toMatchObject([-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

		list.insert(3, new SingleLinkedList(...[0.5]))
		expect([...list]).toMatchObject([-2, -1, 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9])

		expect(list.length).toBe(13)
		list.insert(list.length, new SingleLinkedList(...[10]))
		expect([...list]).toMatchObject([-2, -1, 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	})

	test('should append another SLL', () => {
		list.append(new SingleLinkedList())
		expect([...list]).toMatchObject([1, 2, 3])

		list.append(new SingleLinkedList(...[7, 8, 9]))
		expect([...list]).toMatchObject([1, 2, 3, 7, 8, 9])
	})

	test('should prepend another SLL', () => {
		list.prepend(new SingleLinkedList())
		expect([...list]).toMatchObject([1, 2, 3])

		list.prepend(new SingleLinkedList(...[7, 8, 9]))
		expect([...list]).toMatchObject([7, 8, 9, 1, 2, 3])
	})

	xtest('should insert', () => {
		let anotherList = new SingleLinkedList(4, 5, 6)
		list.insert(-1, anotherList)
		expect([...list]).toMatchObject([1, 2, 3])

		list.insert(list.length + 1, anotherList)
		expect([...list]).toMatchObject([1, 2, 3])

		list.insert(3, anotherList)
		expect([...list]).toMatchObject([1, 2, 3, 4, 5, 6])

		list.insert(0, anotherList)
		expect([...list]).toMatchObject([4, 5, 6, 1, 2, 3, 4, 5, 6])
	})

	xtest('should getNodeNth', () => {
		list.push(4, 5, 6)
		expect([
			list.getNodeNth(-1),
			list.getNodeNth(0).val,
			list.getNodeNth(1).val,
			list.getNodeNth(2).val,
			list.getNodeNth(3).val,
			list.getNodeNth(4).val,
			list.getNodeNth(5).val,
			list.getNodeNth(list.length)
		]).toMatchObject([null, 1, 2, 3, 4, 5, 6, null])
	})
})
