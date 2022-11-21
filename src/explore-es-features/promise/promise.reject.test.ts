import { Promise_ } from './promise'

describe('Promise', () => {
  describe('Promise.reject()', () => {
    it('should asynchronously rejects deferred data', async () => {
      await expect(Promise_.reject(5, 1)).rejects.toBe(5)
      await expect(Promise_.reject(75, 0)).rejects.toBe(75)
    })

    it('should immediately rejects sync data', async () => {
      await expect(Promise_.reject(5)).rejects.toBe(5)
      await expect(Promise_.reject()).rejects.toBeUndefined()
    })
  })
})
