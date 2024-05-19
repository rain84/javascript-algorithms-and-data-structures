import { delay } from './promise'

it('wait() should work', async () => {
  const time = 1000
  const expired = ((Date.now() + time) / 1000) | 0
  await delay(time)
  const now = (Date.now() / 1000) | 0

  expect(expired).toBe(now)
})
