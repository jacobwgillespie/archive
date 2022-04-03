# @ts-terraform/hcl

The `@ts-terraform/hcl` module provides an interface for parsing HCL2 files into an abstract syntax tree.

## Usage

```typescript
import {parse} from '@ts-terraform/hcl'

const {ast, diagnostics} = await parse(filename, source)
```

`filename` is a friendly name returned in errors. `source` is the HCL2 source code as a string. See `src/types.ts` for the return types.
