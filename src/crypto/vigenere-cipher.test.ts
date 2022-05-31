import { encode, decode, alphabet } from './vigenere-cipher'

describe('Crypto: Poly-alphabet "Vigenere"-cipher', () => {
  const keyword = 'шифр'
  const message = 'ЭТОСООБЩЕНИЕНУЖНОЗАКОДИРОВАТЬ'.toLocaleLowerCase()
  const encodedMessage = 'хыгвжчхйэцэхёьыюжрфыжмэбжкфгф'

  test('should encode', () => {
    expect(encode(alphabet)(message, keyword)).toBe(encodedMessage)
  })

  test('should decode', () => {
    expect(decode(alphabet)(encodedMessage, keyword)).toBe(message)
  })

  test('should just work', () => {
    expect(decode(alphabet)(encode(alphabet)(message, keyword), keyword)).toBe(
      message
    )
  })
})
