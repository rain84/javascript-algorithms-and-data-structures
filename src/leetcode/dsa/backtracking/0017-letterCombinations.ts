/**
 * 17. Letter Combinations of a Phone Number
 * {@link https://leetcode.com/problems/letter-combinations-of-a-phone-number/ | Link}
 */
export function letterCombinations(digits: string): string[] {
  if (!digits) return []

  const res: string[] = []
  const n = digits.length
  const map: Record<string, string[]> = {
    2: [...'abc'],
    3: [...'def'],
    4: [...'ghi'],
    5: [...'jkl'],
    6: [...'mno'],
    7: [...'pqrs'],
    8: [...'tuv'],
    9: [...'wxyz'],
  }

  const dfs = (curr: string, start: number) => {
    if (curr.length === n) {
      res.push(curr)
      return
    }

    for (let i = start; i < n; i++) {
      for (const ch of map[digits[i]]) {
        dfs(curr + ch, i + 1)
      }
    }
  }

  dfs('', 0)

  return res
}
