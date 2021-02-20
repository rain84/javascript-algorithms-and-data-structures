const target = {
	val: 7
}

const handler = {
	get: (target, name) => target[name],

	set: (target, prop, val) => {
		console.log('set', prop, val)
		target[prop] = val
		return val
	}
}

const p = new Proxy(target, handler)

console.log(++p.val)
console.log(++p.val)
