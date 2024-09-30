/**
 * {@link https://leetcode.com/problems/design-a-stack-with-increment-operation/ | 1381. Design a Stack With Increment Operation}
 *
 * Topics: Array | Stack | Design
 */
export class CustomStack {
  #maxSize: number
  #stk: number[] = []

  constructor(maxSize: number) {
    this.#maxSize = maxSize
  }

  push(x: number): void {
    if (this.#stk.length < this.#maxSize) this.#stk.push(x)
  }

  pop(): number {
    if (this.#stk.length === 0) return -1
    return this.#stk.pop()!
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < Math.min(k, this.#stk.length); i++) {
      this.#stk[i] += val
    }
  }
}
