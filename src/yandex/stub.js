const solution = (...args) => {
  return JSON.stringify(args, null, ' ')
}

const prepareArguments = (str) => str.trim().split(/\W+/)

process.stdin.on('data', (data) => {
  const args = prepareArguments(data.toString())
  const res = solution(...args)
  process.stdout.write(res.toString())
  process.exit()
})
