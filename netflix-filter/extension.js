var settings = {};
var currentVersion = 3;
var reprocessBlocks = false;

var saveSettings = function() {
  appAPI.db.set('settings', settings);
};

var migrateSettings = function() {
  switch (settings.version) {
    case 1:
      settings['block-page'] = true;
      settings.version = 2;
    case 2:
      settings = {
        block: {
          'G': settings.G,
          'PG': settings.PG,
          'PG-13': settings['PG-13'],
          'R': settings.R,
          'NR': settings.NR,
          'UR': settings.UR,
          'TV-Y': settings['TV-Y'],
          'TV-Y7': settings['TV-Y7'],
          'TV-G': settings['TV-G'],
          'TV-PG': settings['TV-PG'],
          'TV-14': settings['TV-14'],
          'TV-MA': settings['TV-MA']
        },
        redirect: settings['block-page'],
        version: 3
      };
    case 3:
      // current
      break;
    default:
      settings = {
        block: {
          'G': false,
          'PG': false,
          'PG-13': false,
          'R': true,
          'NR': false,
          'UR': false,
          'TV-Y': false,
          'TV-Y7': false,
          'TV-G': false,
          'TV-PG': false,
          'TV-14': false,
          'TV-MA': true
        },
        redirect: true,
        version: 3
      };
  }
};

var loadSettings = function() {
  settings = appAPI.db.get('settings');
  if (settings === null) settings = {};
  migrateSettings();
  saveSettings();
};

// Page Code
appAPI.ready(function($) {

  // message for testing
    //alert("v29");

    // if not running on Netflix, exit
    if (!appAPI.isMatchPages("movies.netflix.com/*")) return;

    // load settings
    loadSettings();

  // redirect from view page if set to block
  if ($('.certRating')[0] !== undefined && settings.block[$('.certRating')[0].innerHTML] === true && settings['block-page'] === true) {
    window.location.replace(-1);
  }

  // redirect from watch page if set to block
  if (appAPI.isMatchPages("movies.netflix.com/WiPlayer*")) {
    var id = /movieid=(\d+)/.exec(window.location.href);
    if (id !== null) {
      id = id[1];
      appAPI.request.get('http://movies.netflix.com/JSON/BOB?movieid=' + id, function(response) {
        var data = $.parseJSON(response);
        var rating = /mpaa-(\w+)/.exec(data.html);
        if (rating !== null) {
          appAPI.db.set('rating-' + id, rating[1]);
          if (settings.block[rating[1]]) {
            window.location.replace(-1);
          }
        }
      }, function(data) {
        // error
      });
    }
  }

    // movie list
    var movies = {};

    // util to add page element to movie list
    var addMovie = function(id, el) {
    if (movies[id] === undefined) {
      movies[id] = {els: [], block: null};
    }
    if ($.inArray(el, movies[id].els) === -1) {
      movies[id].els.push(el);
    }
    };

  // scan through page for movie elements
    var loadMovies = function() {
    $('.agMovie > .bobbable').each(function(idx, el) {
      var id = el.id.replace(/[a-zA-Z]+(\d+)_\d+/g, function(match, p1, offset, string) {
        return p1;
      });

      addMovie(id, el.parentNode);
    });

    $('[id^=rslt-]').each(function(idx, el) {
      id = el.id.replace(/rslt-\d+-(\d+)/g, function(match, p1, offset, string) {
        return p1;
      });
      addMovie(id, el);
    });
    };
    setInterval(loadMovies, 500);

    // queue to rate-limit requests to Netflix
    var ajaxQueue = [];

    // queue consumer
    var netflixConsumer = function() {
    var id = ajaxQueue.pop();
    if (id !== undefined) {
      //console.info('Calling Netflix ajax for id ' + id);
      appAPI.request.get('http://movies.netflix.com/JSON/BOB?movieid=' + id, function(response) {
        var data = $.parseJSON(response);
        var rating = /mpaa-(\w+)/.exec(data.html);
        if (rating !== null) {
          movies[id].block = settings.block[rating[1]];
          appAPI.db.set('rating-' + id, rating[1]);
        } else {
          //console.error(id + ' failed to get rating');
          movies[id].block = false;
        }
      }, function(data) {
        // error
      });
    }
    };
    setInterval(netflixConsumer, 100);

    // request rating data from Netflix
    var callNetflix = function(id) {
    //console.info('Calling Netflix ajax for id ' + id);
    ajaxQueue.push(id);
    };

    // process through movie list, loading block data
    var lookupMovies = function() {
    var block, rating;
    for (var id in movies) {
      if (movies[id].block === null || reprocessBlocks === true) {
        //console.log('Looking up block data for id ' + id);
        rating = appAPI.db.get('rating-' + id);
        if (rating !== null) {
          movies[id].block = settings.block[rating];
        } else {
          callNetflix(id);
        }
      }
    }
    reprocessBlocks = false;
    setTimeout(lookupMovies, 500);
    };
  setTimeout(lookupMovies, 500);

    // process through movie list, hiding elements that should be blocked
    var filterPage = function() {
    var el;
    for (var id in movies) {
      for (var i = 0; i < movies[id].els.length; i++) {
        el = movies[id].els[i];
        if (movies[id].block === true) {
          $(el).hide();
        } else {
          $(el).show();
        }
      }
    }
    };
    setInterval(filterPage, 500);

    // debug dump movie list to console
    var debug = function() {
    console.debug(movies);
    };
    //setInterval(debug, 5000);

    var settingsHTML = "<h1>Filter Settings</h1><p>Choose which ratings you would like to HIDE:</p><ul id=\"filter-settings\">";
    for (var rating in settings.block) {
    settingsHTML += "<li><input data-rating=\"" + rating + "\" type=\"checkbox\"";
    if (settings.block[rating] === true) settingsHTML += " checked";
    settingsHTML += " />" + rating + "</li>";
    }
    settingsHTML += "</ul>";

  // settings sidebar, hidden on watch pages
  if (!appAPI.isMatchPages("movies.netflix.com/WiPlayer*")) {
    var sidebar = new appAPI.sidebar({
      position: 'right',
      html: settingsHTML,
      title: {
        content: 'Filter Settings',
        close: true
      },
      width: '300px',
      height: '300px',
      openAction: ['click', 'mouseover']
    });

    // display settings on command (browser button)
    appAPI.message.addListener(function(msg) {
      if (msg.action === 'show-settings') {
        sidebar.open();
      }
    });

    // save settings on change
    $(document).on('change', '#filter-settings input', function() {
      settings.block[$(this).data('rating')] = !!$(this).attr('checked');
      saveSettings();
      reprocessBlocks = true;
    });
  }

});
