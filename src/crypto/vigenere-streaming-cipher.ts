type CryptoFn = (iMessage: number, iKeyword: number, length: number) => number

// interface Algorithm {
//   encode: CryptoFn
//   decode: CryptoFn
// }

//   "tabula recta"-functions
const crypto = {
  encode: {
    algorithm: ((iMessage, iKeyword, length) => (iMessage + iKeyword) % length) as CryptoFn,
  },
  decode: {
    algorithm: ((iMessage, iKeyword, length) => (iMessage - iKeyword + length) % length) as CryptoFn,
  },
}

export const alphabet = {
  ru: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
  en: 'abcdefghijklmnopqrstuvwxyz',
}

export const encode =
  (alphabet: string) =>
  (message: string, primer: string): string => {
    alphabet = alphabet.toLocaleLowerCase()
    message = message.toLocaleLowerCase()
    primer = primer.toLocaleLowerCase()

    const autokey = `${primer}${message}`.slice(0, message.length)
    const result = []

    const ch = {
      message: '',
      autokey: '',
    }

    const index = {
      message: -1,
      autokey: -1,
      result: -1,
    }

    for (let i = 0; i < message.length; i++) {
      ch.message = message[i]
      ch.autokey = autokey[i]

      index.autokey = alphabet.indexOf(ch.autokey)
      index.message = alphabet.indexOf(ch.message)

      if (index.autokey === -1) throw new Error(`Symbol "${ch.autokey}" in keyword is not valid for alphabet`)
      if (index.message === -1) throw new Error(`Symbol "${ch.message}" in message is not valid for alphabet`)

      index.result = crypto.encode.algorithm(index.message, index.autokey, alphabet.length)

      result.push(alphabet[index.result])
    }

    return result.join('')
  }

export const decode =
  (alphabet: string) =>
  (message: string, primer: string): string => {
    alphabet = alphabet.toLocaleLowerCase()
    message = message.toLocaleLowerCase()
    primer = primer.toLocaleLowerCase()

    const result = []

    const ch = {
      message: '',
      autokey: '',
    }

    const index = {
      message: -1,
      autokey: -1,
      result: -1,
    }

    for (let i = 0; i < message.length; i++) {
      ch.message = message[i]
      ch.autokey = i < primer.length ? primer[i] : result[result.length - 1]

      index.autokey = alphabet.indexOf(ch.autokey)
      index.message = alphabet.indexOf(ch.message)

      if (index.autokey === -1) throw new Error(`Symbol "${ch.autokey}" in keyword is not valid for alphabet`)
      if (index.message === -1) throw new Error(`Symbol "${ch.message}" in message is not valid for alphabet`)

      index.result = crypto.decode.algorithm(index.message, index.autokey, alphabet.length)

      result.push(alphabet[index.result])
    }

    return result.join('')
  }
