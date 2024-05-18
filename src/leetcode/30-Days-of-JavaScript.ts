/**
 * 2629. Function Composition
 * URL {@link https://leetcode.com/problems/function-composition/description/}
 */
export type F = (x: number) => number

export const compose =
  (functions: F[]): F =>
  (x) =>
    functions.reduceRight((args, fn) => fn(args), x)
