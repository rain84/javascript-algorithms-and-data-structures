import { DoubleLinkedList } from './DoubleLinkedList.js'
import { SingleLinkedList } from './SingleLinkedList.js'

test('DoubleLinkedList', () => {
	const values = [...'abcdefg']
	const list = new DoubleLinkedList(values)

	expect(list.first).toBe('a')
	expect(list.last).toBe('g')
	expect(list.toString()).toBe('a,b,c,d,e,f,g')
	expect(list.pop()).toBe('g')
	expect(list.shift()).toBe('a')
	expect(list.toString()).toBe('b,c,d,e,f')

	list.push(7)
	list.unshift(42)
	expect(list.toString()).toBe('42,b,c,d,e,f,7')
})

test('SingleLinkedList', () => {
	const values = [2, 4, 3]
	const list = SingleLinkedList(values)

	const expexted = {
		val: 2,
		next: {
			val: 4,
			next: {
				val: 3,
				next: null
			}
		}
	}

	expect(list).toMatchObject(expexted)
})
