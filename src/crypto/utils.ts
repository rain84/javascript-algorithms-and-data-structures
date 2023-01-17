export const greatestCommonDivisor = (a: number, b: number): number => {
  if (b < a) [a, b] = [b, a]
  const gcd = (a: number, b: number): number => (a ? gcd(b % a, a) : b)
  return gcd(a, b)
}

export const isCoprime = (a: number, b: number) => {
  return greatestCommonDivisor(a, b) === 1
}

export const euler = (x: number) => {
  let c = 1

  for (let i = 1; i < x - 1; i++) {
    if (isCoprime(x, i)) c++
  }

  return c
}
