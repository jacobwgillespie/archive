#!/usr/bin/env node
import path from 'path'
import {codegen} from '../codegen'
import {createProvider} from '../provider'

async function run() {
  const name = process.argv[2]
  const version = process.argv[3]

  if (!name || !version) {
    console.error('Usage: ts-terraform-generate-provider [name] [version]')
    process.exit(1)
  }

  const binaryName = `${name}-${version}`
  const binaryPath = path.join(process.cwd(), '.providers', binaryName)

  const provider = await createProvider(binaryPath)
  const code = codegen(provider, name, path.join('..', '.providers', binaryName))

  console.log(code)

  await provider.shutdown()
}

run().catch((error: Error) => {
  console.error(error.stack)
  process.exit(1)
})
