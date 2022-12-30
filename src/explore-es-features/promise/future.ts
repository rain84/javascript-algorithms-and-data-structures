import type { IFuture, Onfulfilled, Onrejected, Executor } from './future.type'

// type Exec<T> = (
//   resolve: (value: T | PromiseLike<T>) => void,
//   reject?: (reason?: any) => void
// ) => void

// type Then<T> = (
//   onfulfilled?: Maybe<(value: T) => T>,
//   onrejected?: Maybe<(reason: any) => never>
// ) => FutureType

// type FutureType = <T>(exec: Exec<T>) => { then: Then<T> }

// type Onfulfilled<T> = Maybe<(value: T) => T>
// type Onrejected = Maybe<(reason: any) => never>

// interface IFuture<T> {
//   new (exec: Exec<T>): IFuture<T>

//   then: <T>(onfulfilled?: Onfulfilled<T>, onrejected?: Onrejected) => IFuture<T>
// }

export class Future implements IFuture {
  #handlers: Array<Onfulfilled | Onrejected> = []

  constructor(exec: Executor) {
    setTimeout(() =>
      exec((x: any) => {
        return this.#handlers.reduce((res, cb) => cb?.(res) ?? res, x)
      })
    )
  }

  // then(cb: any) {
  //   this.#handlers.push(cb)
  //   return this
  // }
}

const { log } = console
const identity = <T>(x: T) => x

//  prettier-ignore
new Future((res) => {
  console.log('ctor')
  res(42)
})
// .then((x) => {
//   log('then')
//   log(x)
// })

/* 
export const Future_: FutureType = <T>(exec: Exec<T>) => {
  let x: PromiseLike<T>

  exec((val) => (x = val))

  return {
    then: (resolve) => Future_((res) => exec(res)),
  }
}
 */
// run()
// test()

//  prettier-ignore
function test() {
  new Promise((res, rej) => {
    const a = 42
    res(a)
  })
    .then(() => ({ prop: 42 }))
    .then(console.log)
}
