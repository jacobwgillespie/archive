package config

import (
	"fmt"

	"github.com/media-tool/mediatool/flatmap"
	"github.com/mitchellh/mapstructure"
)

// Variable is a variable defined within the configuration.
type Variable struct {
	Name         string
	DeclaredType string `mapstructure:"type"`
	Default      interface{}
	Description  string
}

// DefaultsMap returns a map of default values for this variable
func (v *Variable) DefaultsMap() map[string]string {
	if v.Default == nil {
		return nil
	}

	n := fmt.Sprintf("var.%s", v.Name)
	switch v.Type() {
	case VariableTypeString:
		return map[string]string{n: v.Default.(string)}
	case VariableTypeMap:
		result := flatmap.Flatten(map[string]interface{}{
			n: v.Default.(map[string]string),
		})
		result[n] = v.Name

		return result
	default:
		return nil
	}
}

// Merge merges two variables to create a new third variable.
func (v *Variable) Merge(v2 *Variable) *Variable {
	// Shallow copy the variable
	result := *v

	// The names should be the same, but the second name always wins.
	result.Name = v2.Name

	if v2.Default != nil {
		result.Default = v2.Default
	}
	if v2.Description != "" {
		result.Description = v2.Description
	}

	return &result
}

var typeStringMap = map[string]VariableType{
	"string": VariableTypeString,
	"map":    VariableTypeMap,
}

// Type returns the type of variable this is.
func (v *Variable) Type() VariableType {
	if v.DeclaredType != "" {
		declaredType, ok := typeStringMap[v.DeclaredType]
		if !ok {
			return VariableTypeUnknown
		}

		return declaredType
	}

	return v.inferTypeFromDefault()
}

// ValidateTypeAndDefault ensures that default variable value is compatible
// with the declared type (if one exists), and that the type is one which is
// known to Terraform
func (v *Variable) ValidateTypeAndDefault() error {
	// If an explicit type is declared, ensure it is valid
	if v.DeclaredType != "" {
		if _, ok := typeStringMap[v.DeclaredType]; !ok {
			return fmt.Errorf("Variable '%s' must be of type string or map - '%s' is not a valid type", v.Name, v.DeclaredType)
		}
	}

	if v.DeclaredType == "" || v.Default == nil {
		return nil
	}

	if v.inferTypeFromDefault() != v.Type() {
		return fmt.Errorf("'%s' has a default value which is not of type '%s'", v.Name, v.DeclaredType)
	}

	return nil
}

func (v *Variable) mergerName() string {
	return v.Name
}

func (v *Variable) mergerMerge(m merger) merger {
	return v.Merge(m.(*Variable))
}

// Required tests whether a variable is required or not.
func (v *Variable) Required() bool {
	return v.Default == nil
}

// inferTypeFromDefault contains the logic for the old method of inferring
// variable types - we can also use this for validating that the declared
// type matches the type of the default value
func (v *Variable) inferTypeFromDefault() VariableType {
	if v.Default == nil {
		return VariableTypeString
	}

	var strVal string
	if err := mapstructure.WeakDecode(v.Default, &strVal); err == nil {
		v.Default = strVal
		return VariableTypeString
	}

	var m map[string]string
	if err := mapstructure.WeakDecode(v.Default, &m); err == nil {
		v.Default = m
		return VariableTypeMap
	}

	return VariableTypeUnknown
}

// VariableType is the type of value a variable is holding, and returned
// by the Type() function on variables.
type VariableType byte

// Variable types
const (
	VariableTypeUnknown VariableType = iota
	VariableTypeString
	VariableTypeMap
)
