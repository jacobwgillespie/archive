//+ build js,wasm
package main

import (
	"fmt"
	"syscall/js"
)

var jsRoot js.Value

const (
	bridgeJavaScriptName = "__parse_terraform_config_wasm__"
)

func registrationWrapper(fn func(this js.Value, args []js.Value) (interface{}, error)) func(this js.Value, args []js.Value) interface{} {
	return func(this js.Value, args []js.Value) interface{} {
		cb := args[len(args)-1]

		ret, err := fn(this, args[:len(args)-1])

		if err != nil {
			cb.Invoke(err.Error(), js.Null())
		} else {
			cb.Invoke(js.Null(), ret)
		}

		return ret
	}
}

func registerFn(name string, callback func(this js.Value, args []js.Value) (interface{}, error)) {
	jsRoot.Set(name, js.FuncOf(registrationWrapper(callback)))
}

func registerValue(name string, value interface{}) {
	jsRoot.Set(name, value)
}

func main() {
	global := js.Global()
	jsRoot = global.Get(bridgeJavaScriptName)
	c := make(chan struct{}, 0)
	registerFn("parse", func(this js.Value, args []js.Value) (interface{}, error) {
		if len(args) == 0 {
			return nil, fmt.Errorf("No arguments provided")
		}
		return ParseConfig(args[0].String(), args[1].String())
	})
	<-c
}
