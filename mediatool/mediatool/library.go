package mediatool

import (
	"os"
	"path/filepath"
)

type Library struct {
	Root string

	MediaFiles []MediaFile
}

func NewLibraryFromRoot(root string) (error, *Library) {
	library := Library{
		Root: root,
	}

	err := library.Load()
	if err != nil {
		return err, nil
	}

	return nil, &library
}

func (l *Library) Load() error {
	err := filepath.Walk(l.Root, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		l.MediaFiles = append(l.MediaFiles, MediaFile{Path: path})

		return nil
	})

	return err
}
