//

function youHaveWon() {
  $('.result').html('<strong>you have won</strong>')
}

var html = $('.profile').html()
$('.profile').html('replacement')

// <div class="profile" name="bob" />

$.ajax({
  url: $('.profile').attr('data-upvote-url')
})

$('.profile').style('font-size', '12px')


var newTodo = //created somehow
$('.todos').appendChild(newTodo)
$('.todos').removeChild(newTodo)





// var names = ["a", "b", "c"]

// for (var i = 0; i < names.length; i++) {
//   var name = names[i]
// }

// window.document.body.style = 'background: red;'

$('p').text('')

// AJAX
// HTTP Requests
// VERB Location [body]

/*
GET /

POST /search q=search+term
PUT
PATCH
*/

setInterval(function() {
  $.getJSON('/stock-prices', function(data) {
    console.log(data)
  })
}, 5000)
