class DataRefresh
  def self.refresh_movies
    Movie.where('processed_at IS NULL OR processed_at <= ?', 1.day.ago).pluck(:id).each do |id|
      LoadMovieWorker.perform_async(id)
    end
  end

  def self.refresh_people
    Person.where('processed_at IS NULL OR processed_at <= ?', 1.day.ago).pluck(:id).each do |id|
      LoadPersonWorker.perform_async(id)
    end
  end
end
