export const curry = (fn) => {
	const { length } = fn

	const args = []

	const wrapper = (...argsNext) => {
		args.push(...argsNext)
		return length <= args.length ? fn(...args) : wrapper
	}

	return wrapper
}
