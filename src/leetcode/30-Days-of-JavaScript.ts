/**
 * 2629. Function Composition
 * URL {@link https://leetcode.com/problems/function-composition/description/}
 */
export const compose =
  (functions: F[]): F =>
  (x) =>
    functions.reduceRight((args, fn) => fn(args), x)

/**
 * 2666. Allow One Function Call
 * URL {@link https://leetcode.com/problems/allow-one-function-call/description/}
 */
export const once =
  (fn?: Fn): OnceFn =>
  (...args) => {
    const res = fn?.(...args)
    fn = undefined
    return res
  }

/**
 * 2637. Promise Time Limit
 * URL {@link https://leetcode.com/problems/promise-time-limit/description/}
 */
export const timeLimit =
  (fn: Fn, t: number): Fn =>
  async (...args) =>
    new Promise((resolve, reject) => {
      setTimeout(() => reject('Time Limit Exceeded'), t)
      fn(...args)
        .then(resolve)
        .catch(reject)
    })

/**
 * 2637. Promise Time Limit
 * URL {@link https://leetcode.com/problems/promise-time-limit/description/}
 *
 * My 1st (monstruous) solution :)
 */
const timeLimit2 =
  (fn: Fn, t: number): Fn =>
  async (...args) => {
    try {
      const promises = [
        new Promise((resolve, reject) => {
          ;(async () => {
            try {
              resolve(await fn(...args))
            } catch (error) {
              reject(error)
            }
          })()
        }),
        new Promise((_, reject) => setTimeout(reject, t)),
      ]
      return await Promise.race(promises)
    } catch (e) {
      return Promise.reject(e ?? 'Time Limit Exceeded')
    }
  }

/**
 * 2622. Cache With Time Limit
 * URL {@link https://leetcode.com/problems/cache-with-time-limit/description/}
 */
export class TimeLimitedCache {
  #cache = new Map<number, [value: number, expire: number]>()

  set(key: number, value: number, duration: number): boolean {
    const isExist = this.#cache.has(key)

    if (!this.#isExpired(key)) {
      this.#cache.set(key, [value, Date.now() + duration])
    }

    return isExist
  }

  get(key: number): number {
    if (this.#isExpired(key)) return -1
    return this.#cache.get(key)?.[0] ?? -1
  }

  count(): number {
    const xs = Array.from(this.#cache).filter(([key]) => !this.#isExpired(key))
    return xs.length
  }

  #isExpired = (key: number) =>
    this.#cache.has(key) && (this.#cache.get(key)?.[1] ?? Number.NEGATIVE_INFINITY) < Date.now()
}

export type F = (x: number) => number

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }

type OnceFn = (...args: JSONValue[]) => JSONValue | undefined
