package main

type Artist struct {
	// Properties
	Id   int64  `json:"id"`
	Name string `json:"name"`
}

type Track struct {
	// Properties
	Id    int64  `json:"id"`
	Title string `json:"title"`
}

func (t Track) Artists() []Artist {
	var artists []Artist
	DB.Table("artists").
		Select("artists.id, artists.name").
		Joins("inner join artist_track_roles on artist_track_roles.artist_id=artists.id").
		Where("artist_track_roles.track_id = ?", t.Id).Scan(&artists)
	return artists
}
