json.id @movie.id
json.likes current_user.likes?(@movie)
json.seen current_user.seen?(@movie)
json.in_watchlist current_user.in_watchlist?(@movie)

json.lists current_user.lists do |list|
  json.id list.id
  json.in_list list.has_movie?(@movie)
end
