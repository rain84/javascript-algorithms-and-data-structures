{
    // time complexity O(n^2)
    const maxSubarraySum = (arr, num) => {
        let max = -Infinity

        for (let i = 0; i <= arr.length - num; i++) {
            let tmp = 0

            for (let j = 0; j < num; j++) {
                tmp += arr[i + j]
            }

            if (tmp > max) {
                max = tmp
            }
        }

        return max
    }

    // time complexity O(n)
    const maxSubarraySum2 = (arr, size) => {
        if (arr.length < size) return

        let lPointer = 0,
            rPointer = 0
        let sum = 0,
            nextSum = 0

        while (rPointer < size) {
            sum += arr[rPointer++]
        }
        nextSum = sum

        while (rPointer !== arr.length) {
            nextSum = nextSum - arr[lPointer++] + arr[rPointer++]
            if (sum < nextSum) {
                sum = nextSum
            }
        }

        return sum
    }

    const arr = [320, 539, 28, 752, 807, 46, 507, 568, 327, 560]

    const size = ~~(arr.length / 2)

    console.log(
        `
    maxSubarraySum: ${maxSubarraySum(arr, size)}
    maxSubarraySum2: ${maxSubarraySum2(arr, size)}
    `.trim(),
    )

    const testPerfomance = (fn, arrayOfArgs, iterations = 10 ** 5) => {
        const time = performance.now()

        for (let i = iterations; i; i--) {
            for (let args of arrayOfArgs) {
                fn(...args)
            }
        }
        const execTime = ((performance.now() - time) / iterations).toFixed(4)

        console.log(`"${fn.name || 'ƒn'}" executed during ${execTime}`)
    }

    testPerfomance(maxSubarraySum, [[arr, size]])
    testPerfomance(maxSubarraySum2, [[arr, size]])
}
