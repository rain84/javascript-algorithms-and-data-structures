declare type Maybe<T> = MaybeNull<T> | MaybeUndefined<T>
declare type MaybeNull<T> = T | null
declare type MaybeUndefined<T> = T | undefined

declare namespace Intl {
  class Segmenter {
    segment(text: string): string[]
  }
}
