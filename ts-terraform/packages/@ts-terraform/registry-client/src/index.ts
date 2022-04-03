import fs from 'fs-extra'
import globby from 'globby'
import got from 'got'
import os from 'os'
import path from 'path'
import stream from 'stream'
import unzipper from 'unzipper'
import {promisify} from 'util'

const BASE = 'https://registry.terraform.io'

function currentArch(): string {
  switch (os.arch()) {
    case 'arm':
      return 'arm'
    case 'arm64':
      return 'arm64'
    case 'ia32':
      return '386'
    case 'mips':
      return 'mips'
    case 'mipsel':
      return 'mipsel'
    case 'ppc':
      return 'ppc'
    case 's390':
      return 's390'
    case 's390x':
      return 's390x'
    case 'x32':
      return '386'
    case 'x64':
      return 'amd64'
    default:
      throw new Error(`Unknown arch: ${os.arch()}`)
  }
}

function currentOS(): string {
  switch (os.type()) {
    case 'Linux':
      return 'linux'
    case 'Darwin':
      return 'darwin'
    case 'Windows_NT':
      return 'windows'
    default:
      throw new Error(`Unknown OS: ${os.type()}`)
  }
}

export interface MetadataResponse {
  protocols: ('4.0' | '5.0')[]
  os: string
  arch: string
  filename: string
  download_url: string
  shasums_url: string
  shasums_signature_url: string
  shasum: string
  signing_keys: {
    gpg_public_keys: Array<{
      key_id: string
      ascii_armor: string
      trust_signature: string
      source: string
      source_url: string
    }>
  }
}

export async function getProviderMeta(name: string, version: string): Promise<MetadataResponse> {
  const os = currentOS()
  const arch = currentArch()

  const res = await got<MetadataResponse>(`${BASE}/v1/providers/hashicorp/${name}/${version}/download/${os}/${arch}`, {
    responseType: 'json',
  })

  return res.body
}

const pipeline = promisify(stream.pipeline)

export async function downloadProvider(name: string, version: string): Promise<boolean> {
  const meta = await getProviderMeta(name, version)

  const baseDir = path.join(process.cwd(), '.providers')
  const filename = path.join(baseDir, `${name}-${version}`)

  const fileExists = await fs.pathExists(filename)
  if (fileExists) {
    // const shasum = await hasha.fromFile(filename, {algorithm: 'sha256'})
    // console.log(shasum, meta.shasum)
    return false
  }

  await pipeline(got.stream(meta.download_url), unzipper.Extract({path: path.join(process.cwd(), '.providers')}))
  const originalFilename = await globby(path.join(baseDir, `terraform-provider-${name}_v${version}*`))
  await fs.move(originalFilename[0], filename, {overwrite: true})
  await fs.chmod(filename, 755)
  return true
}
