export const testPerfomance = (fn, args, iterations = 10 ** 5) => {
	const time = performance.now()

	for (let i = iterations; i; i--) {
		fn(...args)
	}
	const execTime = ((performance.now() - time) / iterations).toFixed(4)

	console.log(`"${fn.name || 'ƒn'}" executed during ${execTime}`)
}
