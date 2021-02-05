export const compose = (...fns) => (...args) =>
	fns.reduceRight((args, fn) => fn(...(Array.isArray(args) ? args : [args])), args)

export const composeRecursive = (...fns) => {
	const last = fns.pop()
	if (!fns.length) return (...args) => last(...args)

	const prev = fns.pop()
	fns.push((...args) => {
		let res = last(...args)
		if (!Array.isArray(res)) res = [res]
		return prev(...res)
	})

	return composeRecursive(...fns)
}
