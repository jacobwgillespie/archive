class VideoParser
  def self.parse(movie, data)
    new(movie, data).parse
  end

  attr_reader :movie, :data

  def initialize(movie, data)
    @movie = movie
    @data = data
  end

  def parse
    data.each do |video|
      update_video(video)
    end
  end

  def update_video(video)
    Video.where(
      movie_id: movie.id, key: video[:key]
    ).first_or_create do |movie|
      movie.name = video[:name]
      movie.source = video[:site]
      movie.size = video[:size]
      movie.kind = video[:type]
      movie.language = video[:iso_639_1]
    end
  end
end
