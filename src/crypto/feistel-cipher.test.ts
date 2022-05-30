import { encode } from './feistel-cipher'

xdescribe('Feistel network', () => {
  test('should encode with data', () => {
    expect(encode(100, 200)).toMatchObject([203, 99])
  })
})
