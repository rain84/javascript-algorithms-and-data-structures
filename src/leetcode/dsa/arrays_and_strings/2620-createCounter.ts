/**
 * 2620. Counter
 * {@link https://leetcode.com/problems/counter/description/ | Link}
 */
export function createCounter(n: number): () => number {
  return () => n++
}
