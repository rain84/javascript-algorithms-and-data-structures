/* eslint-disable no-lone-blocks */
{
  const descriptors = Object.getOwnPropertyDescriptors(Number.prototype)

  const p = new Proxy(Number.prototype, {
    get: (target, name, receiver) => {
      if (Object.hasOwn(target, name)) return descriptors[name].value

      const fn = globalThis.eval(name)
      const val = receiver
      return fn(val)
    },
  })

  Object.setPrototypeOf(Number.prototype, p)

  console.log((5)[(x) => x + 1])
}
