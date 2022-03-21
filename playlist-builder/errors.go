package main

import (
	"net/http"
)

type apiError struct {
	Message string
	Code    int
}

func newApiError(message string, code int) *apiError {
	return &apiError{Message: message, Code: code}
}

func (e *apiError) Error() string {
	return e.Message
}

type requestHandler func(http.ResponseWriter, *http.Request) error

func (fn requestHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if e := fn(w, r); e != nil {
		if aerr, ok := e.(*apiError); ok {
			w.WriteHeader(aerr.Code)
			writeJSON(w, aerr)
		} else {
			w.WriteHeader(http.StatusInternalServerError)

			d := stringMap{
				"code":    http.StatusInternalServerError,
				"message": e.Error(),
			}
			writeJSON(w, d)
		}
	}
}
