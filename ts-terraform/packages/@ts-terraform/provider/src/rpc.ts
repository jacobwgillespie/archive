import * as grpc from '@grpc/grpc-js'
import execa from 'execa'
import {RPCImpl} from 'protobufjs'
import readline from 'readline'
import {tfplugin5} from '../generated/client'

const Client = grpc.makeGenericClientConstructor({}, '')

function passThrough<T>(value: T): T {
  return value
}

function rpcImpl(address: string): RPCImpl {
  const client = new Client(address, grpc.credentials.createInsecure())
  const impl: RPCImpl = (method, requestData, callback) => {
    client.makeUnaryRequest(
      `/tfplugin5.Provider/${method.name}`,
      passThrough as (value: Uint8Array) => Buffer,
      passThrough,
      requestData,
      callback,
    )
  }
  return impl
}

export interface Options {
  debug?: boolean
}

export async function newRPC(
  binary: string,
  opts: Options = {},
): Promise<{rpc: tfplugin5.Provider; subprocess: execa.ExecaChildProcess}> {
  const subprocess = execa(binary, [], {
    env: {
      TF_PLUGIN_MAGIC_COOKIE: 'd602bf8f470bc67ca7faa0386276bbdd4330efaf76d1a219cb4d6991ca9872b2',
      PLUGIN_PROTOCOL_VERSIONS: '5',
    },
  }).on('error', (error) => {
    throw error
  })

  if (opts.debug) {
    subprocess.stderr?.pipe(process.stderr)
  }

  if (subprocess.stdout === null) {
    throw new Error('Unable to read stdout from provider')
  }

  const line = readline.createInterface({
    input: subprocess.stdout,
    terminal: false,
  })

  const metadataString = await new Promise<string>((resolve) =>
    line.once('line', (metadataString) => {
      resolve(metadataString)
    }),
  )

  const metadata = metadataString.split('|')

  if (metadata.length !== 6) {
    throw new Error(`Unexpected metadata string format: ${metadataString}`)
  }

  const [
    coreProtocolVersion,
    protocolVersion,
    networkType,
    networkAddress,
    protocolType,
    /* serverCert */
  ] = metadata

  if (coreProtocolVersion !== '1') {
    throw new Error(`Expected core protocol version '1', got '${coreProtocolVersion}'`)
  }

  if (protocolVersion !== '5') {
    throw new Error(`Expected protocol version '5', got '${coreProtocolVersion}'`)
  }

  if (networkType !== 'unix') {
    throw new Error(`Expected network address type 'unix', got '${networkType}'`)
  }

  if (protocolType !== 'grpc') {
    throw new Error(`Expected protocol type 'grpc', got '${protocolType}'`)
  }

  const impl = rpcImpl(`unix://${networkAddress}`)
  return {
    rpc: new tfplugin5.Provider(impl),
    subprocess,
  }
}
