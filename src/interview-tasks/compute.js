const subscribe = Symbol('subscribe')
const unsubscribe = Symbol('unsubscribe')

export const ref = (x) => {
  let value = x
  const subscribers = []

  return {
    get value() {
      return value
    },

    set value(x) {
      value = x
      subscribers?.forEach((cb) => cb())
    },

    [subscribe](cb) {
      subscribers.push(cb)
    },

    [unsubscribe](cb) {
      subscribers = subscribers.filter((fn) => fn !== cb)
    },
  }
}

const z = 45

export const compute = function (fn) {
  console.dir(compute, arguments)
  console.dir(arguments)

  const refs = [...fn.toString().matchAll(/(\w).value/g)].map(([_, refName]) => eval(refName))
  const update = () => (shouldUpdate = true)
  refs.map((s) => s[subscribe](update))

  let _value
  let shouldUpdate = true

  return {
    get value() {
      if (shouldUpdate) {
        const values = refs.map(({ value }) => value)
        _value = fn(...values)
        shouldUpdate = false
      }

      return _value
    },

    set value(x) {
      refs.map((s) => s[unsubscribe](update))
      _value = x
    },
  }
}


const a = ref(1)
const b = ref(2)
const c = compute(() => a.value + b.value)

console.log(c.value) // a = 1, b = 2, c = 3

a.value *= 2
b.value *= 3

console.log(c.value) // a = 2, b = 6, c = 8

// unfortunately not worked in the local block-scopes, only in global or module scope