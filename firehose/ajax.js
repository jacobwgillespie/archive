function setBoard() {
  var url = window.location.href;

  $.get(url + "/pieces").success(function(data){
    for (var x = 0; x < 8; x++) {
      for (var y = 0; y < 8; y++) {
        var square = $("#" + x + y);
        square.html('');
      }
    }

    // data = [picece, piece, piece]
    data.forEach(function(piece){
      var cssSelector = "#" + piece.x_position + piece.y_position;
      var square = $(cssSelector);

      var piece = $('<div></div>');
      piece.html(piece.unicode);
      piece.addClass('piece');
      piece.attr('data-id', piece.id);
      piece.attr('data-x-position', piece.x_position);
      piece.attr('data-y-position', piece.y_position);

      square.append(piece);
    });

    dragDropPiece();
  });
}

function handleDrag(element) {
  var square = $(this);
  var piece = $(element);

  var piece_id = piece.attr('data-id');
  var destination_x = square.attr('data-x');
  var destination_y = square.attr('data-y');

  var url = window.location.href + '/pieces/' + piece_id;
  $.post(url, {
    body: {
      _method: 'PATCH',
      x_position: destination_x,
      y_position: destination_y,
    }
  }).success(function(data) {
    setBoard();
  })
}

function dragDropPiece() {
  $('.piece').draggable();
  $('.square').droppable({
    onDrop: handleDrag
  });
}


$(document).ready(function(){
  setBoard();

  var classHighlight = 'highlight';
  var pieces = $('.square');
  $('.square').click(function(item) {
    $('.square').removeClass(classHighlight);
    $( this ).addClass(classHighlight);
  });
});

<td class="square" id="51" data-x="<%= row %>" data-y="<%= column %>">unicode</td>
