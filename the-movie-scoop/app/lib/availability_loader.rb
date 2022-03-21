class AvailabilityLoader
  def self.load(id)
    new(id).load
  end

  def self.enqueue(id)
    AvailabilityLoadWorker.perform_async(id)
  end

  attr_reader :movie

  def initialize(id)
    @movie = Movie.find(id)
  end

  def load
    client = Canistreamit::Client.new
    movies = client.search(search_title)
    return unless movies[0]
    availability = client.query(
      movies[0]['_id'], %w(rental streaming purchase dvd)
    ).deep_symbolize_keys!
    AvailabilityParser.parse(movie, availability)
  end

  def search_title
    "#{I18n.transliterate(movie.title)} (#{movie.theater_release_date.year})"
  end
end
