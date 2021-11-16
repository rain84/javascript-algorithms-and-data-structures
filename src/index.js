import path from 'path'
import { traverseDirRecursive } from './utils/index.js'
import { exec as _exec } from 'child_process'
import { promisify } from 'util'

const exec = promisify(_exec)

const getScriptConfig = () => {
  try {
    const { base, ext, name } = path.parse(process.argv[2])

    if (!name || !ext) return

    return {
      base,
      ext: ext.slice(1),
      name,
    }
  } catch {}
}

const execScript = async (config) => {
  const action = async (entry) => {
    const isTarget = entry.path.endsWith(config.base)
    if (!isTarget) return

    const is = {
      [config.ext]: true,
    }

    if (is.js || is.mjs) return import(entry.path)
    if (is.ts) {
      const command = `tsc ${config.base} && node ${config.name}.js && rm ${config.name}.js`
      const { error, stdout, stderr } = await exec(command, { cwd: path.dirname(entry.path) })

      if (error || stderr) {
        console.log('TS execution error', std)
        console.log('stderr', stderr)
        console.log('error', error)
      } else {
        console.log(stdout)
      }
    }
  }

  const initialFolder = path.resolve(process.cwd(), 'src')
  return traverseDirRecursive(initialFolder, action)
}

const run = () => {
  try {
    const config = getScriptConfig()

    if (!config) {
      console.log('Wrong file name')
      return
    }

    execScript(config)
  } catch (error) {
    console.log(error)
  }
}
run()
