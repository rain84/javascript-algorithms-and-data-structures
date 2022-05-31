import { getN } from './fb-2'

describe('Interview: Meta. Get N of squads', () => {
  test('should return right solution', () => {
    expect(getN(13)).toBe(2)
    expect(getN(27)).toBe(3)
  })
})
