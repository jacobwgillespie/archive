package main

import (
	"github.com/hashicorp/terraform/plugin"
	"github.com/jacobwgillespie/terraform-provider-script/script"
)

func main() {
	plugin.Serve(&plugin.ServeOpts{
		ProviderFunc: script.Provider,
	})
}
