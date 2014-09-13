var App = function($) {
  var that = {};
  
  that.cacheId = null;
  
  that.get_torrents = function(callback) {
    if (that.cacheId != null) {
      return $.getJSON('ajax/get_torrents.php', {cache: that.cacheId}, get_torrents_response_wrapper(callback));
    } else {
      return $.getJSON('ajax/get_torrents.php', get_torrents_response_wrapper(callback));
    }
  };
  
  var get_torrents_response_wrapper = function(callback) {
    return function(data, textStatus, jqXHR) {
      that.cacheId = data.torrentc;
      callback(data, textStatus, jqXHR);
    };
  }
  
  that.get_attribute = function(object, property) {
    try {
      switch(property) {
        case 'hash':
          return object[0];
          break;
        case 'status':
          return object[1];
          break;
        case 'name':
          return object[2];
          break;
        case 'size':
          return object[3];
          break;
        case 'progress':
          return object[4];
          break;
        case 'downloaded':
          return object[5];
          break;
        case 'uploaded':
          return object[6];
          break;
        case 'ratio':
          return object[7];
          break;
        case 'uspeed':
          return object[8];
          break;
        case 'dspeed':
          return object[9];
          break;
        case 'eta':
          return object[10];
          break;
        case 'label':
          return object[11];
          break;
        case 'peers_connected':
          return object[12];
          break;
        case 'peers_in_swarm':
          return object[13];
          break;
        case 'seeds_connected':
          return object[14];
          break;
        case 'seeds_in_swarm':
          return object[15];
          break;
        case 'availability':
          return object[16];
          break;
        case 'torrent_queue_order':
          return object[17];
          break;
        case 'remaining':
          return object[18];
          break;
      }
    } catch(e) {
      return;
    }
  };
  
  that.add_torrent = function(torrent) {
    var el = $('<li/>');
    el.attr('id', that.get_attribute(torrent, 'hash'));
    el.attr('class', 'torrent');
    
    var name = $('<p/>');
    name.attr('class', 'name');
    el.append(name);
    
    
    var status = $('<ul/>');
    status.attr('class', 'status');
    status.append($('<li class="queued">Queued</li>'));
    status.append($('<li class="started">Started</li>'));
    status.append($('<li class="paused">Paused</li>'));
    status.append($('<li class="error">Error</li>'));
    el.append(status);
    
    var downloaded = $('<p/>');
    downloaded.attr('class', 'downloaded');
    el.append(downloaded);
    
    var progress = $('<div/>');
    progress.attr('class', 'progress');
    el.append(progress);
    
    var controls = $('<ul/>');
    controls.attr('class', 'controls');
    
    var start = $('<a/>').attr('href', '#').html('Start');
    start.click(function(){
      uTorrent.action('start', '&hash=' + that.get_attribute(torrent, 'hash'));
    });
    controls.append($('<li/>').attr('class', 'play-alt').append(start));
    
    var stop = $('<a/>').attr('href', '#').html('Stop');
    stop.click(function(){
      uTorrent.action('stop', '&hash=' + that.get_attribute(torrent, 'hash'));
    });
    controls.append($('<li/>').attr('class', 'stop-alt').append(stop));
    
    var pause = $('<a/>').attr('href', '#').html('Pause');
    pause.click(function(){
      uTorrent.action('pause', '&hash=' + that.get_attribute(torrent, 'hash'));
    });
    controls.append($('<li/>').attr('class', 'pause-alt').append(pause));
    
    var del = $('<a/>').attr('href', '#').html('Delete');
    del.click(function(){
      uTorrent.action('remove', '&hash=' + that.get_attribute(torrent, 'hash'));
    });
    controls.append($('<li/>').attr('class', 'delete-alt').append(del));
    
    el.append(controls);
    
    that.update_torrent(el, torrent);
    
    $('#torrents').append(el);
  }
  
  
  
  that.update_torrent = function(el, data) {
    el.data('exists', 1);
    el.removeClass('queued');
    el.removeClass('started');
    el.removeClass('paused');
    el.removeClass('error');
    if ((that.get_attribute(data, 'status') & 64) > 0)
      el.addClass('queued');
    if ((that.get_attribute(data, 'status') & 1) > 0)
      el.addClass('started');
    if ((that.get_attribute(data, 'status') & 32) > 0)
      el.addClass('paused');
    if ((that.get_attribute(data, 'status') & 16) > 0)
      el.addClass('error');
    
    
    el.children('.name').html(that.get_attribute(data, 'name'));
    el.children('.downloaded').html('Downloaded ' + (that.get_attribute(data, 'downloaded') / 1024 / 1024) + ' Mb of ' + (that.get_attribute(data, 'size') / 1024 / 1024) + ' MB (' + (that.get_attribute(data, 'progress') / 10) +'%)');
   
    el.children('.progress').progressbar({
      value: that.get_attribute(data, 'progress') / 10,
    });
  }
  
  
  that.load_ui = function() {
    $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 300,
      width: 350,
      modal: true,
      buttons: {
        "Add Torrent": function() {
          uTorrent.action('add-url', '&s=' + encodeURI($('#uri').val()));
          $(this).dialog("close");
        },
        Cancel: function() {
          $(this).dialog("close");
        }
      },
      close: function() {
        $('#uri').val("").removeClass( "ui-state-error" );
      }
    });
    
    $( "#add-torrent" )
      .button()
      .click(function() {
        $( "#dialog-form" ).dialog( "open" );
      });
    
    uTorrent.list(function(data){
      $('#placeholder').html('');
      $('#placeholder').append('<ul id="torrents"></ul>');
      
      $.each(data.torrents, function(key, val) {
        that.add_torrent(val);
      });
      
      setTimeout(that.refresh, 500);
    });
  };
  
  that.refresh = function() {
    uTorrent.list(function(data){
      $('.torrent').each(function(idx, el) {
        $(el).data('exists', 0);
      });
      $.each(data.torrents, function(key, val) {
        if ($('#' + that.get_attribute(val, 'hash')).length) {
          that.update_torrent($('#' + that.get_attribute(val, 'hash')), val);
        } else {
          that.add_torrent(val);
        }
      });
      $('.torrent').each(function(idx, el) {
        if ($(el).data('exists') == 0)
          $(el).slideUp('slow').remove();
      });
      setTimeout(that.refresh, 500);
    });
  };
  
  return that;
}(jQuery);