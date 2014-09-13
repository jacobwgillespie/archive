console.log('working');

var db = new Firebase('https://health-poll.firebaseio.com/');

var data = db.child('data');

var log = function(message) {
  var el = document.createElement('div');
  el.innerHTML = message;
  document.getElementById('log').appendChild(el);
};

data.on('value', function(node) {
  var data = node.val()

  _.each(data, function(results, question) {
    log('Responses for question ' + question + ':');
    _.each(results, function(result) {
      log('* ' + result.value + ' ' + moment(result.time).format('MMMM Do YYYY, h:mm:ss a'));
    });

    var values = _.map(results, function(result) { return parseFloat(result.value); });
    var sum = _.reduce(values, function(memo, value) { return memo + value; }, 0);
    var average = sum / values.length;

    log('Sum: ' + sum);
    log('Avg: ' + average);
    log('');
  });
});