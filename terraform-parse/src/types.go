package main

import "github.com/zclconf/go-cty/cty"

// ModuleMetadata represents metadata for a given Terraform module
type ModuleMetadata struct {
	Variables []VariableMetadata `json:"variables"`
	Outputs   []OutputMetadata   `json:"outputs"`
}

// VariableMetadata represents metadata for a specific Terraform variable
type VariableMetadata struct {
	Name        string   `json:"name"`
	Description string   `json:"description,omitempty"`
	Required    bool     `json:"required"`
	Type        cty.Type `json:"type"`
}

// OutputMetadata represents metadata for a specific Terraform output
type OutputMetadata struct {
	Name        string `json:"name"`
	Description string `json:"description,omitempty"`
}
