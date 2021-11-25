function stringify(data: any) {
  return JSON.stringify(data, null, ' ')
}

export function log(data: any, msg?: string): void {
  const isObject = typeof data === 'object' && !Object.is(data, null)
  console.log(msg, isObject ? stringify(data) : data)
}
