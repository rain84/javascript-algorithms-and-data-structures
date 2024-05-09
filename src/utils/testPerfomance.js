import { performance } from 'node:perf_hooks'

export const testPerfomance = (fn, args, iterations = 10 ** 5) => {
  const time = performance.now()

  for (let i = iterations; i; i--) {
    fn.apply(null, args)
  }
  const execTime = ((performance.now() - time) / iterations).toFixed(8)

  console.log(`"${fn.name || 'ƒn'}" executed during ${execTime}`)
}
