type Fn = (arr: number[], target: number) => boolean

//  time complexity: O(n)
export const hasTarget: Fn = (arr, target) => {
    let left = 0,
        right = 0,
        sum = 0

    while (left < arr.length) {
        if (sum === target) return true
        if (sum < target) sum += arr[right++]
        if (target < sum) sum -= arr[left++]
    }

    return false
}
