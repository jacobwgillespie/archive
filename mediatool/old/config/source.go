package config

import "fmt"

// Source is a source for media or data
type Source struct {
	Name      string
	Type      string
	RawConfig *RawConfig
	DependsOn []string
}

// Copy returns a copy of this source
func (s *Source) Copy() *Source {
	n := &Source{
		Name:      s.Name,
		Type:      s.Type,
		RawConfig: s.RawConfig.Copy(),
		DependsOn: make([]string, len(s.DependsOn)),
	}
	copy(n.DependsOn, s.DependsOn)
	return n
}

// ID returns a unique ID for this source
func (s *Source) ID() string {
	return fmt.Sprintf("%s.%s", s.Type, s.Name)
}

func (s *Source) mergerName() string {
	return fmt.Sprintf("%s.%s", s.Type, s.Name)
}

func (s *Source) mergerMerge(m merger) merger {
	s2 := m.(*Source)

	result := *s
	result.Name = s2.Name
	result.Type = s2.Type
	result.RawConfig = result.RawConfig.merge(s2.RawConfig)

	return &result
}
