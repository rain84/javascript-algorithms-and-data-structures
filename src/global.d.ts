declare type Maybe<T> = MaybeNull<T> | MaybeUndefined<T>
declare type MaybeNull<T> = T | null
declare type MaybeUndefined<T> = T | undefined
// biome-ignore lint:
declare type Fn = (...args: any[]) => any
// biome-ignore lint:
declare type Any = any
