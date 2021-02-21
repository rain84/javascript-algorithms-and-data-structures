{
    const flat = (arr) =>
        arr.reduce((acc, val) => {
            acc.push(...(Array.isArray(val) ? flat(val) : [val]))

            return acc
        }, [])

    const flat2 = (arr) => {
        const res = []

        for (const val of arr) {
            res.push(...(Array.isArray(val) ? flat2(val) : [val]))
        }

        return res
    }

    console.log(flat(data)) // => [1, 2, 3, 4, 5]
    console.log(flat2(data)) // => [1, 2, 3, 4, 5]
}

const double = (arr) =>
    arr.reduce((acc, val) => {
        if (typeof val === 'number') acc.push(val)
        return acc
    }, [])
double([1, 2, null, 7, 8, null, 3])

{
    const oddSort = (arr) => {
        const indexes = []
        const odds = arr
            .reduce((acc, val, key) => {
                if (val % 2) {
                    indexes.push(key)
                    acc.push(val)
                }
                return acc
            }, [])
            .sort((a, b) => a - b)

        for (let key in indexes) {
            arr[indexes[key]] = odds[key]
        }

        return arr
    }

    oddSort([7, 3, 4, 9, 5, 2, 17]) // => [3, 5, 4, 7, 9, 2, 17]
}
