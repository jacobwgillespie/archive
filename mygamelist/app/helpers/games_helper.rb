module GamesHelper

  def truncated_game_description(game, omission='...')
    truncate(game.description.gsub(/<[^>]+>/, ''),  :length => 200, :separator => ' ', :omission => omission)
  end

  def game_description_popover(game, id=nil)
    description = truncated_game_description(game)
    link_to game, :rel => 'gamepopover', :'data-name' => game.name, :'data-rating' => game.average_rating, :'data-description' => description do
      image_tag game.poster_url
    end
  end

  def rating_ballot(game)
    if user_signed_in?
      if @rating = current_user.ratings.find_by_game_id(game.id)
        @rating
      else
        current_user.ratings.new(:game_id => game.id)
      end
    else
      Rating.new(:game_id => game.id)
    end
  end

  def current_user_rating(game)
    if @rating = current_user.ratings.find_by_game_id(game.id)
      @rating
    else
      Rating.new({:value => 0, :review_raw => ''})
    end
  end

  def list_toggle_button(game, list, options={})
    return unless user_signed_in?
    options = {add: 'Add To List', remove: 'Remove From List'}.merge(options)

    list = List.preset(list)

    if game.in_list? current_user, list
      relation = current_user.relations.find_by_game_id_and_list_id(game.id, list.id)
      link_to relation_path(relation, :remove_message => options[:remove], :add_message => options[:add]), :remote => true, :method => :delete, :class => "btn btn-success btn-large listadd-#{list.name}-#{game.id} active" do
        raw "#{content_tag(:i, '', :class => 'icon-check')} #{options[:remove]}"
      end
    else
      link_to relations_path(:'relation[game_id]' => game.id, :'relation[list_id]' => list.id, :remove_message => options[:remove], :add_message => options[:add]), :remote => true, :method => :post, :class => "btn btn-inverse btn-large listadd-#{list.name}-#{game.id}" do
        raw "#{content_tag(:i, '', :class => 'icon-check-empty')} #{options[:add]}"
      end
    end
  end
end
