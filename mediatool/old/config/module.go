package config

import "fmt"

// Module is a module used in a configuration
type Module struct {
	Name      string
	Source    string
	RawConfig *RawConfig
}

// ID returns a unique identifier for this module.
func (m *Module) ID() string {
	return fmt.Sprintf("%s", m.Name)
}

func (m *Module) mergerName() string {
	return m.ID()
}

func (m *Module) mergerMerge(other merger) merger {
	m2 := other.(*Module)

	result := *m
	result.Name = m2.Name
	result.RawConfig = result.RawConfig.merge(m2.RawConfig)

	if m2.Source != "" {
		result.Source = m2.Source
	}

	return &result
}
