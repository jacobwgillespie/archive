var Settings = {
  user_name: 'Jacob'
};

jQuery(function($) {
  var map;

  var marker, circle, info, position, user_marker, user_position;

  var previous = {
    latitude: 0,
    longitude: 0,
    accuracy: 0,
    previous_time: 0,
    zoom: 0
  }

  map = new google.maps.Map(document.getElementById("map_canvas"), {
    center: new google.maps.LatLng(33.122026, -96.621323),
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var getMarker = function() {
    if (!marker) {
      marker = new google.maps.Marker({
        title: Settings.user_name + '\'s Current Location',
        map: map
      });
      info = new google.maps.InfoWindow({
        content: Settings.user_name + '\'s Location'
      });
      google.maps.event.addListener(getMarker(), 'click', function() {
        info.open(map, getMarker());
      });
    }
    return marker;
  };

  var getCircle = function() {
    if (!circle)
      circle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map
      });
    return circle;
  }

  var getUserMarker = function() {
    if (!user_marker) {
      user_marker = new google.maps.Marker({
        clickable: false,
        icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                                                        new google.maps.Size(22,22),
                                                        new google.maps.Point(0,18),
                                                        new google.maps.Point(11,11)),
        shadow: null,
        zIndex: 999,
        map: map
      });
    }
    return user_marker;
  };

  var setMessage = function(data) {
    if (data.accuracy > 50) {
      $('#message').attr('class', 'warn');
    } else {
      $('#message').attr('class', 'success');
    }
    $('#left').html('Located ' + moment(data.time).format('(h:mm:ss a)'));
    $('#right').html('<strong>Accuracy:</strong> within ' + Math.round(data.accuracy * 3.281) + ' feet');
  };

  var updateJacobLocation = function(data) {

    if (data.accuracy != previous.accuracy) {
      previous.accuracy = data.accuracy;

      getCircle().setRadius(data.accuracy);
    }

    if (data.accuracy != previous.accuracy || data.time != previous.time) {
      previous.accuracy = data.accuracy;
      previous.time = data.time;
    }

    if (previous.zoom === 0) {
      map.setZoom(15);
      previous.zoom = 15;
    }

    if (data.latitude != previous.latitude || data.longitude != previous.latitude) {
      previous.latitude = data.latitude;
      previous.longitude = data.longitude;

      position = new google.maps.LatLng(data.latitude, data.longitude);

      getMarker().setPosition(position);
      getCircle().setCenter(position);

      map.panTo(position);
    }

    setMessage(data);

  };

  var fetchJacobLocation = function() {
    $.getJSON('http://api.jacobwg.com/v1/location?callback=?', function(data) {
      updateJacobLocation({
        accuracy: data.accuracy,
        latitude: data.latitude,
        longitude: data.longitude,
        time: data.timestamp
      });
    });
  };

  setInterval(fetchJacobLocation, 6000);

  /*if (navigator.geolocation) navigator.geolocation.watchPosition(function(pos) {
    //console.log(pos);
    user_position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    getUserMarker().setPosition(user_position);
  }, function(error) {
    // ...
  }, {
    enableHighAccuracy: true
  });*/

});
