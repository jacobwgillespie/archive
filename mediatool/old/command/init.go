package command

import (
	"fmt"
	"strings"
)

// InitCommand is a Command implementation
type InitCommand struct {
	Meta
}

// Run runs the init command
func (c *InitCommand) Run(args []string) int {
	_, _, err := c.Context(contextOpts{
		Path: path,
	})

	if err != nil {
		c.UI.Error(fmt.Sprintf("Error loading mediatool: %s", err))
		return 1
	}

	return 0
}

// Help returns the init command help
func (c *InitCommand) Help() string {
	helpText := `
Usage: mediatool init [options]

  Runs the init command.
`

	return strings.TrimSpace(helpText)
}

// Synopsis returns the synopsis
func (c *InitCommand) Synopsis() string {
	return "Runs the init command"
}
