/**
 * 841. Keys and Rooms
 * {@link https://leetcode.com/problems/keys-and-rooms/description/ | Link}
 */
export function canVisitAllRooms(rooms: number[][]): boolean {
  const seen = new Set<number>()
  const q = [0]

  while (q.length) {
    const i = q.pop()!

    if (seen.has(i)) continue
    seen.add(i)
    q.push(...rooms[i])
  }

  const res = rooms.length === seen.size

  return res
}
