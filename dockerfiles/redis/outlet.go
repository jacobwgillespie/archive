package main

import (
	"bufio"
	"fmt"
	"io"
	"sync"

	"github.com/daviddengcn/go-colortext"
)

type OutletFactory struct {
	Padding int

	sync.Mutex
}

var colors = []ct.Color{
	ct.Cyan,
	ct.Yellow,
	ct.Green,
	ct.Magenta,
	ct.Red,
	ct.Blue,
}

func NewOutletFactory() (of *OutletFactory) {
	return new(OutletFactory)
}

func (of *OutletFactory) LineReader(wg *sync.WaitGroup, name string, index int, r io.Reader, isError bool) {
	defer wg.Done()

	color := colors[index%len(colors)]

	scanner := bufio.NewScanner(r)
	for scanner.Scan() {
		of.WriteLine(name, scanner.Text(), color, ct.None, isError)
	}
}

func (of *OutletFactory) SystemOutput(str string) {
	of.WriteLine("manager", str, ct.White, ct.None, false)
}

func (of *OutletFactory) ErrorOutput(str string) {
	fmt.Printf("ERROR: %s\n", str)
	//os.Exit(1)
}

// Write out a single coloured line
func (of *OutletFactory) WriteLine(left, right string, leftC, rightC ct.Color, isError bool) {
	of.Lock()
	defer of.Unlock()

	ct.ChangeColor(leftC, true, ct.None, false)
	formatter := fmt.Sprintf("%%-%ds | ", of.Padding)
	fmt.Printf(formatter, left)

	if isError {
		ct.ChangeColor(ct.Red, true, ct.None, true)
	} else {
		ct.ResetColor()
	}
	fmt.Println(right)
	if isError {
		ct.ResetColor()
	}
}
