//  Given a list of strictly positive integers,
//  partition the list into 3 contiguous partitions which each sum up to the same value.
//  If not possible, return null.
//
//  example, given the following list:
//
// [3, 5, 8, 0, 8]
//
// Return the following 3 partitions:
//
// [
//  [3, 5],
//  [8, 0],
//  [8]
// ]
//
// Which each add up to 8.

export type ResultType = [number[], number[], number[]]
type EqualChunks3 = (arr: readonly number[]) => ResultType | null

const a: ResultType = [[], [], []]
a.every(() => 1)

//  Time complexity: O(n)
export const equalChunks3: EqualChunks3 = (arr) => {
    if (arr.length === 0) return null

    const average = arr.reduce((a, b) => a + b) / 3

    if (!Number.isInteger(average)) return null
    if (arr.some((item) => item > average)) return null

    const res = []

    arr.forEach((item) => {})

    return res as ResultType
}
