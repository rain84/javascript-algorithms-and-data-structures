/*
Условие задачи
Дан список целых неповторяющихся чисел и целое число. Необходимо найти все пары в списке, сумма которых равна заданному числу.
Перестановки (i, j) и (j, i) считаются одной и той же парой, можно вывести любую из них.

Входные параметры
Массив целых чисел размера N.
Целое число.
*/

findPairs([2, 4, 5, 3], 7) // [[2,5], [4,3]]

function findPairs(list: number[], target: number) {
  const result = []
  const { length } = list

  let indexLeft = 0
  let indexRight = 1
  let sum: number

  while (indexLeft != length - 1) {
    const l = list[indexLeft]
    const r = list[indexRight]

    sum = l + r

    if (sum === target) {
      result.push([l, r])
      indexLeft++
    }

    if (++indexRight === length) {
      indexLeft++
      indexRight = indexLeft + 1
    }
  }

  return result
}

function findPairs2(list: number[], target: number) {
  const result: [number, number][] = []
  const dict: { [K in number]: number } = {}

  for (const val of list) {
    dict[target - val] = val
  }

  for (const val of list) {
    if (dict[val]) {
      delete dict[dict[val]]
      result.push([val, dict[val]])
    }
  }

  return result
}

function findPairs3(list: number[], target: number) {
  const result: [number, number][] = []
  let l = 0
  let r = list.length - 1

  list.sort()

  while (l < r) {
    const sum = list[l] + list[r]

    if (sum === target) {
      result.push([list[l++], list[r--]])
    } else if (sum < target) l++
    else r--
  }

  return result
}

export {}
