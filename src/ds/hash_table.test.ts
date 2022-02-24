import { HashTable } from './hash_table'

describe('DS: HashTable', () => {
  let hashTable: HashTable<number>

  beforeEach(() => {
    hashTable = new HashTable()
  })

  test('Should have "set()"', () => {
    hashTable.set('Hello', 7)
    hashTable.set('world', 42)
    hashTable.set('!', 25)

    expect(hashTable.get('Hello')).toBe(7)
    expect(hashTable.get('world')).toBe(42)
    expect(hashTable.get('!')).toBe(25)
  })
})
