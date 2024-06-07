import { Trie } from './trie'

let trie: Trie
let dictionary: string[]

beforeEach(() => {
  dictionary = [
    'cat',
    'bat',
    'rat',
    'rabbit',
    'carrot',
    'batman',
    'bumble-bee',
    'car',
    'cartoon',
  ].sort()
  trie = new Trie(dictionary)
})

it('.has() should work', () => {
  expect(trie.has('cat')).toBeTruthy()
  expect(trie.has('caterpillar')).toBeFalsy()
})

it('.entries() should work', () => {
  expect(trie.entries().sort()).toMatchObject(dictionary)
})

it('.entries("ca") should work', () => {
  const prefix = 'ca'
  const output = dictionary.filter((x) => x.startsWith(prefix))
  expect(trie.entries(prefix).sort()).toMatchObject(output)
})

it('.entries("bat") should work', () => {
  const prefix = 'bat'
  const output = dictionary.filter((x) => x.startsWith(prefix))
  expect(trie.entries(prefix).sort()).toMatchObject(output)
})

it('.delete() should work', () => {
  const word = 'bat'
  expect(trie.has(word)).toBeTruthy()
  trie.delete(word)
  expect(trie.has(word)).toBeFalsy()
})
