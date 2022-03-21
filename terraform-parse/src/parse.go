package main

import (
	"encoding/json"
	"fmt"

	"github.com/hashicorp/terraform/configs"
	"github.com/spf13/afero"
)

func parseOutputs(mod *configs.Module) []OutputMetadata {
	outputs := make([]OutputMetadata, len(mod.Outputs))
	i := 0
	for _, out := range mod.Outputs {
		outputs[i] = OutputMetadata{
			Name:        out.Name,
			Description: out.Description,
		}
		i++
	}
	return outputs
}

func parseVariables(mod *configs.Module) []VariableMetadata {
	vars := make([]VariableMetadata, len(mod.Variables))
	i := 0
	for _, v := range mod.Variables {
		vars[i] = VariableMetadata{
			Name:        v.Name,
			Description: v.Description,
			Required:    v.Required(),
			Type:        v.Type,
		}
		i++
	}
	return vars
}

// Parse parses a Terraform module string into variables and outputs
func parseModule(contents string) (interface{}, error) {
	fs := afero.NewMemMapFs()
	err := fs.Mkdir("module", 0755)
	if err != nil {
		return nil, err
	}
	afero.WriteFile(fs, "module/main.tf", []byte(contents), 0644)

	parser := configs.NewParser(fs)
	module, diag := parser.LoadConfigDir("module")

	if diag.HasErrors() {
		return nil, fmt.Errorf("%s", diag.Error())
	}

	moduleMetadata := ModuleMetadata{
		Variables: parseVariables(module),
		Outputs:   parseOutputs(module),
	}

	data, _ := json.Marshal(moduleMetadata)
	return string(data), nil
}
