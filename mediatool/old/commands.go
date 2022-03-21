package main

import (
	"os"

	"github.com/media-tool/mediatool/command"
	"github.com/mitchellh/cli"
)

// Commands is the mapping of all available commands
var Commands map[string]cli.CommandFactory

// UI is the cli.Ui used for communicating with the outside world.
var UI cli.Ui

// ErrorPrefix and OutputPrefix control the destination of log message
const (
	ErrorPrefix  = "e:"
	OutputPrefix = "o:"
)

func init() {
	UI = &cli.PrefixedUi{
		AskPrefix:    OutputPrefix,
		OutputPrefix: OutputPrefix,
		InfoPrefix:   OutputPrefix,
		ErrorPrefix:  ErrorPrefix,
		Ui:           &cli.BasicUi{Writer: os.Stdout},
	}

	meta := command.Meta{
		Color:       true,
		ContextOpts: &ContextOpts,
		UI:          UI,
	}

	Commands = map[string]cli.CommandFactory{
		"init": func() (cli.Command, error) {
			return &command.InitCommand{
				Meta: meta,
			}, nil
		},
		"version": func() (cli.Command, error) {
			return &command.VersionCommand{
				Meta:              meta,
				Revision:          GitCommit,
				Version:           Version,
				VersionPrerelease: VersionPrerelease,
				CheckFunc:         commandVersionCheck,
			}, nil
		},
	}
}

// Dummy method to ignore version checks
func commandVersionCheck() (command.VersionCheckInfo, error) {
	var zero command.VersionCheckInfo
	return zero, nil
}
