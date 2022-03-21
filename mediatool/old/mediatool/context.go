package mediatool

import "sync"

// ContextOpts are the user-configurable options to create a context with NewContext.
type ContextOpts struct {
	Parallelism int
}

// Context represents all the context that mediatool needs in order to
// perform operations on media. This structure is built using NewContext.
type Context struct {
	l           sync.Mutex // Lock aquired during any task
	parallelSem Semaphore
	runCh       <-chan struct{}
}

// NewContext creates a new Context structure.
//
// Once a Context is created, the pointer values within ContextOpts
// should not be mutated in any way, since the pointers are copied,
// not the values themselves.
func NewContext(opts *ContextOpts) *Context {
	// Determine parallelism, default to 10. We do this both to limit
	// CPU pressure but also to have an extra guard against rate throttling.
	par := opts.Parallelism
	if par == 0 {
		par = 10
	}

	return &Context{
		parallelSem: NewSemaphore(par),
	}
}
