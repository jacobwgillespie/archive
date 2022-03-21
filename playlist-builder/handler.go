package main

import (
	"net/http"

	"github.com/gorilla/schema"
)

var schemaDecoder = schema.NewDecoder()

type BuildArguments struct {
	SeedType   string `schema:"seed_type"`
	InternalId string `schema:"internal_id"`
}

func (b BuildArguments) Key() string {
	return b.SeedType + ":" + b.InternalId
}

func handleApiBuild(w http.ResponseWriter, r *http.Request) error {
	var buildArgument BuildArguments
	err := schemaDecoder.Decode(&buildArgument, r.URL.Query())
	if err != nil {
		return err
	}

	buildJobs <- buildArgument

	return renderAPIResponse(w, http.StatusOK, stringMap{
		"code":    http.StatusOK,
		"message": "success",
	})
}
