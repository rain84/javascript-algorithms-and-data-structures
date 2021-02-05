const node = ({ val, next = null }) => ({ val, next })

export const SingleLinkedList = ([val, ...restValues]) => {
	const handler = node({ val })

	if (restValues.length) {
		restValues.reduce((prev, val) => (prev.next = node({ val })), handler)
	}

	return handler
}

export function* spread(list) {
	do yield list.val
	while ((list = list.next))

	list = null
}
