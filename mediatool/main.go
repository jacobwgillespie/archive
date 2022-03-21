package main

import (
	"fmt"
	"log"

	"github.com/docopt/docopt-go"
	"github.com/media-tool/mediatool/mediainfo"
	"github.com/media-tool/mediatool/mediatool/config"
)

func main() {
	usage := `mediatool.

Usage:
  mediatool <file> <field>`

	arguments, err := docopt.Parse(usage, nil, true, "mediainfo 0.1.0", false)
	if err != nil {
		log.Fatal(err)
	}

	filename := arguments["<file>"].(string)

	info := mediainfo.New()
	if err := info.Open(filename); err != nil {
		log.Fatal(err)
	}
	defer info.Close()

	field := arguments["<field>"].(string)
	val := info.Get(mediainfo.StreamGeneral, 0, field)
	fmt.Println(val)

	err, config := config.NewConfigFromFile("config.example.yml")
	fmt.Println(err)
	fmt.Println(config)
	for _, library := range config.LibraryConfigs {
		fmt.Println(library)
	}
}
