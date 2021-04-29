import { encode, decode, getCipher, getColumn, getRow, withoutSpaces } from './transposition-cipher'

describe('Horizontally running  transposition cipher', () => {
    const keyword = 'комбайн'
    const message = 'ЭТО СООБЩЕНИЕ СЛЕДУЕТ ОТПРАВИТЬ'
    const encodedMessage = 'ОЕТИСИЕВОСОТЭЩЕПОНУАБЛТЬТЕДР'

    test('should encode', () => {
        expect(encode(message, keyword)).toBe(encodedMessage)
    })

    test('should decode', () => {
        expect(decode(encodedMessage, keyword)).toBe(withoutSpaces(message))
    })

    test('should just work', () => {
        expect(decode(encode(message, keyword), keyword)).toBe(withoutSpaces(message))
    })

    describe('Util', () => {
        test('getCipher() should return cipher', () => {
            const cipher = getCipher(keyword)

            expect(cipher.encode).toEqual([3, 6, 4, 1, 0, 2, 5])
            expect(cipher.decode).toEqual([4, 3, 5, 0, 2, 6, 1])
        })

        test('getColumn() should return column', () => {
            const keyword = 'комбайн'
            const matrixAsArray = [...'ОСОЭОБТЕИСЩНЛЕТЕОЕУТДИВТПАЬР']

            expect(getColumn(matrixAsArray, keyword, 0).join('')).toBe('ОЕТИ')
            expect(getColumn(matrixAsArray, keyword, 1).join('')).toBe('СИЕВ')
            expect(getColumn(matrixAsArray, keyword, 6).join('')).toBe('ТЕДР')
        })

        test('getRow() should return row', () => {
            const keyword = 'комбайн'

            expect(getRow([...encodedMessage], keyword, 0).join('')).toBe('ОСОЭОБТ')
            expect(getRow([...encodedMessage], keyword, 1).join('')).toBe('ЕИСЩНЛЕ')
            expect(getRow([...encodedMessage], keyword, 2).join('')).toBe('ТЕОЕУТД')
            expect(getRow([...encodedMessage], keyword, 3).join('')).toBe('ИВТПАЬР')
        })

        test('withoutSpaces() should work', () => {
            expect(withoutSpaces('withoutSpaces() should work')).toBe('withoutSpaces()shouldwork')
            expect(withoutSpaces('    with    out   Spaces(    ) should work   ')).toBe('withoutSpaces()shouldwork')
        })
    })
})
