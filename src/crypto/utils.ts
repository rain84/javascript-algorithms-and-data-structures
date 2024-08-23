/** greatest common divisor */
export const gcd = (a: number, b: number): number => (a ? gcd(b % a, a) : b)

export const isCoprime = (a: number, b: number) => {
  return gcd(a, b) === 1
}

export const euler = (x: number) => {
  let c = 1

  for (let i = 1; i < x - 1; i++) {
    if (isCoprime(x, i)) c++
  }

  return c
}
