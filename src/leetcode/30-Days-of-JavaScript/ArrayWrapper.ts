/**
 * 2695. Array Wrapper
 * URL {@link https://leetcode.com/problems/array-wrapper/description/}
 */
export class ArrayWrapper {
  #xs: number[]
  constructor(nums: number[]) {
    this.#xs = nums
  }

  valueOf(): number {
    return this.#xs.reduce((a, b) => a + b, 0)
  }

  toString(): string {
    return `[${this.#xs}]`
  }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
