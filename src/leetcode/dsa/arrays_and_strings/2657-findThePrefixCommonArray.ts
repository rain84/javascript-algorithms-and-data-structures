/**
 * {@link https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays | 2657. Find the Prefix Common Array of Two Arrays}
 *
 * Topics: Array | Hash Table | Bit Manipulation
 */
export function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const n = A.length
  const res = Array(n).fill(0)
  const [setA, setB] = [new Set<number>(), new Set<number>()]

  for (let i = 0, c = 0; i < n; i++) {
    if (setA.has(B[i])) c++
    if (setB.has(A[i])) c++
    if (A[i] === B[i]) c++

    setA.add(A[i])
    setB.add(B[i])
    res[i] = c
  }

  return res
}
