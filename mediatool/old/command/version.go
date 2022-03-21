package command

import (
	"bytes"
	"fmt"
)

// VersionCommand is a Command implementation that prints the version.
type VersionCommand struct {
	Meta

	Revision          string
	Version           string
	VersionPrerelease string
	CheckFunc         VersionCheckFunc
}

// VersionCheckFunc is the callback called by the Version command to check
// if there is a new version of mediatool.
type VersionCheckFunc func() (VersionCheckInfo, error)

// VersionCheckInfo is the return value for the VersionCheckFunc callback
// and tells the Version command information about the latest version
// of mediatool.
type VersionCheckInfo struct {
	Outdated bool
	Latest   string
	Alerts   []string
}

// Help provides the help text for the VersionCommand
func (c *VersionCommand) Help() string {
	return ""
}

// Run runs the VersionCommand
func (c *VersionCommand) Run(args []string) int {
	var versionString bytes.Buffer
	_ = c.Meta.process(args)

	fmt.Fprintf(&versionString, "mediatool v%s", c.Version)
	if c.VersionPrerelease != "" {
		fmt.Fprintf(&versionString, "-%s", c.VersionPrerelease)

		if c.Revision != "" {
			fmt.Fprintf(&versionString, " (%s)", c.Revision)
		}
	}

	c.UI.Output(versionString.String())

	if c.CheckFunc != nil {
		c.UI.Output("")

		// Check for the latest version
		info, err := c.CheckFunc()
		if err != nil {
			c.UI.Error(fmt.Sprintf("Error checking latest version: %s", err))
		}
		if info.Outdated {
			c.UI.Output(fmt.Sprintf(
				"Your version of mediatool is out of date! The latest version\n"+
					"is %s. You can update by downloading from www.mediatool.io",
				info.Latest))
		}
	}

	return 0
}

// Synopsis returns the synopsis for the VersionCommand
func (c *VersionCommand) Synopsis() string {
	return "Prints the mediatool version"
}
