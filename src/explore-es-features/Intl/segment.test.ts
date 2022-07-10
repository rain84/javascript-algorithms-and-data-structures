import { getLength } from './segment'

describe('explore-es-features', () => {
  describe('Intl', () => {
    describe('Segment', () => {
      // It plays well in browsers, (Chrome, for example)
      // But can not be reproduceble here because of of lack node.js support
      // TypeError: Intl.Segmenter is not a constructor
      xit('should calculate length of any arbitary string', () => {
        const text = '👨‍👨‍👦‍👦깍ко̅д👨🏿‍'
        expect(getLength(text)).toBe(6)
      })
    })
  })
})
