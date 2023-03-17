import { unicodeDelimiters } from 'regexes'

function stringify(data: any) {
  return JSON.stringify(data, null, ' ')
}

export function log(data: any, msg?: string): void {
  const isObject = typeof data === 'object' && !Object.is(data, null)
  console.log(msg, isObject ? stringify(data) : data)
}

export const textToWords = (str: string): string[] =>
  str.split(unicodeDelimiters).filter(Boolean)

export const capitalize = <T extends string>(s: T) =>
  (s.length ? s[0]?.toLocaleUpperCase() + s.slice(1) : '') as Capitalize<T>
