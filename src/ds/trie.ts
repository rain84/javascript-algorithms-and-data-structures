export class Trie {
  #trie: Trie_ = {}
  #TERMINAL_MARK = Symbol()

  constructor(words: string[]) {
    for (const word of words) {
      this.add(word)
    }
  }

  add(s: string) {
    let t: Trie_ = this.#trie

    for (const ch of s) {
      t[ch] ??= {}
      t = t[ch] as Trie_
    }

    if (t !== this.#trie) {
      ;(t as Trie2)![this.#TERMINAL_MARK] = null
    }

    return this
  }

  has(s: string) {
    const t = this.#rewind(s)
    return t && this.#TERMINAL_MARK in t
  }

  delete(s: string) {
    const t = this.#rewind(s)

    if (t !== null) {
      delete (t as Trie2)![this.#TERMINAL_MARK]
    }

    return this
  }

  entries(prefix = ''): string[] {
    const t = this.#rewind(prefix)
    if (!t) return []

    return this.#entries(t, prefix)
  }

  #entries(trie: Trie_, s = '') {
    const res: string[] = []

    if (this.#TERMINAL_MARK in trie) res.push(s)

    for (const [ch, nextTrie] of Object.entries(trie)) {
      const entries = this.#entries(nextTrie as Trie_, s + ch)
      res.push(...entries)
    }

    return res
  }

  #rewind(s: string) {
    let t = this.#trie

    for (const ch of s) {
      if (!t[ch]) return null
      t = t[ch] as Trie_
    }

    return t
  }
}

type Trie_ = { [key: string]: Trie2 }
type Trie2 = { [key: string | symbol]: Trie2 } | null
