class AvailabilityParser
  def self.parse(movie, data)
    new(movie, data).parse
  end

  attr_reader :movie, :data

  def initialize(movie, data)
    @movie = movie
    @data = data
  end

  def parse
    data.each do |kind, val|
      val.each do |source, info|
        update_availability(kind, source, info)
      end
    end
  end

  def update_availability(kind, source, info)
    availability = Availability.where(
      movie: movie, source: source.to_s
    ).first_or_create
    availability.kind = kind
    availability.price = info[:price]
    availability.external_id = info[:external_id]
    availability.direct_url = info[:direct_url]
    availability.url = info[:direct_url]
    availability.save
  end
end
