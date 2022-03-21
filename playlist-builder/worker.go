package main

import (
	"fmt"
	"sync"

	"github.com/garyburd/redigo/redis"
	metrics "github.com/rcrowley/go-metrics"
)

var processTrackTimer = metrics.NewTimer()
var planBuildTimer = metrics.NewTimer()

func worker(id int, jobs chan BuildArguments, wg *sync.WaitGroup) {
	defer wg.Done()
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("goroutine panicked:", r)
		}
	}()

	for build := range jobs {
		handleJob(id, build)
	}
}

func processTrack(conn redis.Conn, job BuildArguments, title, artist string) {
	processTrackTimer.Time(func() {
		var track Track
		DB.Table("tracks").
			Select("tracks.id, tracks.title").
			Joins("inner join artist_track_roles on artist_track_roles.track_id=tracks.id inner join artists on artist_track_roles.artist_id=artists.id").
			Where("tracks.title = ? and artists.name = ?", title, artist).Scan(&track)

		if track.Id != 0 {
			fmt.Printf("Adding track ID %d\n", track.Id)
			_, _ = conn.Do("SADD", "plan:"+job.Key(), track.Id)
		}
	})
}

func handleJob(workerId int, job BuildArguments) {
	conn := pool.Get()
	defer conn.Close()

	planBuildTimer.Time(func() {
		fmt.Printf("Worker %d: building job (%s, %s)\n", workerId, job.SeedType, job.InternalId)

		r, err := conn.Do("SETNX", "lock:"+job.Key(), "1")
		if err != nil {
			return
		}

		if r != int64(1) {
			fmt.Printf("Worker %d: exiting - already queued\n", workerId)
			return
		}

		// Expire the key in 1 hour
		_, err = conn.Do("EXPIRE", "lock:"+job.Key(), "3600")
		defer conn.Do("DEL", "lock:"+job.Key())

		switch job.SeedType {
		case "artist":
			handleArtistJob(conn, job)
		case "track":
			handleTrackJob(conn, job)
		case "genre":
			handleGenreJob(conn, job)
		}
	})
}

func handleArtistJob(conn redis.Conn, job BuildArguments) {
	var artist Artist
	DB.Where("id = ?", job.InternalId).First(&artist)
	if artist.Id == 0 {
		return
	}
	r := artistTopTracks(artist.Name)
	for _, t := range r {
		processTrack(conn, job, t.Title, t.Artist)
	}

	similars := artistGetSimilar(artist.Name)

	for _, a := range similars {
		songs := artistTopTracks(a)
		for _, t := range songs {
			processTrack(conn, job, t.Title, t.Artist)
		}
	}
}

func handleTrackJob(conn redis.Conn, job BuildArguments) {
	var track Track
	DB.Where("id = ?", job.InternalId).First(&track)
	if track.Id == 0 {
		return
	}
	var artist Artist
	artists := track.Artists()
	if len(artists) != 0 {
		artist = artists[0]
	}
	processTrack(conn, job, track.Title, artist.Name)

	similars := trackGetSimilar(track.Title, artist.Name)

	for _, s := range similars {
		processTrack(conn, job, s.Title, s.Artist)
		songs := trackGetSimilar(s.Title, s.Artist)
		for _, t := range songs {
			processTrack(conn, job, t.Title, t.Artist)
		}
	}
}

func handleGenreJob(conn redis.Conn, job BuildArguments) {
	similars := tagTopTracks(job.InternalId)
	for _, s := range similars {
		processTrack(conn, job, s.Title, s.Artist)
	}
}
