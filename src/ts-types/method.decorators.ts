export const log =
  (before?: string, after?: string) =>
  (target: Function, ctx: ClassMethodDecoratorContext) => {
    const methodName = String(ctx.name)
    function decorator(this: any, ...args: any[]) {
      console.log(before ?? `START: ${methodName}()`)
      const res = target.apply(this, args)
      if (!before || after) console.log(after ?? `END: ${methodName}()`)
      return res
    }
    return decorator
  }

export const perf =
  (iterations = 100_000) =>
  (target: Function, ctx: ClassMethodDecoratorContext) => {
    const methodName = String(ctx.name)
    function decorator(this: any, ...args: any[]) {
      let i = iterations
      let startTime = performance.now()
      while (i--) target.apply(this, args)
      const res = target.apply(this, args)
      const execTime = (performance.now() - startTime) / (iterations + 1)
      console.log(
        `Execution time of ${methodName}(): ${execTime.toFixed(4)} ms`
      )
      return res
    }
    return decorator
  }

export const bound = (target: Function, ctx: ClassMethodDecoratorContext) => {
  const methodName = String(ctx.name)
  if (ctx.private)
    throw new Error(
      `'bound' cannot decorate private properties like ${methodName}.`
    )

  ctx.addInitializer(function (this: any) {
    this[methodName] = this[methodName].bind(this)
  })
}

// class Person {
//   constructor(private name: string) {}

//   @bound
//   @log()
//   greet() {
//     console.log('Hello ' + this.name)
//   }
// }

// const p = new Person('Ron!')
// const { greet } = p
// greet()
