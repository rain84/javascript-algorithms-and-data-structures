/**
 Do not return anything, modify s in-place instead.
 */

export const reverseString = (s: string[]): void => {
  let l = 0,
    r = s.length - 1

  while (l < r) {
    ;[s[l], s[r]] = [s[r], s[l]]
    l++
    r--
  }
}
