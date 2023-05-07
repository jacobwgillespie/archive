// Linked lists

$(function() {
  $('.new-lesson-button').click(function( event ) {
    var lessonUrl = $( event.target ).data('lesson-url');
    $('#newLessonForm').attr('action', lessonUrl);
  });

  $('.lessons').sortable({
    update: function( event, ui ) {
      $.ajax({
        type: 'PUT',
        url: ui.item.data('update-url'),
        dataType: 'json',
        data: { lesson: { row_order_position: ui.item.index() } }
      });
    }
  });
});

$(function() {
  $('.sections').sortable({
    update: function( event, ui ) {
      $.ajax({
      type: 'PUT',
      url: ui.item.data('update-url'),
      dataType: 'json',
      data: { section: { row_order_position: ui.item.index() } }
      });
    }
  });
});


function callCallback(cb) {
  // ...
  cb()
}
