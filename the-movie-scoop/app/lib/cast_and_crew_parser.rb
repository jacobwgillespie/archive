class CastAndCrewParser
  def self.parse(movie, data)
    new(movie, data).parse
  end

  attr_reader :movie, :data

  def initialize(movie, data)
    @movie = movie
    @data = data
  end

  def parse
    data[:cast].each do |cast|
      update_cast(cast)
    end

    data[:crew].each do |crew|
      update_crew(crew)
    end
  end

  def update_cast(cast)
    person = update_person(cast[:id], cast[:name], cast[:profile_path])
    c = Cast.where(
      movie: movie, person: person, character: cast[:character]
    ).first_or_initialize
    c.order = cast[:order]
    c.save
  end

  def update_crew(crew)
    person = update_person(crew[:id], crew[:name], crew[:profile_path])
    Crew.where(
      movie: movie,
      person: person,
      department: crew[:department],
      job: crew[:job]
    ).first_or_create
  end

  def update_person(id, name, profile_path)
    person = Person.where(id: id).first_or_initialize
    person.name = name
    person.profile_url = profile_path
    person.save
    person
  end
end
