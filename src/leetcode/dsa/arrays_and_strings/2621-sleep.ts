/**
 * 2621. Sleep
 * {@link https://leetcode.com/problems/sleep/description/ | Link}
 */
export async function sleep(millis: number): Promise<number> {
  return new Promise<number>((resolve) => setTimeout(() => resolve(millis), millis))
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
