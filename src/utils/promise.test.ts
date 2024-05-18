it('wait() should work', async () => {
  const delay = 1000
  const start = ((Date.now() + delay) / 1000) | 0
  await delay(delay)
  const finish = (Date.now() / 1000) | 0

  expect(start).toBe(finish)
})
