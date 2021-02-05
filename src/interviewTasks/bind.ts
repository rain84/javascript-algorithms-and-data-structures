{
    const bind = (fn: Function, ctx: object, ...args: any): Function => (...args2: any) =>
        fn.apply(ctx, [...args, args2])

    const fn = function (a: number, b: string) {
        return a.toString() + b + (this.c || '')
    }

    const obj = {
        c: 3,
        fn,
    }

    console.log(obj.fn(1, '2'))

    const bindedFn = bind(fn, obj, 1)
    console.log(bindedFn('2'))
}
