import { Promise_ } from './promise'

describe('Promise', () => {
  describe('Promise.resolve()', () => {
    it('should asynchronously resolves deferred data', async () => {
      await expect(Promise_.resolve(5, 1)).resolves.toBe(5)
      await expect(Promise_.resolve(75, 0)).resolves.toBe(75)
    })

    it('should immediately resolves sync data', async () => {
      await expect(Promise_.resolve(5)).resolves.toBe(5)
      await expect(Promise_.resolve()).resolves.toBeUndefined()
    })
  })
})
