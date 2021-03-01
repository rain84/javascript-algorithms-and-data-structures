import path from 'path'
import { create } from 'ts-node'
import { traverseDirRecursive } from './util/index.js'
import ts from 'typescript'

const script = {
	name: process.argv[2],
	folderPath: path.resolve(process.cwd(), 'src')
}

if (!script.name) throw new Error('Script name should be provided')

const execScript = async (script) => {
	const action = async (entry) => {
		const match = entry.path.match(/(.*)\.(js|ts)$/)
		const isTarget = !!match?.[1]?.endsWith(script.name)

		if (!isTarget) return

		const is = {
			js: match[2] === 'js',
			ts: match[2] === 'ts'
		}

		if (is.js) return import(entry.path)
		if (is.ts) {
			const tsNode = create()

			Object.assign(tsNode.config.options, {
				isolatedModules: false,
				emit: true
			})

			try {
				tsNode.compile('', entry.path)
				console.log('Successfully compiled\n')
			} catch (e) {
				console.log('Catched on ts-node compillation: \n', e)
			}
		}
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
