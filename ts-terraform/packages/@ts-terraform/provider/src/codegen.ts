import {Provider} from './provider'
import prettier from 'prettier'
import * as fastCase from 'fast-case'
import * as T from 'schema-types'

export function codegen(provider: Provider, name: string, binaryPath: string): string {
  const providerConfig = T.code(
    T.object({
      providerSchema: provider.providerSchema,
      dataSourceSchemas: T.object(provider.dataSourceSchemas),
      resourceSchemas: T.object(provider.resourceSchemas),
      dataSourceStateSchemas: T.object(provider.dataSourceStateSchemas),
      resourceStateSchemas: T.object(provider.resourceStateSchemas),
    }),
  )

  return prettier.format(
    `import {createProviderFactory, Provider, ProviderConfigType} from '@ts-terraform/provider'
import path from 'path'

interface ProviderConfig extends ProviderConfigType ${providerConfig}

export type ${fastCase.pascalize(name)}Provider = Provider<ProviderConfig>

const _createProvider = createProviderFactory<${fastCase.pascalize(name)}Provider>()
export const createProvider = () => _createProvider(path.join(__dirname, '${binaryPath}'))
`,
    {
      parser: 'typescript',
      bracketSpacing: false,
      printWidth: 120,
      semi: false,
      singleQuote: true,
      trailingComma: 'all',
    },
  )
}
