/**
 * 2705. Compact Object
 * URL {@link https://leetcode.com/problems/compact-object/description/}
 */
export function compactObject(obj: Obj): Obj {
  if (Array.isArray(obj)) {
    const res: JSONValue[] = []

    for (const x of obj) {
      if (!x) continue
      res.push(typeof x === 'object' ? compactObject(x) : x)
    }

    return res
  }

  const res: Obj = {}
  for (const [key, x] of Object.entries(obj)) {
    if (!x) continue
    res[key] = typeof x === 'object' ? compactObject(x) : x
  }

  return res
}

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | Array<JSONValue>
