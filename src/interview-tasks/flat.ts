export type RecursiveArray<T> = (T | RecursiveArray<T>)[]

// export const flat = <T>(arr: RecursiveArray<T>): RecursiveArray<T> =>
//     arr.map((val: RecursiveArray<T>): RecursiveArray<T> =>
//         Array.isArray(val) ? flat()
//     )

// type Flat<T> = (RecursiveArray<T>): RecursiveArray<T>

// export const flat: Flat<number> = (arr) =>
//         arr.reduce((acc, val) => {
//             acc.push(...(Array.isArray(val) ? flat(val) : [val]))

//             return acc
//         }, [])

// const data = [1, [2, [3, [4, 5]]]]
// console.log(flat(data))
// => [1, 2, 3, 4, 5]
