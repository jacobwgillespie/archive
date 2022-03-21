package main

import (
	"encoding/json"
	"net/http"
)

type stringMap map[string]interface{}

type apiReponse struct {
	Code int         `json:"code"`
	Data interface{} `json:"data"`
}

func renderAPIResponse(w http.ResponseWriter, status int, data interface{}) error {
	w.WriteHeader(status)
	return writeJSON(w, data)
}

func writeJSON(w http.ResponseWriter, v interface{}) error {
	data, err := json.MarshalIndent(v, "", "  ")
	if err != nil {
		return err
	}

	w.Header().Set("content-type", "application/json; charset=utf-8")
	_, err = w.Write(append(data, '\n'))
	return err
}
