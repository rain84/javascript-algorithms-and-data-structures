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
export const perf = (fns: Fn | Fn[], args: any[], iterations = 10 ** 5) => {
  if (!Array.isArray(fns)) fns = [fns]

  const data = fns.map<DataItem>((fn, i) => {
    const res = evaluate(fn, args, iterations)
    return {
      Function: fn.name,
      'ops/sec': res.speed,
      'Time (ms)': Math.floor(res.time),
      Iterations: iterations,
      '%': '0',
    }
  })

  const max = Math.max(...data.map((x) => x['ops/sec'])) / 100
  for (const x of data) {
    x['%'] = (x['ops/sec'] / max).toFixed(2)
  }

  data.sort((a, b) => b['ops/sec'] - a['ops/sec'])
  console.table(Object.fromEntries(data.map((x, i) => [i + 1, x])))

  return data
}

type DataItem = {
  Function: string
  'ops/sec': number
  'Time (ms)': number
  Iterations: number
  '%': string
}
