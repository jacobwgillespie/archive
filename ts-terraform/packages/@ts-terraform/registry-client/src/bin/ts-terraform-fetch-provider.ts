#!/usr/bin/env node
import {downloadProvider} from '..'

async function run() {
  const name = process.argv[2]
  const version = process.argv[3]

  if (!name || !version) {
    console.error('Usage: ts-terraform-fetch-provider [name] [version]')
    process.exit(1)
  }

  const downloaded = await downloadProvider(name, version)
  if (downloaded) {
    console.error(`Fetching Terraform provider ${name} (${version})`)
  }
}

run().catch((error: Error) => {
  console.error(error.stack)
  process.exit(1)
})
