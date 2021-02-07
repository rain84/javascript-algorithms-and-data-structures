import { DoubleLinkedList } from './doublelinkedlist.js'

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
