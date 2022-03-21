json.id @movie.id
json.likes current_user.likes?(@movie)
json.seen current_user.seen?(@movie)
json.in_watchlist current_user.in_watchlist?(@movie)

json.lists @movie.list_ids
