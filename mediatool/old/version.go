package main

import "github.com/media-tool/mediatool/mediatool"

// GitCommit is the git commit that was compiled. This will be filled in by the compiler.
var GitCommit string

// Version is the main version number that is being run at the moment
const Version = mediatool.Version

// VersionPrerelease is a pre-release marker for the version.
const VersionPrerelease = mediatool.VersionPrerelease
