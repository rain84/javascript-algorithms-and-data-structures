import { equalChunks3, ResultType } from './equalChunks3'

describe('equal3partititons', () => {
    const helpers = {
        sum: (arr: number[]) => arr.reduce((a, b) => a + b),
        have3equalChunks: (arr: ResultType) => arr.every((item) => helpers.sum(item) === helpers.sum(arr[0])),
    }

    test('should return null on empty array', () => {
        expect(typeof equalChunks3).toBe('function')
        expect(equalChunks3([])).toBeNull()
    })

    test('should return null on array which can not be splitted', () => {
        const arr = [3, 5, 8, 0, 8, 0, 1]
        expect(equalChunks3(arr)).toBeNull()
    })

    test('should return null on array with huge values', () => {
        const arr = [22, 1, 1, 0]
        expect(equalChunks3(arr)).toBeNull()
    })

    test('test helpers', () => {
        const res: ResultType = [[3, 5], [8], [0, 8, 0]]
        expect(helpers.have3equalChunks(res)).toBeTruthy()
    })

    test('should return array of 3 equal chunks', () => {
        const sum = (arr: number[]) => arr.reduce((a, b) => a + b)
        const have3equalChunks = (arr: ResultType) => arr.every((item) => sum(item) === sum(arr[0]))
        const arr = [3, 5, 8, 0, 8, 0]

        const res = equalChunks3(arr)
        expect(have3equalChunks(res as ResultType)).toBeTruthy()
    })
})
