/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import fs from 'fs-extra'
import globby from 'globby'
import path from 'path'
import {Go} from './wasm'

interface GoBridge {
  parseModule(hcl: string): Promise<string>
}

interface ModuleMetadata {
  variables: {
    name: string
    description?: string
    required: boolean
    type: any
  }[]
  outputs: {
    name: string
    description?: string
  }[]
}

const jsRoot: any = {}

function sleep() {
  return new Promise(global.setImmediate)
}

function goBridge(getBytes: Promise<Buffer>) {
  let ready = false

  async function init() {
    const go = new Go()
    let bytes = await getBytes
    let result = await WebAssembly.instantiate(bytes, go.importObject)
    go.run(result.instance, {__parse_terraform_config_wasm__: jsRoot})
    ready = true
  }

  init()

  let proxy = new Proxy({} as GoBridge, {
    get: (_, key) => {
      return (...args: unknown[]) => {
        return new Promise(async (resolve, reject) => {
          let run = () => {
            let cb = (err: string, ...msg: string[]) => (err ? reject(new Error(err)) : resolve(...msg))
            jsRoot[key].apply(undefined, [...args, cb])
          }

          while (!ready) {
            await sleep()
          }

          if (!(key in jsRoot)) {
            reject(new Error(`There is nothing defined with the name "${key.toString()}"`))
            return
          }

          if (typeof jsRoot[key] !== 'function') {
            resolve(jsRoot[key])
            return
          }

          run()
        })
      }
    },
  })

  return proxy
}

const wasm = goBridge(fs.readFile(path.join(__dirname, '../dist/main.wasm')))

export async function parseModule(dir: string): Promise<ModuleMetadata> {
  const paths = await globby(path.join(dir, '*.tf'))
  const sources = []
  for (const p of paths) {
    sources.push((await fs.readFile(p)).toString('utf8'))
  }
  const metadata: ModuleMetadata = JSON.parse(await wasm.parseModule(sources.join('\n\n')))
  metadata.outputs.sort((a, b) => a.name.localeCompare(b.name))
  metadata.variables.sort((a, b) => a.name.localeCompare(b.name))
  return metadata
}
