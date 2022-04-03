# About ts-terraform

`ts-terraform` is a suite of TypeScript modules for interacting with Terraform

**Status:** Alpha

## Getting Started

You can either install `ts-terraform`, which contains and re-exports all other modules, or just install the modules you are interested in:

```shell
$ yarn add ts-terraform

$ yarn add @ts-terraform/hcl
$ yarn add @ts-terraform/provider
```

## Packages

- `ts-terraform` - root package that contains all other packages
- `@ts-terraform/hcl` - HCL2 parser, powered by Wasm
- `@ts-terraform/provider` - Terraform Provider gRPC client
