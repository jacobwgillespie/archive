package command

import (
	"testing"

	"github.com/mitchellh/cli"
)

func TestColorizeUI_impl(t *testing.T) {
	var _ cli.Ui = new(ColorizeUI)
}
