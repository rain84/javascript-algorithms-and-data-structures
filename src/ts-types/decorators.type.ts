export type Target<T, A extends any[], R> = (this: T, ...args: A) => R

export type Decorator = <T, A extends any[], R>(
  target: Target<T, A, R>,
  ctx: ClassMethodDecoratorContext<T, Target<T, A, R>>
) => (this: T, ...args: A) => R
