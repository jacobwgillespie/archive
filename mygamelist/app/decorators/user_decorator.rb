
module UserDecorator

  def favorite_game_display
    return if listed_games_relations('favorite').empty?
    relations = listed_games_relations('favorite').rank(:list_order)
    content_tag(:h2) do
      "Favorite Games ".html_safe.concat(
      content_tag(:small) do
        link_to('More...', user_list_path(self, List.preset('favorite')))
      end.html_safe)
    end.concat(
    content_tag(:ul, :class => 'thumbnails', :id => "sortable-for-#{id}") do
      relations.map do |relation|
        content_tag(:li, game_description_popover(relation.game), :class => 'span1', :id => relation.id)
      end.join('').html_safe
    end)
  end

  def recent_reviews
    return if ratings.has_review.empty?
    content_tag(:h2, 'Recent Game Reviews').concat(
    render(ratings.has_review.order('created_at DESC'))).concat(
    link_to('More Game Reviews', user_ratings_path(self)))
  end

  def list_link(list)
    link_to pluralize(listed_games(list).size, 'game', 'games'), user_list_path(self, List.preset(list))
  end

  def bio_display
    if bio.nil? or bio.empty?
      render 'history/changelog', :object => self
    else
      content_tag(:div, :class => 'well') do
        simple_format(bio)
      end.concat(changelog(self))
    end
  end

end
