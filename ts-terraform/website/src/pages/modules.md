# Modules

Depending on your use-case, you may prefer to import `ts-terraform`, which contains all functionality in one package, or alternatively you may prefer to only import the modules you need.

| Module                                                                 | Description                                                                                                    |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [ts-terraform](/modules/ts-terraform)                                  | Root module, includes (and re-exports) all the other `@ts-terraform/*` modules                                 |
| [@ts-terraform/hcl](/modules/ts-terraform/hcl)                         | HCL2 parser, powered by Wasm                                                                                   |
| [@ts-terraform/provider](/modules/ts-terraform/provider)               | gRPC client for Terraform providers, allows interacting with providers directly, bypassing the `terraform` CLI |
| [@ts-terraform/provider-aws](/modules/ts-terraform/provider-aws)       | Code-generated, type-safe client for the Terraform AWS provider                                                |
| [@ts-terraform/registry-client](/modules/ts-terraform/registry-client) | API client for the Terraform Registry                                                                          |
