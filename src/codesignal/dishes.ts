// https://app.codesignal.com/interview-practice/task/xrFgR63cw7Nch4vXo/description

type Dishes = string[][]

export function solution(dishes: Dishes) {
  const result: { [K in string]: Set<string> } = {}

  dishes.forEach(([dish, ...ingredients]) => {
    ingredients.forEach((ingredient) => {
      if (result[ingredient]) {
        result[ingredient].add(dish)
      } else {
        result[ingredient] = new Set([dish])
      }
    })
  })

  return [
    ['Cheese', 'Quesadilla', 'Sandwich'],
    ['Salad', 'Salad', 'Sandwich'],
    ['Sauce', 'Pizza', 'Quesadilla', 'Salad'],
    ['Tomato', 'Pizza', 'Salad', 'Sandwich'],
  ]
}
