import { createGraph } from './graph-simple'

//  prettier-ignore
it('should work', () => {
  expect(createGraph([
    ['a', [['b', 2], ['c', 1 ]]],
    ['b', [['f', 7 ]]],
    ['c', [['d', 5], ['e', 2]]],
    ['d', [['f', 2 ]]],
    ['e', [['f', 1 ]]],
    ['f', [['g', 1 ]]],
    ['g', [['f', 1]]],
  ])).toMatchObject(
    new Map([
      ['a', new Map([['b', 2], ['c', 1 ]])],
      ['b', new Map([['f', 7 ]])],
      ['c', new Map([['d', 5], ['e', 2]])],
      ['d', new Map([['f', 2 ]])],
      ['e', new Map([['f', 1 ]])],
      ['f', new Map([['g', 1 ]])],
      ['g', new Map([['f', 1]])],
    ])
  )
})
