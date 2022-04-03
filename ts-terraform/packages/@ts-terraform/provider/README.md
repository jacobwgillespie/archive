# @ts-terraform/provider

This module provides access to Terraform providers directly, bypassing the `terraform` CLI. This is accomplished by launching and communicating with providers via their gRPC interface.

### Example

Work-in-progress, you likely don't want to follow this exactly.

```typescript
import {createProvider} from './provider'

async function run() {
  const provider = await createProvider('./.terraform/plugins/darwin_amd64/terraform-provider-aws_v2.65.0_x4', {
    debug: true,
  })

  await provider.configure({region: 'us-east-1'})

  const importRes = await provider.importResourceState('aws_iam_user', 'jacob')
  console.log(importRes)

  const readRes = await provider.readResource('aws_iam_user', importRes[0].state)
  console.log(readRes)

  if (readRes) {
    const planRes = await provider.planResourceChange(
      'aws_iam_user',
      readRes,
      {...readRes, tags: {hello: 'world'}},
      {private: importRes[0].private},
    )
    console.log(planRes)

    const applyRes = await provider.applyResourceChange('aws_iam_user', readRes, planRes.plannedState, {
      private: planRes.plannedPrivate,
    })
    console.log(applyRes)
  }

  await provider.shutdown()
}

run().catch((error: Error) => {
  console.error(error.stack)
  process.exit(1)
})
```
