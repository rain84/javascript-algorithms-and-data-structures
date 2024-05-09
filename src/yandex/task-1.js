const renderWaterfall = (rootNode, columnCount, elementGap) => {
  rootNode.style.display = 'grid'
  rootNode.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`
  rootNode.style.gridGap = `${elementGap}px`

  const children = [...rootNode.children]
  const colsHeight = new Array(columnCount).fill(0)

  const nextChildren = []
  let row = 0
  let col = 0
  let i = 0

  for (const child of children) {
    const { offsetHeight } = child
    const min = Math.min(...colsHeight)
    const minColIndex = colsHeight.indexOf(min)
    colsHeight[minColIndex] += offsetHeight + elementGap

    if (i % columnCount === 0) {
      row++
      col = 0
    } else {
      col = minColIndex
    }
    i++

    nextChildren[(row - 1) * columnCount + col] = child
  }

  for (let i = 0; i < nextChildren.length; i++) {
    rootNode.appendChild(nextChildren[i])
  }
}

const solution = (...args) => {
  return renderWaterfall(...args)
}

const prepareArguments = (str) => str.trim().split(/\W+/)

process.stdin.on('data', (data) => {
  const args = prepareArguments(data.toString())
  const res = solution(...args)
  process.stdout.write(res.toString())
  process.exit()
})
