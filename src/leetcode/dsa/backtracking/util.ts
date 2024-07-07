export const sort = (arr: (number[] | string)[]) =>
  arr
    .map((x) => String(x))
    .sort()
    .toString()
