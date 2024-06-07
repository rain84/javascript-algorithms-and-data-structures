export class Trie {
  #trie: Trie_ = {}
  #TERMINAL_MARK = Symbol()

  constructor(...words: T[] | [T[]]) {
    if (words.length) this.add(...words)
  }

  add(...strokes: T[] | [T[]]) {
    if (Array.isArray(strokes[0])) strokes = strokes[0]

    for (const s of strokes) {
      let t: Trie_ = this.#trie

      for (const ch of s) {
        t[ch] ??= {}
        t = t[ch] as Trie_
      }

      if (t !== this.#trie) {
        ;(t as Trie2)![this.#TERMINAL_MARK] = null
      }
    }

    return this
  }

  has(s: T) {
    const t = this.#rewind(s)
    return t && this.#TERMINAL_MARK in t
  }

  delete(s: T) {
    const t = this.#rewind(s)

    if (t !== null) {
      delete (t as Trie2)![this.#TERMINAL_MARK]
    }

    return this
  }

  entries(prefix: T = ''): T[] {
    const t = this.#rewind(prefix)
    if (!t) return []

    return this.#entries(t, prefix)
  }

  #entries(trie: Trie_, s: T = '') {
    const res: T[] = []

    if (this.#TERMINAL_MARK in trie) res.push(s)

    for (const [ch, nextTrie] of Object.entries(trie)) {
      const entries = this.#entries(nextTrie as Trie_, s + ch)
      res.push(...entries)
    }

    return res
  }

  #rewind(s: T) {
    let t = this.#trie

    for (const ch of s) {
      if (!t[ch]) return null
      t = t[ch] as Trie_
    }

    return t
  }
}

type T = string
type Trie_ = { [key: T]: Trie2 }
type Trie2 = { [key: T | symbol]: Trie2 } | null
