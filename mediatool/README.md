# mediatool

A media manager and organizer.

## Commands / Features

This is a list of possible commands or features, more or less taken from other projects:

* identify media files based on fingerprint
  - chromaprint / acoustid for music
  - file hash for video?
* identify media files based on filename
* autotag media files with external metadata
  - options to specify what kind of metadata is edited (including cover art)
  - options to specify what metadata should be removed
  - for things like cover art, allow adding as a file or embedding (or both)
  - music sources:
    * discogs
    * musicbrainz
    * AcousticBrainz
    * Echonest
    * amazon.com
    * lyrics (Lyric Wiki, Lyrics.com, Musixmatch, Genius.com, Google custom search API)
    * detect the key with KeyFinder
    * last.fm (tags to genres)
    * fetch play stats from mpd, itunes, amarok, etc.
  - movie sources:
    * imdb
    * tmdb
  - tv sources:
    * imdb
    * tvdb
    * myanimelist
* serve media content to other clients (DLNP, MPD, etc.)
* check media for bad or corrupt files and optionally clean or refetch them
* search for media files online
  - torrents
  - usenet
  - youtube
* send media files to downloaders
* process downloader results into the library
* organize media library based on rules
  - nested folders based on tags / attributes / media file types / etc.
  - renaming the files themselves
  - removing extraneous files
  - preventing or ensuring empty directories for missing content
* transfer content to or from other computers / friends / libraries
  - ipfs
  - sftp
* notify other services about changes
  - emby
  - mpd
  - plex
  - kodi
  - prowl
  - pushbullet
  - pushover
  - slack
  - email
* build smart playlists based on queries
* transcode media files into a specified format
* understand anime
* manage foreign media
  - understand multiple names
  - keep original and english audio language stream
  - manage multi-language and multi-format subtitles
* find and eliminate duplicate files (with smarts like detecting qualities / duplicates with different names / formats)
* search media library for files (with fuzzy matching)
* read from external download lists
  - rss feed
  - IMBd watchlist / search (person, character, etc.)
  - trakt watchlist
  - anidb wishlist
  - apple trailers
  - letterboxd
  - myepisodes.com
  - twitter
* info command to print info about a particular media item
* missing command to discover items missing from your library (like tracks in an album, episodes in a show, etc.)
* web GUI for viewing / managing library
* remotely manage a media library on another source (cloud files, NAS, remote seedbox, etc.)

## Configuration

To accomplish the above, the config looks like the following:

* Library
  - dir - directory that contains the library
  - tags - tags to apply to the library
* Provider - an external source (metadata, downloads, etc.)
* Source - a source for media / data
* Filter - filter sources based on characteristics
* Action - an action to take on sources
