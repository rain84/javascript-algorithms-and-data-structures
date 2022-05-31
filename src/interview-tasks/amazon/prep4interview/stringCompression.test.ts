import { compress, decompress } from './stringCompression'

describe('Interview: Amazon. String compression', () => {
  test('should compress', () => {
    expect(compress('aaaabbbcccd')).toBe('4a3b3cd')
  })
  test('should decompress', () => {
    expect(decompress('4a3b3cd')).toBe('aaaabbbcccd')
  })
})
