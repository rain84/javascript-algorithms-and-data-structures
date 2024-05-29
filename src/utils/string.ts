import { unicodeDelimiters } from 'regexes'

function stringify(data: Any) {
  return JSON.stringify(data, null, ' ')
}

export function log(data: Any, msg?: string): void {
  const isObject = typeof data === 'object' && !Object.is(data, null)
  console.log(msg, isObject ? stringify(data) : data)
}

export const textToWords = (str: string): string[] => str.split(unicodeDelimiters).filter(Boolean)

export const capitalize = <T extends string>(s: T) =>
  (s.length ? s[0]?.toLocaleUpperCase() + s.slice(1) : '') as Capitalize<T>

export const toAlphabetKey = (n: number) =>
  [...n.toString(26)].map((s) => (Number.parseInt(s, 26) + 10).toString(36)).join('')
