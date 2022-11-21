import { Promise_ } from './promise'

describe('Promise', () => {
  describe('promisify()', () => {
    it('should work', () => {
      expect(Promise_.promisify(1).constructor).toBe(Promise)
      expect(Promise_.promisify(Promise.resolve(1)).constructor).toBe(Promise)
    })
  })
})
