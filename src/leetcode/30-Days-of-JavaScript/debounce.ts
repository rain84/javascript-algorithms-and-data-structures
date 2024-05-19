/**
 * 2627. Debounce
 * URL {@link https://leetcode.com/problems/debounce/description/}
 */
export const debounce = (fn: Fn, t: number): Fn => {
  let timerId: ReturnType<typeof globalThis.setTimeout>

  return (...args) => {
    if (timerId) globalThis.clearTimeout(timerId)
    timerId = globalThis.setTimeout(() => fn(...args), t)
  }
}
