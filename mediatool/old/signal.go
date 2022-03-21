package main

import (
	"log"
	"os"
	"os/signal"
)

func initSignalHandlers() {
	signalCh := make(chan os.Signal, 2)
	signal.Notify(signalCh, os.Interrupt)
	go func() {
		for {
			<-signalCh
			log.Printf("[DEBUG] main: interrupt received. ignoring since command should also listen")
		}
	}()
}
