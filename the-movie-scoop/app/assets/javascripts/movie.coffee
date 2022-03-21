Movie = {}

Movie.getCurrentID = ->
  $('.movie').attr('data-movie-id')

Movie.addToList = (listID) ->
  $.ajax(
    url: "/lists/#{listID}/movies/#{Movie.getCurrentID()}"
    dataType: 'script'
    method: 'POST'
    data:
      _method: 'PUT'
  )
  false

Movie.removeFromList = (listID) ->
  $.ajax(
    url: "/lists/#{listID}/movies/#{Movie.getCurrentID()}"
    dataType: 'script'
    method: 'POST'
    data:
      _method: 'DELETE'
  )
  false

Movie.loadData = ->
  $.getJSON "/movies/#{Movie.getCurrentID()}.json", (data) ->
    console.log data

window.Movie = Movie
