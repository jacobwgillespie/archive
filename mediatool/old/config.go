package main

import (
	"fmt"
	"io/ioutil"

	"github.com/hashicorp/hcl"
	"github.com/media-tool/mediatool/mediatool"
)

// Config is the structure of the configuration for the mediatool CLI.
//
// This is not the configuration for mediatool itself, that is in the "config" package.
type Config struct {
	TestSetting string `hcl:"test_setting"`
}

// BuiltinConfig is the built-in defaults for the configuration
var BuiltinConfig Config

// ContextOpts are the global ContextOpts we use to initialize the CLI.
var ContextOpts mediatool.ContextOpts

// ConfigFile returns the default path to the configuration file
// On Unix-like systems, this is ~/.mediatoolrc
// On Windows, this is the mediatool.rc file in the application data folder
func ConfigFile() (string, error) {
	return configFile()
}

// ConfigDir returns the configuration directory for mediatool.
func ConfigDir() (string, error) {
	return configDir()
}

// LoadConfig loads the CLI configuration from ".mediatoolrc" files.
func LoadConfig(path string) (*Config, error) {
	d, err := ioutil.ReadFile(path)
	if err != nil {
		return nil, fmt.Errorf("Error reading %s: %s", path, err)
	}

	obj, err := hcl.Parse(string(d))
	if err != nil {
		return nil, fmt.Errorf("Error parsing %s: %s", path, err)
	}

	var result Config
	if err := hcl.DecodeObject(&result, obj); err != nil {
		return nil, err
	}

	return &result, nil
}

// Discover discovers plugins.
func (c *Config) Discover() error {
	return nil
}

// Merge merges two configurations and returns a third with the values merged.
func (c *Config) Merge(c2 *Config) *Config {
	// do stuff
	return c2
}
