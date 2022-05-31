import { encode, decode, alphabet } from './vigenere-streaming-cipher'

describe('Crypto: Poly-alphabet "Vigenere"-streaming-cipher', () => {
  //   const autokey = 'QUEENLY'
  //   const message = 'ATTACKATDAWN'.toLocaleLowerCase()
  //   const encodedMessage = 'QNXEPVYTWTWP'.toLocaleLowerCase()

  const autokey = 'Р'
  const message = 'ЗАВТРАПОЗДНО'.toLowerCase()
  const encodedMessage = 'шзвфгрпюцлсь'

  test('should encode', () => {
    expect(encode(alphabet.ru)(message, autokey)).toBe(encodedMessage)
  })

  test('should decode', () => {
    expect(decode(alphabet.ru)(encodedMessage, autokey)).toBe(message)
  })

  test('should just work', () => {
    expect(
      decode(alphabet.ru)(encode(alphabet.ru)(message, autokey), autokey)
    ).toBe(message)
  })
})
