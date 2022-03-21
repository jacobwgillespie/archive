package command

import (
	"fmt"

	"github.com/mitchellh/cli"
	"github.com/mitchellh/colorstring"
)

// ColorizeUI is a Ui implementation that colors its output according
// to the given color schemes for the given type of output.
type ColorizeUI struct {
	Colorize    *colorstring.Colorize
	OutputColor string
	InfoColor   string
	ErrorColor  string
	WarnColor   string
	UI          cli.Ui
}

// Ask proxies calls to UI
func (u *ColorizeUI) Ask(query string) (string, error) {
	return u.UI.Ask(u.colorize(query, u.OutputColor))
}

// AskSecret proxies calls to UI
func (u *ColorizeUI) AskSecret(query string) (string, error) {
	return u.UI.AskSecret(u.colorize(query, u.OutputColor))
}

// Output proxies calls to UI
func (u *ColorizeUI) Output(message string) {
	u.UI.Output(u.colorize(message, u.OutputColor))
}

// Info proxies calls to UI
func (u *ColorizeUI) Info(message string) {
	u.UI.Info(u.colorize(message, u.InfoColor))
}

// Error proxies calls to UI
func (u *ColorizeUI) Error(message string) {
	u.UI.Error(u.colorize(message, u.ErrorColor))
}

// Warn proxies calls to UI
func (u *ColorizeUI) Warn(message string) {
	u.UI.Warn(u.colorize(message, u.WarnColor))
}

func (u *ColorizeUI) colorize(message string, color string) string {
	if color == "" {
		return message
	}

	return u.Colorize.Color(fmt.Sprintf("%s%s[reset]", color, message))
}
