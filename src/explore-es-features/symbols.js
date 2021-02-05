//  testing of primitive converttion of object
const obj = {
	name: 'stroage',

	valueOf() {
		console.log('in valueOf')
		return this.name
	},

	toString() {
		console.log('in toString')
		return this.name
	},

	[Symbol.toPrimitive]: function () {
		console.log('in Symbol.toPrimitive')
		return this.name
	}
}

;+obj
'' + obj
console.log(obj)
console.dir(obj)
