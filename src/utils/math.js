export const getDigit = (num, position) => ~~(Math.abs(num) / 10 ** (position - 1)) % 10
export const getLength = (num) => (num === 0 ? 1 : ~~Math.log10(Math.abs(num)) + 1)
