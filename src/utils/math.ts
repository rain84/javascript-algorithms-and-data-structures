export const getDigit = (num: number, position: number) =>
  ~~(Math.abs(num) / 10 ** (position - 1)) % 10
export const getLength = (num: number) =>
  num === 0 ? 1 : ~~Math.log10(Math.abs(num)) + 1
