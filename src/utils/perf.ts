import { performance } from 'node:perf_hooks'

// biome-ignore lint:
export const evaluate = (fn: Fn, args: any[], iterations = 10 ** 5) => {
  let time = performance.now()

  for (let i = iterations; i > 0; i--) {
    fn(...args)
  }

  time = performance.now() - time
  const speed = Math.floor(1000 * (iterations / time))

  return { speed, iterations, time }
}

// biome-ignore lint:
export const perf = (fns: Fn | Fn[], ...args: any[]) => {
  if (!Array.isArray(fns)) fns = [fns]

  const res = Object.fromEntries(
    fns.map((fn, i) => {
      const res = evaluate(fn, args, perf.iterations)
      return [
        i + 1,
        {
          Function: fn.name,
          'ops/sec': res.speed,
          Time: res.time,
          Iterations: perf.iterations,
        },
      ]
    })
  )

  console.table(res)
  return res
}

perf.iterations = 10 ** 5
