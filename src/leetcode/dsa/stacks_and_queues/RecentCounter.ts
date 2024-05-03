// https://leetcode.com/problems/number-of-recent-calls/

export class RecentCounter {
  #RANGE = 3000
  #queue: number[] = []

  constructor() {}

  ping(t: number): number {
    this.#queue.push(t)
    const range = t - this.#RANGE

    while (this.#queue[0] < range) {
      this.#queue.shift()
    }

    return this.#queue.length
  }
}
