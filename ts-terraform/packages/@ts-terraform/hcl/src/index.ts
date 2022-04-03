// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference lib="dom" />

import fs from 'fs-extra'
import path from 'path'
import {Go} from './wasm'
import {Body, Diagnostic} from './types'

export * from './types'

interface GoBridge {
  parse: (filename: string, hcl: string) => Promise<string>
}

// eslint-disable-next-line @typescript-eslint/ban-types
const jsRoot: Record<string, Function> = {}

function sleep() {
  return new Promise(global.setImmediate)
}

function goBridge(getBytes: Promise<Buffer>) {
  let ready = false

  async function init() {
    const go = new Go()
    const bytes = await getBytes
    const result = await WebAssembly.instantiate(bytes, go.importObject)
    void go.run(result.instance, {__parse_terraform_config_wasm__: jsRoot})
    ready = true
  }

  init().catch((error) => {
    throw error
  })

  const proxy = new Proxy({} as GoBridge, {
    get: (_, key: string) => {
      return async (...args: unknown[]) => {
        while (!ready) {
          await sleep()
        }

        if (!(key in jsRoot)) {
          throw new Error(`There is nothing defined with the name "${key.toString()}"`)
        }

        if (typeof jsRoot[key] !== 'function') {
          return jsRoot[key]
        }

        return new Promise((resolve, reject) => {
          const cb = (err: string, ...msg: string[]) => (err ? reject(new Error(err)) : resolve(...msg))

          const run = () => {
            jsRoot[key].apply(undefined, [...args, cb])
          }

          run()
        })
      }
    },
  })

  return proxy
}

const wasm = goBridge(fs.readFile(path.join(__dirname, '../dist/main.wasm')))

export async function parse(filename: string, contents: string): Promise<{ast: Body; diagnostics: Diagnostic[]}> {
  const res = await wasm.parse(filename, contents)
  return JSON.parse(res) as {ast: Body; diagnostics: Diagnostic[]}
}
