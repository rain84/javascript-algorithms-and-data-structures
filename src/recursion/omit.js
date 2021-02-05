/**
 *  Omit prop or array of props from object
 *  thow the recursion
 */

const omit = (props, obj) => {
	if (typeof props === 'string') {
		const { [props]: _, ...rest } = obj
		return rest
	} else if (Array.isArray(props)) {
		return props.reduce((acc, prop) => omit(prop, acc), obj)
	} else throw new Error()
}

const prop = 'a'
const props = [...'abcd']

const obj = Object.fromEntries([...[...'abcdef'].entries()].map(([key, val]) => [val, key]))

console.log('obj', obj)

const omitedProp = omit(prop, obj)
console.log('omitedProp', omitedProp)

const omitedProps = omit(props, obj)
console.log('omitedProps', omitedProps)
