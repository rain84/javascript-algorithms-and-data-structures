const sortEntries = (entries) =>
  entries.sort(([keyA], [keyB]) => keyA.localeCompare(keyB))

const isPOJO = (value) =>
  Object.prototype.toString.call(value) === '[object Object]'

const identity = (val) => val

const jsonTraverse = (json, transformFn = identity) =>
  Object.fromEntries(
    transformFn(Object.entries(json)).map(([key, value]) => [
      key,
      isPOJO(value) ? jsonTraverse(value) : value,
    ])
  )

export const jsonSort = (json) => jsonTraverse(json, sortEntries)
