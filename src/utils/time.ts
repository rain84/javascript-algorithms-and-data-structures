export const seconds = () => (Date.now() / 1000) | 0

seconds.last1000 = () => seconds() % 1000

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
