package main

type configStruct struct {
	Port          int64
	Dsn           string
	RedisServer   string
	RedisPassword string
	LastFMAPIKey  string
	LibratoUser   string
	LibratoToken  string
	LibratoSource string
}

var Config configStruct
