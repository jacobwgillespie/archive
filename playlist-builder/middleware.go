package main

import (
	"net/http"
	"strings"
)

func methodOverrideMiddleware(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		queryMethod := r.URL.Query()["method_override"]
		if queryMethod != nil {
			r.Method = strings.ToUpper(queryMethod[0])
		}

		postMethod := r.FormValue("method_override")
		if postMethod != "" {
			r.Method = strings.ToUpper(postMethod)
		}

		h.ServeHTTP(w, r)
	})
}

func corsMiddleware(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var origin string
		if len(r.Header["Origin"]) != 0 {
			origin = r.Header["Origin"][0]
		} else {
			origin = "*"
		}

		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Headers", "Accept-Encoding,Keep-Alive,User-Agent,If-Modified-Since,Cache-Control,Content-Type,Authorization,DNT")
		w.Header().Set("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST,OPTIONS")
		w.Header().Set("Access-Control-Allow-Origin", origin)

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
		} else {
			h.ServeHTTP(w, r)
		}
	})
}
