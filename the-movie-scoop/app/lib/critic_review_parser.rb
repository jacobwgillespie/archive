class CriticReviewParser
  def self.parse(movie, data)
    new(movie, data).parse
  end

  attr_reader :movie, :data

  def initialize(movie, data)
    @movie = movie
    @data = data
  end

  def parse
    return unless data['reviews']
    data['reviews'].each do |info|
      update_critic_review(info)
    end
  end

  def update_critic_review(info)
    critic_review = CriticReview.where(
      movie: movie, critic: info['critic']
    ).first_or_create
    critic_review.date = info['date']
    critic_review.original_score = info['original_score']
    critic_review.freshness = info['freshness']
    critic_review.quote = info['quote']
    critic_review.url = info['links']['review']
    critic_review.save
  end
end
