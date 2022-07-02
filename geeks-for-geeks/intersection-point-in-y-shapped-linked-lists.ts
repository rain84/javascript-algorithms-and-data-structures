// https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1

export const intersectPoint = (head1: INode | null, head2: INode | null) => {
  const cache1 = new WeakSet<INode>()
  const cache2 = new WeakSet<INode>()

  while (head1 !== null || head2 !== null) {
    if (head1 !== null) {
      if (cache2.has(head1)) return head1.data
      cache1.add(head1)
      head1 = head1.next
    }

    if (head2 !== null) {
      if (cache1.has(head2)) return head2.data
      cache2.add(head2)
      head2 = head2.next
    }
  }

  return -1
}

export interface INode {
  data: number
  next: INode | null
}

export class Node implements INode {
  constructor(public data: number, public next: INode | null = null) {}
}

export const createFromString = (str: string) => {
  const numbers = str.split(/\D+/)
  return numbers.reduceRight<INode>(
    (next, val) => new Node(+val, next),
    new Node(+numbers.pop()!)
  )
}
