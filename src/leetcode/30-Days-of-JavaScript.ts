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

export type F = (x: number) => number

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }

type OnceFn = (...args: JSONValue[]) => JSONValue | undefined
