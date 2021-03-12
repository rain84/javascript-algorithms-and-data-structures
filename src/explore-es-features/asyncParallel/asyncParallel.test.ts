import { asyncParallel } from './asyncParallel'

const fakedFetch = (timeout: number) => new Promise((resolve) => setTimeout(() => resolve(timeout), timeout * 1000))

describe('fakedFetch', () => {
    test('should retun Promise', () => {
        expect(fakedFetch(1) instanceof Promise).toBeTruthy()
    })

    test('should asyncronously retun value after delay', async () => {
        expect(await fakedFetch(1)).toBe(1)
        expect(await fakedFetch(3)).toBe(3)
    })
})

describe('ParallelAsync', () => {
    let heavyFetches: ReturnType<typeof asyncParallel>

    beforeEach(() => {
        heavyFetches = asyncParallel({
            someHeavyData: fakedFetch(5),
            settings: fakedFetch(3),
            config: fakedFetch(1),
        })
    })

    test('proxy should return data asyncronously', async () => {
        expect(heavyFetches).toBeDefined()

        expect(await heavyFetches.settings).toBe(3)
        expect(await heavyFetches.someHeavyData).toBe(5)
        expect(await heavyFetches.config).toBe(1)
    })
})
