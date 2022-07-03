type TClass = {
  [K in string]: any
}

interface IProxyClassCtor {
  new (): any
}

export class ProxyClass {
  constructor() {}

  private handler() {
    return 'handled'
  }
}

const p = new Proxy(ProxyClass.prototype, {
  // construct(target, argArray, newTarget) {
  //   return new target()
  // },
  get(target, p, receiver) {
    console.log(`target, p, receiver`, target, p, receiver)
  },
})
// ProxyClass.prototype = p
