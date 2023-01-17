import { greatestCommonDivisor, isCoprime, euler } from './utils'

it.each`
  a        | b          | gcd
  ${54}    | ${24}      | ${6}
  ${180}   | ${150}     | ${30}
  ${23444} | ${1976232} | ${4}
`('%# gCD($a, $b) should be equal $gcd', ({ a, b, gcd }) => {
  expect(greatestCommonDivisor(a, b)).toBe(gcd)
  expect(greatestCommonDivisor(b, a)).toBe(gcd)
})

it.each`
  a     | b      | res
  ${14} | ${26}  | ${false}
  ${13} | ${7}   | ${true}
  ${41} | ${347} | ${true}
`('%# isCoprime($a, $b) should be equal $res', ({ a, b, res }) => {
  expect(isCoprime(a, b)).toBe(res)
})

it.each`
  x      | res
  ${1}   | ${1}
  ${5}   | ${4}
  ${101} | ${100}
  ${201} | ${132}
  ${301} | ${252}
  ${401} | ${400}
`('%# euler($x, $b) should be equal $res', ({ x, res }) => {
  expect(euler(x)).toBe(res)
})
