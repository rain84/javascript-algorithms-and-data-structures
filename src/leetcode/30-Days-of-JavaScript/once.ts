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

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }

type OnceFn = (...args: JSONValue[]) => JSONValue | undefined
