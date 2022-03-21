package config

import (
	"io/ioutil"

	"github.com/ghodss/yaml"
)

type Config struct {
	LibraryConfigs map[string]LibraryConfig `json:"libraries"`
}

func NewConfigFromFile(path string) (error, *Config) {
	data, err := ioutil.ReadFile(path)
	if err != nil {
		return err, nil
	}

	var config Config
	err = yaml.Unmarshal(data, &config)
	if err != nil {
		return err, nil
	}

	return nil, &config
}
