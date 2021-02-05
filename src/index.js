import path from 'path'
import { traverseDirRecursive } from './util/index.js'

const script = {
	name: process.argv[2],
	folderPath: path.resolve(process.cwd(), 'src')
}

if (!script.name) throw new Error('Script name should be provided')

const execScript = async (script) => {
	const action = async (entry) => {
		const isTarget = !!entry.path.match(/(.*)\.js$/)?.[1]?.endsWith(script.name)

		if (isTarget) return import(entry.path)
	}
	return traverseDirRecursive(script.folderPath, action)
}

try {
	console.log('\n')
	await execScript(script)
	console.log('\n')
} catch (e) {
	console.log(e)
}
