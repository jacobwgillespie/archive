
module GameDecorator

  def genre_links
    self.genres.map do |genre|
      link_to genre.name, genre
    end.join(', ').html_safe
  end

  def publisher_links
    self.publishers.map do |publisher|
      link_to publisher.name, publisher
    end.join(', ').html_safe
  end

end
