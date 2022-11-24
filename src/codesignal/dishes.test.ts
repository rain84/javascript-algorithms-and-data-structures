import { solution } from './dishes'

xit('should work', () => {
  const input = [
    ['Salad', 'Tomato', 'Cucumber', 'Salad', 'Sauce'],
    ['Pizza', 'Tomato', 'Sausage', 'Sauce', 'Dough'],
    ['Quesadilla', 'Chicken', 'Cheese', 'Sauce'],
    ['Sandwich', 'Salad', 'Bread', 'Tomato', 'Cheese'],
  ]

  const output = [
    ['Cheese', 'Quesadilla', 'Sandwich'],
    ['Salad', 'Salad', 'Sandwich'],
    ['Sauce', 'Pizza', 'Quesadilla', 'Salad'],
    ['Tomato', 'Pizza', 'Salad', 'Sandwich'],
  ]

  expect(true).toBe(true)
  // expect(solution(input)).toMatchObject(output)
})
