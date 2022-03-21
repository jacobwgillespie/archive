// Package config is responsible for loading and validating the configuration
package config

import "regexp"

// NameRegexp is the regular expression that all names must follow.
var NameRegexp = regexp.MustCompile(`\A[A-Za-z0-9\-\_]+\z`)

// Config is the configuration.
type Config struct {
	// Dir is the path to the directory that contains the configuration files.
	// If it is blank, the config was not loaded from any meaningful directory.
	Dir string

	// Libraries []*Library
	Modules   []*Module
	Variables []*Variable

	unknownKeys []string
}

// Library is the configuration for a library
/*
type Library struct {
	Name      string
	Dir       string
	RawConfig *RawConfig
}
*/
