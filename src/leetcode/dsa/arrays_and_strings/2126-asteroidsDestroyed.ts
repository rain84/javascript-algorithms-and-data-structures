/**
 * 2126. Destroying Asteroids
 * {@link https://leetcode.com/problems/destroying-asteroids/ | Link}
 */
export function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
  asteroids.sort((a, b) => a - b)

  for (const x of asteroids) {
    if (mass < x) return false
    mass += x
  }

  return true
}
